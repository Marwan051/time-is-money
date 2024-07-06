import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Time is Money",
  description:
    "Show how much something cost with respect to your monthly income",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Time is Money</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />{" "}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
