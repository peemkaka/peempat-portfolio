import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import React from "react";

const jetbrainsMono = JetBrains_Mono(
  { 
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"] ,
    variable: "--font-jetbrainsMono",
  }
);

export const metadata = {
  title: "Peempat Porfolio Website",
  description: "Created by Peempat Pinsang",
};

export default function RootLayout({ children }) {
  return (
    <React.StrictMode>
    <html lang="en" suppressHydrationWarning>
      <body
        className={jetbrainsMono.variable}
      >
        <Header/>
        <StairTransition/>
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
    </React.StrictMode>
  );
}
