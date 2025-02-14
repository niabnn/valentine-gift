import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeartRain from "./HeartRain";
import CloudFooter from "./CloudFooter";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Marco's valentine website",
  description: "A valentines website gift, it's a lover's timeline",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <HeartRain /> {/* Agregamos la animación de corazones */}
        {children}
        <CloudFooter/>
      </body>
    </html>
  );
}
