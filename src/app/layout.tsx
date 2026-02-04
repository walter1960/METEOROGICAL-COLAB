import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { NotificationProvider } from "@/components/NotificationSystem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "MeteoCollab - Collaborative Weather Case Studies",
    description: "A collaborative platform for meteorologists to study, analyze, and share weather cases worldwide.",
    keywords: ["meteorology", "weather", "climate", "collaboration", "science"],
    authors: [{ name: "MeteoCollab Team" }],
    openGraph: {
        title: "MeteoCollab",
        description: "Collaborate on Weather, Build Climate Knowledge",
        type: "website",
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
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </head>
            <body className={inter.className} suppressHydrationWarning>
                <NotificationProvider>
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main className="flex-grow">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </NotificationProvider>
            </body>
        </html>
    );
}
