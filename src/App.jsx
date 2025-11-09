import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  Shield, 
  Activity, 
  Clock, 
  Smartphone, 
  Users, 
  TrendingUp, 
  Zap, 
  ChevronRight,
  Menu,
  X,
  Sun,
  Moon,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Pause
} from 'lucide-react';

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Mock data for the dashboard
  const healthMetrics = {
    activityScore: 87,
    sleepQuality: 92,
    heartHealth: 78,
    stressLevel: 45
  };

  const insuranceData = {
    currentPremium: 12500,
    potentialSavings: 3750,
    coverageLevel: 95,
    nextAdjustment: '2025-12-01'
  };

  const services = [
    { name: 'ИнгоЛаб', icon: Heart, color: 'from-red-500 to-pink-500' },
    { name: 'Телемедицина', icon: Smartphone, color: 'from-blue-500 to-cyan-500' },
    { name: 'ДМС', icon: Users, color: 'from-green-500 to-emerald-500' },
    { name: 'Онкострахование', icon: Shield, color: 'from-purple-500 to-violet-500' },
    { name: 'Ментальное здоровье', icon: Activity, color: 'from-orange-500 to-red-500' },
    { name: 'Международные', icon: TrendingUp, color: 'from-indigo-500 to-purple-500' }
  ];

  const recommendations = [
    'Увеличьте физическую активность на 15% для дополнительной скидки',
    'Пройдите профилактический осмотр для расширения покрытия',
    'Подключите носимое устройство для более точной тарификации'
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDark ? 'bg-gray-900/80 backdrop-blur-xl' : 'bg-white/80 backdrop-blur-xl'
      } border-b ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-red-500 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ИнгоСтрах</span>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-blue-400 transition-colors">Главная</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Продукты</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Кабинет</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Поддержка</a>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-lg transition-colors ${
                  isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
                }`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button 
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-red-500 to-blue-600 bg-clip-text text-transparent"
            >
              Страхование, которое
              <br />
              живет с вами в ритме
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              Динамическое страхование здоровья, адаптирующееся к вашему образу жизни
              и состоянию здоровья в реальном времени
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-600 to-red-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Начать персонализацию
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </motion.button>
          </div>

          {/* 3D Data Flow Visualization */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative bg-gradient-to-r from-gray-800/50 to-blue-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: Smartphone, label: 'Носимые устройства',  '12,500+' },
                { icon: Heart, label: 'Медицинские данные',  '24/7' },
                { icon: Activity, label: 'Поведенческий анализ',  'AI-powered' },
                { icon: Shield, label: 'Динамические премии',  '-30%' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-700/30 to-gray-800/30 border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300"
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                  <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                  <p className="text-2xl font-bold text-blue-400">{item.data}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insurance Hub Dashboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цифровой хаб страхования</h2>
            <p className="text-xl text-gray-400">Ваше здоровье в цифрах, ваша защита в данных</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Dashboard */}
            <div className="lg:col-span-2 space-y-8">
              {/* Health Metrics */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-red-400" />
                  Метрики здоровья
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {Object.entries(healthMetrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500 to-red-500 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">{value}%</span>
                      </div>
                      <p className="text-sm text-gray-400 capitalize">
                        {key === 'activityScore' && 'Активность'}
                        {key === 'sleepQuality' && 'Сон'}
                        {key === 'heartHealth' && 'Сердце'}
                        {key === 'stressLevel' && 'Стресс'}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Insurance Analytics */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-3 text-green-400" />
                  Страховая аналитика
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Текущая премия</span>
                    <span className="text-2xl font-bold text-blue-400">₽{insuranceData.currentPremium.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Потенциальная экономия</span>
                    <span className="text-2xl font-bold text-green-400">-₽{insuranceData.potentialSavings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Уровень покрытия</span>
                    <span className="text-2xl font-bold text-yellow-400">{insuranceData.coverageLevel}%</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Recommendations */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Zap className="w-6 h-6 mr-3 text-yellow-400" />
                  Рекомендации AI
                </h3>
                
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-gray-700/30">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm">{rec}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50"
              >
                <h3 className="text-2xl font-bold mb-6">Быстрые действия</h3>
                
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300">
                    Открыть страховой случай
                  </button>
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300">
                    Загрузить документы
                  </button>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white p-3 rounded-xl hover:shadow-lg transition-all duration-300">
                    AI-ассистент
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Медицинская экосистема</h2>
            <p className="text-xl text-gray-400">Полный спектр медицинских и страховых услуг</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-400">Комплексное решение для вашего здоровья</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Технологический стек</h2>
            <p className="text-xl text-gray-400">Инновации для вашего здоровья</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'AI-тарификация', desc: 'Персонализированные премии' },
              { title: 'Real-time данные', desc: 'Анализ в режиме реального времени' },
              { title: 'Превентивная аналитика', desc: 'Прогнозирование рисков' },
              { title: 'Безопасность данных', desc: 'Защита вашей информации' }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-700/50 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{tech.title}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-4 sm:px-6 lg:px-8 border-t ${
        isDark ? 'border-gray-800' : 'border-gray-200'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-red-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ИнгоСтрах</span>
              </div>
              <p className="text-gray-400">Динамическое страхование для цифрового мира.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукты</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ДМС</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Онко</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ментальное здоровье</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ИнгоСтрах. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
