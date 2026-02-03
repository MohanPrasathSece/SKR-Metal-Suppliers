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

    // Backend SEO: Canonical URL cleanup (remove trailing slash, strip parameters)
    const cleanCanonical = canonical?.replace(/\/$/, '') || '/';
    const canonicalUrl = `${SEO_CONFIG.siteUrl}${cleanCanonical}`.split('?')[0];

    const ogImage = image || `${SEO_CONFIG.siteUrl}/skr-logo.png`;

    // Determine robots directives based on page type
    const isGuidePage = canonical?.startsWith('/guide');
    const robotsContent = isGuidePage
        ? "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        : "index, follow";

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
                "url": `${SEO_CONFIG.siteUrl}/skr-logo.png`,
                "width": 112,
                "height": 112
            },
            "sameAs": [
                ...Object.values(SEO_CONFIG.social).filter(Boolean),
                ...Object.values(SEO_CONFIG.entities)
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": SEO_CONFIG.phone,
                "contactType": "sales",
                "areaServed": ["IN"],
                "availableLanguage": "en"
            },
            "address": {
                "@type": "PostalAddress",
                "streetAddress": SEO_CONFIG.address.street,
                "addressLocality": SEO_CONFIG.address.city,
                "addressRegion": SEO_CONFIG.address.region,
                "postalCode": SEO_CONFIG.address.postalCode,
                "addressCountry": SEO_CONFIG.address.country
            },
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": SEO_CONFIG.geo.latitude,
                "longitude": SEO_CONFIG.geo.longitude
            },
            "hasMap": SEO_CONFIG.geo.mapUrl,
            "areaServed": SEO_CONFIG.areasServed.map(area => ({
                "@type": "City",
                "name": area
            }))
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
            },
            "about": {
                "@type": "Thing",
                "name": "Industrial Washers",
                "sameAs": SEO_CONFIG.entities.washer
            },
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${SEO_CONFIG.siteUrl}/?s={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": SEO_CONFIG.siteUrl
                },
                ...(canonical && canonical !== '/' ? [{
                    "@type": "ListItem",
                    "position": 2,
                    "name": title || "Page",
                    "item": canonicalUrl
                }] : [])
            ]
        }
    ];

    // Merge custom schema
    const jsonLd = schema
        ? [...baseSchema, ...(Array.isArray(schema) ? schema : [schema])]
        : baseSchema;

    return (
        <Helmet>
            {/* Resource Hints for Performance */}
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={metaDescription} />
            <link rel="canonical" href={canonicalUrl} />
            <meta name="robots" content={robotsContent} />

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

            {/* Ultra-Specific Local SEO Tags */}
            <meta name="geo.region" content="IN-TN" />
            <meta name="geo.placename" content={`${SEO_CONFIG.address.city}, ${SEO_CONFIG.address.region}, ${SEO_CONFIG.address.country}`} />
            <meta name="geo.position" content={`${SEO_CONFIG.geo.latitude};${SEO_CONFIG.geo.longitude}`} />
            <meta name="ICBM" content={`${SEO_CONFIG.geo.latitude}, ${SEO_CONFIG.geo.longitude}`} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};

export default SEO;
