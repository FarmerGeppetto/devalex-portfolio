"use client";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="absolute inset-0 bg-[#0A0F1C]/80 backdrop-blur-md"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <Link
                        href="/"
                        className="text-xl sm:text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        DevAlex
                    </Link>

                    <nav className="flex items-center gap-3 sm:gap-8">
                        <Link
                            href="#skills"
                            className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                        >
                            Skills
                        </Link>
                        <Link
                            href="#projects"
                            className="text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                        >
                            Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="px-4 py-2 sm:px-6 sm:py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
