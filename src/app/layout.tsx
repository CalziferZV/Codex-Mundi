import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codex Mundi",
  description: "La Biblioteca de Alejandría del Conocimiento Humano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className="h-full flex flex-col crt">{children}</body>
    </html>
  );
}
