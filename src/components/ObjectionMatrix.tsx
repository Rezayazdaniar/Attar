import React, { useState } from 'react';
import { OBJECTIONS, ObjectionData } from '../data/pharmaData';
import { ShieldAlert, ArrowLeftRight, CheckCircle2, MessageSquare, UserCheck, HelpCircle } from 'lucide-react';

export const ObjectionMatrix: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<'ALL' | 'CEO' | 'IT' | 'PHARMA'>('ALL');
  const [activeObjectionId, setActiveObjectionId] = useState<string>(OBJECTIONS[0].id);

  const filteredObjections = selectedRole === 'ALL'
    ? OBJECTIONS
    : OBJECTIONS.filter((o) => o.role === selectedRole);

  const activeObjection = OBJECTIONS.find((o) => o.id === activeObjectionId) || OBJECTIONS[0];

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono uppercase text-teal-400 tracking-wider mb-2">
            محور چهارم · پاسخ به دغدغه‌های کلیدی مدیران
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            پاسخ‌های شفاف به پرسش‌های مدیریت ارشد، تیم IT و داروسازی هلدینگ
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            در مسیر به‌کارگیری فناوری‌های نوظهور در صنعت دارو، بررسی دقیق ابعاد امنیتی، حقوقی، اقتصادی و رگولاتوری حق طبیعی و وظیفه ارکان هلدینگ است.
            در این بخش، رویکرد و تعهدات صریح خود را پیرامون دغدغه‌های اصلی مطرح‌شده ارائه کرده‌ایم.
          </p>
        </div>

        {/* Role Selector */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedRole('ALL')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
              selectedRole === 'ALL'
                ? 'bg-teal-500/20 text-teal-300 border-teal-500/40'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            همه پرسش‌ها و دغدغه‌ها ({OBJECTIONS.length})
          </button>
          <button
            onClick={() => setSelectedRole('CEO')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
              selectedRole === 'CEO'
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            مدیریت ارشد (توجیه اقتصادی و اولویت‌های تولید)
          </button>
          <button
            onClick={() => setSelectedRole('IT')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
              selectedRole === 'IT'
                ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            فناوری اطلاعات (امنیت On-Premise، حاکمیت داده و نگهداری)
          </button>
          <button
            onClick={() => setSelectedRole('PHARMA')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
              selectedRole === 'PHARMA'
                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            تیم داروسازی (دقت علمی، اعتبار رگولاتوری و نقش کارشناس)
          </button>
        </div>

        {/* Master Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Objections List */}
          <div className="lg:col-span-5 space-y-3">
            {filteredObjections.map((obj) => {
              const isSelected = obj.id === activeObjectionId;
              return (
                <button
                  key={obj.id}
                  onClick={() => setActiveObjectionId(obj.id)}
                  className={`w-full text-right p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-teal-500 text-white shadow-lg ring-1 ring-teal-500/30'
                      : 'bg-slate-900/40 border-slate-800 text-slate-300 hover:bg-slate-900/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span
                      className={`font-semibold ${
                        obj.role === 'CEO'
                          ? 'text-amber-400'
                          : obj.role === 'IT'
                          ? 'text-cyan-400'
                          : 'text-emerald-400'
                      }`}
                    >
                      {obj.roleFa}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold leading-snug">
                    {obj.objectionFa}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Response Blueprint Console */}
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <div className="text-xs font-mono text-teal-400 mb-1">
                مرجع موضوع: {activeObjection.roleFa}
              </div>
              <h3 className="text-lg font-bold text-white leading-tight">
                {activeObjection.objectionFa}
              </h3>
            </div>

            {/* Root concern */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>تحلیل ریشه‌ای موضوع و دغدغه هلدینگ:</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {activeObjection.rootConcernFa}
              </p>
            </div>

            {/* Recommended answer */}
            <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-900/40 space-y-1.5">
              <span className="text-xs font-bold text-teal-300 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>پاسخ و تعهد رسمی ما:</span>
              </span>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {activeObjection.recommendedResponseFa}
              </p>
            </div>

            {/* Pivot to pilot */}
            <div className="p-4 rounded-xl bg-slate-950 border border-teal-500/40 space-y-1.5">
              <span className="text-xs font-bold text-teal-400 flex items-center gap-1.5">
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>رویکرد عملی در فاز پایلوت ۹۰ روزه:</span>
              </span>
              <p className="text-xs sm:text-sm text-teal-200 leading-relaxed">
                {activeObjection.pivotToPilotFa}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
