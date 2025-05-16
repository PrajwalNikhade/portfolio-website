"use client"
import { useEffect } from 'react'

export default function ThemeDetector() {
  useEffect(() => {
    // Function to detect if browser is using dark theme
    const detectDarkTheme = () => {
      try {
        // Check if browser supports prefers-color-scheme media query
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          // User has dark theme enabled, set background to #f9faff
          document.documentElement.classList.add('dark-theme');
          document.body.style.backgroundColor = '#f9faff';
        } else {
          // User has light theme, keep background as is
          document.documentElement.classList.remove('dark-theme');
          document.body.style.backgroundColor = '';
        }
      } catch (error) {
        console.error('Error detecting color scheme:', error);
      }
    };
    
    // Call the function initially
    detectDarkTheme();
    
    // Set up listener for theme changes
    const darkThemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Use the appropriate event listener method based on browser support
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
    };
  }, []);
  
  // This component doesn't render anything visible
  return null;
}