import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { Viewport } from 'next'
import Main from "./Main";


const inter = Inter({ subsets: ["latin"] });
export const viewport: Viewport = {
  themeColor: 'black',
  initialScale: 1,
  width: 'device-width'

};
export const metadata: Metadata = {
  title: {
    template: '%s | ViteLens',
    default: 'ViteLens'
  },
  description: "See the worlds through other peoples lenses",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={inter.className}>
        <Main>
          {children}
        </Main>

       
 
        </body>
    </html>
  );
}
