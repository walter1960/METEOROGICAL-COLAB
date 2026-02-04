'use client';

import { useState } from 'react';
import { MapPin, Calendar, Users, Star, GitBranch, Download, Share2, Eye, MessageSquare, ThumbsUp, Camera } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PhenomenonGallery from '@/components/PhenomenonGallery';

export default function CaseDetailPage({ params }: { params: { id: string } }) {
    const [activeTab, setActiveTab] = useState('overview');

    // Mock data for temperature time series
    const temperatureData = [
        { time: '00:00', temp: 28.5, dewpoint: 24.2 },
        { time: '03:00', temp: 27.8, dewpoint: 23.8 },
        { time: '06:00', temp: 27.2, dewpoint: 23.5 },
        { time: '09:00', temp: 29.5, dewpoint: 24.8 },
        { time: '12:00', temp: 32.1, dewpoint: 25.5 },
        { time: '15:00', temp: 33.8, dewpoint: 26.2 },
        { time: '18:00', temp: 31.5, dewpoint: 25.8 },
        { time: '21:00', temp: 29.2, dewpoint: 24.5 },
    ];

    // Mock data for pressure
    const pressureData = [
        { time: 'Aug 23', pressure: 1008 },
        { time: 'Aug 24', pressure: 1005 },
        { time: 'Aug 25', pressure: 998 },
        { time: 'Aug 26', pressure: 985 },
        { time: 'Aug 27', pressure: 920 },
        { time: 'Aug 28', pressure: 940 },
        { time: 'Aug 29', pressure: 965 },
        { time: 'Aug 30', pressure: 990 },
    ];

    const caseData = {
        id: 'hurricane-katrina-2005',
        title: 'Hurricane Katrina - August 2005',
        type: 'Tropical Cyclone',
        category: 'Category 5',
        location: 'Gulf of Mexico / Louisiana',
        date: 'August 23-31, 2005',
        contributors: 45,
        stars: 128,
        views: 3542,
        status: 'validated',
        doi: '10.5281/meteo.katrina.2005',
        description: `Hurricane Katrina was a devastating Category 5 Atlantic hurricane that caused catastrophic damage along the Gulf coast from central Florida to Texas. The storm formed over the Bahamas on August 23, 2005, and crossed southern Florida as a moderate Category 1 hurricane before strengthening rapidly in the Gulf of Mexico.

The storm weakened before making its second landfall as a Category 3 storm on the morning of Monday, August 29 in southeast Louisiana. It caused severe destruction along the Gulf coast, with the most severe loss of life and property damage occurring in New Orleans, Louisiana, which flooded as the levee system catastrophically failed.`,
        tags: ['Hurricane', 'Category 5', 'Historical', 'Extreme Weather', 'Flooding'],
        timeline: [
            { date: 'Aug 23', event: 'Tropical Depression formed over Bahamas' },
            { date: 'Aug 24', event: 'Upgraded to Tropical Storm Katrina' },
            { date: 'Aug 25', event: 'Made landfall in Florida as Category 1' },
            { date: 'Aug 26', event: 'Entered Gulf of Mexico, rapid intensification' },
            { date: 'Aug 28', event: 'Reached Category 5 status' },
            { date: 'Aug 29', event: 'Made landfall in Louisiana as Category 3' },
            { date: 'Aug 30', event: 'Weakened to tropical depression' },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold">
                            {caseData.status.toUpperCase()}
                        </span>
                        <span className="px-3 py-1 bg-red-500/80 rounded-full text-sm font-semibold">
                            {caseData.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{caseData.title}</h1>

                    <div className="flex flex-wrap gap-6 text-sm mb-6">
                        <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5" />
                            <span>{caseData.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            <span>{caseData.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Users className="w-5 h-5" />
                            <span>{caseData.contributors} contributors</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="w-5 h-5" />
                            <span>{caseData.stars} stars</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Eye className="w-5 h-5" />
                            <span>{caseData.views} views</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button className="px-6 py-2 bg-white text-primary-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            Star
                        </button>
                        <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center gap-2">
                            <GitBranch className="w-4 h-4" />
                            Fork
                        </button>
                        <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center gap-2">
                            <Download className="w-4 h-4" />
                            Download Data
                        </button>
                        <button className="px-6 py-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors flex items-center gap-2">
                            <Share2 className="w-4 h-4" />
                            Share
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex gap-8">
                        {['overview', 'imagery', 'data', 'analysis', 'discussion', 'contributors'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`py-4 px-2 font-semibold border-b-2 transition-colors flex items-center gap-2 ${activeTab === tab
                                    ? 'border-primary-600 text-primary-600 dark:text-primary-400'
                                    : 'border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                                    }`}
                            >
                                {tab === 'imagery' && <Camera className="w-4 h-4" />}
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {activeTab === 'imagery' && (
                    <PhenomenonGallery />
                )}
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Description */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Overview</h2>
                                <div className="prose dark:prose-invert max-w-none">
                                    {caseData.description.split('\n\n').map((paragraph, index) => (
                                        <p key={index} className="text-slate-600 dark:text-slate-300 mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Timeline */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Timeline</h2>
                                <div className="space-y-4">
                                    {caseData.timeline.map((item, index) => (
                                        <div key={index} className="flex gap-4">
                                            <div className="flex flex-col items-center">
                                                <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                                                {index < caseData.timeline.length - 1 && (
                                                    <div className="w-0.5 h-full bg-slate-300 dark:bg-slate-600 mt-1"></div>
                                                )}
                                            </div>
                                            <div className="flex-1 pb-6">
                                                <div className="font-semibold text-slate-800 dark:text-white">{item.date}</div>
                                                <div className="text-slate-600 dark:text-slate-300">{item.event}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Pressure Chart */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Central Pressure Evolution</h2>
                                <ResponsiveContainer width="100%" height={300}>
                                    <AreaChart data={pressureData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="time" />
                                        <YAxis domain={[900, 1020]} />
                                        <Tooltip />
                                        <Legend />
                                        <Area type="monotone" dataKey="pressure" stroke="#0066ff" fill="#0066ff" fillOpacity={0.3} name="Pressure (hPa)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1 space-y-6">
                            {/* Metadata */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Metadata</h3>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <div className="text-slate-500 dark:text-slate-400">Type</div>
                                        <div className="font-semibold text-slate-800 dark:text-white">{caseData.type}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-500 dark:text-slate-400">Category</div>
                                        <div className="font-semibold text-slate-800 dark:text-white">{caseData.category}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-500 dark:text-slate-400">DOI</div>
                                        <div className="font-mono text-xs text-primary-600 dark:text-primary-400">{caseData.doi}</div>
                                    </div>
                                    <div>
                                        <div className="text-slate-500 dark:text-slate-400">Status</div>
                                        <div className="font-semibold text-green-600 dark:text-green-400">Validated</div>
                                    </div>
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Tags</h3>
                                <div className="flex flex-wrap gap-2">
                                    {caseData.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Activity */}
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
                                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-4">Recent Activity</h3>
                                <div className="space-y-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <MessageSquare className="w-4 h-4 text-slate-400 mt-1" />
                                        <div>
                                            <div className="text-slate-800 dark:text-white">New comment by <span className="font-semibold">Dr. Smith</span></div>
                                            <div className="text-slate-500 dark:text-slate-400">2 hours ago</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <GitBranch className="w-4 h-4 text-slate-400 mt-1" />
                                        <div>
                                            <div className="text-slate-800 dark:text-white"><span className="font-semibold">Prof. Johnson</span> forked this case</div>
                                            <div className="text-slate-500 dark:text-slate-400">5 hours ago</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <ThumbsUp className="w-4 h-4 text-slate-400 mt-1" />
                                        <div>
                                            <div className="text-slate-800 dark:text-white">Analysis validated by peer reviewers</div>
                                            <div className="text-slate-500 dark:text-slate-400">1 day ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'data' && (
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 border border-slate-200 dark:border-slate-700">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Temperature & Dewpoint Analysis</h2>
                        <ResponsiveContainer width="100%" height={400}>
                            <LineChart data={temperatureData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="time" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="temp" stroke="#ff6b6b" strokeWidth={2} name="Temperature (°C)" />
                                <Line type="monotone" dataKey="dewpoint" stroke="#4ecdc4" strokeWidth={2} name="Dewpoint (°C)" />
                            </LineChart>
                        </ResponsiveContainer>

                        <div className="mt-8">
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">Available Datasets</h3>
                            <div className="space-y-3">
                                {['Satellite Imagery (GOES)', 'Radar Data (WSR-88D)', 'Surface Observations', 'Upper Air Soundings', 'Model Output (GFS)'].map((dataset, index) => (
                                    <div key={index} className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                                        <span className="font-medium text-slate-800 dark:text-white">{dataset}</span>
                                        <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors">
                                            Download
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
