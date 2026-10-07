import React, { useState } from 'react';
import { DISCOVERY_QUESTIONS, DiscoveryQuestion } from '../data/pharmaData';
import { Users, HelpCircle, CheckCircle, AlertTriangle, ArrowRight, Clock, Target } from 'lucide-react';

interface MeetingPlaybookProps {
  onNavigateToDemo: () => void;
  onNavigateToPilot: () => void;
}

export const MeetingPlaybook: React.FC<MeetingPlaybookProps> = ({
  onNavigateToDemo,
  onNavigateToPilot,
}) => {
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<'ALL' | 'CEO' | 'PHARMA' | 'IT'>('ALL');
  const [expandedQuestionId, setExpandedQuestionId] = useState<string>(DISCOVERY_QUESTIONS[0].id);

  const filteredQuestions = selectedRoleFilter === 'ALL'
    ? DISCOVERY_QUESTIONS
    : DISCOVERY_QUESTIONS.filter((q) => q.category === selectedRoleFilter);

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div>
          <div className="text-xs font-mono uppercase text-teal-400 tracking-wider mb-2">
            محور دوم · چارچوب زمان‌بندی نشست هم‌اندیشی
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            برنامه کاری جلسه ۲۰ دقیقه‌ای: بهره‌وری حداکثری در زمان مدیران ارشد
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            با احترام به زمان ارزشمند مدیرعامل محترم و متخصصان هلدینگ، برنامه نشست در ۳ بخش شفاف سازمان‌دهی شده است:
            ۱۰ دقیقه شناخت دقیق اولویت‌های هلدینگ، ۵ دقیقه بررسی عملیاتی خروجی مدل غربالگری DILI، و ۵ دقیقه بررسی طرح پایلوت کم‌ریسک.
          </p>
        </div>

        {/* 20-Minute Time Allocation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Phase 1 */}
          <div className="p-5 rounded-xl bg-slate-900 border border-teal-500/30 relative">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
              <span className="text-teal-400 font-bold">بخش نخست</span>
              <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-300">۱۰ دقیقه</span>
            </div>
            <h3 className="text-base font-bold text-white mb-2">شناخت اولویت‌ها و چالش‌ها (Discovery)</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              بررسی گلوگاه‌های خواب سرمایه در توسعه سبد ژنریک، سورس‌های ارزی مواد اولیه و چارچوب امنیتی IT.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="p-5 rounded-xl bg-slate-900 border border-cyan-500/30 relative">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
              <span className="text-cyan-400 font-bold">بخش دوم</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300">۵ دقیقه</span>
            </div>
            <h3 className="text-base font-bold text-white mb-2">بررسی عملی خروجی مدل (DILI)</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              آنالیز مولکول‌های شناخته‌شده مرجع، بررسی هشدارهای بیوشیمیایی و دامنه کاربرد مدل به صورت زنده.
            </p>
            <button
              onClick={onNavigateToDemo}
              className="text-xs text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
            >
              <span>مشاهده کنسول دمو</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Phase 3 */}
          <div className="p-5 rounded-xl bg-slate-900 border border-amber-500/30 relative">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-2">
              <span className="text-amber-400 font-bold">بخش سوم</span>
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300">۵ دقیقه</span>
            </div>
            <h3 className="text-base font-bold text-white mb-2">بررسی طرح پایلوت ۶۰ تا ۹۰ روزه</h3>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              اجرای آزمایشی روی ۵ تا ۱۰ ماده واقعی منتخب هلدینگ، در محیط کاملاً امن On-Premise با شاخص‌های عددی.
            </p>
            <button
              onClick={onNavigateToPilot}
              className="text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1"
            >
              <span>مشاهده منشور پایلوت</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Roles in our team */}
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="text-xs font-mono text-teal-400 uppercase mb-2">ترکیب مشاوران و متخصصان حاضر در جلسه</div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-300">
            <div className="space-y-1">
              <span className="font-bold text-white block">۱. مشاور راهبری کسب‌وکار و اقتصاد دارو:</span>
              <p>تمرکز بر بهره‌وری مالی، کاهش خواب سرمایه در خطوط تولید و مدل‌های همکاری برد-برد.</p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-white block">۲. متخصص داروسازی، فرمولاسیون و رگولاتوری:</span>
              <p>تبادل نظر تخصصی با کارشناسان هلدینگ پیرامون ناخالصی‌ها، الزامات غذا و دارو و آزمون‌های BE.</p>
            </div>
            <div className="space-y-1">
              <span className="font-bold text-white block">۳. معمار هوش مصنوعی و امنیت زیرساخت:</span>
              <p>پاسخ‌گویی به دغدغه‌های تیم IT هلدینگ پیرامون استقرار On-Premise، امنیت شبکه و ایزولاسیون داده.</p>
            </div>
          </div>
        </div>

        {/* 10-Minute Discovery Questions Interactive Accordion */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-teal-400" />
                <span>محورهای گفت‌وگو و شناخت اولویت‌های هلدینگ</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                پرسش‌های هدفمند جهت تطبیق راه‌حل‌های هوش مصنوعی با نیازهای واقعی مدیریت، داروسازی و IT.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
              <button
                onClick={() => setSelectedRoleFilter('ALL')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedRoleFilter === 'ALL'
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                همه محورها
              </button>
              <button
                onClick={() => setSelectedRoleFilter('CEO')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedRoleFilter === 'CEO'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                مدیریت ارشد
              </button>
              <button
                onClick={() => setSelectedRoleFilter('PHARMA')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedRoleFilter === 'PHARMA'
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                تیم داروسازی
              </button>
              <button
                onClick={() => setSelectedRoleFilter('IT')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                  selectedRoleFilter === 'IT'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                مدیریت IT
              </button>
            </div>
          </div>

          {/* Question List */}
          <div className="space-y-3">
            {filteredQuestions.map((q) => {
              const isExpanded = expandedQuestionId === q.id;
              return (
                <div
                  key={q.id}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedQuestionId(isExpanded ? '' : q.id)}
                    className="w-full text-right p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 hover:bg-slate-900/90"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-mono">
                        <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                          q.category === 'CEO'
                            ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                            : q.category === 'IT'
                            ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                            : 'bg-teal-500/10 text-teal-300 border border-teal-500/20'
                        }`}>
                          {q.categoryLabelFa}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white">
                        {q.questionFa}
                      </h4>
                    </div>
                    <span className="text-xs text-slate-400 font-mono shrink-0">
                      {isExpanded ? 'بستن −' : 'بررسی +'}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="p-4 sm:p-5 pt-0 border-t border-slate-800/80 space-y-4 text-xs sm:text-sm">
                      <div className="bg-slate-950 p-3.5 rounded-lg border border-slate-800">
                        <span className="text-xs font-semibold text-teal-400 block mb-1">
                          هدف راهبردی این موضوع:
                        </span>
                        <p className="text-slate-300 leading-relaxed">
                          {q.strategicObjectiveFa}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/30">
                          <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                            <CheckCircle className="w-3.5 h-3.5" />
                            <span>ارزش و دستاورد مستقیم برای هلدینگ:</span>
                          </div>
                          <p className="text-emerald-200/90 leading-relaxed">
                            {q.holdingValueFa}
                          </p>
                        </div>

                        <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-900/30">
                          <div className="flex items-center gap-1.5 text-cyan-400 font-bold mb-1">
                            <Target className="w-3.5 h-3.5" />
                            <span>ملاحظات اجرایی و نکات کلیدی:</span>
                          </div>
                          <p className="text-cyan-200/90 leading-relaxed">
                            {q.practicalConsiderationsFa}
                          </p>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-950 border border-teal-500/40">
                        <span className="text-xs font-semibold text-teal-300 block mb-1">
                          اقدام مشترک در چارچوب پایلوت:
                        </span>
                        <p className="text-slate-200 leading-relaxed">
                          {q.collaborativeActionFa}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
