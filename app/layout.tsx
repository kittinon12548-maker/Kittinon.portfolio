import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import localFont from "next/font/local";
import { profile } from "@/data/portfolio";
import SmoothScroll from "@/components/site/SmoothScroll";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plexThai = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-thai-thai-300-normal.woff2", weight: "300" },
    { path: "./fonts/ibm-plex-sans-thai-thai-400-normal.woff2", weight: "400" },
    { path: "./fonts/ibm-plex-sans-thai-thai-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-plex-thai",
  display: "swap",
  declarations: [{ prop: "unicode-range", value: "U+0E01-0E5B, U+200C-200D, U+25CC" }],
});

const metaDescription =
  "Data Science student at Thaksin University seeking a Data Analyst internship, April to September. Experienced in Power BI dashboards and PyTorch image classification (92.2% accuracy).";

export const metadata: Metadata = {
  metadataBase: new URL("https://kittinon-portfolio.vercel.app"),
  title: {
    default: `${profile.name} (${profile.nameTh}) • ${profile.roles.join(" / ")}`,
    template: `${profile.name} • %s`,
  },
  description: metaDescription,
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description: metaDescription,
    url: "https://kittinon-portfolio.vercel.app",
    siteName: `${profile.name} Portfolio`,
    locale: "th_TH",
    type: "website",
    images: [
      {
        url: profile.photo,
        width: 800,
        height: 1067,
        alt: `${profile.name} (${profile.nameTh})`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Portfolio`,
    description: metaDescription,
    images: [profile.photo],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th" className={`${plexThai.variable} ${manrope.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#111111] antialiased selection:bg-[#111111] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-[#111111] focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111111]"
        >
          ข้ามไปยังเนื้อหาหลัก
        </a>
        <SmoothScroll />
        <Header />
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
