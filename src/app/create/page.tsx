'use client';

import { useState } from 'react';
import { Upload, Plus, Calendar, MapPin, Info, ArrowRight, Save, X } from 'lucide-react';
import Link from 'next/link';
import { useNotification } from '@/components/NotificationSystem';

export default function CreateCasePage() {
    const { notify } = useNotification();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        title: '',
        type: 'tropical-cyclone',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
        severity: 'moderate',
        scale: 'mesoscale',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);
    const prevStep = () => setStep(prev => prev - 1);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8 flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2">Create New Case</h1>
                        <p className="text-slate-600 dark:text-slate-400">Share a new meteorological event with the global community</p>
                    </div>
                    <Link href="/cases" className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
                        <X className="w-6 h-6" />
                    </Link>
                </div>

                {/* Progress Bar */}
                <div className="mb-12 relative">
                    <div className="flex justify-between relative z-10">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex flex-col items-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= s ? 'bg-primary-600 text-white' : 'bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-600'
                                    }`}>
                                    {s}
                                </div>
                                <span className={`mt-2 text-xs font-medium ${step >= s ? 'text-primary-600' : 'text-slate-400'}`}>
                                    {s === 1 ? 'Basic Info' : s === 2 ? 'Details' : 'Data & Review'}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-5 left-0 w-full h-0.5 bg-slate-200 dark:bg-slate-800 -z-0">
                        <div
                            className="h-full bg-primary-600 transition-all duration-300"
                            style={{ width: `${(step - 1) * 50}%` }}
                        ></div>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all">
                    <div className="p-8">
                        {step === 1 && (
                            <div className="space-y-6 animate-fade-in">
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Basic Information</h2>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Event Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="e.g. Hurricane Katrina - August 2005"
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all text-slate-800 dark:text-white"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Phenomenon Type</label>
                                        <select
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all text-slate-800 dark:text-white"
                                        >
                                            <option value="tropical-cyclone">Tropical Cyclone</option>
                                            <option value="heatwave">Heatwave</option>
                                            <option value="cold-wave">Cold Wave</option>
                                            <option value="severe-thunderstorm">Severe Thunderstorm</option>
                                            <option value="flood">Flood</option>
                                            <option value="drought">Drought</option>
                                            <option value="fire-weather">Fire Weather</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Location / Region</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                placeholder="e.g. Gulf of Mexico"
                                                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all text-slate-800 dark:text-white"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Start Date</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="date"
                                                name="startDate"
                                                value={formData.startDate}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all text-slate-800 dark:text-white"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">End Date (Optional)</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                            <input
                                                type="date"
                                                name="endDate"
                                                value={formData.endDate}
                                                onChange={handleChange}
                                                className="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all text-slate-800 dark:text-white"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6 animate-fade-in">
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Event Details</h2>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Case Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows={6}
                                        placeholder="Provide a brief overview of the scientific importance of this case..."
                                        className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all text-slate-800 dark:text-white resize-none"
                                    ></textarea>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Severity Level</label>
                                        <select
                                            name="severity"
                                            value={formData.severity}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all text-slate-800 dark:text-white"
                                        >
                                            <option value="minor">Minor</option>
                                            <option value="moderate">Moderate</option>
                                            <option value="severe">Severe</option>
                                            <option value="extreme">Extreme / Record Breaking</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Spatial Scale</label>
                                        <select
                                            name="scale"
                                            value={formData.scale}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all text-slate-800 dark:text-white"
                                        >
                                            <option value="microscale">Microscale</option>
                                            <option value="mesoscale">Mesoscale</option>
                                            <option value="synoptic">Synoptic Scale</option>
                                            <option value="planetary">Planetary Scale</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-6 animate-fade-in">
                                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Data & Review</h2>

                                <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-12 text-center hover:border-primary-500 transition-colors cursor-pointer bg-slate-50 dark:bg-slate-900/50 group">
                                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <Upload className="w-8 h-8 text-primary-600" />
                                    </div>
                                    <p className="text-slate-800 dark:text-white font-semibold mb-2">Upload Scientific Data</p>
                                    <p className="text-slate-500 text-sm max-w-xs mx-auto">Drag and drop your NetCDF, GRIB, or CSV files here (Max 100MB for trial)</p>
                                </div>

                                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-4 flex gap-4 items-start border border-primary-100 dark:border-primary-800">
                                    <Info className="w-5 h-5 text-primary-600 mt-1" />
                                    <p className="text-sm text-primary-900 dark:text-primary-100">
                                        By publishing this case, you agree to make the metadata and attached public data available under an Open Science license. A DOI can be requested after initial validation.
                                    </p>
                                </div>

                                <div className="pt-4 space-y-4">
                                    <h3 className="font-bold text-slate-800 dark:text-white">Summary Review</h3>
                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                            <span className="text-slate-500 block">Title</span>
                                            <span className="font-medium text-slate-800 dark:text-white">{formData.title || 'Untitled Case'}</span>
                                        </div>
                                        <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-lg">
                                            <span className="text-slate-500 block">Type</span>
                                            <span className="font-medium text-slate-800 dark:text-white capitalize">{formData.type.replace('-', ' ')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer Controls */}
                    <div className="px-8 py-6 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-700 flex justify-between">
                        <button
                            onClick={prevStep}
                            disabled={step === 1}
                            className={`px-6 py-2 rounded-lg font-semibold transition-all ${step === 1 ? 'opacity-0 cursor-default' : 'text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200'
                                }`}
                        >
                            Back
                        </button>

                        {step < 3 ? (
                            <button
                                onClick={nextStep}
                                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary-500/20 active:scale-95 transition-all"
                            >
                                Continue <ArrowRight className="w-4 h-4" />
                            </button>
                        ) : (
                            <Link
                                href="/cases"
                                onClick={() => notify(`Case "${formData.title || 'Untitled'}" published! Notifications sent to followers.`, 'success')}
                                className="px-8 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 hover:opacity-90 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary-500/20 active:scale-95 transition-all"
                            >
                                Publish Case <Save className="w-4 h-4" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
