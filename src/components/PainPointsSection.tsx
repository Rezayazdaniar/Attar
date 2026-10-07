import React, { useState } from 'react';
import { HOLDING_PAIN_POINTS } from '../data/pharmaData';
import { AlertTriangle, Clock, Coins, ShieldCheck, Calculator, ArrowRight } from 'lucide-react';

export const PainPointsSection: React.FC = () => {
  const [selectedPainId, setSelectedPainId] = useState(HOLDING_PAIN_POINTS[0].id);

  // Financial impact calculation simulation
  const [delayedMonths, setDelayedMonths] = useState<number>(5);
  const [monthlyHoldingLoss, setMonthlyHoldingLoss] = useState<number>(850); // million Tomans

  const totalCalculatedLoss = delayedMonths * monthlyHoldingLoss;
  const estimatedPilotInvestment = 280; // million Tomans typical pilot
  const roiMultiplier = Math.round((totalCalculatedLoss / estimatedPilotInvestment) * 10) / 10;

  const currentPain = HOLDING_PAIN_POINTS.find((p) => p.id === selectedPainId) || HOLDING_PAIN_POINTS[0];

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="text-xs font-mono uppercase text-teal-400 tracking-wider mb-2">
            محور اول · تحلیل راهبردی گلوگاه‌های عملیاتی و جریان نقدینگی
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            هم‌راستاسازی با واقعیت‌های میدانی: حفاظت از سودآوری و تداوم تولید ژنریک
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            در شرایط فعلی اقتصاد دارو، اولویت مدیریت ارشد حفظ پیوستگی خطوط، مدیریت بحران تخصیص ارز و وصول مطالبات است.
            ابزارهای هوش مصنوعی تنها زمانی ارزشمند هستند که مستقیماً به رفع این دغدغه‌های عملیاتی و مالی کمک کنند.
          </p>
        </div>

        {/* 4 Core Pain Points Tabs & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tab Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {HOLDING_PAIN_POINTS.map((pain, index) => {
              const isSelected = pain.id === selectedPainId;
              return (
                <button
                  key={pain.id}
                  onClick={() => setSelectedPainId(pain.id)}
                  className={`w-full text-right p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-slate-900 border-teal-500/60 shadow-lg shadow-teal-950/40 ring-1 ring-teal-500/30'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-mono">
                    <span className="text-teal-400 font-semibold">{pain.tagFa}</span>
                    <span>۰{index + 1}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                    {pain.titleFa}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Detailed Pain Card & Solution */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <span className="inline-block px-2.5 py-1 rounded bg-teal-500/10 text-teal-300 text-xs font-mono font-medium mb-3">
                {currentPain.tagFa}
              </span>
              <h3 className="text-xl font-extrabold text-white leading-tight">
                {currentPain.titleFa}
              </h3>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div>
                <span className="text-xs font-semibold text-slate-400 block mb-1">شرح واقعیت میدانی:</span>
                <p className="leading-relaxed bg-slate-950/60 p-3.5 rounded-lg border border-slate-800/80 text-slate-200">
                  {currentPain.descriptionFa}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-rose-950/20 border border-rose-900/40">
                  <div className="flex items-center gap-1.5 text-rose-400 text-xs font-bold mb-1">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>زیان مالی برای هلدینگ</span>
                  </div>
                  <p className="text-xs text-rose-200/90 leading-relaxed">
                    {currentPain.financialImpactFa}
                  </p>
                </div>

                <div className="p-3.5 rounded-lg bg-teal-950/20 border border-teal-900/40">
                  <div className="flex items-center gap-1.5 text-teal-400 text-xs font-bold mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>زاویه ورود هوش مصنوعی</span>
                  </div>
                  <p className="text-xs text-teal-200/90 leading-relaxed">
                    {currentPain.aiSolutionFa}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manufacturing Facility Image & CTD Rejection Case */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden grid grid-cols-1 md:grid-cols-12 items-center">
          <div className="md:col-span-5 h-full relative min-h-[220px]">
            <img
              src="/src/assets/images/pharma_generic_facility_1791353062773.jpg"
              alt="خطوط تولید ژنریک دارویی"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-slate-900 via-slate-900/40 to-transparent" />
          </div>

          <div className="md:col-span-7 p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono text-teal-400">
              <Clock className="w-4 h-4" />
              <span>ریشه‌یابی تأخیر در ثبت پرونده (CTD Dossier)</span>
            </div>
            <h4 className="text-lg font-bold text-white">
              چرا پاسخ به استعلامات سازمان غذا و دارو (FDO) ماه‌ها خط تولید را قفل می‌کند؟
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              هنگامی که کارشناسان کمیسیون قانونی سازمان غذا و دارو در مورد ناخالصی‌های احتمالی (مثل نیتروزآمین‌ها یا سمیت کبدی محصولات ناشی از استرس تست پایداری) استعلام می‌کنند،
              ارائه مستندات سنتی نیازمند ماه‌ها آزمایش حیوانی یا استعلام خارجی است.
              ارائه یک گزارش سم‌شناسی این‌سیلیکو معتبر در کمتر از ۲۴ ساعت می‌تواند تاییدیه کمیسیون را ماه‌ها جلو بیندازد.
            </p>
          </div>
        </div>

        {/* Financial Simulator: Opportunity Cost vs. Pilot Cost */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2.5">
              <Calculator className="w-5 h-5 text-teal-400" />
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white">
                  محاسبه‌گر هزینه فرصت: چرا پایلوت برای مدیرعامل توجیه اقتصادی دارد؟
                </h4>
                <p className="text-xs text-slate-400">
                  محاسبه زیان ناشی از خوابیدن یک پرونده فرمولاسیون در برابر سرمایه‌گذاری پایلوت ۹۰ روزه
                </p>
              </div>
            </div>
            <div className="px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 text-xs font-mono">
              مدل شبیه‌سازی مالی
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Input 1 */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                تأخیر در ورود دارو به بازار یا پاسخ رگولاتور (ماه):
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="1"
                  value={delayedMonths}
                  onChange={(e) => setDelayedMonths(Number(e.target.value))}
                  className="w-full accent-teal-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                />
                <span className="font-mono text-base font-bold text-teal-300 w-12 text-center">
                  {delayedMonths} ماه
                </span>
              </div>
            </div>

            {/* Input 2 */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300 block">
                عدم‌النفع فروش و خواب خط ماهانه (میلیون تومان):
              </label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="300"
                  max="3000"
                  step="50"
                  value={monthlyHoldingLoss}
                  onChange={(e) => setMonthlyHoldingLoss(Number(e.target.value))}
                  className="w-full accent-teal-400 bg-slate-800 rounded-lg h-2 cursor-pointer"
                />
                <span className="font-mono text-base font-bold text-teal-300 w-24 text-center">
                  {monthlyHoldingLoss.toLocaleString('fa-IR')} م.ت
                </span>
              </div>
            </div>

            {/* Result KPI */}
            <div className="bg-slate-950 p-4 rounded-xl border border-teal-500/30 text-center space-y-1">
              <div className="text-xs text-slate-400">کل عدم‌النفع خواب پرونده:</div>
              <div className="text-2xl font-mono font-black text-amber-400 tabular-nums">
                {totalCalculatedLoss.toLocaleString('fa-IR')} میلیون تومان
              </div>
              <div className="text-xs text-teal-400 pt-1">
                صرفه‌جویی تنها با جلوگیری از ۱ بار تأخیر: <strong>{roiMultiplier} برابر</strong> هزینه پایلوت
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
