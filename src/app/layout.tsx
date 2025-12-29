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
  variable: "--font-erbaum-black",
});

const erbaumRegular = localFont({
  src: "../assets/fonts/Erbaum-Regular.ttf",
  variable: "--font-erbaum-regular",
});

export const metadata: Metadata = {
  title: {
    default: "CAMV Sports | Projeto de Voleibol de Alto Rendimento",
    template: "%s | CAMV Sports",
  },
  description:
    "O CAMV Sports é um projeto de alto rendimento e formação esportiva de voleibol em Goiânia. Com mais de 50 títulos conquistados, formamos atletas campeões desde 2018.",
  keywords: [
    "voleibol",
    "vôlei",
    "CAMV Sports",
    "voleibol Goiânia",
    "projeto esportivo",
    "alto rendimento",
    "formação de atletas",
    "escolinha de vôlei",
    "voleibol feminino",
    "voleibol masculino",
    "campeonato de vôlei",
    "Jeide Rudgeri",
  ],
  authors: [{ name: "CAMV Sports" }],
  creator: "Dev Paulo Bruno Dias",
  publisher: "CAMV Sports",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://camvsports.com",
    siteName: "CAMV Sports",
    title: "CAMV Sports | Projeto de Voleibol de Alto Rendimento",
    description:
      "Projeto de alto rendimento e formação esportiva de voleibol em Goiânia. Mais de 50 títulos conquistados e 2.000 atletas formados desde 2018.",
    images: [
      {
        url: "/desktop.png",
        width: 1200,
        height: 630,
        alt: "CAMV Sports - Projeto de Voleibol",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAMV Sports | Projeto de Voleibol de Alto Rendimento",
    description:
      "Projeto de alto rendimento e formação esportiva de voleibol em Goiânia. Mais de 50 títulos conquistados.",
    images: ["/desktop.png"],
  },
  alternates: {
    canonical: "https://camvsports.com",
  },
  category: "sports",
  verification: {},
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/Logo CAMV Sports.png" />
        <meta name="theme-color" content="#005096" />
      </head>
      <body
        className={`${montserrat.variable} ${erbaumBlack.variable} ${erbaumRegular.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
