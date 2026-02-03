import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, '../dist')));

// Verify SMTP Connection
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

transporter.verify((error, success) => {
    if (error) {
        console.log('SMTP connection error:', error);
    } else {
        console.log('Server is ready to send emails');
    }
});

// Contact Route
app.post('/api/contact', async (req, res) => {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !message) {
        return res.status(400).json({ error: 'Please fill name, phone, and message.' });
    }

    const mailOptions = {
        from: `"${name}" <${process.env.SMTP_USER}>`, // Recommended: Always send from your auth user
        to: process.env.RECEIVER_EMAIL,
        replyTo: email || undefined,
        subject: `New Website Enquiry from ${name}`,
        text: `
Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}

Message:
${message}
        `,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                <h2 style="color: #0c1e33; border-bottom: 2px solid #0c1e33; padding-bottom: 10px;">New Website Enquiry</h2>
                <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
                <p style="font-size: 16px;"><strong>Phone:</strong> ${phone}</p>
                <p style="font-size: 16px;"><strong>Email:</strong> ${email || 'Not provided'}</p>
                <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #0c1e33;">
                    <p style="font-size: 16px; font-weight: bold; margin-bottom: 5px;">Message:</p>
                    <p style="font-size: 16px; white-space: pre-wrap;">${message}</p>
                </div>
                <p style="font-size: 12px; color: #888; margin-top: 30px; text-align: center;">This email was sent from the contact form on skrmetalsuppliers.in</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
});

// SEO Routes
app.get('/sitemap.xml', (req, res) => {
    const baseUrl = 'https://www.skrmetalsuppliers.in';
    const routes = [
        '/',
        '/about',
        '/products',
        '/delivery',
        '/contact'
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map(route => `
    <url>
        <loc>${baseUrl}${route}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>${route === '/' ? 'daily' : 'weekly'}</changefreq>
        <priority>${route === '/' ? '1.0' : '0.8'}</priority>
    </url>
    `).join('')}
</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(sitemap);
});

app.get('/robots.txt', (req, res) => {
    const robots = `User-agent: *
Allow: /
Sitemap: https://www.skrmetalsuppliers.in/sitemap.xml`;
    res.header('Content-Type', 'text/plain');
    res.send(robots);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
    const indexPath = path.resolve(__dirname, '../dist/index.html');
    res.sendFile(indexPath, (err) => {
        if (err) {
            console.error('Error sending index.html:', err);
            res.status(500).send('Error loading application.');
        }
    });
});

const startServer = (initialPort) => {
    const server = app.listen(initialPort, () => {
        console.log(`Server running on port ${initialPort}`);
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Port ${initialPort} is busy, trying ${initialPort + 1}...`);
            startServer(initialPort + 1);
        } else {
            console.error('Server error:', err);
        }
    });
};

startServer(port);
