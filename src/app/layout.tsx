import type { Metadata } from "next";
import { Lato, Baloo_2 } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ConditionalLayout } from "./components/ConditionalLayout";

const lato = Lato({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const baloo = Baloo_2({
  variable: "--font-secondary",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: "Chequea tu voto",
  description: "Página dedicada a ayudar a la población boliviana a verificar su voto",
  icons: {
    icon: [
      { url: "/logo3.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo3.svg",
    apple: "/logo3.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${baloo.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} // Replace with your ID
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JVEVFC0HKC', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
