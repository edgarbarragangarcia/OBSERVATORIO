import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';

const dailyData = [
    { time: '05:00', trips: 450, metro: 300, bus: 150 },
    { time: '08:00', trips: 2800, metro: 1800, bus: 1000 },
    { time: '12:00', trips: 1500, metro: 900, bus: 600 },
    { time: '17:00', trips: 3200, metro: 2100, bus: 1100 },
    { time: '21:00', trips: 1200, metro: 800, bus: 400 },
    { time: '00:00', trips: 200, metro: 150, bus: 50 },
];

const sustainabilityData = [
    { name: 'Eléctrico', value: 45, color: '#10b981' },
    { name: 'Híbrido', value: 30, color: '#3b82f6' },
    { name: 'Diesel Euro VI', value: 25, color: '#6366f1' },
];

const routeData = [
    { name: 'Troncal 1', value: 4000 },
    { name: 'Troncal 2', value: 3000 },
    { name: 'Alimentador N', value: 2000 },
    { name: 'Alimentador S', value: 2780 },
    { name: 'Cable aéreo', value: 1890 },
];

export const DailyTripsChart = () => (
    <div className="h-[300px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dailyData}>
                <defs>
                    <linearGradient id="colorTrips" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#10b981' }}
                />
                <Area
                    type="monotone"
                    dataKey="trips"
                    stroke="#10b981"
                    fillOpacity={1}
                    fill="url(#colorTrips)"
                    strokeWidth={3}
                />
            </AreaChart>
        </ResponsiveContainer>
    </div>
);

export const SustainabilityChart = () => (
    <div className="h-[300px] w-full mt-4 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    data={sustainabilityData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                >
                    {sustainabilityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
        <div className="absolute flex flex-col items-center">
            <span className="text-2xl font-bold">75%</span>
            <span className="text-xs text-gray-400">Limpio</span>
        </div>
    </div>
);

export const RouteDistributionChart = () => (
    <div className="h-[300px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={routeData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" horizontal={false} />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} width={100} />
                <Tooltip
                    cursor={{ fill: '#ffffff05' }}
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '12px', backdropFilter: 'blur(8px)' }}
                />
                <Bar dataKey="value" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
        </ResponsiveContainer>
    </div>
);

export const IntelligenceChart = () => (
    <div className="h-[200px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={dailyData}>
                <defs>
                    <linearGradient id="colorIntelligence" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Area type="step" dataKey="metro" stroke="#3b82f6" fill="url(#colorIntelligence)" strokeWidth={2} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '12px' }} />
            </AreaChart>
        </ResponsiveContainer>
    </div>
);

export const SafetyGoalChart = () => (
    <div className="h-[200px] w-full mt-4">
        <div className="flex flex-col gap-4">
            {[
                { label: 'Seguridad Vial', val: 98, color: '#10b981' },
                { label: 'Tiempo de Respuesta', val: 85, color: '#3b82f6' },
                { label: 'Mant. Preventivo', val: 92, color: '#8b5cf6' }
            ].map((item, i) => (
                <div key={i} className="space-y-2">
                    <div className="flex justify-between text-xs font-bold text-slate-400">
                        <span>{item.label}</span>
                        <span>{item.val}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{ width: `${item.val}%`, backgroundColor: item.color }}
                        />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

