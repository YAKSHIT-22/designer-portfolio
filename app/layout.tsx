import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { Toaster } from "sonner";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manika | Experience Designer Portfolio",
  description:
    "Welcome to the portfolio of Manika – a multidisciplinary experience designer crafting intuitive digital journeys across web and mobile.",
  keywords: [
    "UX Designer",
    "UI Designer",
    "Experience Designer",
    "Design Portfolio",
    "Manika Portfolio",
    "Creative Designer",
    "Next.js Designer Portfolio",
  ],
  authors: [{ name: "Manika" }],
  openGraph: {
    title: "Manika | Experience Designer Portfolio",
    description:
      "Explore the portfolio of Manika, where design meets function. Discover projects, case studies, and UI/UX thinking in action.",
    siteName: "Manika Design",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manika Design Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manika | Experience Designer Portfolio",
    description:
      "Multidisciplinary UI/UX and experience designer crafting intuitive, elegant user journeys.",
    images: ["/og-image.png"],
    creator: "@Manikadesign",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased bg-black text-white`}
      >
        <Navbar/>
        <Toaster/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
