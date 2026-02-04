'use client';

import { useState, useRef, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, Download, Share2, Info, Eye, Layers } from 'lucide-react';

interface WeatherImage {
    id: string;
    url: string;
    title: string;
    description: string;
    source: string;
    timestamp: string;
    resolution: string;
}

interface ImageModalProps {
    image: WeatherImage;
    onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [isEnhanced, setIsEnhanced] = useState(false);

    const handleWheel = (e: React.WheelEvent) => {
        const delta = e.deltaY > 0 ? -0.1 : 0.1;
        setZoom(prev => Math.min(Math.max(1, prev + delta), 4));
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoom > 1) {
            setIsDragging(true);
            setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging) {
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y
            });
        }
    };

    const handleMouseUp = () => setIsDragging(false);

    const resetView = () => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
    };

    // Prevent body scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative w-full h-full flex flex-col md:flex-row gap-6">
                {/* Main Viewer Area */}
                <div className="flex-1 bg-black/40 rounded-2xl border border-white/10 overflow-hidden relative group">
                    <div
                        className="w-full h-full flex items-center justify-center overflow-hidden cursor-move"
                        onWheel={handleWheel}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseUp}
                    >
                        <img
                            src={image.url}
                            alt={image.title}
                            draggable={false}
                            className={`max-w-full max-h-full transition-transform duration-200 ${isEnhanced ? 'contrast-125 saturate-150 brightness-110' : ''}`}
                            style={{
                                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                                transition: isDragging ? 'none' : 'transform 0.2s ease-out'
                            }}
                        />
                    </div>

                    {/* Image Info Overlay (Mobile Only) */}
                    <div className="absolute top-4 left-4 md:hidden">
                        <h2 className="text-white font-bold">{image.title}</h2>
                    </div>

                    {/* Viewer Controls */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl">
                        <button
                            onClick={() => setZoom(prev => Math.max(1, prev - 0.5))}
                            className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
                            title="Zoom Out"
                        >
                            <ZoomOut className="w-5 h-5" />
                        </button>
                        <span className="text-white text-xs font-bold w-12 text-center">
                            {Math.round(zoom * 100)}%
                        </span>
                        <button
                            onClick={() => setZoom(prev => Math.min(4, prev + 0.5))}
                            className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
                            title="Zoom In"
                        >
                            <ZoomIn className="w-5 h-5" />
                        </button>
                        <div className="w-px h-6 bg-white/10 mx-1"></div>
                        <button
                            onClick={resetView}
                            className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
                            title="Reset View"
                        >
                            <RotateCcw className="w-5 h-5" />
                        </button>
                        <button
                            onClick={() => setIsEnhanced(!isEnhanced)}
                            className={`p-2 rounded-xl transition-colors flex items-center gap-2 px-3 ${isEnhanced ? 'bg-primary-600 text-white' : 'text-white hover:bg-white/10'}`}
                            title="Augment scientific features"
                        >
                            <Layers className="w-5 h-5" />
                            <span className="text-xs font-bold">Augment</span>
                        </button>
                    </div>

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-md transition-all z-50 border border-white/10"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Sidebar Info (Desktop) */}
                <div className="hidden md:flex flex-col w-80 shrink-0 gap-6">
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 text-white space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">{image.title}</h2>
                            <p className="text-sm text-slate-400 leading-relaxed">{image.description}</p>
                        </div>

                        <div className="space-y-4 pt-6 border-t border-white/10">
                            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Scientific Specs</h3>
                            <div className="grid grid-cols-2 gap-4 text-xs">
                                <div>
                                    <span className="block text-slate-500 mb-1">Source</span>
                                    <span className="font-medium">{image.source}</span>
                                </div>
                                <div>
                                    <span className="block text-slate-500 mb-1">Resolution</span>
                                    <span className="font-medium text-primary-400">{image.resolution}</span>
                                </div>
                                <div className="col-span-2">
                                    <span className="block text-slate-500 mb-1">Timestamp</span>
                                    <span className="font-medium">{image.timestamp}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3 pt-6">
                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-primary-600 hover:bg-primary-700 rounded-xl font-bold transition-all shadow-lg shadow-primary-500/20">
                                <Download className="w-4 h-4" /> Download Raw (.tiff)
                            </button>
                            <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold transition-all border border-white/10">
                                <Share2 className="w-4 h-4" /> Cite Image
                            </button>
                        </div>
                    </div>

                    <div className="bg-primary-900/40 rounded-2xl border border-primary-500/20 p-4 flex gap-3 text-primary-100 italic text-xs">
                        <Info className="w-5 h-5 shrink-0" />
                        <p>Scientific augmentation filters apply contrast-stretching and false-color mapping to highlight thermal gradients.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
