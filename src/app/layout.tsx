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
  variable: "--font-erbaum-black", // Mudei aqui
});

const erbaumRegular = localFont({
  src: "../assets/fonts/Erbaum-Regular.ttf",
  variable: "--font-erbaum-regular", // Mudei aqui
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${montserrat.variable} ${erbaumBlack.variable} ${erbaumRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
