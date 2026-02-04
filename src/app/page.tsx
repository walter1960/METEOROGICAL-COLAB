import Link from 'next/link';
import { Cloud, GitBranch, Users, Globe, TrendingUp, Shield } from 'lucide-react';
import FeaturedCases from '@/components/FeaturedCases';
import StatsSection from '@/components/StatsSection';

export default function Home() {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary-600 via-secondary-600 to-purple-700 text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                            MeteoCollab
                        </h1>
                        <p className="text-xl md:text-2xl mb-4 text-blue-100 font-light">
                            Collaborate on Weather, Build Climate Knowledge
                        </p>
                        <p className="text-lg md:text-xl mb-12 text-blue-50 max-w-3xl mx-auto">
                            The world's first GitHub-inspired platform for collaborative meteorological case studies.
                            Analyze historical weather events, share insights, and advance climate science together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/cases"
                                className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
                            >
                                Explore Cases
                            </Link>
                            <Link
                                href="/create"
                                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
                            >
                                Create New Case
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white">
                        Why MeteoCollab?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
                            <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-6">
                                <GitBranch className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Version Control</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Track every change to your weather analysis with Git-like versioning. Fork cases, create branches, and merge contributions seamlessly.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
                            <div className="w-14 h-14 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center mb-6">
                                <Users className="w-7 h-7 text-secondary-600 dark:text-secondary-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Peer Review</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Scientific validation through peer review. Get feedback from experts, improve your analysis, and contribute to validated knowledge.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
                            <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
                                <Cloud className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Rich Data Visualization</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Interactive maps, satellite imagery, radar data, and advanced meteorological charts. Visualize weather like never before.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
                            <div className="w-14 h-14 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6">
                                <Globe className="w-7 h-7 text-green-600 dark:text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Global Collaboration</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Connect with meteorologists worldwide. Multi-language support, timezone handling, and configurable units for seamless collaboration.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
                            <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-6">
                                <TrendingUp className="w-7 h-7 text-orange-600 dark:text-orange-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Climate Insights</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Link weather events to climate trends. Compare with historical data, identify patterns, and contribute to climate science.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-slate-200 dark:border-slate-700">
                            <div className="w-14 h-14 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-6">
                                <Shield className="w-7 h-7 text-red-600 dark:text-red-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">Scientific Credibility</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                DOI assignment for validated cases, full traceability, source citations, and a reputation system that rewards quality contributions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <StatsSection />

            {/* Featured Cases */}
            <section className="py-20 px-4 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-800 dark:text-white">
                            Featured Cases
                        </h2>
                        <Link
                            href="/cases"
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold flex items-center gap-2"
                        >
                            View All Cases
                            <span>→</span>
                        </Link>
                    </div>

                    <FeaturedCases />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Collaborating?</h2>
                    <p className="text-xl mb-8 text-blue-100">
                        Join thousands of meteorologists, climatologists, and weather enthusiasts building the future of weather science.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/signup"
                            className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-xl"
                        >
                            Sign Up Free
                        </Link>
                        <Link
                            href="/about"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
