import React from 'react';
import { motion } from 'framer-motion';
import { Box, Navigation, ShieldCheck, Zap, Package, MapPin, Truck } from 'lucide-react';

const LogisticsDashboard = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
        <div className="bg-[#0d1321] p-24 border border-slate-800 text-center flex flex-col items-center justify-center min-h-[500px] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
                <Box className="w-96 h-96 text-white" strokeWidth={0.5} />
            </div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10"
            >
                <div className="w-20 h-20 border border-slate-700 flex items-center justify-center mx-auto mb-10">
                    <Box className="w-10 h-10 text-slate-500" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl font-black text-white uppercase tracking-[0.3em] mb-4 italic">Seguridad de Carga</h2>
                <p className="text-slate-600 max-w-sm font-bold text-xs uppercase tracking-widest leading-relaxed mx-auto">
                    Gestión de riesgos en transporte masivo. Correlación de rutas seguras y prevención de siniestralidad criminal.
                </p>
            </motion.div>

            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-1 w-full max-w-5xl">
                {['Rutas Seguras', 'Control de Flotas', 'Precios de Riesgo', 'Integridad'].map(t => (
                    <div key={t} className="p-8 bg-[#111827] border border-slate-800 hover:border-slate-600 transition-all cursor-pointer group">
                        <span className="text-[10px] font-black text-slate-700 group-hover:text-slate-400 uppercase tracking-widest transition-colors">{t}</span>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default LogisticsDashboard;
