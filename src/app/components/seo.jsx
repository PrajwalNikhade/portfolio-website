import React from 'react'
import Head from 'next/head'
const SEO = (props) => {
  return (
   <Head>
    <title>{props.title}</title>
    <meta name='Prajwal Nikhade'/>
    <meta name="description" content="Prajwal Nikhade" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Prajwal Nikhade",
  "jobTitle": "Web Developer",
  "url": "https://yourdomain.com",
  "sameAs": [
    "https://github.com/PrajwalNikhade",
    "https://www.linkedin.com/in/prajwalnikhade/"
  ]
}) }} />

   </Head>
  )
}

export default SEO
