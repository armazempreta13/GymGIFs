import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { siteConfig } from '../site.config';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: siteConfig.seo.themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5, // Accessiblity best practice allows zooming
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.seo.openGraph.siteName}`,
  },
  description: siteConfig.seo.description,
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
  keywords: siteConfig.seo.keywords,
  authors: [{ name: "GymGIFs" }],
  creator: "GymGIFs",
  publisher: "GymGIFs",
  metadataBase: new URL(siteConfig.seo.url),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
    },
  },
  openGraph: siteConfig.seo.openGraph,
  twitter: siteConfig.seo.twitter,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "informe-sua-tag-de-webmaster-tools-aqui", // Placeholder para o cliente
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`scroll-smooth ${inter.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
