'use client';

import { Users, GitBranch, Globe, Award } from 'lucide-react';

export default function StatsSection() {
    const stats = [
        {
            icon: Users,
            value: '5,000+',
            label: 'Active Meteorologists',
            color: 'text-blue-600 dark:text-blue-400',
            bgColor: 'bg-blue-100 dark:bg-blue-900',
        },
        {
            icon: GitBranch,
            value: '1,200+',
            label: 'Weather Cases',
            color: 'text-green-600 dark:text-green-400',
            bgColor: 'bg-green-100 dark:bg-green-900',
        },
        {
            icon: Globe,
            value: '85+',
            label: 'Countries',
            color: 'text-purple-600 dark:text-purple-400',
            bgColor: 'bg-purple-100 dark:bg-purple-900',
        },
        {
            icon: Award,
            value: '350+',
            label: 'Peer-Reviewed Cases',
            color: 'text-orange-600 dark:text-orange-400',
            bgColor: 'bg-orange-100 dark:bg-orange-900',
        },
    ];

    return (
        <section className="py-16 px-4 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="text-center transform hover:scale-105 transition-transform"
                            >
                                <div className={`w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                    <Icon className={`w-8 h-8 ${stat.color}`} />
                                </div>
                                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                                <div className="text-slate-300 text-sm">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
