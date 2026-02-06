import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Get Exam Info - JEE, NEET, CUET, CLAT Exam Preparation & Coaching",
  description:
    "Find the best coaching institutes, exam updates, mock tests, and preparation resources for JEE, NEET, CUET, CLAT, NDA, and Board exams across India. Your academic success partner.",
  keywords:
    "JEE coaching, NEET preparation, CUET exam, CLAT coaching, NDA exam, Board exams, coaching institutes India, mock tests, exam alerts",
  openGraph: {
    title: "Get Exam Info - Your Academic Success Partner",
    description:
      "Find the best coaching, exam updates, mock tests and resources - city wise.",
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
      <body
        className={`${inter.variable} ${plusJakarta.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
