"use client"
import React, { useState, useEffect } from 'react'
import Projects from '../components/Projects'
import Image from 'next/image'
import SEO from '../components/SEO'

const Page = () => {
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);

  useEffect(() => {
    // Function to detect if browser is using dark theme
    const detectDarkTheme = () => {
      try {
        // Check if browser supports prefers-color-scheme media query
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          // User has dark theme enabled, set background to white
          setIsWhiteBackground(true);
          // Apply white background directly to body for Chrome
          document.body.style.backgroundColor = 'white';
        } else {
          // User has light theme, keep background as is
          setIsWhiteBackground(false);
          // Reset background color
          document.body.style.backgroundColor = '';
        }
      } catch (error) {
        console.error('Error detecting color scheme:', error);
        // Fallback to white background if there's an error
        setIsWhiteBackground(true);
        document.body.style.backgroundColor = 'white';
      }
    };

    // Call the function initially
    detectDarkTheme();

    // Set up listener for theme changes
    const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Use the appropriate event listener method based on browser support
    // Modern browsers use addEventListener, older ones use addListener
    if (darkThemeMediaQuery.addEventListener) {
      darkThemeMediaQuery.addEventListener('change', detectDarkTheme);
    } else if (darkThemeMediaQuery.addListener) {
      // For older browsers including some versions of Chrome
      darkThemeMediaQuery.addListener(detectDarkTheme);
    }

    // Clean up listener on component unmount
    return () => {
      if (darkThemeMediaQuery.removeEventListener) {
        darkThemeMediaQuery.removeEventListener('change', detectDarkTheme);
      } else if (darkThemeMediaQuery.removeListener) {
        darkThemeMediaQuery.removeListener(detectDarkTheme);
      }
      // Reset background color on unmount
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (
    <>
      <SEO title={"Projects-Prajwal Nikhade"} />
      <div style={{ backgroundColor: isWhiteBackground ? 'white' : 'transparent', width: '100%' }}>
        <Image className='w-full '
          loading='lazy'
          src="./projects-banner.svg" alt="projects-banner" width={100} height={100} />
        <Projects style={{ backgroundColor: isWhiteBackground ? 'white' : 'transparent' }} />
      </div>
    </>
  )
}

export default Page
