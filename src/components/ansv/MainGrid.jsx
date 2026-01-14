import React from 'react';
import { motion } from 'framer-motion';
import {
    Activity, Map as MapIcon, BookOpen, Users2, Download, Info,
    ArrowUpRight, Database, Globe2, FileText, ChevronRight
} from 'lucide-react';

const MainGrid = ({ onNavigate }) => {
    const cards = [
        {
            id: 'stats',
            title: 'Estadísticas',
            desc: 'Analítica de siniestralidad, víctimas y factores de riesgo en tiempo real.',
            icon: Activity,
            color: 'blue',
            stats: '12 Dashboards',
            trend: 'Actualizado hoy'
        },
        {
            id: 'geo',
            title: 'Geoportal',
            desc: 'Visualización espacial de puntos críticos y cámaras de seguridad vial.',
            icon: MapIcon,
            color: 'violet',
            stats: '8 Mapas',
            trend: 'Datos 2024'
        },
        {
            id: 'pubs',
            title: 'Publicaciones',
            desc: 'Boletines, estudios técnicos y reportes de investigación estratégica.',
            icon: BookOpen,
            color: 'amber',
            stats: '+200 Docs',
            trend: 'Nuevo reporte'
        },
        {
            id: 'network',
            title: 'Red Observatorios',
            desc: 'Integración con observatorios territoriales y locales a nivel nacional.',
            icon: Users2,
            color: 'rose',
            stats: '32 Sedes',
            trend: 'Conectados'
        },
        {
            id: 'data',
            title: 'Datos Abiertos',
            desc: 'Repositorio para la descarga masiva de datos en formatos interoperables (CSV/JSON).',
            icon: Database,
            color: 'indigo',
            stats: '50 Datasets',
            trend: 'API v2'
        },
        {
            id: 'about',
            title: '¿Qué es el ONSV?',
            desc: 'Conoce los objetivos, misión y normativa detrás del Observatorio Nacional.',
            icon: Info,
            color: 'emerald',
            stats: 'Misión',
            trend: 'Normativa NTC'
        }
    ];

    return (
        <div className="space-y-8">
            {/* Hero Visualization */}
            <section className="relative h-64 rounded-3xl overflow-hidden glass border border-white/5 flex items-center px-10 group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-violet-600/20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10 group-hover:scale-105 transition-transform duration-700" />

                <div className="relative z-10 max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-full border border-blue-500/30 tracking-widest uppercase">
                            Impacto Nacional
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-extrabold text-white leading-tight"
                    >
                        Observatorio Nacional de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Seguridad Vial</span>
                    </motion.h2>
                    <p className="mt-4 text-slate-400 font-medium">
                        Plataforma estratégica para la toma de decisiones basada en datos para salvar vidas en las vías de Colombia.
                    </p>
                </div>

                <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-8">
                    <div className="text-center">
                        <div className="text-3xl font-black text-white">4.2k</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Vidas Salvadas</div>
                    </div>
                    <div className="w-[1px] h-12 bg-white/10" />
                    <div className="text-center">
                        <div className="text-3xl font-black text-blue-400">-12%</div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Siniestralidad</div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cards.map((card, idx) => (
                    <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        whileHover={{ y: -5 }}
                        onClick={() => onNavigate(card.id)}
                        className="group cursor-pointer glass p-8 border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all relative overflow-hidden"
                    >
                        {/* Background Decor */}
                        <div className={`absolute -right-4 -bottom-4 w-24 h-24 bg-${card.color}-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500`} />

                        <div className="relative z-10">
                            <div className={`w-14 h-14 bg-${card.color}-500/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-${card.color}-500 group-hover:text-white transition-all duration-300`}>
                                <card.icon className={`w-7 h-7 text-${card.color}-400 group-hover:text-inherit`} />
                            </div>

                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                                <ArrowUpRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </div>

                            <p className="text-slate-500 text-sm leading-relaxed mb-8">
                                {card.desc}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                                <span className={`text-[10px] font-black uppercase tracking-widest text-${card.color}-400`}>
                                    {card.stats}
                                </span>
                                <span className="text-[10px] font-bold text-slate-600">
                                    {card.trend}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Sub-Actions */}
            <div className="flex flex-wrap gap-4 items-center justify-center pt-8">
                <span className="text-xs text-slate-600 font-bold uppercase tracking-widest">Accesos Rápidos:</span>
                {['Plan 365', 'Matriz de Colisión', 'Cifras 2024', 'Cámaras SalvaVidas', 'Geovisor Nacional'].map(tag => (
                    <button key={tag} className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-400 border border-white/5 transition-all">
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default MainGrid;
