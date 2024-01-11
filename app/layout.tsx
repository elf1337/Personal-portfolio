import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Progressbar from "./providers/progressbar";
import ReactQueryProvider from "./providers/TanStackProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "As",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body className={inter.className}>
          <Progressbar />
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ReactQueryProvider>
  );
}
