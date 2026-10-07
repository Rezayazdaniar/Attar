import React, { useState } from 'react';
import { PILOT_STAGES } from '../data/pharmaData';
import {
  FileText,
  Calendar,
  CheckCircle2,
  Lock,
  DollarSign,
  Printer,
  Sparkles,
  ShieldCheck,
  Building2,
  Sliders
} from 'lucide-react';

export const PilotProposalBuilder: React.FC = () => {
  const [holdingName, setHoldingName] = useState('هلدینگ دارویی');
  const [moleculeCount, setMoleculeCount] = useState(8);
  const [durationDays, setDurationDays] = useState<60 | 90>(90);
  const [deploymentModel, setDeploymentModel] = useState<'ON_PREM' | 'AIR_GAPPED'>('ON_PREM');

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase text-teal-400 tracking-wider mb-2">
              محور پنجم · چارچوب اجرایی طرح پایلوت مشترک
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              پیشنهاد پایلوت ۶۰ تا ۹۰ روزه: سنجش عملیاتی روی ۵ تا ۱۰ ماده یا فرمولاسیون هلدینگ
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
              رویکرد مرحله‌ای و شفاف: ارزیابی کارایی هوش مصنوعی بر روی سورس‌های واقعی ماده اولیه و فرمولاسیون‌های منتخب خود هلدینگ،
              در محیط کاملاً لوکال On-Premise، با شاخص‌های عددی شفاف و بدون هرگونه تعهد خرید بعدی.
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="self-start lg:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-md shadow-teal-500/20"
          >
            <Printer className="w-4 h-4 text-slate-950" />
            <span>چاپ رسمی سند پیشنهاد پایلوت (PDF)</span>
          </button>
        </div>

        {/* Interactive Customization Controls */}
        <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-teal-400 uppercase tracking-wide">
            <Sliders className="w-4 h-4" />
            <span>تنظیم پارامترهای پایلوت برای هلدینگ طرف مذاکره:</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Holding Name */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-300 font-semibold">نام هلدینگ دارویی:</label>
              <div className="relative">
                <input
                  type="text"
                  value={holdingName}
                  onChange={(e) => setHoldingName(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-400"
                />
              </div>
            </div>

            {/* Molecule Count */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-300 font-semibold">
                تعداد مولکول‌ها یا ناخالصی‌های پایلوت:
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="5"
                  max="10"
                  step="1"
                  value={moleculeCount}
                  onChange={(e) => setMoleculeCount(Number(e.target.value))}
                  className="w-full accent-teal-400 bg-slate-800 rounded-lg h-2"
                />
                <span className="font-mono text-sm font-bold text-teal-300 w-12 text-center">
                  {moleculeCount} ماده
                </span>
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-300 font-semibold">مدت زمان پایلوت:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDurationDays(60)}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    durationDays === 60
                      ? 'bg-teal-500/20 text-teal-300 border-teal-500'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  ۶۰ روزه (سریع)
                </button>
                <button
                  type="button"
                  onClick={() => setDurationDays(90)}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    durationDays === 90
                      ? 'bg-teal-500/20 text-teal-300 border-teal-500'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  ۹۰ روزه (جامع)
                </button>
              </div>
            </div>

            {/* IT Architecture */}
            <div className="space-y-1.5">
              <label className="text-xs text-slate-300 font-semibold">مدل استقرار فنی IT:</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeploymentModel('ON_PREM')}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    deploymentModel === 'ON_PREM'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  سرور لوکال On-Prem
                </button>
                <button
                  type="button"
                  onClick={() => setDeploymentModel('AIR_GAPPED')}
                  className={`py-2 text-xs font-bold rounded-lg border transition-all ${
                    deploymentModel === 'AIR_GAPPED'
                      ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500'
                      : 'bg-slate-950 text-slate-400 border-slate-800'
                  }`}
                >
                  ایزوله Air-Gapped
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Printable Official Proposal Document Frame */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 space-y-10 shadow-xl print-break-inside-avoid">
          {/* Header of proposal document */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="text-xs font-mono text-teal-400 uppercase tracking-widest">
                سند رسمی طرح پیشنهادی پایلوت · PILOT PROPOSAL
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                طرح سنجش و اعتبارسنجی پیش‌بینی سمیت دارویی (DILI) در {holdingName}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                بررسی ارزش‌افزوده هوش مصنوعی بر روی {moleculeCount} ماده و فرمولاسیون واقعی هلدینگ در بازه {durationDays} روزه
              </p>
            </div>

            <div className="text-right sm:text-left text-xs text-slate-400 font-mono space-y-0.5">
              <div>کد پروژه: <span className="text-slate-200">PHARMA-AI-PILOT-{durationDays}D</span></div>
              <div>وضعیت: <span className="text-teal-400 font-semibold">پیشنهاد آماده امضا</span></div>
            </div>
          </div>

          {/* 3 Step Timeline */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span>مراحل اجرایی پایلوت ({durationDays} روزه)</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PILOT_STAGES.map((step, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-3 relative flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-teal-400 font-bold">{step.stage}</span>
                      <span className="text-slate-400">{step.weekRange}</span>
                    </div>

                    <h5 className="text-sm font-bold text-white leading-snug">
                      {step.titleFa}
                    </h5>

                    <ul className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800/80">
                      {step.tasksFa.map((task, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-1.5">
                          <span className="text-teal-400 font-bold">·</span>
                          <span className="leading-relaxed">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400">
                    <span className="font-semibold text-slate-300 block mb-0.5">خروجی این مرحله:</span>
                    {step.deliverablesFa.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Numerical Success Criteria (KPIs) */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-400" />
              <span>شاخص‌های موفقیت عددی پایلوت (تضمین شفافیت برای هلدینگ)</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                <div className="text-xs text-slate-400">نرخ همخوانی با نظر متخصصین دارویی:</div>
                <div className="text-2xl font-mono font-bold text-teal-300">بالای ۸۵٪</div>
                <div className="text-[11px] text-slate-500">روی مولکول‌های با رفتار شناخته‌شده</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                <div className="text-xs text-slate-400">شناسایی زودهنگام ریسک:</div>
                <div className="text-2xl font-mono font-bold text-amber-300">حداقل ۱ مورد</div>
                <div className="text-[11px] text-slate-500">کشف هشدار سمیت پنهان پیش از آزمون رسمی</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                <div className="text-xs text-slate-400">کاهش زمان غربالگری اولیه:</div>
                <div className="text-2xl font-mono font-bold text-cyan-300">بیش از ۶۰٪</div>
                <div className="text-[11px] text-slate-500">در مقایسه با روش دستی جستجوی مقالات</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-1">
                <div className="text-xs text-slate-400">عدم نشت داده (تایید IT):</div>
                <div className="text-2xl font-mono font-bold text-emerald-300">۱۰۰٪ ایزوله</div>
                <div className="text-[11px] text-slate-500">صفر پکت اینترنتی به خارج از شبکه</div>
              </div>
            </div>
          </div>

          {/* Phased Commercial Model */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-teal-400" />
              <span>مدل مالی مرحله‌ای: بدون تعهد خرید بعدی</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-950 border border-teal-500/40 space-y-2">
                <div className="text-teal-400 font-bold uppercase font-mono">فاز ۱: پایلوت ۹۰ روزه</div>
                <div className="text-sm font-bold text-white">هزینه ثابت و حداقلی</div>
                <p className="text-slate-300 leading-relaxed">
                  هزینه‌ای بسیار اندک صرفاً جهت پوشش زیرساخت و ساعت مشاوره اختصاصی. هیچ تعهدی برای خرید نسخه اصلی وجود ندارد.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-slate-400 font-bold uppercase font-mono">فاز ۲: توسعه اختصاصی</div>
                <div className="text-sm font-bold text-white">افزودن اندام‌ها و اتصال به LIMS</div>
                <p className="text-slate-300 leading-relaxed">
                  فقط در صورتی که کارشناسان دارویی موفقیت پایلوت را تایید کردند؛ ماژول‌های سمیت قلبی، کلیوی و اتصالات API توسعه می‌یابد.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="text-slate-400 font-bold uppercase font-mono">فاز ۳: بهره‌برداری سازمانی</div>
                <div className="text-sm font-bold text-white">لایسنس سالانه یا سهم از صرفه‌جویی</div>
                <p className="text-slate-300 leading-relaxed">
                  استقرار دائمی با مالکیت کامل داده‌ها نزد هلدینگ دارویی همراه با پشتیبانی، آپدیت‌های ادواری و آموزش نیروهای داخلی.
                </p>
              </div>
            </div>
          </div>

          {/* Explicit Legal & Scientific Limitation Clause */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 space-y-1">
            <span className="text-slate-300 font-bold block">محدودیت و عدم ادعای نظارتی (صراحت قانونی):</span>
            <p className="leading-relaxed">
              این سامانه به عنوان ابزار کمک‌آموزشی و تصمیم‌یار غربالگری اولیه (In Silico Decision Support) عمل می‌کند و جایگزین آزمون‌های رسمی رگولاتوری سازمان غذا و دارو (FDO)، آزمون‌های کنترل کیفیت یا گواهی‌های بالینی رسمی نیست.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
