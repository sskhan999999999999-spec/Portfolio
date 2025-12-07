import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Shah Sawar | Front-End Developer",
    template: "%s | Shah Sawar",
  },
  description:
    "I am Shah Sawar, a Front-End Developer building modern, fast, and responsive web applications using Next.js, React, and Tailwind CSS.",
  keywords: [
    "Shah Sawar",
    "Front-End Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  metadataBase: new URL("https://shahsawar-portfolio.vercel.app"),
  openGraph: {
    title: "Shah Sawar | Front-End Developer",
    description:
      "I am Shah Sawar, a Front-End Developer building modern, fast, and responsive web applications using Next.js, React, and Tailwind CSS.",
    url: "https://shahsawar-portfolio.vercel.app",
    type: "website",
    images: ["/my-photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shah Sawar | Front-End Developer",
    description:
      "I am Shah Sawar, a Front-End Developer building modern, fast, and responsive web applications using Next.js, React, and Tailwind CSS.",
    images: ["/my-photo.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/navbar";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Head>
          {/* Basic SEO */}
          <title>Shah Sawar | Front-End Developer</title>
          <meta name="description" content="I am Shah Sawar, a Front-End Developer building modern, fast, and responsive web applications using Next.js, React, and Tailwind CSS." />
          <meta name="keywords" content="Shah Sawar, Front-End Developer, Portfolio, React, Next.js, Tailwind CSS, HTML, CSS, JavaScript" />
          <meta name="author" content="Shah Sawar" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Open Graph for social media */}
          <meta property="og:title" content="Shah Sawar | Front-End Developer" />
          <meta property="og:description" content="I am Shah Sawar, a Front-End Developer building modern, fast, and responsive web applications using Next.js, React, and Tailwind CSS." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shahsawar-portfolio.vercel.app" />
          <meta property="og:image" content="/my-photo.jpg" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Shah Sawar | Front-End Developer" />
          <meta name="twitter:description" content="I am Shah Sawar, a Front-End Developer building modern, fast, and responsive web applications using Next.js, React, and Tailwind CSS." />
          <meta name="twitter:image" content="/my-photo.jpg" />
        </Head>

        <Navbar />
        {children}
      </body>
    </html>
  );
}
