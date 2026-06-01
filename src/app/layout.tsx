import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil Gupta",
  description: "Software Engineer & Full Stack Developer",
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={`${inter.className} h-full bg-white dark:bg-slate-900`}>
        <Providers>
          {/* Global Ambient Glow */}
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none -z-10 overflow-hidden">
            <div className="w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-zinc-300/50 dark:bg-zinc-700/20 blur-[100px] md:blur-[120px] rounded-full"></div>
          </div>

          {/* We removed the old Header and the heavy dot backgrounds here */}
          <div className="min-h-screen w-full relative flex flex-col items-center">
            {/* The single-page children will handle their own width constraints */}
            <div className="w-full">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
