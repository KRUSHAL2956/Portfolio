import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, keywords }) {
  const siteTitle = "Krushal Hirpara | Portfolio";
  const defaultDescription = "Aspiring Software Engineer specializing in Web Development and Cybersecurity. Explore my portfolio of projects and skills.";
  const defaultKeywords = "Krushal Hirpara, Web Development, Cybersecurity, React, Portfolio, Software Engineer";

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <meta name="author" content="Krushal Hirpara" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
    </Helmet>
  );
}
