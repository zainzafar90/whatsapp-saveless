import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@/components/analytics";

import "./globals.css";

export const metadata: Metadata = {
  title: "Whatsapp Send Message",
  description: "You can send a message to a whatsapp number without saving it.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex flex-col min-h-full justify-center md:px-12 lg:px-0">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="relative z-10 flex flex-col flex-1 px-4 py-32">
              {children}
            </main>
            <SiteFooter className="border-t" />
          </ThemeProvider>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
