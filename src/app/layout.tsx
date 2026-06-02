import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import AmbientGlow from "@/components/AmbientGlow";

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
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} h-full bg-white dark:bg-slate-900`}>
        <Providers>
          {/* Global Ambient Glow */}
          <AmbientGlow />

          {/* We removed the old Header and the heavy dot backgrounds here */}
          <div className="min-h-screen w-full relative z-10 flex flex-col items-center">
            {/* The single-page children will handle their own width constraints */}
            <div className="w-full">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
