import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-providder";
import { CartProvider } from "@/components/cart/cart-context";
import { Header } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Baía Formosa Tour",
  description: "Agencia de turismo receptivo em Baía Formosa - RN",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${outfit.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <CartProvider>
            <Header />
            <PageTransition>{children}</PageTransition>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
