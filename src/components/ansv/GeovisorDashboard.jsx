import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Map as MapIcon, Layers, MapPin, Search,
    Filter, Download, MousePointer2, Info,
    Maximize2, Plus, Minus, Navigation2, Globe
} from 'lucide-react';

const GeovisorDashboard = () => {
    const [selectedLayer, setSelectedLayer] = useState('siniestros');

    const layers = [
        { id: 'siniestros', label: 'Siniestros Viales', icon: MapPin, color: 'rose' },
        { id: 'camaras', label: 'Cámaras SalvaVidas', icon: Navigation2, color: 'blue' },
        { id: 'vias', label: 'Estado de Vías', icon: Layers, color: 'emerald' },
        { id: 'clima', label: 'Riesgos Clima', icon: Info, color: 'amber' },
    ];

    return (
        <div className="h-[calc(100vh-200px)] flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Top Bar - Controls */}
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 w-full md:w-auto">
                    {layers.map(layer => (
                        <button
                            key={layer.id}
                            onClick={() => setSelectedLayer(layer.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all flex-1 md:flex-none
                                ${selectedLayer === layer.id ? `bg-${layer.color}-600 text-white shadow-lg shadow-${layer.color}-600/25` : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
                        >
                            <layer.icon className="w-4 h-4" />
                            <span className="hidden md:block">{layer.label}</span>
                        </button>
                    ))}
                </div>

                <div className="relative flex-1 group w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                    <input
                        type="text"
                        placeholder="Filtrar por Departamento o Municipio..."
                        className="bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white/10 transition-all text-sm font-medium"
                    />
                </div>

                <div className="flex gap-2">
                    <button className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 text-slate-400 transition-all"><Filter className="w-5 h-5" /></button>
                    <button className="p-3 bg-blue-600/10 hover:bg-blue-600/20 rounded-2xl border border-blue-500/20 text-blue-400 transition-all"><Download className="w-5 h-5" /></button>
                </div>
            </div>

            {/* Map Container */}
            <div className="flex-1 relative glass border border-white/5 rounded-3xl overflow-hidden group">
                {/* Mock Map Background Layer */}
                <div className="absolute inset-0 bg-[#0a0f1e] opacity-50 overflow-hidden pointer-events-none">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/-74.0721,4.7110,6,0/1280x720?access_token=pk.placeholder')] bg-cover bg-center" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />

                    {/* Grid Pattern */}
                    <svg className="absolute inset-0 w-full h-full text-white/5 fill-current">
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>

                    {/* Fake Data Nodes */}
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.8 }}
                            transition={{ delay: i * 0.1, duration: 1 }}
                            className={`absolute w-3 h-3 rounded-full blur-sm bg-${layers.find(l => l.id === selectedLayer)?.color}-500`}
                            style={{
                                left: `${Math.random() * 80 + 10}%`,
                                top: `${Math.random() * 80 + 10}%`
                            }}
                        />
                    ))}
                </div>

                {/* UI Overlay Controls */}
                <div className="absolute bottom-8 right-8 flex flex-col gap-2">
                    <div className="flex flex-col bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                        <button className="p-3 hover:bg-white/10 transition-colors text-slate-300"><Plus className="w-5 h-5" /></button>
                        <div className="h-[1px] bg-white/10 mx-2" />
                        <button className="p-3 hover:bg-white/10 transition-colors text-slate-300"><Minus className="w-5 h-5" /></button>
                    </div>
                    <button className="p-3 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all">
                        <Maximize2 className="w-5 h-5" />
                    </button>
                </div>

                {/* Legend / Info Overlay */}
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="absolute top-8 left-8 w-72 glass p-6 border border-white/10 space-y-4 backdrop-blur-2xl"
                >
                    <div className="flex items-center justify-between">
                        <h4 className="text-sm font-black text-white uppercase tracking-tighter">Geovisualización</h4>
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>

                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-xs font-bold text-slate-500 mb-2 uppercase">
                                <span>Concentración de Datos</span>
                                <span>84%</span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '84%' }}
                                    className={`h-full bg-${layers.find(l => l.id === selectedLayer)?.color}-500`}
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-rose-500" />
                                <span className="text-xs text-slate-400 font-bold">Zonas de Alta Siniestralidad</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500" />
                                <span className="text-xs text-slate-400 font-bold">Cámaras Activas</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-amber-500 opacity-50" />
                                <span className="text-xs text-slate-400 font-bold">Puntos Históricos</span>
                            </div>
                        </div>

                        <button className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-black text-slate-300 border border-white/5 transition-all">
                            <MousePointer2 className="w-3.5 h-3.5" />
                            MODO INTERACTIVO
                        </button>
                    </div>
                </motion.div>

                {/* Feature Hover Callout */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <div className="px-3 py-1.5 glass text-[10px] font-bold text-white whitespace-nowrap border-blue-500/30">
                        Vía Nacional 45 - Punto Crítico
                    </div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)]" />
                </motion.div>
            </div>

            {/* Bottom Status Bar */}
            <div className="flex items-center justify-between px-6 py-4 glass border border-white/5 rounded-2xl">
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-bold text-slate-400">EPSG:4326</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-600" />
                        <span className="text-xs font-bold text-slate-400">Última actualización: 14/01/2026 14:30</span>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-slate-600 uppercase">
                    <span>Lat: 4.7110</span>
                    <span>Lon: -74.0721</span>
                </div>
            </div>
        </div>
    );
};

export default GeovisorDashboard;
