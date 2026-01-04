import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollToTopOnLoad } from "@/components/ScrollToTopOnLoad";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Data Scientist & ML Engineer | Portfolio",
  description:
    "Portfolio for a Data Scientist and ML Engineer building end-to-end AI systems, analytics, and production-grade machine learning.",
  openGraph: {
    title: "Data Scientist & ML Engineer | Portfolio",
    description:
      "Portfolio for a Data Scientist and ML Engineer building end-to-end AI systems, analytics, and production-grade machine learning.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Scientist & ML Engineer | Portfolio",
    description:
      "Portfolio for a Data Scientist and ML Engineer building end-to-end AI systems, analytics, and production-grade machine learning."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${spaceGrotesk.variable} bg-ds-surface text-slate-100 antialiased text-lg leading-relaxed md:text-xl`}
      >
        <ScrollToTopOnLoad />
        <div className="flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
