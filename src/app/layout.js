import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ThemeDetector from "./components/ThemeDetector";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Prajwal Nikhade - Full Stack Developer",
  description: "Full Stack Web Developer with expertise in MERN Stack and Next.js",
  // Add more metadata as needed
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="text-black bg-[#f9faff]">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#FDC435" />
        <meta name="theme-color" content="#ffffff" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50 focus:top-0 focus:left-0">
          Skip to main content
        </a>
        <ThemeDetector />
        <Nav className='' />
        <hr className="bg-black h-0.5" />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

