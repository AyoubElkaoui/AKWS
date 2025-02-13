import Head from "next/head";
import Script from "next/script";

export default function CustomHead() {
  return (
    <Head>
      {/* Algemene meta tags */}
      <title>Professionele Websites op Maat | AK Web Solutions</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="AK Web Solutions: Professionele, op maat gemaakte websites en online oplossingen die jouw bedrijf naar een hoger niveau tillen. Ontdek hoe wij conversiegerichte websites realiseren die snel en SEO-geoptimaliseerd zijn."
      />
      <meta
        name="keywords"
        content="webdesign, professionele websites, maatwerk, SEO, online oplossingen, conversie, webdevelopment, AK Web Solutions"
      />

      <meta name="robots" content="index, follow" />
      <meta name="author" content="AK Web Solutions" />
      <meta name="publisher" content="AK Web Solutions" />
      <meta name="revisit-after" content="7 days" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://akwebsolutions.nl" />

      {/* Open Graph meta tags */}
      <meta property="og:title" content="Professionele Websites op Maat | AK Web Solutions" />
      <meta
        property="og:description"
        content="Ontdek hoe AK Web Solutions jouw bedrijf helpt met op maat gemaakte, conversiegerichte websites en online oplossingen."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://akwebsolutions.nl" />
      <meta property="og:image" content="https://akwebsolutions.nl/og-image.jpg" />
      <meta property="og:site_name" content="AK Web Solutions" />
      <meta property="og:locale" content="nl_NL" />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Professionele Websites op Maat | AK Web Solutions" />
      <meta
        name="twitter:description"
        content="Op zoek naar een professionele website? AK Web Solutions biedt maatwerk websites die ontworpen zijn om jouw online succes te maximaliseren."
      />
      <meta name="twitter:image" content="https://akwebsolutions.nl/twitter-image.jpg" />
      <meta name="twitter:site" content="@akwebsolutions" />
      <meta name="twitter:creator" content="@akwebsolutions" />

      {/* Favicon */}
      <link rel="icon" href="/app/favicon.ico" />

      {/* Mobile-specifieke meta tags */}
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Structured Data: Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AK Web Solutions",
            "url": "https://akwebsolutions.nl",
            "logo": "https://akwebsolutions.nl/app/favicon.ico",
            "sameAs": [
              "https://www.facebook.com/akwebsolutions",
              "https://www.linkedin.com/company/akwebsolutions",
              "https://twitter.com/akwebsolutions"
            ],
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+31-xx-xxxxxxx", // Vervang dit door je daadwerkelijke telefoonnummer
                "contactType": "customer service",
                "areaServed": "NL",
                "availableLanguage": ["Dutch", "English"]
              }
            ]
          })
        }}
      />

      {/* Structured Data: Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://akwebsolutions.nl"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Diensten",
                "item": "https://akwebsolutions.nl/diensten"
              }
            ]
          })
        }}
      />

    </Head>
  );
}
