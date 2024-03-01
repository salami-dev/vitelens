import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CssBaseline from '@mui/material/CssBaseline';
import type { Viewport } from 'next'
 

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
      <CssBaseline enableColorScheme />
      <body className={inter.className}>
        {children}
        </body>
    </html>
  );
}
