import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CssBaseline from '@mui/material/CssBaseline';
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: '%s | ViteLens',
    default: 'ViteLens'
  },
  description: "See the worlds through other peoples lenses",
  viewport: "initial-scale=1, width=device-width",
  // metadataBase: new URL('https://next-learn-dashboard.vercel.sh'), TODO: change to something else meaningful
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
