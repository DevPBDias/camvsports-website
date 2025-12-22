import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const erbaumBlack = localFont({
  src: "../assets/fonts/Erbaum-Black.ttf",
  variable: "--font-erbaum-heading",
  weight: "900",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Camv Sports | Em Construção",
  description:
    "Estamos preparando algo incrível. O futuro do esporte está chegando.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${erbaumBlack.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
