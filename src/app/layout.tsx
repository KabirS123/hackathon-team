import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Millennium Bug",
  description: "Raise the bug that survived Y2K.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
