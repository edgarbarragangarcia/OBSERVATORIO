import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, Info, Clock } from 'lucide-react';

const AlertsPanel = () => {
    const alerts = [
        { id: 1, type: 'warning', title: 'Retraso Línea 4', time: 'Hace 5 min', message: 'Mantenimiento preventivo en estación Central.', priority: 'high' },
        { id: 2, type: 'info', title: 'Nueva Ruta Híbrida', time: 'Hace 15 min', message: 'Se incorpora la ruta H-202 al corredor norte.', priority: 'medium' },
        { id: 3, type: 'success', title: 'Sistema Operativo', time: 'Hace 1 hora', message: 'Todas las estaciones reportan flujo normal.', priority: 'low' },
    ];

    const getIcon = (type) => {
        switch (type) {
            case 'warning': return <AlertTriangle className="text-rose-400" size={18} />;
            case 'success': return <CheckCircle className="text-emerald-400" size={18} />;
            default: return <Info className="text-blue-400" size={18} />;
        }
    };

    return (
        <div className="flex flex-col gap-4">
            <AnimatePresence>
                {alerts.map((alert, i) => (
                    <motion.div
                        key={alert.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: i * 0.1 }}
                        className="group relative flex gap-4 p-4 rounded-xl glass border border-white/5 hover:bg-white/5 transition-colors cursor-pointer"
                    >
                        <div className="flex-shrink-0 mt-1">
                            {getIcon(alert.type)}
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                                <h3 className="text-sm font-bold text-white truncate group-hover:text-emerald-400 transition-colors uppercase tracking-tight">
                                    {alert.title}
                                </h3>
                                <span className="text-[10px] text-slate-500 font-bold flex items-center gap-1">
                                    <Clock size={10} />
                                    {alert.time}
                                </span>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                                {alert.message}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default AlertsPanel;
