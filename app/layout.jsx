import Nav from "@/components/Nav";
import "../styles/globals.css";

import { DM_Serif_Display, Public_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dmSerif",
  weight: ["400"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-publicSans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${dmSerif.variable} ${publicSans.variable}font-dmSerif`}
      >
        <Nav />

        {children}
        <Footer />
      </body>
    </html>
  );
}
