import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import MouseFollow from "../../components/main/MouseFollow";
import "./globals.css";

const noto_sans_mono = Noto_Sans_Mono({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Nitin Veeraperumal",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto_sans_mono.className} bg-[#030014] bg-gradient-to-br from-[#030014] from-50% to-[#1a1134] leading-relaxed text-slate-400 antialiased selection:bg-[#7a92f0] selection:text-indigo-950 min-h-screen overflow-hidden overscroll-none\``}
      >
      <div>
          {children}
          <div className="mouse-follow-mobile md:hidden absolute bottom-0 -right-16"></div>
          <MouseFollow />
      </div>
      </body>
    </html>
  );
}
