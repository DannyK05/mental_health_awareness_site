import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mental Health Awareness",
  description: "Get to know more about mental health and how you can help",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}
