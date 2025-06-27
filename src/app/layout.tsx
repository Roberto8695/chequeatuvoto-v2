import type { Metadata } from "next";
import { Lato, Baloo_2 } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/footer"; // Ensure correct import path
import { Navbar } from "./components/navbar"; // Ensure correct import path
import Script from "next/script";

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
  
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
</body>

    </html>
  );
}
