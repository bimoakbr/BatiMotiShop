import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";

import "../globals.css"
import SessionProviders from "../_componets/providers";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/route";


const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets:["latin"]
})


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(options);
  console.log(session);
  return (
    <html lang="en">
      <body className={nunito.className}>
     
        <main className="auth-body">
        <SessionProviders session={session}>
           {children}
        </SessionProviders >
        </main>
        </body>

  

    </html>
  );
}