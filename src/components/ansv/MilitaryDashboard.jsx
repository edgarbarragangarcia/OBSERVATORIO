import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Map, Zap, Target, Shield, AlertCircle, Crosshair } from 'lucide-react';

const MilitaryDashboard = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
        <div className="bg-[#0d1321] p-24 border border-slate-800 text-center flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                <Compass className="w-96 h-96 text-white" strokeWidth={0.5} />
            </div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10"
            >
                <div className="w-20 h-20 border border-slate-700 flex items-center justify-center mx-auto mb-10">
                    <Compass className="w-10 h-10 text-slate-500" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-[0.3em] mb-4 italic">Movimientos Estratégicos</h2>
                <p className="text-slate-600 max-w-sm font-bold text-xs uppercase tracking-widest leading-relaxed mx-auto">
                    Monitoreo de fronteras internas y corredores críticos. Análisis de flujo táctico en tiempo real.
                </p>
            </motion.div>

            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-1 w-full max-w-5xl">
                {['Zonas Operativas', 'Corredores A1', 'Logística Mil', 'Alertas G2'].map(t => (
                    <div key={t} className="p-8 bg-[#111827] border border-slate-800 hover:border-slate-600 transition-all cursor-pointer group">
                        <span className="text-[10px] font-black text-slate-700 group-hover:text-slate-400 uppercase tracking-widest transition-colors">{t}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default MilitaryDashboard;
