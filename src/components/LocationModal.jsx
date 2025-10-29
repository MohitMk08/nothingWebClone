import React from 'react';
import { X } from 'lucide-react';

const LocationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const regions = [
        { name: 'United Kingdom', flag: '🇬🇧' },
        { name: 'United States', flag: '🇺🇸' },
        { name: 'Europe', flag: '🇪🇺' },
        { name: 'Asia Pacific', flag: '🌏' },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="relative bg-zinc-950 border border-white/20 rounded-none shadow-2xl max-w-md w-full mx-4 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <h2 className="text-xl font-bold text-white tracking-wider">STORE LOCATOR</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                        aria-label="Close"
                    >
                        <X className="h-5 w-5 text-gray-400" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 space-y-6">
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-white">Looks like you're in:</h3>
                        <p className="text-base text-gray-400">United Kingdom</p>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm text-gray-500">But you're browsing the store for:</p>
                        <p className="text-base font-medium text-white">United Kingdom</p>
                    </div>

                    <p className="text-sm text-gray-400">Want to keep going, or switch?</p>

                    {/* Actions */}
                    <div className="space-y-3">
                        <button
                            onClick={onClose}
                            className="w-full px-6 py-3 bg-white text-black rounded-full hover:bg-gray-200 font-medium transition-all duration-300"
                        >
                            Stay on
                        </button>

                        <div className="space-y-2">
                            <p className="text-sm text-gray-500 text-center">Go to:</p>
                            <div className="grid grid-cols-2 gap-2">
                                {regions.map((region) => (
                                    <button
                                        key={region.name}
                                        className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-white/10 rounded-full text-sm font-medium text-gray-300 transition-all duration-300"
                                    >
                                        {region.flag} {region.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationModal;
