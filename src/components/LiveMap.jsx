import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Bus, Train } from 'lucide-react';

const LiveMap = ({ className }) => {
    // Simulated vehicles
    const vehicles = [
        { id: 1, type: 'bus', x: 20, y: 30, color: 'text-emerald-400', delay: 0 },
        { id: 2, type: 'bus', x: 60, y: 45, color: 'text-emerald-400', delay: 2 },
        { id: 3, type: 'train', x: 40, y: 80, color: 'text-violet-400', delay: 1 },
        { id: 4, type: 'bus', x: 80, y: 20, color: 'text-emerald-400', delay: 3 },
    ];

    return (
        <div className={`relative h-[300px] bg-slate-900/50 rounded-2xl overflow-hidden border border-white/5 ${className}`}>
            {/* Map Grid Background */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Simulated Map Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,50 L100,50" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none" />
                <path d="M50,0 L50,100" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" fill="none" />
                <path d="M20,0 L20,100" stroke="rgba(255,255,255,0.03)" strokeWidth="0.2" fill="none" />
                <path d="M80,0 L80,100" stroke="rgba(255,255,255,0.03)" strokeWidth="0.2" fill="none" />

                {/* Simulated Routes */}
                <motion.path
                    d="M10,20 C30,20 30,80 50,80 C70,80 70,20 90,20"
                    stroke="rgba(16, 185, 129, 0.2)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </svg>

            {/* Vehicle Markers */}
            {vehicles.map((v) => (
                <motion.div
                    key={v.id}
                    className={`absolute ${v.color}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: [`${v.x}%`, `${v.x + 5}%`, `${v.x}%`],
                        y: [`${v.y}%`, `${v.y - 5}%`, `${v.y}%`]
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        delay: v.delay,
                        ease: "linear"
                    }}
                    style={{ left: 0, top: 0 }}
                >
                    <div className="bg-white/10 p-1.5 rounded-lg backdrop-blur-md border border-white/10 shadow-2xl">
                        {v.type === 'bus' ? <Bus size={14} /> : <Train size={14} />}
                    </div>
                </motion.div>
            ))}

            {/* Hub Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <motion.div
                        initial={{ scale: 1, opacity: 0.5 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-emerald-500 rounded-full"
                    />
                    <div className="relative bg-emerald-500 p-2 rounded-full shadow-lg shadow-emerald-500/50">
                        <MapPin size={16} className="text-white" />
                    </div>
                </div>
            </div>

            {/* Map Overlay info */}
            <div className="absolute bottom-4 left-4 glass px-3 py-1.5 border border-white/10 text-[10px] font-bold uppercase tracking-tighter text-slate-400">
                Live Traffic Hub: Central
            </div>

            <div className="absolute top-4 right-4 flex gap-2">
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full border border-white/5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-bold text-white uppercase">Live</span>
                </div>
            </div>
        </div>
    );
};

export default LiveMap;
