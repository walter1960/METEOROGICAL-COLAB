'use client';

import { useState } from 'react';
import { Maximize2, Info, Calendar, Download } from 'lucide-react';
import ImageModal from '@/components/ImageModal';

interface WeatherImage {
    id: string;
    url: string;
    title: string;
    description: string;
    source: string;
    timestamp: string;
    resolution: string;
}

export default function PhenomenonGallery() {
    const [selectedImage, setSelectedImage] = useState<WeatherImage | null>(null);

    const images: WeatherImage[] = [
        {
            id: 'katrina-sat-1',
            url: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&q=80&w=1200',
            title: 'Katrina at Peak Intensity',
            description: 'Thermal infrared satellite view of Hurricane Katrina near peak intensity in the central Gulf of Mexico.',
            source: 'NOAA GOES-12',
            timestamp: 'Aug 28, 2005 15:45 UTC',
            resolution: '4km / pixel'
        },
        {
            id: 'katrina-sat-2',
            url: 'https://images.unsplash.com/photo-1544652478-6653e09f18a2?auto=format&fit=crop&q=80&w=1200',
            title: 'Landfall Radar Composite',
            description: 'NEXRAD composite showing the eyewall passage over the Louisiana coastline.',
            source: 'NWS NEXRAD',
            timestamp: 'Aug 29, 2005 11:10 UTC',
            resolution: '1km / pixel'
        },
        {
            id: 'katrina-sat-3',
            url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200',
            title: 'Eye Structure Detail',
            description: 'Visible spectrum high-resolution view of the 30nm wide eye.',
            source: 'NASA Moderate Resolution Imaging Spectroradiometer (MODIS)',
            timestamp: 'Aug 28, 2005 18:20 UTC',
            resolution: '250m / pixel'
        },
        {
            id: 'katrina-sat-4',
            url: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80&w=1200',
            title: 'Water Vapor Channel',
            description: 'Animation frame showing moisture fetch from the Caribbean.',
            source: 'University of Wisconsin-CIMSS',
            timestamp: 'Aug 27, 2005 12:00 UTC',
            resolution: '8km / pixel'
        }
    ];

    return (
        <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <img
                                src={image.url}
                                alt={image.title}
                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-sm font-bold flex items-center gap-2 border border-white/30">
                                    <Maximize2 className="w-4 h-4" /> Enlarge View
                                </span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-slate-800 dark:text-white mb-2">{image.title}</h3>
                            <div className="flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
                                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {image.timestamp}</span>
                                <span className="flex items-center gap-1"><Info className="w-3 h-3" /> {image.source}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedImage && (
                <ImageModal
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </div>
    );
}
