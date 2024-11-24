import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DevAlex - Software Engineer",
    description:
        "Portfolio of a software engineer specializing in React, TypeScript, and modern web technologies",
    icons: {
        icon: "/favicon.ico"
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-gray-800 text-white`}>
                {children}
            </body>
        </html>
    );
}
