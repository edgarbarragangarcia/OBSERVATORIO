import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Wind, Sun } from 'lucide-react';

const EnvironmentalStats = () => {
    const metrics = [
        { label: 'Ahorro CO2', value: '45.2', unit: 'Ton', icon: Leaf, color: 'text-emerald-400', progress: 75 },
        { label: 'Calidad Aire', value: '92', unit: 'AQI', icon: Wind, color: 'text-blue-400', progress: 92 },
        { label: 'Uso Energía', value: '12', unit: 'MWh', icon: Sun, color: 'text-amber-400', progress: 45 },
    ];

    return (
        <div className="grid grid-cols-1 gap-4">
            {metrics.map((m, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <m.icon size={16} className={m.color} />
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{m.label}</span>
                        </div>
                        <div className="text-right">
                            <span className="text-lg font-extrabold text-white">{m.value}</span>
                            <span className="text-[10px] ml-1 text-slate-500 font-bold uppercase">{m.unit}</span>
                        </div>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${m.progress}%` }}
                            transition={{ duration: 1.5, delay: i * 0.2, ease: "circOut" }}
                            className={`h-full bg-gradient-to-r from-slate-500 to-${m.color.split('-')[1]}-500`}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EnvironmentalStats;
