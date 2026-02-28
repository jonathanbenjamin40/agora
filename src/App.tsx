import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { translations, Language } from './translations';
import { 
  User, 
  Settings, 
  GitBranch, 
  Zap, 
  Cpu, 
  Workflow, 
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Target,
  Users,
  Database,
  Layers,
  BarChart3,
  Globe,
  Briefcase,
  Rocket
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { cn } from './lib/utils';

// --- Types ---
type SlideId = 'intro' | 'engine' | 'collaboration' | 'challenges' | 'tech' | 'workflows';

interface Slide {
  id: SlideId;
  title: string;
  icon: React.ReactNode;
}

// --- Components ---

const Sidebar = ({ activeSlide, setActiveSlide, lang, t }: { 
  activeSlide: SlideId, 
  setActiveSlide: (id: SlideId) => void,
  lang: Language,
  t: any
}) => {
  const slides: Slide[] = [
    { id: 'intro', title: t.intro, icon: <User size={20} /> },
    { id: 'engine', title: t.engine, icon: <Settings size={20} /> },
    { id: 'collaboration', title: t.collaboration, icon: <GitBranch size={20} /> },
    { id: 'challenges', title: t.challenges, icon: <Zap size={20} /> },
    { id: 'tech', title: t.tech, icon: <Cpu size={20} /> },
    { id: 'workflows', title: t.workflows, icon: <Workflow size={20} /> },
  ];

  return (
    <div className={cn(
      "w-64 h-screen bg-white flex flex-col sticky top-0 z-20",
      lang === 'he' ? "border-l border-slate-200" : "border-r border-slate-200"
    )}>
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center gap-3 text-indigo-600 mb-2">
          <Rocket size={24} />
          <span className="font-bold text-xl tracking-tight">{t.portfolioTitle}</span>
        </div>
        <p className="text-xs text-slate-400 font-medium">{t.name} | {t.role}</p>
      </div>
      
      <nav className="flex-1 py-4">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => setActiveSlide(slide.id)}
            className={cn(
              "w-full flex items-center gap-3 px-6 py-4 transition-all duration-200",
              lang === 'he' ? "text-right" : "text-left",
              activeSlide === slide.id 
                ? 'bg-indigo-50 text-indigo-600 font-semibold border-indigo-600' 
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700',
              activeSlide === slide.id && (lang === 'he' ? "border-r-4" : "border-l-4")
            )}
          >
            {slide.icon}
            <span>{slide.title}</span>
          </button>
        ))}
      </nav>

      <div className="p-6 mt-auto border-t border-slate-100">
        <div className="bg-slate-50 rounded-xl p-4 text-xs text-slate-500 leading-relaxed">
          {t.presentationDesc}
        </div>
      </div>
    </div>
  );
};

// --- Slides ---

