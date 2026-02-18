import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Joshua Fransix | Web Engineer",
  description:
    "Web Engineer building scalable, interactive products across frontend and backend.",
  keywords: [
    "web developer",
    "frontend developer",
    "backend developer",
    "full-stack developer",
    "react",
    "next.js",
    "vue.js",
    "node.js",
    "typescript",
  ],
  authors: [{ name: "Joshua Fransix" }],
  creator: "Joshua Fransix",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joshfransix.com",
    title: "Joshua Fransix | Web Engineer",
    description:
      "Web Engineer building scalable, interactive products across frontend and backend.",
    siteName: "Joshua Fransix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Fransix | Web Engineer",
    description:
      "Web Engineer building scalable, interactive products across frontend and backend.",
    creator: "@joshfransix",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  document.documentElement.classList.add(theme);
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
