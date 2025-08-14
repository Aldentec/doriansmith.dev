import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Dorian Smith - Full-Stack Developer & Music Producer | React, Node.js, AWS",
  description = "Dorian Smith is a passionate full-stack developer specializing in React, Node.js, and AWS. Creating elegant web applications, accessibility tools, and innovative digital solutions.",
  keywords = "full-stack developer, React developer, Node.js, AWS, JavaScript, web development, music producer, accessibility tools, Dorian Smith",
  image = "https://s3.us-west-2.amazonaws.com/www.doriansmith.dev/dorian-about-me-section.JPG",
  url = "https://doriansmith.dev/",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dorian Smith Portfolio" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Dorian Smith",
          "jobTitle": "Full-Stack Developer",
          "description": description,
          "worksFor": {
            "@type": "Organization",
            "name": "Amazon",
            "url": "https://amazon.com"
          },
          "alumniOf": {
            "@type": "Organization",
            "name": "Amazon"
          },
          "author": {
            "@type": "Person",
            "name": "Dorian Smith"
          },
          "inLanguage": "en-US",
          "url": url,
          "image": image,
          "sameAs": [
            "https://github.com/Aldentec",
            "https://www.linkedin.com/in/aldentec"
          ],
          "knowsAbout": [
            "JavaScript",
            "React",
            "Node.js",
            "AWS",
            "Full-Stack Development",
            "Web Development",
            "Music Production"
          ],
        })}
      </script>
    </Helmet>
  );
};

export default SEO;