import React from 'react';
import { ShieldCheck, PlayCircle, FileText, ChevronLeft } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenPresentation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenPresentation }) => {
  const navItems = [
    { id: 'strategy', label: 'چالش‌های کلیدی هلدینگ' },
    { id: 'playbook', label: 'محورهای نشست ۲۰ دقیقه‌ای' },
    { id: 'demo', label: 'کنسول غربالگری (DILI)' },
    { id: 'objections', label: 'پرسش‌ها و دغدغه‌های مدیران' },
    { id: 'pilot', label: 'طرح پایلوت ۹۰ روزه' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#strategy"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('strategy');
            }}
            className="text-lg font-bold tracking-tight text-white hover:text-teal-400 transition-colors flex items-center gap-2"
          >
            <span className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-mono text-sm font-bold">
              AI
            </span>
            <span>پلتفرم بهره‌وری و غربالگری دارویی</span>
          </a>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`whitespace-nowrap transition-colors py-1 relative ${
                  isActive
                    ? 'text-teal-400 font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-teal-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={() => setActiveTab('pilot')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/70 rounded-lg transition-colors whitespace-nowrap"
          >
            <FileText className="w-3.5 h-3.5 text-teal-400" />
            <span>پیشنهاد پایلوت</span>
          </button>

          <button
            onClick={onOpenPresentation}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm transition-all whitespace-nowrap"
          >
            <PlayCircle className="w-4 h-4 text-slate-950" />
            <span>حالت ارائه جلسه (۲۰ دقیقه)</span>
          </button>
        </div>
      </div>
    </header>
  );
};
