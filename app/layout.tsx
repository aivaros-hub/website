import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Aivaros.ai - The AI Agent OS for Work Across Industries",
  description: "Universal AI Agent ecosystem powering specialized agent suites for HR, DevOps, Healthcare, and more. Automate complex workflows with autonomous AI agents.",
  keywords: ["AI agents", "workflow automation", "HR automation", "DevOps automation", "healthcare AI", "enterprise AI"],
  openGraph: {
    title: "Aivaros.ai - The AI Agent OS for Work",
    description: "Universal AI Agent ecosystem powering specialized agent suites across industries",
    url: "https://aivaros.ai",
    siteName: "Aivaros.ai",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
