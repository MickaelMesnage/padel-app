import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header/Header";
import { Toaster } from "@/components/ui/sonner";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fullpadel",
  description: "Votre application de padel",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;

  modal: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${manrope.className} antialiased`}>
        <div className="min-h-screen">
          <Header />
          {children}
        </div>
        {/* <Footer /> */}
        <Toaster />
        {modal}
      </body>
    </html>
  );
}
