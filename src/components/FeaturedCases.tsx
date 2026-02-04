'use client';

import Link from 'next/link';
import { MapPin, Calendar, Users, Star, GitBranch } from 'lucide-react';

interface WeatherCase {
    id: string;
    title: string;
    type: string;
    location: string;
    date: string;
    contributors: number;
    stars: number;
    status: 'draft' | 'under-review' | 'peer-reviewed' | 'validated';
    description: string;
    tags: string[];
}

export default function FeaturedCases() {
    const cases: WeatherCase[] = [
        {
            id: 'hurricane-katrina-2005',
            title: 'Hurricane Katrina - August 2005',
            type: 'Tropical Cyclone',
            location: 'Gulf of Mexico / Louisiana',
            date: 'August 23-31, 2005',
            contributors: 45,
            stars: 128,
            status: 'validated',
            description: 'Comprehensive analysis of one of the most devastating hurricanes in U.S. history. Category 5 storm with extensive satellite and radar data.',
            tags: ['Hurricane', 'Category 5', 'Historical', 'Extreme Weather'],
        },
        {
            id: 'european-heatwave-2023',
            title: 'European Heatwave - July 2023',
            type: 'Heatwave',
            location: 'Western Europe',
            date: 'July 10-20, 2023',
            contributors: 32,
            stars: 89,
            status: 'peer-reviewed',
            description: 'Record-breaking temperatures across Western Europe. Analysis includes synoptic patterns, climate attribution, and health impacts.',
            tags: ['Heatwave', 'Climate Change', 'Synoptic', 'Europe'],
        },
        {
            id: 'polar-vortex-2021',
            title: 'North American Polar Vortex - February 2021',
            type: 'Cold Wave',
            location: 'North America',
            date: 'February 10-20, 2021',
            contributors: 28,
            stars: 76,
            status: 'peer-reviewed',
            description: 'Extreme cold outbreak affecting Texas and the southern United States. Jet stream analysis and stratospheric connections.',
            tags: ['Polar Vortex', 'Cold Wave', 'Jet Stream', 'Extreme Cold'],
        },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'validated':
                return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            case 'peer-reviewed':
                return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
            case 'under-review':
                return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            default:
                return 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200';
        }
    };

    const getStatusLabel = (status: string) => {
        return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((weatherCase) => (
                <Link
                    key={weatherCase.id}
                    href={`/cases/${weatherCase.id}`}
                    className="block group"
                >
                    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-2xl transition-all border border-slate-200 dark:border-slate-700 overflow-hidden transform group-hover:-translate-y-1">
                        {/* Header */}
                        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                            <div className="flex justify-between items-start mb-3">
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(weatherCase.status)}`}>
                                    {getStatusLabel(weatherCase.status)}
                                </span>
                                <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                                    <Star className="w-4 h-4" />
                                    <span className="text-sm font-medium">{weatherCase.stars}</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                {weatherCase.title}
                            </h3>

                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                                {weatherCase.description}
                            </p>

                            {/* Metadata */}
                            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{weatherCase.location}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>{weatherCase.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    <span>{weatherCase.contributors} contributors</span>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="p-4 bg-slate-50 dark:bg-slate-900">
                            <div className="flex flex-wrap gap-2">
                                {weatherCase.tags.slice(0, 3).map((tag, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700"
                                    >
                                        {tag}
                                    </span>
                                ))}
                                {weatherCase.tags.length > 3 && (
                                    <span className="px-2 py-1 text-slate-500 dark:text-slate-400 text-xs">
                                        +{weatherCase.tags.length - 3} more
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
