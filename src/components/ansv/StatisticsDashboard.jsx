import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Users, Activity, ShieldIcon, Calendar, Filter,
    Download, Maximize2, Share2, Info, ChevronRight,
    TrendingUp, TrendingDown, Clock, MousePointer2
} from 'lucide-react';
import {
    DailyTripsChart, RouteDistributionChart, IntelligenceChart, SafetyGoalChart
} from '../TransportCharts';

const StatisticsDashboard = () => {
    const [selectedTab, setSelectedTab] = useState('siniestralidad');

    const tabs = [
        { id: 'siniestralidad', label: 'Siniestralidad', icon: Activity },
        { id: 'actores', label: 'Actores Vulnerables', icon: Users },
        { id: 'comportamiento', label: 'Comportamiento', icon: ShieldIcon },
        { id: 'gestion', label: 'Gestión Territorial', icon: Filter },
    ];

    const stats = [
        { label: 'Víctimas Fatales', val: '2,840', trend: '+2.4%', up: true, col: 'rose' },
        { label: 'Lesionados', val: '12,500', trend: '-8.1%', up: false, col: 'amber' },
        { label: 'Siniestros', val: '45,230', trend: '-1.5%', up: false, col: 'blue' },
        { label: 'Indice Fatalidad', val: '12.4', trend: '+0.5%', up: true, col: 'indigo' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Context Navigation */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 overflow-x-auto pb-4 md:pb-0">
                <div className="flex gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/10">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedTab(tab.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all whitespace-nowrap
                                ${selectedTab === tab.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' : 'text-slate-500 hover:text-slate-300 hover:bg-white/5'}`}
                        >
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold text-slate-400 border border-white/5 transition-all">
                        <Calendar className="w-4 h-4" />
                        AÑO 2024
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 rounded-xl text-xs font-bold border border-emerald-500/20 transition-all">
                        <Download className="w-4 h-4" />
                        DATOS BRUTOS
                    </button>
                </div>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((s, i) => (
                    <div key={i} className="glass p-6 border border-white/5 relative group overflow-hidden">
                        <div className={`absolute -right-4 -top-4 w-12 h-12 bg-${s.col}-500/10 rounded-full blur-xl`} />
                        <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest block mb-2">{s.label}</span>
                        <div className="flex items-end gap-3">
                            <span className="text-3xl font-black text-white leading-none">{s.val}</span>
                            <div className={`flex items-center gap-1 text-[10px] font-black pb-1 ${s.up ? 'text-rose-400' : 'text-emerald-400'}`}>
                                {s.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                {s.trend}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Dashboard Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Panel - Primary Chart */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="glass p-8 border border-white/5 relative">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h3 className="text-xl font-bold text-white">Víctimas Fatales por Mes</h3>
                                <p className="text-sm text-slate-500 mt-1">Comparativo histórico vs meta nacional</p>
                            </div>
                            <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg">
                                <button className="p-1.5 hover:bg-white/10 rounded text-slate-400" title="Expandir"><Maximize2 className="w-4 h-4" /></button>
                                <button className="p-1.5 hover:bg-white/10 rounded text-slate-400" title="Compartir"><Share2 className="w-4 h-4" /></button>
                            </div>
                        </div>
                        <DailyTripsChart />

                        <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Actores Críticos</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    <span className="text-sm font-bold text-slate-300">Motociclistas (62%)</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Horarios Pico</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-violet-500" />
                                    <span className="text-sm font-bold text-slate-300">18:00 - 20:00</span>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Factor Causal</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span className="text-sm font-bold text-slate-300">Exceso de Velocidad</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="glass p-8 border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <ShieldIcon className="w-5 h-5 text-blue-400" />
                                Metas de Seguridad 2030
                            </h3>
                            <SafetyGoalChart />
                        </div>
                        <div className="glass p-8 border border-white/5">
                            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                                <Activity className="w-5 h-5 text-violet-400" />
                                Análisis Predictivo
                            </h3>
                            <IntelligenceChart />
                        </div>
                    </div>
                </div>

                {/* Right Panel - Context & Secondary Metrics */}
                <div className="space-y-8">
                    <div className="glass p-8 border border-white/5 bg-gradient-to-br from-blue-500/5 to-transparent">
                        <h3 className="text-lg font-bold text-white mb-6">Distribución Territorial</h3>
                        <RouteDistributionChart />
                        <button className="w-full mt-6 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold text-blue-400 transition-all group">
                            Vea Mapa Detallado
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    <div className="glass p-8 border border-white/5">
                        <h3 className="text-lg font-bold text-white mb-6">Alertas Estratégicas</h3>
                        <div className="space-y-4">
                            {[
                                { title: 'Puntos Críticos', desc: 'Incremento del 12% en la vía Bogotá-Tunja.', type: 'critical' },
                                { title: 'Temporada de Lluvias', desc: 'Protocolo de reducción de velocidad activo.', type: 'warning' },
                                { title: 'Cumplimiento', desc: 'El 85% de municipios han reportado datos.', type: 'info' }
                            ].map((alert, i) => (
                                <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all cursor-default group">
                                    <div className="flex items-center justify-between mb-1">
                                        <h4 className="text-sm font-bold text-slate-300">{alert.title}</h4>
                                        <div className={`w-2 h-2 rounded-full ${alert.type === 'critical' ? 'bg-rose-500 animate-pulse' : alert.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                                    </div>
                                    <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">{alert.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsDashboard;
