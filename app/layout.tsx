import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { ThemeProvider } from "@/components/ThemeProvider"
import { Suspense } from "react"

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: "Sapphire Serenity Slawi",
  description: "Temukan properti impian Anda bersama Sapphire Serenity Slawi",
  icons: {
    icon: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1761065068/Logo_pogacr.jpg",
    shortcut: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1761065068/Logo_pogacr.jpg",
    apple: "https://res.cloudinary.com/dx8w9qwl6/image/upload/v1761065068/Logo_pogacr.jpg",
  },
  keywords: [
    "Sapphire Serenity Slawi",
    "Perumahan Slawi",
    "Rumah Slawi",
    "Sapphire Serenity",
    "Rumah Tegal",
    "Perumahan Tegal",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://analytics.tiktok.com" />
        <link rel="preconnect" href="https://www.youtube.com" />

        {/* Preload critical fonts - reduce render blocking */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=optional"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=optional"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=optional"
          />
        </noscript>

        {/* DNS Prefetch for additional external domains */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-17369558016" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17369558016');
          `}
        </Script>

        {/* Google Tag Manager */}

        {/* End Google Tag Manager */}

        {/* Facebook Pixel Code */}

        {/* End Facebook Pixel Code */}

        {/* Facebook Pixel (noscript) */}

        {/* End Facebook Pixel (noscript) */}

        {/* TikTok Pixel Code */}

        {/* End TikTok Pixel Code */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}

        {/* End Google Tag Manager (noscript) */}

        <Suspense fallback={null}>
          <ThemeProvider>{children}</ThemeProvider>
        </Suspense>
      </body>
    </html>
  )
}
