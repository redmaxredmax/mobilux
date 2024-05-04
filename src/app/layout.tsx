import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
import { NextAuthProvider } from "@/providers/nextAuthProvider";
import { ReduxProvider } from "@/providers/redux-provider";
import Link from "next/link";
import { Toaster } from "@/components/ui/toaster";
import { ShoppingCard } from "../../public/icons/shopping-icon";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mobilux",
  description: "Internet Savdo Do'koni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col justify-between h-screen">
            <div>
              <header>
                <Header />
              </header>
              <main>
                <ReduxProvider>
                  <div className="fixed right-5 h-[45px] rounded-md bg-foreground top-1/4">
                    <Link className="" href="/bin"><ShoppingCard/></Link>
                  </div>
                  <Toaster/>
                  {children}
                </ReduxProvider>
              </main>
            </div>
            <footer>
              <Footer />
            </footer>
          </div>
        </body>
      </html>
    </NextAuthProvider>
  );
}
