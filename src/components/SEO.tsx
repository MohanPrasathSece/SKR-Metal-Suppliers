import { Helmet } from 'react-helmet-async';
import { SEO_CONFIG } from '@/lib/seo-config';

interface SEOProps {
    title?: string;
    description?: string;
    canonical?: string;
    type?: 'website' | 'article' | 'product';
    name?: string; // For product/article name
    image?: string;
    schema?: Record<string, any>;
}

const SEO = ({
    title,
    description,
    canonical,
    type = 'website',
    image,
    schema
}: SEOProps) => {
    const siteTitle = title
        ? `${title} | ${SEO_CONFIG.siteName}`
        : SEO_CONFIG.defaultTitle;

    const metaDescription = description || SEO_CONFIG.defaultDescription;
    const canonicalUrl = canonical ? `${SEO_CONFIG.siteUrl}${canonical}` : SEO_CONFIG.siteUrl;
    const ogImage = image || `${SEO_CONFIG.siteUrl}/og-image.jpg`; // Fallback

    // Base Schema (Organization + WebSite)
    const baseSchema = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SEO_CONFIG.siteUrl}/#organization`,
            "name": SEO_CONFIG.siteName,
            "url": SEO_CONFIG.siteUrl,
            "logo": {
                "@type": "ImageObject",
                "url": `${SEO_CONFIG.siteUrl}/logo.png`, // Assuming logo exists
                "width": 112,
                "height": 112
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": SEO_CONFIG.phone,
                "contactType": "sales",
                "areaServed": ["IN"],
                "availableLanguage": "en"
            },
            "address": {
                "@type": "PostalAddress",
                "addressLocality": SEO_CONFIG.address.city,
                "addressRegion": SEO_CONFIG.address.region,
                "addressCountry": SEO_CONFIG.address.country
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SEO_CONFIG.siteUrl}/#website`,
            "url": SEO_CONFIG.siteUrl,
            "name": SEO_CONFIG.siteName,
            "description": SEO_CONFIG.defaultDescription,
            "publisher": {
                "@id": `${SEO_CONFIG.siteUrl}/#organization`
            }
        }
    ];

    // Merge custom schema
    const jsonLd = schema ? [...baseSchema, schema] : baseSchema;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content={SEO_CONFIG.siteName} />
            {image && <meta property="og:image" content={ogImage} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={metaDescription} />
            {image && <meta name="twitter:image" content={ogImage} />}

            {/* Local SEO Tags */}
            <meta name="geo.region" content="IN-TN" />
            <meta name="geo.placename" content="Coimbatore" />
            <meta name="geo.position" content="11.0168;76.9558" /> {/* Coimbatore generic lat/long */}
            <meta name="ICBM" content="11.0168, 76.9558" />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default SEO;
