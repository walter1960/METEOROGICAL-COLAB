'use client';

import { Cloud, Globe, Shield, Users } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-slate-800 dark:text-white mb-6">About MeteoCollab</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        We are building the world's most advanced collaborative ecosystem for meteorological research and climate action.
                    </p>
                </div>

                <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-12">
                    <section>
                        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Our Mission</h2>
                        <p className="text-lg leading-relaxed">
                            Science shouldn't happen in silos. MeteoCollab was founded on the principle that meteorological data and analysis belong to the global community. By providing a platform inspired by open-source software development, we enable researchers from every continent to collaborate on life-saving weather insights.
                        </p>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                <Globe className="w-5 h-5 text-primary-500" /> Collaborative
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Every case study can be forked, reviewed, and improved by experts worldwide, ensuring the highest scientific accuracy.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                                <Shield className="w-5 h-5 text-secondary-500" /> Credible
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                With a rigorous peer-review system and DOI assignments, MeteoCollab provides a permanent home for meteorological records.
                            </p>
                        </div>
                    </div>

                    <section className="bg-primary-600 rounded-3xl p-12 text-white not-prose text-center">
                        <h2 className="text-3xl font-bold mb-6">Join the Future of Meteorology</h2>
                        <p className="text-primary-100 mb-8 text-lg">
                            Whether you are a student, an analyst, or a professional climatologist, your contribution matters.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button className="px-8 py-3 bg-white text-primary-600 rounded-xl font-bold hover:bg-slate-50 transition-all">
                                Get Started
                            </button>
                            <button className="px-8 py-3 bg-primary-700 text-white rounded-xl font-bold hover:bg-primary-800 transition-all">
                                Contact Us
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