const IntroSlide = ({ t }: { t: any }) => (
  <div className="slide-container justify-center">
    <div className="max-w-4xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 text-sm font-bold mb-4">
          {t.introTag}
        </span>
        <h1 className="text-6xl font-black text-slate-900 mb-4 leading-tight">{t.name}</h1>
        <p className="text-2xl text-slate-500 max-w-2xl leading-relaxed">
          {t.introDesc}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8"
        >
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Briefcase className="text-indigo-500" size={20} />
            {t.industriesTitle}
          </h3>
          <div className="flex flex-wrap gap-3">
            {['SaaS', 'FinTech', 'CRM', 'ERP', 'Real Estate Tech'].map(item => (
              <span key={item} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg font-medium text-sm">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8"
        >
          <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
            <Target className="text-indigo-500" size={20} />
            {t.expertiseTitle}
          </h3>
          <ul className="space-y-3 text-slate-600 font-medium">
            {t.expertiseItems.map((item: string, i: number) => (
              <li key={i} className="flex items-center gap-2">• {item}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {t.stats.map((stat: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.05 }}
            className="glass-card p-6 text-center"
          >
            <div className="flex justify-center mb-3">
              {i % 4 === 0 && <TrendingUp className="text-emerald-500" />}
              {i % 4 === 1 && <BarChart3 className="text-blue-500" />}
              {i % 4 === 2 && <Zap className="text-amber-500" />}
              {i % 4 === 3 && <Cpu className="text-purple-500" />}
            </div>
            <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const EngineSlide = ({ t }: { t: any }) => {
  return (
    <div className="slide-container">
      <div className="mb-10">
        <h2 className="text-4xl font-black text-slate-900 mb-2">{t.engineTitle}</h2>
        <p className="text-lg text-slate-500 font-medium">{t.engineSubtitle}</p>
      </div>

      <div className="relative flex-1 flex items-center justify-center py-12">
        {/* Central Hub */}
        <div className="absolute z-10 w-48 h-48 rounded-full bg-indigo-600 shadow-2xl shadow-indigo-200 flex flex-col items-center justify-center text-white text-center p-4">
          <Settings size={32} className="mb-2 animate-spin-slow" />
          <div className="font-bold text-xl">CS Engine</div>
          <div className="text-[10px] opacity-80 uppercase tracking-widest">Core Infrastructure</div>
        </div>

        {/* Circular Steps */}
        <div className="relative w-full h-full max-w-4xl max-h-[600px]">
          {t.engineSteps.map((step: any, i: number) => {
            const angle = (i / t.engineSteps.length) * 2 * Math.PI;
            const x = Math.cos(angle) * 40; // percentage
            const y = Math.sin(angle) * 40; // percentage
            
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 glass-card p-4 w-48 text-center"
                style={{ left: `${50 + x}%`, top: `${50 + y}%` }}
              >
                <div className="text-indigo-600 font-bold text-sm mb-1">{step.title}</div>
                <div className="text-[10px] text-slate-500 leading-tight">{step.desc}</div>
              </motion.div>
            );
          })}
          
          {/* Connecting Lines (Visual only) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
            <circle cx="50%" cy="50%" r="40%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const CollaborationSlide = ({ t }: { t: any }) => {
  return (
    <div className="slide-container">
      <div className="mb-12">
        <h2 className="text-4xl font-black text-slate-900 mb-2">{t.collabTitle}</h2>
        <p className="text-lg text-slate-500 font-medium">{t.collabSubtitle}</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-16">
        <div className="grid grid-cols-4 gap-8 w-full max-w-4xl">
          {t.depts.slice(0, 4).map((d: any, i: number) => (
            <motion.div 
              key={i} 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-indigo-500 text-white p-6 rounded-2xl shadow-lg text-center font-bold"
            >
              {d.name}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-full max-w-5xl h-32 bg-indigo-600 rounded-full flex items-center justify-center relative overflow-hidden shadow-2xl shadow-indigo-200"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="relative z-10 text-white text-3xl font-black tracking-widest uppercase flex items-center gap-4">
            <Layers size={32} />
            {t.bridgeText}
            <Layers size={32} />
          </div>
          {/* Animated particles */}
          <div className="absolute inset-0 pointer-events-none">
             {[...Array(10)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute w-1 h-1 bg-white/30 rounded-full"
                 animate={{
                   x: [0, 1000],
                   opacity: [0, 1, 0]
                 }}
                 transition={{
                   duration: 2 + Math.random() * 2,
                   repeat: Infinity,
                   delay: Math.random() * 2
                 }}
                 style={{ top: `${Math.random() * 100}%`, left: '-10px' }}
               />
             ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-4 gap-8 w-full max-w-4xl">
          {t.depts.slice(4).map((d: any, i: number) => (
            <motion.div 
              key={i} 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: (i + 4) * 0.1 }}
              className="bg-indigo-500 text-white p-6 rounded-2xl shadow-lg text-center font-bold"
            >
              {d.name}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ChallengesSlide = ({ t }: { t: any }) => {
  const systems = [
    'HubSpot', 'Salesforce', 'Zendesk', 'Intercom', 'Gainsight', 'Totango', 
    'Jira', 'Monday', 'ERP', 'SaaS', 'FCP', 'OpenAI', 'Claude', 'Gemini',
    'Mixpanel', 'Tableau', 'PowerBI', 'Slack'
  ];

  return (
    <div className="slide-container">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-slate-900 mb-2">{t.challengesTitle}</h2>
        <p className="text-lg text-slate-500 font-medium">{t.challengesSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {t.challengesItems.map((c: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-4 hover:border-indigo-300 transition-colors group"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Zap size={16} />
            </div>
            <h4 className="font-bold text-slate-800 mb-1 text-sm">{c.title}</h4>
            <p className="text-xs text-slate-500 leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {t.innovationItems.map((item: any, i: number) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.1 }}
            className="bg-indigo-600 text-white p-6 rounded-2xl shadow-xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
              {i === 0 && <Rocket size={64} />}
              {i === 1 && <Workflow size={64} />}
              {i === 2 && <Cpu size={64} />}
            </div>
            <h4 className="text-xl font-bold mb-2 relative z-10">{item.title}</h4>
            <p className="text-sm text-indigo-100 relative z-10 leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Scrolling Marquee */}
      <div className="mt-auto pt-8 border-t border-slate-100 overflow-hidden relative">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...systems, ...systems].map((system, i) => (
            <div key={i} className="mx-8 flex items-center gap-2 text-slate-400 font-bold text-sm uppercase tracking-widest">
              <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
              {system}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TechSlide = ({ t }: { t: any }) => {
  const data = [
    { name: t.months[0], ai: 10, tech: 10, linear: 10 },
    { name: t.months[1], ai: 25, tech: 18, linear: 12 },
    { name: t.months[2], ai: 50, tech: 35, linear: 15 },
    { name: t.months[3], ai: 85, tech: 55, linear: 18 },
    { name: t.months[4], ai: 120, tech: 75, linear: 20 },
  ];

  return (
    <div className="slide-container">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-slate-900 mb-2">{t.techTitle}</h2>
        <p className="text-lg text-slate-500 font-medium max-w-3xl">
          {t.techSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1">
        <div className="lg:col-span-2 glass-card p-8">
          <h3 className="text-lg font-bold text-slate-800 mb-6">{t.chartTitle}</h3>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Legend iconType="circle" />
                <Line type="monotone" dataKey="ai" name={t.aiLine} stroke="#6366f1" strokeWidth={4} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="tech" name={t.techLine} stroke="#10b981" strokeWidth={3} strokeDasharray="5 5" />
                <Line type="monotone" dataKey="linear" name={t.noTechLine} stroke="#94a3b8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-800">{t.aiTechTitle}</h3>
          {t.aiTechItems.map((item: any, i: number) => (
            <motion.div 
              key={i}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Cpu size={16} />
              </div>
              <div>
                <div className="font-bold text-sm text-slate-800">{item.title}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WorkflowSlide = ({ t, lang }: { t: any, lang: string }) => {
  const isRtl = lang === 'he';
  return (
    <div className="slide-container">
      <div className="mb-8">
        <h2 className="text-4xl font-black text-slate-900 mb-2">{t.workflowTitle}</h2>
        <p className="text-lg text-slate-500 font-medium">{t.workflowSubtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1">
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1 bg-slate-200 text-slate-700 rounded-md text-xs font-bold uppercase">{t.year1}</div>
            <h3 className="text-xl font-bold text-slate-800">{t.year1Title}</h3>
          </div>
          <div className="space-y-4 relative">
            <div className={cn(
              "absolute top-0 bottom-0 w-0.5 bg-slate-200",
              isRtl ? "right-4" : "left-4"
            )}></div>
            {t.year1Items.map((step: string, i: number) => (
              <div key={i} className={cn(
                "relative",
                isRtl ? "pr-10" : "pl-10"
              )}>
                <div className={cn(
                  "absolute top-2 w-2.5 h-2.5 rounded-full bg-slate-400 border-2 border-white",
                  isRtl ? "right-3" : "left-3"
                )}></div>
                <div className="glass-card p-4 text-sm font-medium text-slate-600">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="px-3 py-1 bg-indigo-600 text-white rounded-md text-xs font-bold uppercase">{t.year2}</div>
            <h3 className="text-xl font-bold text-slate-800">{t.year2Title}</h3>
          </div>
          <div className="space-y-4 relative">
            <div className={cn(
              "absolute top-0 bottom-0 w-0.5 bg-indigo-100",
              isRtl ? "right-4" : "left-4"
            )}></div>
            {t.year2Items.map((step: string, i: number) => (
              <div key={i} className={cn(
                "relative",
                isRtl ? "pr-10" : "pl-10"
              )}>
                <div className={cn(
                  "absolute top-2 w-2.5 h-2.5 rounded-full bg-indigo-600 border-2 border-white",
                  isRtl ? "right-3" : "left-3"
                )}></div>
                <div className="glass-card p-4 text-sm font-bold text-indigo-700 border-indigo-100 bg-indigo-50/50">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto pt-8 border-t border-slate-100 text-center">
        <p className="text-slate-400 font-bold italic">
          {t.footerQuote}
        </p>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeSlide, setActiveSlide] = useState<SlideId>('intro');
  const [lang, setLang] = useState<Language>('he');

  const t = translations[lang];

  useEffect(() => {
    document.body.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const renderSlide = () => {
    switch (activeSlide) {
      case 'intro': return <IntroSlide t={t} />;
      case 'engine': return <EngineSlide t={t} />;
      case 'collaboration': return <CollaborationSlide t={t} />;
      case 'challenges': return <ChallengesSlide t={t} />;
      case 'tech': return <TechSlide t={t} />;
      case 'workflows': return <WorkflowSlide t={t} lang={lang} />;
      default: return <IntroSlide t={t} />;
    }
  };

  return (
    <div className={cn(
      "flex min-h-screen bg-slate-50 font-sans transition-all duration-300",
      lang === 'he' ? "flex-row" : "flex-row-reverse"
    )}>
      <Sidebar activeSlide={activeSlide} setActiveSlide={setActiveSlide} lang={lang} t={t} />
      
      <main className="flex-1 relative overflow-hidden">
        {/* Language Toggle */}
        <div className={cn(
          "absolute top-6 z-30",
          lang === 'he' ? "left-6" : "right-6"
        )}>
          <button
            onClick={() => setLang(lang === 'he' ? 'en' : 'he')}
            className="flex items-center gap-2 px-4 py-2 bg-white shadow-md rounded-full border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-all font-bold text-sm"
          >
            <Globe size={18} />
            {lang === 'he' ? 'English' : 'עברית'}
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeSlide}-${lang}`}
            initial={{ opacity: 0, x: lang === 'he' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: lang === 'he' ? 20 : -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full"
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className={cn(
          "absolute bottom-8 flex gap-4",
          lang === 'he' ? "left-8" : "right-8"
        )}>
          <button 
            onClick={() => {
              const ids: SlideId[] = ['intro', 'engine', 'collaboration', 'challenges', 'tech', 'workflows'];
              const idx = ids.indexOf(activeSlide);
              if (idx > 0) setActiveSlide(ids[idx - 1]);
            }}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all disabled:opacity-30"
            disabled={activeSlide === 'intro'}
          >
            {lang === 'he' ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
          <button 
            onClick={() => {
              const ids: SlideId[] = ['intro', 'engine', 'collaboration', 'challenges', 'tech', 'workflows'];
              const idx = ids.indexOf(activeSlide);
              if (idx < ids.length - 1) setActiveSlide(ids[idx + 1]);
            }}
            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 transition-all disabled:opacity-30"
            disabled={activeSlide === 'workflows'}
          >
            {lang === 'he' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>
      </main>
    </div>
  );
}
