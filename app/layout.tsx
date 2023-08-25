import type { Metadata } from "next";

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
      <body>
        <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
          <main className="relative z-10 flex flex-col flex-1 px-4 py-32 shadow-2xl min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
