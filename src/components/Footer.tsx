import Link from 'next/link';
import { Cloud, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-slate-300 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                                <Cloud className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">MeteoCollab</span>
                        </div>
                        <p className="text-sm text-slate-400 mb-4">
                            Collaborative platform for meteorological case studies and climate science.
                        </p>
                        <div className="flex gap-3">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:contact@meteocollab.org" className="w-9 h-9 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/cases" className="hover:text-primary-400 transition-colors">Explore Cases</Link></li>
                            <li><Link href="/create" className="hover:text-primary-400 transition-colors">Create Case</Link></li>
                            <li><Link href="/features" className="hover:text-primary-400 transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-primary-400 transition-colors">Pricing</Link></li>
                            <li><Link href="/api" className="hover:text-primary-400 transition-colors">API</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/docs" className="hover:text-primary-400 transition-colors">Documentation</Link></li>
                            <li><Link href="/guides" className="hover:text-primary-400 transition-colors">Guides</Link></li>
                            <li><Link href="/community" className="hover:text-primary-400 transition-colors">Community</Link></li>
                            <li><Link href="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
                            <li><Link href="/support" className="hover:text-primary-400 transition-colors">Support</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/about" className="hover:text-primary-400 transition-colors">About</Link></li>
                            <li><Link href="/team" className="hover:text-primary-400 transition-colors">Team</Link></li>
                            <li><Link href="/careers" className="hover:text-primary-400 transition-colors">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
                            <li><Link href="/partners" className="hover:text-primary-400 transition-colors">Partners</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-slate-400">
                        © {currentYear} MeteoCollab. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <Link href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</Link>
                        <Link href="/cookies" className="hover:text-primary-400 transition-colors">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
