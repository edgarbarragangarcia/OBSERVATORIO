import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen, FileText, Download, Calendar,
    Search, Filter, ChevronRight, Bookmark,
    ArrowUpRight, Clock, User, Share2
} from 'lucide-react';

const PublicationsDashboard = () => {
    const [filter, setFilter] = useState('all');

    const categories = [
        { id: 'all', label: 'Todos' },
        { id: 'boletin', label: 'Boletines' },
        { id: 'estudio', label: 'Estudios Técnicos' },
        { id: 'investigacion', label: 'Investigación' },
        { id: 'normativa', label: 'Normativa' },
    ];

    const publications = [
        {
            title: 'Boletín Estadístico de Siniestralidad Vial - Diciembre 2023',
            desc: 'Análisis detallado de víctimas y causas en el último mes del año.',
            cat: 'boletin',
            date: '10 Ene 2024',
            pages: 42,
            author: 'ONSV',
            color: 'blue'
        },
        {
            title: 'Estudio de Comportamiento: Uso de Casco en Motociclistas',
            desc: 'Evaluación del cumplimiento de normativas en las 10 principales ciudades.',
            cat: 'estudio',
            date: '05 Ene 2024',
            pages: 128,
            author: 'Unidad de Investigación',
            color: 'violet'
        },
        {
            title: 'Análisis Multicausal de Siniestros en Vías Nacionales',
            desc: 'Investigación técnica sobre factores de infraestructura y humanos.',
            cat: 'investigacion',
            date: '28 Dic 2023',
            pages: 85,
            author: 'Ingeniería Vial',
            color: 'emerald'
        },
        {
            title: 'Guía Metodológica para Observatorios Territoriales',
            desc: 'Marco de referencia para la recolección y análisis de datos locales.',
            cat: 'normativa',
            date: '15 Dic 2023',
            pages: 60,
            author: 'Dirección ANSV',
            color: 'amber'
        }
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Context Actions */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex bg-white/5 p-1 rounded-2xl border border-white/10 w-full md:w-auto overflow-x-auto">
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap
                                ${filter === cat.id ? 'bg-blue-600 text-white' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3 w-full md:w-auto">
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <input
                            type="text"
                            placeholder="Buscar en el repositorio..."
                            className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                        />
                    </div>
                    <button className="p-2.5 glass border border-white/10 text-slate-400 hover:text-white transition-all">
                        <Filter className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Featured Publication */}
            <section className="glass p-8 border border-white/10 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none" />
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    <div className="w-48 h-64 bg-slate-800 rounded-lg shadow-2xl flex-shrink-0 relative group-hover:-rotate-2 transition-transform duration-500 overflow-hidden border border-white/10">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-violet-600/40" />
                        <div className="absolute inset-0 p-4 border-2 border-white/10 rounded-lg m-2 flex flex-col justify-between">
                            <h4 className="text-[10px] font-black uppercase text-white tracking-widest leading-tight">Agencia Nacional de Seguridad Vial</h4>
                            <div className="h-1 w-full bg-white/20 rounded" />
                        </div>
                        <FileText className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 text-white/10" />
                    </div>

                    <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-[10px] font-black rounded uppercase border border-amber-500/30">Destacado</span>
                            <span className="text-xs text-slate-500 flex items-center gap-1"><Calendar className="w-3 h-3" /> Enero 2024</span>
                        </div>
                        <h2 className="text-3xl font-extrabold text-white leading-tight">Anuario Nacional de Siniestralidad Vial 2023</h2>
                        <p className="text-slate-400 max-w-2xl font-medium leading-relaxed">
                            Resumen integral del estado de la seguridad vial de Colombia durante el año 2023. Incluye análisis detallado por regiones, actores viales y factores contribuyentes.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-white transition-all shadow-lg shadow-blue-600/25">
                                <Download className="w-4 h-4" />
                                DESCARGAR PDF (15MB)
                            </button>
                            <button className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold text-slate-300 border border-white/5 transition-all">
                                <BookOpen className="w-4 h-4" />
                                LECTURA ONLINE
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {publications.filter(p => filter === 'all' || p.cat === filter).map((pub, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="glass p-6 border border-white/5 hover:border-white/10 transition-all flex gap-6 group"
                    >
                        <div className={`w-24 h-32 bg-${pub.color}-500/10 rounded-lg flex-shrink-0 flex items-center justify-center border border-${pub.color}-500/20 group-hover:bg-${pub.color}-500/20 transition-all`}>
                            <FileText className={`w-8 h-8 text-${pub.color}-400`} />
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                            <div>
                                <div className="flex justify-between items-start mb-2">
                                    <span className={`text-[10px] font-black uppercase tracking-widest text-${pub.color}-400`}>{pub.cat}</span>
                                    <div className="flex gap-2">
                                        <button className="text-slate-600 hover:text-blue-400 transition-colors"><Bookmark className="w-4 h-4" /></button>
                                        <button className="text-slate-600 hover:text-blue-400 transition-colors"><Share2 className="w-4 h-4" /></button>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-white line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors">{pub.title}</h3>
                                <p className="text-xs text-slate-500 mt-2 line-clamp-2 font-medium">{pub.desc}</p>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {pub.date}</span>
                                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {pub.author}</span>
                                <span>{pub.pages} PÁG.</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center pt-8">
                <button className="flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold text-slate-400 border border-white/10 transition-all group">
                    VER REPOSITORIO COMPLETO (+500 Docs)
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </button>
            </div>
        </div>
    );
};

export default PublicationsDashboard;
