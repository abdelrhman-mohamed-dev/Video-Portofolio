import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL(""),

  title: "Younis Portfolio",
  authors: {
    name: "Younis Portfolio",
  },

  description:
    "Based in Egypt, I'm a Video Editor passionate about Editing videos that users love.",
  openGraph: {
    title: "Younis Portfolio",
    description:
      "Based in Egypt, I'm a Video Editor passionate about Editing videos that users love.",
    url: "",
    siteName: "Younis Portfolio",
    images: "/og.png",
    type: "website",
  },
  keywords: [
    "Video Editor",
    "Video Editor for games",
    "Video Editor for web",
    "Younis Portfolio",
    "Portfolio",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-950  ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
