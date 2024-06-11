import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/NavBar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Portfolio NJ",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`bg-gray-100 ${inter.className}`}>
        <header className="flex items-center h-14 bg-white justify-between px-4">
            <div className="text-2xl">
                <a href="#about-me">Salida Maharjan</a>
            </div>
            <nav className="flex gap-7">
                <NavBar href="#about-me">
                    About Me
                </NavBar>
                <NavBar href="#projects">Projects</NavBar>
                <NavBar href="#education">Education</NavBar>
                <NavBar href="#contact-me">Contact Me</NavBar>
            </nav>
        </header>
        <main>
            {children}
        </main>
        </body>
        </html>
    );
}
