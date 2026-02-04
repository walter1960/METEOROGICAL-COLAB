'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, MapPin, Calendar, Users, Star, ChevronDown, Bell, BellRing } from 'lucide-react';
import { useNotification } from '@/components/NotificationSystem';

export default function CasesPage() {
    const { notify } = useNotification();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [selectedStatus, setSelectedStatus] = useState('all');
    const [following, setFollowing] = useState<string[]>([]);

    const cases = [
        {
            id: 'hurricane-katrina-2005',
            title: 'Hurricane Katrina - August 2005',
            type: 'Tropical Cyclone',
            location: 'Gulf of Mexico / Louisiana',
            date: 'August 23-31, 2005',
            contributors: 45,
            stars: 128,
            status: 'validated',
            description: 'Comprehensive analysis of one of the most devastating hurricanes in U.S. history.',
            tags: ['Hurricane', 'Category 5', 'Historical'],
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
            description: 'Record-breaking temperatures across Western Europe with climate attribution analysis.',
            tags: ['Heatwave', 'Climate Change', 'Europe'],
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
            description: 'Extreme cold outbreak affecting Texas and southern United States.',
            tags: ['Polar Vortex', 'Cold Wave', 'Jet Stream'],
        },
        {
            id: 'derecho-midwest-2020',
            title: 'Midwest Derecho - August 2020',
            type: 'Severe Thunderstorm',
            location: 'Midwest USA',
            date: 'August 10, 2020',
            contributors: 18,
            stars: 54,
            status: 'under-review',
            description: 'Widespread damaging winds across Iowa and Illinois with radar analysis.',
            tags: ['Derecho', 'Severe Weather', 'Convection'],
        },
        {
            id: 'typhoon-haiyan-2013',
            title: 'Typhoon Haiyan - November 2013',
            type: 'Tropical Cyclone',
            location: 'Philippines',
            date: 'November 3-11, 2013',
            contributors: 38,
            stars: 95,
            status: 'validated',
            description: 'One of the strongest tropical cyclones ever recorded at landfall.',
            tags: ['Typhoon', 'Category 5', 'Philippines'],
        },
        {
            id: 'australian-bushfire-2019',
            title: 'Australian Bushfire Season - 2019-2020',
            type: 'Fire Weather',
            location: 'Australia',
            date: 'September 2019 - March 2020',
            contributors: 42,
            stars: 112,
            status: 'validated',
            description: 'Extreme fire weather conditions leading to unprecedented bushfires.',
            tags: ['Fire Weather', 'Drought', 'Australia'],
        },
    ];

    const filteredCases = useMemo(() => {
        return cases.filter(c => {
            const matchesSearch = searchQuery === '' ||
                c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                c.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

            const matchesType = selectedType === 'all' || c.type.replace(' ', '-').toLowerCase() === selectedType;
            const matchesStatus = selectedStatus === 'all' || c.status === selectedStatus;

            return matchesSearch && matchesType && matchesStatus;
        });
    }, [searchQuery, selectedType, selectedStatus]);

    const handleFollow = (e: React.MouseEvent, id: string, title: string) => {
        e.preventDefault();
        e.stopPropagation();

        if (following.includes(id)) {
            setFollowing(prev => prev.filter(caseId => caseId !== id));
            notify(`You stopped following: ${title}`, 'info');
        } else {
            setFollowing(prev => [...prev, id]);
            notify(`Success! You will receive email alerts for: ${title}`, 'success');
        }
    };

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
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
                        Explore Weather Cases
                    </h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Browse and analyze historical weather events from around the world
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 mb-8 border border-slate-200 dark:border-slate-700">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */}
                        <div className="md:col-span-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search cases..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                                />
                            </div>
                        </div>

                        {/* Type Filter */}
                        <div className="md:col-span-1">
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                            >
                                <option value="all">All Types</option>
                                <option value="tropical-cyclone">Tropical Cyclone</option>
                                <option value="heatwave">Heatwave</option>
                                <option value="cold-wave">Cold Wave</option>
                                <option value="severe-thunderstorm">Severe Thunderstorm</option>
                                <option value="fire-weather">Fire Weather</option>
                            </select>
                        </div>

                        {/* Status Filter */}
                        <div className="md:col-span-1">
                            <select
                                value={selectedStatus}
                                onChange={(e) => setSelectedStatus(e.target.value)}
                                className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-slate-700 text-slate-800 dark:text-white"
                            >
                                <option value="all">All Status</option>
                                <option value="validated">Validated</option>
                                <option value="peer-reviewed">Peer Reviewed</option>
                                <option value="under-review">Under Review</option>
                                <option value="draft">Draft</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6 flex justify-between items-center">
                    <p className="text-slate-600 dark:text-slate-400">
                        Showing <span className="font-semibold text-slate-800 dark:text-white">{filteredCases.length}</span> cases
                        {searchQuery && <span> for keyword "<span className="text-primary-600 font-bold">{searchQuery}</span>"</span>}
                    </p>
                </div>

                {/* Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCases.map((weatherCase) => (
                        <Link
                            key={weatherCase.id}
                            href={`/cases/${weatherCase.id}`}
                            className="block group"
                        >
                            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-2xl transition-all border border-slate-200 dark:border-slate-700 overflow-hidden transform group-hover:-translate-y-1 h-full flex flex-col">
                                {/* Header */}
                                <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex-grow">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(weatherCase.status)}`}>
                                            {getStatusLabel(weatherCase.status)}
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={(e) => handleFollow(e, weatherCase.id, weatherCase.title)}
                                                className={`p-2 rounded-full transition-all ${following.includes(weatherCase.id) ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400' : 'bg-slate-100 text-slate-400 dark:bg-slate-700 hover:text-primary-500'}`}
                                                title={following.includes(weatherCase.id) ? "Following" : "Follow for alerts"}
                                            >
                                                {following.includes(weatherCase.id) ? <BellRing className="w-4 h-4" /> : <Bell className="w-4 h-4" />}
                                            </button>
                                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
                                                <Star className="w-4 h-4" />
                                                <span className="text-sm font-medium">{weatherCase.stars}</span>
                                            </div>
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
                                        {weatherCase.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More */}
                <div className="mt-12 text-center">
                    <button className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg">
                        Load More Cases
                    </button>
                </div>
            </div>
        </div>
    );
}
