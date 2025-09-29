import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="google-site-verification"
          content="xgyp8Pui_eg6big_xu-21aE2NxE-BDQbBEMWzAh7LDg"
        />
        <title>Shades of Green – Lawns & Gardens | Kāpiti Coast</title>
        <meta
          name="description"
          content="Shades of Green offers expert lawn mowing, garden maintenance, and green waste removal across the Kāpiti Coast. Get in touch with Lane today!"
        />
        <meta
          name="keywords"
          content="Kapiti lawn care, Shades of Green, garden maintenance, lawn mowing, green waste, Kapiti landscaping, New Zealand gardening, lawn services, garden services, lawn care"
        />
        <meta name="author" content="Shades of Green – Lawns & Gardens" />
        <meta property="og:title" content="Shades of Green – Lawns & Gardens" />
        <meta
          property="og:description"
          content="Keep your Kāpiti Coast garden in top shape with Shades of Green. Reliable and professional lawn and garden services."
        />
        <meta property="og:image" content="/images/img3.jpg" />
        <meta property="og:url" content="https://shadesofgreen.nz" />
        <meta property="og:type" content="website" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
