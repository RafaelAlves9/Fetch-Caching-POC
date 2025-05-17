import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Link from "next/link";

export const robotoRegular = Roboto({
   subsets: ["latin"],
   weight: "400",
   variable: "--font-roboto-regular",
   display: "swap",
});

export const robotoMedium = Roboto({
   subsets: ["latin"],
   weight: "500",
   variable: "--font-roboto-medium",
   display: "swap",
});

export const robotoBold = Roboto({
   subsets: ["latin"],
   weight: "700",
   variable: "--font-roboto-bold",
   display: "swap",
});

export const metadata: Metadata = {
   title: "Fetch Cache",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="pt-BR" suppressHydrationWarning>
         <body
            className={`${robotoRegular.variable} ${robotoMedium.variable} ${robotoBold.variable} antialiased`}
         >
            <ToastContainer />
            <main className="p-8 ">
               <h1 className="text-3xl font-bold mb-6">🎬 Filmes Ghibli</h1>
               <div className="flex gap-4">
                  <Link href="/films/no-store">No Store</Link>
                  <Link href="/films/force-cache">Force Cache</Link>
                  <Link href="/films/revalidate">Revalidate</Link>
                  <Link href="/films/force-static">Force Static</Link>
               </div>
               {children}
            </main>
         </body>
      </html>
   );
}
