import React from 'react';
import { ArrowLeft, TrendingUp, ShieldAlert, Cpu, CheckCircle2, Building2 } from 'lucide-react';

interface HeroExecutiveProps {
  onNavigateToDemo: () => void;
  onNavigateToPlaybook: () => void;
}

export const HeroExecutive: React.FC<HeroExecutiveProps> = ({
  onNavigateToDemo,
  onNavigateToPlaybook,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950 pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Framing Banner */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-medium text-teal-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-teal-400"></span>
          <span>جلسه راهبردی هم‌اندیشی · ارتقای تاب‌آوری و بهره‌وری عملیاتی هلدینگ دارویی</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Strategic Collaborative Text */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              ارتقای بهره‌وری عملیاتی و تاب‌آوری هلدینگ دارویی با هوش مصنوعی
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              در صنعت داروسازی کشور، اولویت حیاتی هلدینگ حفظ پیوستگی خطوط تولید ژنریک، صیانت از جریان نقدینگی و پاسخ به‌موقع به نیازهای درمانی است.
              پیشنهاد ما اتکا به پروژه‌های تئوریک R&D نیست؛ بلکه هم‌افزایی با تجربه مدیران هلدینگ برای
              <strong className="text-teal-300 font-semibold mr-1">
                کاهش خواب سرمایه، تسهیل تایید سورس‌های جدید ارزی، و پیش‌بینی زودهنگام ریسک ناخالصی‌ها
              </strong>
              در فرایندهای رگولاتوری است.
            </p>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>مدیریت ارشد هلدینگ</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  افزایش سودآوری، شتاب در تجاری‌سازی سبد ژنریک و خرید مطمئن مواد مؤثره ارزی.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-teal-400 text-xs font-semibold mb-1">
                  <ShieldAlert className="w-4 h-4" />
                  <span>تیم داروسازی و رگولاتوری</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  پایش سریع ناخالصی‌ها، کاهش شکست در آزمون‌های BE و تسریع پاسخ به سازمان غذا و دارو.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                  <Cpu className="w-4 h-4" />
                  <span>تیم فناوری اطلاعات (IT)</span>
                </div>
                <p className="text-xs text-slate-300 leading-normal">
                  استقرار ۱۰۰٪ لوکال (On-Premise / Air-Gapped)، بدون ارسال داده به اینترنت و بدون دستکاری در ERP.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={onNavigateToPlaybook}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-all shadow-md hover:shadow-teal-500/20"
              >
                <span>مشاهده محورهای جلسه هم‌اندیشی</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onNavigateToDemo}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all"
              >
                <span>بررسی دموی عملی غربالگری DILI</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-2xl">
              <div className="relative aspect-video overflow-hidden">
                <img
                  src="/src/assets/images/pharma_holding_executive_1791353032841.jpg"
                  alt="جلسه تصمیم‌گیری استراتژیک هلدینگ دارویی"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 right-3 left-3 text-right">
                  <div className="text-xs font-mono text-teal-300 uppercase tracking-wide">هم‌افزایی دانش و فناوری</div>
                  <div className="text-sm font-bold text-white">اتاق تصمیم‌گیری هلدینگ دارویی</div>
                </div>
              </div>

              <div className="p-4 space-y-3 bg-slate-900/90">
                <div className="text-xs text-slate-400 font-medium pb-2 border-b border-slate-800/80">
                  اصول همکاری و تعهدات ما در این نشست:
                </div>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>صداقت کامل علمی:</strong> ماژول سمیت کبد (DILI) آماده است؛ سمیت قلبی، کلیوی و عصبی در نقشه راه توسعه مشترک قرار دارد.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>عدم جایگزینی آزمون‌های رسمی:</strong> این مدل ابزار پشتیبان تصمیم‌گیری (Decision Support) برای فیلتر اولیه است و تمام آزمون‌های رگولاتوری پابرجا هستند.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span><strong>طرح پایلوت کم‌ریسک:</strong> ارزیابی اولیه روی ۵ تا ۱۰ ماده انتخابی متخصصین هلدینگ با شاخص‌های عددی بدون هرگونه تعهد بعدی.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

