import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/siteConfig";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Sociais from "@/components/Sociais";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <div className="relative flex flex-col h-scree justify-center items-center">
            <Sociais />
            <Navbar />
            <main className="w-screen mx-auto pt-4 md:pt-8 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center">
              <Footer />
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
