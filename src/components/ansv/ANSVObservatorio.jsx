import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutGrid, Shield, Map, Box, Landmark,
    Search, Bell, Menu, X, Download, ShieldAlert,
    Crosshair, Cpu, Fingerprint, Compass, Eye, ChevronRight,
    Lock, User
} from 'lucide-react';
import IntelligenceGrid from './IntelligenceGrid';
import PoliceDashboard from './PoliceDashboard';
import MilitaryDashboard from './MilitaryDashboard';
import LogisticsDashboard from './LogisticsDashboard';

const ONATCAHub = () => {
    const [activeModule, setActiveModule] = useState('main');
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const agencies = [
        { id: 'main', name: 'Centro de Mando', icon: Crosshair, color: 'slate' },
        { id: 'police', name: 'Policía de Tránsito', icon: Shield, color: 'slate' },
        { id: 'dijin', name: 'DIJIN - Automotores', icon: Fingerprint, color: 'slate' },
        { id: 'army', name: 'Ejército / Seguridad', icon: Compass, color: 'slate' },
        { id: 'cargo', name: 'Logística de Carga', icon: Box, color: 'slate' },
        { id: 'data', name: 'Data Interagencial', icon: Cpu, color: 'slate' },
    ];

    const renderContent = () => {
        switch (activeModule) {
            case 'main': return <IntelligenceGrid onNavigate={setActiveModule} />;
            case 'police': return <PoliceDashboard />;
            case 'army': return <MilitaryDashboard />;
            case 'cargo': return <LogisticsDashboard />;
            default: return <IntelligenceGrid onNavigate={setActiveModule} />;
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0f1c] text-slate-300 font-sans selection:bg-slate-500/30 overflow-hidden flex">
            {/* Sobrio Sidebar */}
            <aside
                className={`flex-shrink-0 border-r border-slate-800/50 bg-[#0d1321] transition-all duration-300 z-50 flex flex-col
                ${isSidebarOpen ? 'w-64' : 'w-20'}`}
            >
                <div className="p-8 flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center flex-shrink-0 border border-slate-700">
                        <Lock className="text-slate-400 w-5 h-5" strokeWidth={1.5} />
                    </div>
                    {isSidebarOpen && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="overflow-hidden">
                            <h2 className="font-bold text-base tracking-tight text-white uppercase italic">ONATCA</h2>
                        </motion.div>
                    )}
                </div>

                <nav className="flex-1 px-4 py-4 flex flex-col gap-1">
                    {agencies.map((m) => (
                        <button
                            key={m.id}
                            onClick={() => setActiveModule(m.id)}
                            className={`flex items-center gap-4 p-3 rounded transition-all duration-150 group relative
                                ${activeModule === m.id ? 'bg-slate-800 text-white border-l-2 border-slate-400' : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/30'}`}
                        >
                            <m.icon className={`w-5 h-5 ${activeModule === m.id ? 'text-white' : 'text-slate-600'}`} strokeWidth={1.5} />
                            {isSidebarOpen && (
                                <span className="text-xs font-semibold uppercase tracking-wide">{m.name}</span>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="p-6 mt-auto border-t border-slate-800">
                    <div className="flex items-center gap-3 px-2 mb-6">
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                            <User className="w-4 h-4 text-slate-400" />
                        </div>
                        {isSidebarOpen && (
                            <div className="overflow-hidden">
                                <p className="text-[10px] font-bold text-white uppercase truncate">Oficial de Enlace</p>
                                <p className="text-[9px] text-slate-500 uppercase">Estado: Activo</p>
                            </div>
                        )}
                    </div>
                    <button
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                        className="w-full flex items-center justify-center p-2 rounded bg-slate-800/50 hover:bg-slate-800 transition-colors text-slate-500"
                    >
                        {isSidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 h-screen overflow-y-auto bg-[#0a0f1c] relative scroll-smooth">
                {/* Clean Header */}
                <header className="sticky top-0 z-40 px-10 py-6 flex items-center justify-between backdrop-blur-md border-b border-slate-800/50">
                    <div>
                        <h1 className="text-xs font-black text-slate-500 flex items-center gap-3 uppercase tracking-[0.2em]">
                            {agencies.find(m => m.id === activeModule)?.name}
                            <span className="text-slate-800">/</span>
                            <span className="text-white">Terminal Operativa</span>
                        </h1>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="hidden lg:flex items-center gap-8 text-slate-600 font-mono text-[10px] font-bold">
                            <div className="flex items-center gap-2">
                                <span className="underline decoration-slate-800 underline-offset-4 tracking-tighter">ENLACE: ESTABLE</span>
                                <div className="flex items-end gap-[2px] h-3">
                                    {[0.4, 0.7, 0.5, 0.9].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{ height: [`${h * 100}%`, `${(h + 0.1) * 100}%`, `${h * 100}%`] }}
                                            transition={{ repeat: Infinity, duration: 1 + i * 0.2 }}
                                            className="w-1 bg-slate-600 rounded-sm"
                                        />
                                    ))}
                                </div>
                            </div>
                            <span className="flex items-center gap-2">DB-SYNC: OK</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="p-2 text-slate-500 hover:text-white transition-colors">
                                <Search className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-slate-500 hover:text-white transition-colors relative">
                                <Bell className="w-4 h-4" />
                                <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse" />
                            </button>
                            <div className="h-6 w-[1px] bg-slate-800 mx-2" />
                            <button className="flex items-center gap-2 px-6 py-2 bg-[#1a1f2e] hover:bg-slate-700 border border-slate-700 text-white text-[10px] font-bold tracking-widest uppercase transition-all">
                                Salir del Sistema
                            </button>
                        </div>
                    </div>
                </header>

                <div className="p-12 max-w-7xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeModule}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {renderContent()}
                        </motion.div>
                    </AnimatePresence>
                </div>

                <footer className="mt-20 border-t border-slate-900 p-12 text-center">
                    <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.3em]">
                        Seguridad de datos e inteligencia interinstitucional - 2026
                    </p>
                </footer>
            </main>
        </div>
    );
};

export default ONATCAHub;
