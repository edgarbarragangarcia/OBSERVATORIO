import React from 'react';
import { motion } from 'framer-motion';
import {
    Bus, Train, MapPin, Users, Zap, Clock,
    Menu, Bell, Settings, Search, LayoutDashboard,
    Navigation, Share2, Download, Leaf
} from 'lucide-react';
import StatsCard from './StatsCard';
import {
    DailyTripsChart,
    SustainabilityChart,
    RouteDistributionChart,
    IntelligenceChart,
    SafetyGoalChart
} from './TransportCharts';
import LiveMap from './LiveMap';
import EnvironmentalStats from './EnvironmentalStats';
import AlertsPanel from './AlertsPanel';


// SVG Icon component
const Timeline = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20" /><path d="M7 12v-5" /><path d="M12 12v-9" /><path d="M17 12v-7" /><path d="M2 17h20" /><path d="M7 17v-2" /><path d="M12 17v-4" /><path d="M17 17v-3" /></svg>
);

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-emerald-500/30">
            {/* Sidebar - Desktop Only for now */}
            <aside className="fixed left-0 top-0 h-full w-20 flex flex-col items-center py-8 glass border-r border-white/5 z-50">
                <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center mb-12 shadow-lg shadow-emerald-500/20">
                    <Bus className="text-white w-7 h-7" />
                </div>

                <nav className="flex flex-col gap-8 flex-1">
                    <button className="p-3 text-emerald-400 bg-emerald-400/10 rounded-xl"><LayoutDashboard /></button>
                    <button className="p-3 text-slate-500 hover:text-slate-300 transition-colors"><Navigation /></button>
                    <button className="p-3 text-slate-500 hover:text-slate-300 transition-colors"><Users /></button>
                    <button className="p-3 text-slate-500 hover:text-slate-300 transition-colors"><Clock /></button>
                </nav>

                <button className="p-3 text-slate-500 hover:text-slate-300 transition-colors mt-auto"><Settings /></button>
            </aside>

            <main className="ml-20 p-8">
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400"
                        >
                            Observatorio de Transporte MOU
                        </motion.h1>
                        <p className="text-slate-400 mt-1 font-medium">Panel de Control Inteligente - Movilidad Sostenible</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Buscar ruta o estación..."
                                className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 w-64 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:bg-white/10 transition-all font-medium placeholder:text-slate-600"
                            />
                        </div>
                        <button className="p-2.5 glass relative hover:bg-white/10 transition-colors"><Bell className="w-5 h-5" /><span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-[#020617]"></span></button>
                    </div>
                </header>

                {/* Stats Grid */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatsCard
                        title="Usuarios Hoy"
                        value="124,532"
                        icon={Users}
                        trend="up"
                        trendValue="+12%"
                        color="bg-emerald-500"
                    />
                    <StatsCard
                        title="Flota en Servicio"
                        value="1,420"
                        icon={Bus}
                        trend="up"
                        trendValue="+3.2%"
                        color="bg-blue-500"
                    />
                    <StatsCard
                        title="Eficiencia Energética"
                        value="94.2%"
                        icon={Zap}
                        trend="up"
                        trendValue="+8%"
                        color="bg-amber-500"
                    />
                    <StatsCard
                        title="Tiempo Promedio de Espera"
                        value="4.5 min"
                        icon={Clock}
                        trend="down"
                        trendValue="-15%"
                        color="bg-violet-500"
                    />
                </section>

                {/* Charts Grid */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 glass p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold flex items-center gap-2">
                                <Timeline className="w-5 h-5 text-emerald-400" />
                                Flujo de Pasajeros por Hora
                            </h2>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 text-xs font-semibold rounded-lg bg-emerald-500/10 text-emerald-400">Hoy</button>
                                <button className="px-3 py-1 text-xs font-semibold rounded-lg hover:bg-white/5 text-slate-500 transition-colors">Semana</button>
                            </div>
                        </div>
                        <DailyTripsChart />
                    </div>

                    <div className="glass p-6">
                        <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                            <Zap className="w-5 h-5 text-blue-400" />
                            Sostenibilidad de Flota
                        </h2>
                        <SustainabilityChart />
                        <div className="mt-6 flex justify-between px-4">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                <span className="text-xs text-slate-400">Eléctricos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                <span className="text-xs text-slate-400">Híbridos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                                <span className="text-xs text-slate-400">Euro VI</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-1 glass p-6">
                        <h2 className="text-lg font-bold flex items-center gap-2 mb-4">
                            <Train className="w-5 h-5 text-violet-400" />
                            Rutas con Mayor Demanda
                        </h2>
                        <RouteDistributionChart />
                    </div>

                    {/* NEW SECTION: Live Map & Alerts */}
                    <div className="lg:col-span-2 glass p-6 overflow-hidden">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold flex items-center gap-2">
                                <MapPin className="w-5 h-5 text-emerald-400" />
                                Monitoreo en Tiempo Real
                            </h2>
                            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest px-2 py-1 bg-emerald-400/10 rounded-full border border-emerald-400/20">
                                42 Unidades Activas
                            </div>
                        </div>
                        <LiveMap />
                    </div>

                    <div className="glass p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold flex items-center gap-2">
                                <Bell className="w-5 h-5 text-rose-400" />
                                Alertas de Servicio
                            </h2>
                        </div>
                        <AlertsPanel />
                    </div>

                    <div className="glass p-6 bg-gradient-to-br from-blue-500/5 to-transparent">
                        <h2 className="text-lg font-bold flex items-center gap-2 mb-6">
                            <Leaf className="w-5 h-5 text-emerald-400" />
                            Impacto Ambiental
                        </h2>
                        <EnvironmentalStats />
                    </div>

                    <div className="lg:col-span-2 glass p-6 bg-gradient-to-br from-emerald-500/5 to-transparent">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-lg font-bold">Resumen Operativo</h2>
                                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mt-1">Status en tiempo real</p>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-medium transition-all group">
                                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                                Exportar Reporte
                            </button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: 'CO2 Ahorrado', val: '450 Ton', color: 'emerald' },
                                { label: 'Incidentes', val: '0', color: 'slate' },
                                { label: 'Kms Recorridos', val: '12,840', color: 'blue' },
                                { label: 'Satis. Usuario', val: '4.8/5', color: 'amber' }
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col">
                                    <span className="text-slate-500 text-xs font-bold uppercase mb-1">{item.label}</span>
                                    <span className="text-xl font-extrabold text-white">{item.val}</span>
                                    <div className={`h-1 w-full bg-${item.color}-500/20 rounded-full mt-2 overflow-hidden`}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: '70%' }}
                                            transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                                            className={`h-full bg-${item.color}-500`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};


export default Dashboard;
