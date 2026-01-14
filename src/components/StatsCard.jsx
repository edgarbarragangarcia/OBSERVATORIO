import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, trend, trendValue, color }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="glass-card"
        >
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-gray-400 text-sm font-medium">{title}</p>
                    <h3 className="text-2xl font-bold mt-1 text-white">{value}</h3>

                    <div className="flex items-center mt-2">
                        {trend === 'up' ? (
                            <TrendingUp className="w-4 h-4 text-emerald-400 mr-1" />
                        ) : (
                            <TrendingDown className="w-4 h-4 text-rose-400 mr-1" />
                        )}
                        <span className={`text-xs font-semibold ${trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {trendValue}
                        </span>
                        <span className="text-gray-500 text-xs ml-2">vs último mes</span>
                    </div>
                </div>

                <div className={`p-3 rounded-xl bg-opacity-10 ${color}`}>
                    <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
                </div>
            </div>
        </motion.div>
    );
};

export default StatsCard;
