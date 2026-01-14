import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield, Fingerprint, Box, Compass, Cpu,
    ChevronRight, Server, Target, Lock, FileText, Crosshair,
    Activity, Globe, Zap, RefreshCw
} from 'lucide-react';

const IntelligenceGrid = ({ onNavigate }) => {
    const [globalRisk, setGlobalRisk] = useState(12.4);
    const [isSyncing, setIsSyncing] = useState(false);
    const [uptime, setUptime] = useState('99.98%');

    // Simulate real-time fluctuations
    useEffect(() => {
        const interval = setInterval(() => {
            setGlobalRisk(prev => {
                const change = (Math.random() - 0.5) * 0.4;
                return parseFloat((prev + change).toFixed(2));
            });
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleSync = () => {
        setIsSyncing(true);
        setTimeout(() => {
            setIsSyncing(false);
            setUptime('100.0%');
            setTimeout(() => setUptime('99.99%'), 5000);
        }, 2000);
    };

    const sectors = [
        {
            id: 'police',
            title: 'Policía de Tránsito',
            desc: 'Información operativa para la optimización de retenes y gestión de operativos preventivos.',
            icon: Shield,
            status: 'CONECTADO',
            metric: '8 OPERATIVOS'
        },
        {
            id: 'dijin',
            title: 'DIJIN Automotores',
            desc: 'Detección de vehículos con reporte de hurto y análisis de patrones de delincuencia vial.',
            icon: Fingerprint,
            status: 'SINCRONIZADO',
            metric: '14 ALERTAS'
        },
        {
            id: 'army',
            title: 'Ejército / Seguridad',
            desc: 'Monitoreo de la red vial nacional para el aseguramiento de corredores estratégicos.',
            icon: Compass,
            status: 'ESTABLE',
            metric: 'CANAL SEGURO'
        },
        {
            id: 'cargo',
            title: 'Logística de Carga',
            desc: 'Analítica de seguridad para el transporte masivo de mercancías y prevención de robos.',
            icon: Box,
            status: 'ACTIVO',
            metric: '452 FLOTAS'
        },
        {
            id: 'inter-agency',
            title: 'Cruce de Datos',
            desc: 'Correlación de múltiples fuentes para la generación de inteligencia predictiva.',
            icon: Cpu,
            status: 'PROCESANDO',
            metric: 'CORE: OK'
        },
        {
            id: 'reports',
            title: 'Informes Técnicos',
            desc: 'Compilación de data estructurada para la toma de decisiones institucionales.',
            icon: FileText,
            status: 'HISTÓRICO',
            metric: '520 ARCHIVOS'
        }
    ];

    return (
        <div className="space-y-12">
            {/* Mission Hero - Dynamic & Professional */}
            <section className="relative h-72 border border-slate-800 bg-[#0d1321] rounded overflow-hidden flex flex-col justify-center px-12 group">
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none flex items-center justify-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                    >
                        <Globe className="w-96 h-96 text-white" strokeWidth={0.5} />
                    </motion.div>
                </div>

                <div className="relative z-10 max-w-3xl">
                    <div className="flex items-center gap-6 mb-8 mt-4">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-slate-500 animate-pulse" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                                Status: Operational
                            </span>
                        </div>
                        <div className="h-4 w-[1px] bg-slate-800" />
                        <div className="flex items-center gap-2">
                            <Activity className="w-3 h-3 text-slate-700" />
                            <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
                                Risk Factor: <span className="text-white font-mono">{globalRisk}%</span>
                            </span>
                        </div>
                    </div>

                    <h2 className="text-4xl font-light text-white tracking-widest uppercase mb-4">
                        ONATCA <span className="font-black">Intelligence Hub</span>
                    </h2>
                    <p className="text-slate-500 text-xs font-medium max-w-xl leading-relaxed uppercase tracking-wider mb-8">
                        Sistema central de sincronización inter-institucional. Monitoreo predictivo y control operativo de la infraestructura de transporte nacional.
                    </p>

                    <button
                        onClick={handleSync}
                        className="flex items-center gap-3 px-8 py-3 bg-[#1a1f2e] border border-slate-700 text-[10px] font-black tracking-[0.2em] text-white hover:bg-slate-800 transition-all uppercase"
                    >
                        {isSyncing ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Zap className="w-4 h-4" />}
                        {isSyncing ? 'Sincronizando Corredores...' : 'Sincronizar Datos Globales'}
                    </button>
                </div>
            </section>

            {/* Metrics - Moving Data Labels */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                {[
                    { label: 'Unidades Trackeadas', val: '1.2M', trend: '+12.4k' },
                    { label: 'Requerimientos 24h', val: '84', trend: '-2' },
                    { label: 'Puntos de Control', val: '12', trend: 'STABLE' },
                    { label: 'Uptime Sistema', val: uptime, trend: '99.9%' }
                ].map((s, i) => (
                    <div key={i} className="bg-[#0d1321] p-8 border border-slate-800 hover:bg-[#111827] transition-all group">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest group-hover:text-slate-400 transition-colors">{s.label}</span>
                            <span className="text-[8px] font-mono text-slate-800 group-hover:text-slate-500">{s.trend}</span>
                        </div>
                        <span className="text-2xl font-bold text-slate-100 tracking-tighter">{s.val}</span>
                        <div className="mt-4 h-[2px] w-full bg-slate-900 overflow-hidden">
                            <motion.div
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{ repeat: Infinity, duration: 3, ease: 'linear', delay: i * 0.5 }}
                                className="h-full w-1/3 bg-slate-700/50"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Grid - Interactive Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                {sectors.map((sector, idx) => (
                    <motion.div
                        key={sector.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        onClick={() => onNavigate(sector.id)}
                        className="group cursor-pointer bg-[#0d1321] p-10 border border-slate-800 hover:border-slate-500 transition-all flex flex-col h-full relative overflow-hidden"
                    >
                        {/* Decorative background grid */}
                        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

                        <div className="flex items-center justify-between mb-12 relative z-10">
                            <div className="w-12 h-12 border border-slate-800 flex items-center justify-center group-hover:border-slate-400 transition-all bg-[#0a0f1c]">
                                <sector.icon className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors" strokeWidth={1.5} />
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-[7px] font-black text-slate-800 uppercase tracking-[0.3em] mb-1">Status</span>
                                <span className={`text-[8px] font-black tracking-widest flex items-center gap-1.5
                                    ${sector.status === 'CONECTADO' || sector.status === 'ACTIVO' ? 'text-slate-400' : 'text-slate-600'}`}>
                                    <span className={`w-1 h-1 rounded-full ${sector.status === 'CONECTADO' || sector.status === 'ACTIVO' ? 'bg-slate-400 animate-pulse' : 'bg-slate-600'}`} />
                                    {sector.status}
                                </span>
                            </div>
                        </div>

                        <h3 className="text-sm font-black text-white mb-4 uppercase tracking-widest relative z-10">{sector.title}</h3>
                        <p className="text-slate-600 text-[11px] font-medium leading-relaxed mb-12 flex-1 relative z-10">
                            {sector.desc}
                        </p>

                        <div className="flex items-center justify-between pt-8 border-t border-slate-900 group-hover:border-slate-800 relative z-10">
                            <div className="flex flex-col">
                                <span className="text-[7px] font-black text-slate-800 uppercase tracking-[0.3em] mb-1">Métrica Clave</span>
                                <span className="text-[9px] font-black text-slate-500 group-hover:text-slate-300 tracking-widest transition-colors">
                                    {sector.metric}
                                </span>
                            </div>
                            <div className="flex items-center gap-2 text-slate-800 group-hover:text-white transition-colors">
                                <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">Acceder</span>
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Simulated Report/Terminal when Syncing */}
            <AnimatePresence>
                {isSyncing && (
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0 }}
                        className="bg-[#050914] border border-slate-800 p-10 font-mono text-[10px] origin-top"
                    >
                        <div className="flex items-center gap-4 mb-2 text-slate-500">
                            <span className="w-2 h-2 rounded-full bg-slate-500 animate-pulse" />
                            <span className="uppercase tracking-[0.2em]">Ejecutando protocolo de sincronización ONATCA...</span>
                        </div>
                        <div className="space-y-1 pl-6">
                            <p className="text-slate-700">{`> [INF] ESTABLECIENDO TÚNEL SEGURO CON DIJIN-DATABASE...`}</p>
                            <p className="text-slate-700">{`> [INF] CRUZANDO 14.5k REPORTES DE ROBO CON FLUJOS VIALES...`}</p>
                            <p className="text-slate-500">{`> [DAT] COINCIDENCIA ENCONTRADA EN CORREDOR NORTE (REF: B-204).`}</p>
                            <p className="text-slate-500">{`> [DAT] ANÁLISIS DE FATIGA EN CONDUCTORES: 4.2% SOBRE EL PROMEDIO.`}</p>
                            <p className="text-slate-300 font-bold uppercase tracking-widest mt-4">{`>>> SINCRONIZACIÓN COMPLETA - INTEGRIDAD: 100%`}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default IntelligenceGrid;
