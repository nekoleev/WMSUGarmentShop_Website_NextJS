  /** @format */

  import "@/app/styles/globals.css";

  import type { Metadata } from "next";
  import { Inter } from "next/font/google";
  import SideNavbar from "@/components/SideNavbar";
  import { ThemeProvider } from "@/components/theme-provider"
  import { ModeToggle } from "@/components/mode-toggle";

  const inter = Inter({ subsets: ["latin"] });

  export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="w-screen h-screen flex justify-center">
          {/* <main className="w-[100vh] flex">
            
          </main> */}
          {children}
        </body>
      </html>
    )
  }
