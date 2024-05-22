import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Rodrigo Shinoda - Portifólio",
  description: "Portifólio dos meus projetos pessoais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
