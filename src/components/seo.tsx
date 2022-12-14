import React from 'react';
import { useSiteMetadata } from '../hooks/use-site-metadata';

type SEOProps = {
    title?: string;
    description?: string;
    pathname?: string;
    keywords?: string;
    lang?: string;
};

export const SEO: React.FC<React.PropsWithChildren<SEOProps>> = ({
    title,
    description,
    pathname,
    keywords,
    lang,
    children,
}) => {
    const {
        title: defaultTitle,
        description: defaultDescription,
        keywords: defaultKeywords,
        lang: defaultLang,
        image,
        siteUrl,
    } = useSiteMetadata();

    const seo = {
        title: title || defaultTitle,
        lang: lang || defaultLang,
        description: description || defaultDescription,
        keywords: keywords || defaultKeywords,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
    };

    return (
        <>
            <title>{seo.title}</title>
            <meta name="description" content={seo.description} />
            <meta name="lang" content={seo.lang} />
            <meta name="image" content={seo.image} />
            <meta name="keywords" content={seo.keywords} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={seo.title} />
            <meta name="twitter:url" content={seo.url} />
            <meta name="twitter:description" content={seo.description} />
            <meta name="twitter:image" content={seo.image} />
            {children}
        </>
    );
};
