'use client';

import { Users, MessageSquare, Award, TrendingUp, Search, Plus } from 'lucide-react';

export default function CommunityPage() {
    const discussions = [
        {
            id: 1,
            title: "Improving hurricane track prediction using ML",
            author: "Dr. Elena Vance",
            replies: 24,
            likes: 56,
            tags: ["Research", "Machine Learning"],
            time: "2h ago"
        },
        {
            id: 2,
            title: "Analysis of the 2023 Atlantic Hurricane Season anomalies",
            author: "Prof. Marcus Wright",
            replies: 12,
            likes: 34,
            tags: ["Climatology", "Atlantic"],
            time: "5h ago"
        },
        {
            id: 3,
            title: "New open dataset for Mediterranean Medicanes",
            author: "Giuseppe Rossi",
            replies: 8,
            likes: 42,
            tags: ["Dataset", "Medicane"],
            time: "1d ago"
        }
    ];

    const topContributers = [
        { name: "Dr. Elena Vance", reputation: 4520, cases: 12 },
        { name: "Prof. Marcus Wright", reputation: 3890, cases: 8 },
        { name: "Sarah Chen", reputation: 3120, cases: 15 },
        { name: "John Doe", reputation: 2840, cases: 6 }
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Scientific Community</h1>
                        <p className="text-lg text-slate-600 dark:text-slate-400">Connect, discuss, and validate weather research with peers.</p>
                    </div>
                    <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-700 transition-all">
                        <Plus className="w-5 h-5" /> Start Discussion
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Feed */}
                    <div className="lg:col-span-3 space-y-6">
                        {/* Search Bar */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search discussions, researchers, or topics..."
                                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                            />
                        </div>

                        {/* Discussion List */}
                        <div className="space-y-4">
                            {discussions.map(disc => (
                                <div key={disc.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow cursor-pointer">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-slate-800 dark:text-white hover:text-primary-600 transition-colors">{disc.title}</h3>
                                        <span className="text-xs text-slate-400 whitespace-nowrap">{disc.time}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {disc.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-full font-medium">#{tag}</span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                                                <Users className="w-4 h-4" /> {disc.author}
                                            </span>
                                            <span className="flex items-center gap-1"><MessageSquare className="w-4 h-4" /> {disc.replies} replies</span>
                                            <span className="flex items-center gap-1"><TrendingUp className="w-4 h-4" /> {disc.likes} upvotes</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Top Contributors */}
                        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
                            <h2 className="text-lg font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-2">
                                <Award className="w-5 h-5 text-orange-500" /> Top Experts
                            </h2>
                            <div className="space-y-6">
                                {topContributers.map((user, i) => (
                                    <div key={user.name} className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-slate-500">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-slate-800 dark:text-white truncate text-sm">{user.name}</p>
                                            <p className="text-xs text-slate-500">{user.reputation} rep • {user.cases} cases</p>
                                        </div>
                                        {i === 0 && <span className="text-xl">🏆</span>}
                                    </div>
                                ))}
                            </div>
                            <button className="w-full mt-8 py-2 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                                View Leaderboard
                            </button>
                        </div>

                        {/* Stats Card */}
                        <div className="bg-gradient-to-br from-primary-600 to-primary-700 p-6 rounded-2xl text-white shadow-lg shadow-primary-500/20">
                            <h3 className="font-bold mb-4">Community Reach</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-primary-100">Discussions</span>
                                    <span className="font-bold">1,240</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-primary-100">Daily Active Users</span>
                                    <span className="font-bold">450+</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-primary-100">Peer Reviews Done</span>
                                    <span className="font-bold">8,900</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
