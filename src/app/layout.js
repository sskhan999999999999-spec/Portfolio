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
    "Portfolio of Shah Sawar, a Front-End Developer building modern web interfaces.",
  keywords: [
    "Shah Sawar",
    "Front-End Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Tailwind CSS",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  metadataBase: new URL("https://shahsawar-portfolio.vercel.app"),
  openGraph: {
    title: "Shah Sawar | Front-End Developer",
    description:
      "Portfolio of Shah Sawar, a Front-End Developer building modern web interfaces.",
    url: "https://shahsawar-portfolio.vercel.app",
    type: "website",
    images: ["/my-photo.jpg"],
  },
  icons: {
    icon: "/my-photo.jpg",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <Head>
          <meta name="keywords" content="Shah Sawar, Front-End Developer, Portfolio, React, Next.js, Tailwind CSS, HTML, CSS, JavaScript" />
        </Head>
         <Navbar/>
        {children}
      </body>
    </html>
  );
}
