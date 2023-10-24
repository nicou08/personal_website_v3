import type { Metadata } from "next";
import "./globals.css";

import Content from "@/components/Content";

export const metadata: Metadata = {
  title: "Nicolas U Guasca",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Content>{children}</Content>
      </body>
    </html>
  );
}
