import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Shield, MapPin, Target, Activity,
    Users, AlertTriangle, Crosshair, ArrowUpRight,
    Search, Filter, Zap, RefreshCw
} from 'lucide-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const PoliceDashboard = () => {
    const [liveData, setLiveData] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [activeDeployments, setActiveDeployments] = useState(8);

    // Simulate live data generation
    useEffect(() => {
        const generateInitialData = () => {
            const data = [];
            for (let i = 0; i < 20; i++) {
                data.push({
                    time: i,
                    detections: Math.floor(Math.random() * 40) + 10,
                    risks: Math.floor(Math.random() * 20) + 5
                });
            }
            setLiveData(data);
        };
        generateInitialData();

        const interval = setInterval(() => {
            setLiveData(prev => {
                const newData = [...prev.slice(1)];
                newData.push({
                    time: prev[prev.length - 1].time + 1,
                    detections: Math.floor(Math.random() * 40) + 10,
                    risks: Math.floor(Math.random() * 20) + 5
                });
                return newData;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleDeploy = () => {
        setIsProcessing(true);
        setTimeout(() => {
            setIsProcessing(false);
            setActiveDeployments(prev => prev + 1);
        }, 1500);
    };

    const suggestedCheckpoints = [
        { id: 1, location: 'Calle 80 con Av 68', risk: 'ALTO', traffic: '65%', reason: 'HISTÓRICO SINIESTRALIDAD' },
        { id: 2, location: 'Autopista Norte x 170', risk: 'MEDIO', traffic: '40%', reason: 'CORREDOR PRIORITARIO' },
        { id: 3, location: 'Vía al Llano km 12', risk: 'ALTO', traffic: '30%', reason: 'PUNTO DE INTERCEPCIÓN' },
    ];

    return (
        <div className="space-y-12 animate-in fade-in duration-500">
            {/* Mission Critical Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
                {[
                    { label: 'Efectividad', val: '84.2%', icon: Target },
                    { label: 'Vehículos Requeridos', val: '142', icon: AlertTriangle },
                    { label: 'Personal Activo', val: '52', icon: Users },
                    { label: 'Operativos Live', val: activeDeployments.toString().padStart(2, '0'), icon: Shield },
                ].map((s, i) => (
                    <div key={i} className="bg-[#0d1321] p-8 border border-slate-800 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <s.icon className="w-12 h-12 text-slate-400" strokeWidth={1} />
                        </div>
                        <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest block mb-1">{s.label}</span>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-white tracking-tighter">{s.val}</span>
                            {s.label === 'Operativos Live' && isProcessing && (
                                <RefreshCw className="w-4 h-4 text-white animate-spin" />
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                {/* Checkpoint Recommendations */}
                <div className="lg:col-span-2 bg-[#0d1321] border border-slate-800">
                    <div className="p-8 border-b border-slate-800 flex items-center justify-between">
                        <div>
                            <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] flex items-center gap-3">
                                <Crosshair className="w-4 h-4 text-slate-500" strokeWidth={1.5} />
                                Recomendación de Despliegue Operativo
                            </h3>
                        </div>
                        <button
                            onClick={handleDeploy}
                            disabled={isProcessing}
                            className={`px-5 py-2 bg-slate-100 hover:bg-white text-black text-[10px] font-black tracking-widest uppercase transition-all flex items-center gap-2
                                ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isProcessing ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Zap className="w-3 h-3 fill-current" />}
                            {isProcessing ? 'PROCESANDO...' : 'Emitir Orden'}
                        </button>
                    </div>

                    <div className="divide-y divide-slate-800">
                        {suggestedCheckpoints.map((cp, i) => (
                            <div key={cp.id} className="p-8 flex items-center justify-between hover:bg-slate-800/20 transition-all group">
                                <div className="flex items-center gap-8">
                                    <div className="text-[10px] font-black text-white p-2 border border-slate-700 w-10 h-10 flex items-center justify-center">
                                        <MapPin className="w-4 h-4 text-slate-500" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm tracking-wide uppercase">{cp.location}</h4>
                                        <p className="text-[9px] text-slate-600 font-black uppercase mt-1 tracking-widest">{cp.reason}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-12">
                                    <div className="hidden md:block text-right">
                                        <span className="text-[9px] text-slate-700 font-black block uppercase tracking-widest mb-1">Nivel Riesgo</span>
                                        <span className="text-[10px] font-black text-slate-400">{cp.risk}</span>
                                    </div>
                                    <div className="hidden md:block text-right">
                                        <span className="text-[9px] text-slate-700 font-black block uppercase tracking-widest mb-1">Carga Vial</span>
                                        <span className="text-[10px] font-black text-slate-400">{cp.traffic}</span>
                                    </div>
                                    <button className="p-2 border border-transparent group-hover:border-slate-700 transition-all">
                                        <ArrowUpRight className="w-4 h-4 text-slate-700 group-hover:text-slate-300" strokeWidth={1.5} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Real-time Event Stream */}
                <div className="bg-[#0d1321] border border-slate-800 flex flex-col">
                    <div className="p-8 border-b border-slate-800">
                        <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em] flex items-center gap-3 italic">
                            <Activity className="w-4 h-4 text-slate-500" strokeWidth={1.5} />
                            Stream de Inteligencia
                        </h3>
                    </div>
                    <div className="p-8 space-y-8 flex-1 overflow-hidden">
                        <AnimatePresence>
                            {liveData.slice(-4).map((data, i) => (
                                <motion.div
                                    key={data.time}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="flex gap-4 border-l border-slate-800 pl-4 py-2"
                                >
                                    <span className="text-[9px] font-mono text-slate-700">{new Date().toLocaleTimeString()}</span>
                                    <div className="flex-1">
                                        <p className="text-[10px] font-bold text-slate-500 leading-relaxed uppercase tracking-wide">
                                            Detección de flujo en zona {data.time}: {data.detections} unidades registradas.
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                    <div className="p-8 border-t border-slate-800 bg-[#0a0f1c]/50">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest text-white">Probabilidad Hurto</span>
                            <span className="text-[10px] font-mono text-slate-400">8.4%</span>
                        </div>
                        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                animate={{ width: ['20%', '45%', '30%', '60%'] }}
                                transition={{ repeat: Infinity, duration: 4 }}
                                className="h-full bg-slate-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Analysis Chart - Live Area Chart */}
            <div className="bg-[#0d1321] border border-slate-800 p-10">
                <div className="flex items-center justify-between mb-12">
                    <h3 className="text-xs font-black text-white uppercase tracking-[0.2em] italic">Seguimiento de Flujo en Tiempo Real (Live)</h3>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-slate-400" />
                            <span className="text-[10px] text-slate-600 font-bold uppercase">Vehículos</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full border border-slate-600" />
                            <span className="text-[10px] text-slate-600 font-bold uppercase">Riesgo</span>
                        </div>
                    </div>
                </div>

                <div className="h-[350px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={liveData}>
                            <defs>
                                <linearGradient id="colorDetections" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.1} />
                                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                            <XAxis dataKey="time" hide />
                            <YAxis hide domain={[0, 100]} />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#0d1321', border: '1px solid #1e293b', fontSize: '10px' }}
                                itemStyle={{ color: '#94a3b8' }}
                            />
                            <Area
                                type="monotone"
                                dataKey="detections"
                                stroke="#94a3b8"
                                fillOpacity={1}
                                fill="url(#colorDetections)"
                                strokeWidth={2}
                                isAnimationActive={false}
                            />
                            <Area
                                type="monotone"
                                dataKey="risks"
                                stroke="#334155"
                                fill="transparent"
                                strokeWidth={1}
                                strokeDasharray="5 5"
                                isAnimationActive={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default PoliceDashboard;
