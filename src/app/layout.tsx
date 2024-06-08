import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { FC } from "react";
import { ChildrenProps } from "@/types";
import PageTransition from "@/components/PageTransition";

const jetbransMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbransMono",
});

export const metadata: Metadata = {
  title: "Whoami",
  description: "Rifky azmi as a Software Engineer",
};

const RootLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={jetbransMono.className}>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
};

export default RootLayout;
