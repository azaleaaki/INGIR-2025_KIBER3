// src/components/UI/MetricCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { getIconByName } from '../utils/iconHelper'; // Импортируем утилиту для иконок

// Компонент принимает объект metric и индекс для анимации
const MetricCard = ({ metric, index }) => {
  // Получаем компонент иконки по её имени
  const IconComponent = getIconByName(metric.icon);

  return (
    // motion.div добавляет анимацию при входе и при наведении
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Начальное состояние: прозрачный, чуть ниже
      animate={{ opacity: 1, y: 0 }}   // Анимация появления
      transition={{ delay: index * 0.1 }} // Задержка для каждой карточки
      whileHover={{ scale: 1.05, y: -5 }} // Анимация при наведении
      className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300 group"
    >
      {/* Контейнер для иконки с градиентным фоном */}
      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        {/* Рендерим иконку, полученную из утилиты */}
        <IconComponent className="w-8 h-8 text-white" />
      </div>
      {/* Название метрики */}
      <h3 className="text-lg font-semibold mb-2 text-white">{metric.label}</h3>
      {/* Значение метрики (например, '12,500+', '24/7') */}
      <p className="text-2xl font-bold text-blue-400 mb-2">{metric.data}</p>
      {/* Описание метрики */}
      <p className="text-sm text-gray-400">{metric.description}</p>
    </motion.div>
  );
};
ы
export default MetricCard;