'use client';

import Link from 'next/link';
import { Search, Menu, X, Cloud, User, Bell } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                            <Cloud className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-slate-800 dark:text-white">
                            MeteoCollab
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/cases"
                            className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                        >
                            Explore Cases
                        </Link>
                        <Link
                            href="/create"
                            className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                        >
                            Create Case
                        </Link>
                        <Link
                            href="/community"
                            className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                        >
                            Community
                        </Link>
                        <Link
                            href="/docs"
                            className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                        >
                            Documentation
                        </Link>
                    </div>

                    {/* Right Side Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <ThemeToggle />
                        <button className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link
                            href="/login"
                            className="px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/signup"
                            className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
                        >
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 text-slate-600 dark:text-slate-300"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center mb-2 px-2">
                                <span className="text-sm font-semibold text-slate-500">Theme</span>
                                <ThemeToggle />
                            </div>
                            <Link
                                href="/cases"
                                className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Explore Cases
                            </Link>
                            <Link
                                href="/create"
                                className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Create Case
                            </Link>
                            <Link
                                href="/community"
                                className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Community
                            </Link>
                            <Link
                                href="/docs"
                                className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Documentation
                            </Link>
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex flex-col gap-2">
                                <Link
                                    href="/login"
                                    className="px-4 py-2 text-center text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sign In
                                </Link>
                                <Link
                                    href="/signup"
                                    className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium text-center hover:bg-primary-700"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
