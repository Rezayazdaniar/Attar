import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Clock,
  User,
  Shield,
  Layers,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

interface PresentationModeProps {
  onClose: () => void;
  onNavigateToDemo: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({ onClose, onNavigateToDemo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [timerRunning, setTimerRunning] = useState(false);
  const [activeSpeakerRole, setActiveSpeakerRole] = useState<'BUSINESS' | 'PHARMA' | 'AI'>('BUSINESS');

  // Timer tick
  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timeLeft]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const slides = [
    {
      title: 'هم‌راستاسازی با اهداف هلدینگ: ارتقای بهره‌وری تولید ژنریک، ارز و رگولاتوری',
      timing: 'دقیقه ۰ تا ۲ · مقدمه و اهداف مشترک',
      content: (
        <div className="space-y-6">
          <p className="text-xl text-slate-200 leading-relaxed font-medium">
            با درود به مدیرعامل محترم و تیم متخصصان هلدینگ؛ هدف این نشست هم‌اندیشی، ارائه ابزارهای کاربردی برای تقویت پیوستگی خطوط تولید ژنریک، مدیریت بهینه سورس‌های ارزی مواد اولیه و کاهش زمان انتظار پاسخ به سازمان غذا و داروست.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-teal-400 font-bold block text-sm">۱. تمرکز بر تولید ژنریک و بهره‌وری</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                رویکرد ما کشف مولکول جدید نیست؛ بلکه پایش فوری ناخالصی‌ها و کاهش ریسک شکست در فرمولاسیون‌های جاری است.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-cyan-400 font-bold block text-sm">۲. مدیریت تغییر سورس‌های ارزی</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                ارزیابی فوری و این‌سیلیکو پروفایل سمیت و ناخالصی‌های سورس‌های جدید هندی/چینی پیش از ورود محموله.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="text-amber-400 font-bold block text-sm">۳. چارچوب پایلوت مشترک و شفاف</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                سنجش عملیاتی تنها روی ۵ تا ۱۰ ماده منتخب متخصصان خود هلدینگ، در محیط کاملاً امن On-Premise بدون هرگونه تعهد بعدی.
              </p>
            </div>
          </div>
        </div>
      ),
      speakerNotes: {
        BUSINESS: 'تاکید بر اینکه اولویت ما صیانت از جریان نقدینگی و پاسخ‌گویی به نیازهای جاری خطوط تولید هلدینگ است.',
        PHARMA: 'آمادگی جهت پاسخ به سوالات پیرامون ناخالصی‌های نیتروزآمینی و مقایسه COA سورس‌های جدید ماده مؤثره.',
        AI: 'اطمینان‌بخشی به تیم IT پیرامون آمادگی کامل کانتینرهای ایزوله On-Premise و عدم نیاز به وب.'
      }
    },
    {
      title: 'واکاوی چالش‌های عملیاتی: خواب سرمایه، نوسان سورس‌های ارزی و پرونده‌های CTD',
      timing: 'دقیقه ۲ تا ۵ · بررسی میدانی گلوگاه‌ها',
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-900/40 space-y-3">
              <div className="text-rose-400 font-bold text-sm">گلوگاه‌های عملیاتی در چرخه تجاری‌سازی:</div>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✖</span>
                  <span><strong>معطلی در سازمان غذا و دارو:</strong> تاخیر ۶ تا ۱۲ ماهه در پاسخ به استعلامات ناخالصی و پایداری پرونده CTD.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✖</span>
                  <span><strong>شکست در آزمون‌های تطابق زیستی (BE):</strong> هزینه گزاف ۱ تا ۳ میلیارد تومانی هر بار تکرار آزمون به دلیل بروز عوارض جانبی یا عدم جذب مناسب.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">✖</span>
                  <span><strong>رسوب سرمایه در گردش:</strong> خواب سرمایه در خط تولید و دوره وصول مطالبات طولانی در زنجیره توزیع.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-teal-950/20 border border-teal-900/40 space-y-3">
              <div className="text-teal-400 font-bold text-sm">ارزش‌افزوده سامانه‌های تحلیلی این‌سیلیکو:</div>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-bold">✔</span>
                  <span>تولید پیش‌دستانه شناسنامه سم‌شناسی مستند جهت دفاع قوی در جلسات کمیسیون قانونی غذا و دارو.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-bold">✔</span>
                  <span>فیلتر اولیه فرمولاسیون‌ها و ترکیبات جانبی پرریسک پیش از ورود به مراکز کارآزمایی بالینی.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-400 font-bold">✔</span>
                  <span>تضمین پایداری و ایمنی سبد محصولات و پیشگیری از خطر ریکال یا افت سهم بازار.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
      speakerNotes: {
        BUSINESS: 'نشان دادن رابطه مستقیم بین تسریع پاسخ به رگولاتور و آزاد شدن صدها میلیون تومان سود عملیاتی.',
        PHARMA: 'ارائه مثال‌هایی از کامنت‌های رایج سازمان غذا و دارو در خصوص محصولات تجزیه و هشدارهای ICH M7.',
        AI: 'توضیح سرعت فوق‌العاده پردازش این‌سیلیکو در مقایسه با ماه‌ها تاخیر آزمون‌های تجربی موازی.'
      }
    },
    {
      title: 'محورهای هم‌اندیشی و شناخت اولویت‌ها: مدیریت ارشد، تیم داروسازی و IT',
      timing: 'دقیقه ۵ تا ۱۵ · تبادل نظر و هم‌فکری تخصصی',
      content: (
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 leading-relaxed">
            محورهای اصلی گفت‌وگو جهت تطبیق حداکثری ابزارهای فناوری با اولویت‌های کلیدی هلدینگ:
          </div>

          <div className="space-y-3 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-slate-950 border border-amber-500/30">
              <span className="font-bold text-amber-300 block mb-1">محور مدیریت ارشد و مالی:</span>
              <p className="text-slate-200">
                بررسی میزان خواب سرمایه در پروژه‌های راکد و تعیین پرسودترین اقلام دارویی که شتاب‌دهی به تایید آن‌ها بالاترین بازده نقدی را ایجاد می‌کند.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-teal-500/30">
              <span className="font-bold text-teal-300 block mb-1">محور تیم داروسازی و کیفیت:</span>
              <p className="text-slate-200">
                بررسی چالش‌های موجود در غربالگری ناخالصی‌ها، پایش تغییر سورس‌های ماده مؤثره ارزی و تجارب قبلی در آزمون‌های تطابق زیستی (BE).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30">
              <span className="font-bold text-cyan-300 block mb-1">محور فناوری اطلاعات و زیرساخت:</span>
              <p className="text-slate-200">
                بررسی ضوابط استقرار امن On-Premise در کانتینرهای ایزوله، تضمین عدم خروج داده‌ها از شبکه محلی و سازگاری با زیرساخت‌های سرور هلدینگ.
              </p>
            </div>
          </div>
        </div>
      ),
      speakerNotes: {
        BUSINESS: 'شنیدن دغدغه‌های مدیرعامل پیرامون سبد محصولات اولویت‌دار هلدینگ در سال مالی جاری.',
        PHARMA: 'همدلی با تیم داروسازی و تاکید بر اینکه تجربه بالینی و آزمایشگاهی آنان سنگ بنای موفقیت پروژه است.',
        AI: 'بررسی مشخصات سرورهای لوکال با مدیر IT جهت آماده‌سازی ایمیج Docker در کمتر از ۲۴ ساعت.'
      }
    },
    {
      title: 'بررسی عملیاتی مدل غربالگری سمیت کبدی (DILI In Silico Engine)',
      timing: 'دقیقه ۱۵ تا ۱۸ · نمایش زنده و شفاف خروجی‌ها',
      content: (
        <div className="space-y-6">
          <p className="text-base text-slate-300 leading-relaxed">
            بررسی نحوه ارزیابی ساختار شیمیایی، هشدارهای بیوشیمیایی و دامنه کاربرد مدل بر روی مولکول‌های شناخته‌شده مرجع:
          </p>

          <div className="p-5 rounded-2xl bg-slate-900 border border-teal-500/50 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-teal-400">آزمون بنچ‌مارک: تروگلیتازون vs ایبوپروفن</span>
                <div className="text-lg font-bold text-white">انطباق خروجی هوش مصنوعی با شواهد بالینی مرجع FDA</div>
              </div>
              <button
                onClick={onNavigateToDemo}
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors"
              >
                مشاهده کنسول دمو
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-slate-950 border border-rose-900/40">
                <span className="text-rose-400 font-bold block mb-1">تروگلیتازون (جمع‌آوری از بازار):</span>
                <p className="text-slate-300">امتیاز سمیت ۹۴/۱۰۰، شناسایی متابولیت کینون متانید و مهار شدید پمپ صفراوی BSEP.</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-950 border border-emerald-900/40">
                <span className="text-emerald-400 font-bold block mb-1">ایبوپروفن (ایمن و OTC):</span>
                <p className="text-slate-300">امتیاز سمیت ۱۹/۱۰۰، فاقد هشدارهای ساختاری حاد، هیدروکسیلاسیون بی‌خطر.</p>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium">
              شفافیت علمی کامل: ماژول سمیت کبدی (DILI) آماده بهره‌برداری است؛ ماژول‌های سمیت قلبی (hERG)، کلیوی و عصبی در نقشه راه توسعه مشترک قرار دارند.
            </div>
          </div>
        </div>
      ),
      speakerNotes: {
        BUSINESS: 'نمایش کارایی فوری و سادگی کاربری داشبورد تحلیلی در تصمیم‌گیری‌های مدیریتی.',
        PHARMA: 'توضیح اهمیت بیولوژیک هشدارهای ساختاری (Toxicophores) و مکانیسم آسیب میتوکندریایی برای تیم داروسازی.',
        AI: 'نشان دادن خروجی‌های استاندارد با فرمت اکسل و PDF و تبیین ریاضی دامنه کاربرد (Applicability Domain).'
      }
    },
    {
      title: 'چارچوب پایلوت مشترک ۶۰ تا ۹۰ روزه: گام‌های اجرایی، شاخص‌های موفقیت و مدل همکاری',
      timing: 'دقیقه ۱۸ تا ۲۰ · تصمیم‌گیری و گام‌های بعدی',
      content: (
        <div className="space-y-5">
          <p className="text-base text-slate-200 leading-relaxed font-semibold">
            پیشنهاد مشخص و شفاف برای آغاز ارزیابی عملیاتی در هلدینگ:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="font-bold text-teal-400 block">۱. انتخاب اقلام پایلوت:</span>
              <p className="text-slate-300 leading-relaxed">
                انتخاب ۵ تا ۱۰ ماده، ناخالصی یا سورس جدید توسط متخصصین محترم داروسازی خود هلدینگ.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="font-bold text-cyan-400 block">۲. بستر امن فنی:</span>
              <p className="text-slate-300 leading-relaxed">
                استقرار کانتینر On-Premise داخل سرور هلدینگ، کاملاً ایزوله، بدون اتصال اینترنت و با مالکیت ۱۰۰٪ داده‌ها.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
              <span className="font-bold text-amber-400 block">۳. شاخص‌های عددی و مدل مالی:</span>
              <p className="text-slate-300 leading-relaxed">
                همخوانی بالای ۸۵٪ با ارزیابی‌های تجربی؛ هزینه پایلوت کاملاً محدود و قطعی بدون هرگونه تعهد خرید بعدی.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-teal-950/30 border border-teal-500/50 flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-sm font-bold text-white block">گام بعدی پیشنهادی:</span>
              <p className="text-xs text-teal-200">
                برگزاری جلسه کوتاه ۳۰ دقیقه‌ای با کارشناس محترم دارویی و مدیر IT هلدینگ جهت نهایی‌سازی لیست مواد پایلوت و راه‌اندازی کانتینر.
              </p>
            </div>
          </div>
        </div>
      ),
      speakerNotes: {
        BUSINESS: 'توافق بر سر برگزاری جلسه فنی هماهنگی پایلوت و سپاسگزاری از وقت مدیریت ارشد.',
        PHARMA: 'اعلام آمادگی برای دریافت لیست اولیه مولکول‌ها از تیم داروسازی.',
        AI: 'هماهنگی با تیم IT برای ارسال مستندات استقرار On-Premise.'
      }
    }
  ];

  const current = slides[currentSlide];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950 text-white flex flex-col overflow-hidden">
      {/* Presentation Top Bar */}
      <div className="h-16 px-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 border border-teal-500/40">
            حالت ارائه زنده · اسلاید {currentSlide + 1} از {slides.length}
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">{current.timing}</span>
        </div>

        {/* 20-Min Live Countdown Timer */}
        <div className="flex items-center gap-3 bg-slate-950 px-3.5 py-1.5 rounded-lg border border-slate-800">
          <Clock className="w-4 h-4 text-teal-400" />
          <span className="font-mono text-base font-bold text-white tracking-widest tabular-nums">
            {formatTimer(timeLeft)}
          </span>
          <button
            onClick={() => setTimerRunning(!timerRunning)}
            className="p-1 text-slate-400 hover:text-white"
            title={timerRunning ? 'توقف موقت' : 'شروع تایمر'}
          >
            {timerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => {
              setTimerRunning(false);
              setTimeLeft(20 * 60);
            }}
            className="p-1 text-slate-400 hover:text-white"
            title="ریست زمان"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        <button
          onClick={onClose}
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          title="خروج از حالت ارائه"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Slide Stage */}
      <div className="flex-1 overflow-y-auto p-6 sm:p-12 max-w-5xl mx-auto w-full flex flex-col justify-between">
        <div className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono text-teal-400 uppercase tracking-wider block">
              {current.timing}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              {current.title}
            </h2>
          </div>

          <div className="pt-2">{current.content}</div>
        </div>

        {/* Speaker Notes Drawer for Our 3 Team Roles */}
        <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wide flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-teal-400" />
              <span>دیدگاه‌های تخصصی و نکات تحلیلی نشست (راهبری کسب‌وکار / داروسازی / هوش مصنوعی):</span>
            </span>

            {/* Role Switcher */}
            <div className="flex items-center gap-1 text-[11px] font-medium">
              <button
                onClick={() => setActiveSpeakerRole('BUSINESS')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeSpeakerRole === 'BUSINESS'
                    ? 'bg-amber-500/20 text-amber-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                راهبری کسب‌وکار
              </button>
              <button
                onClick={() => setActiveSpeakerRole('PHARMA')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeSpeakerRole === 'PHARMA'
                    ? 'bg-teal-500/20 text-teal-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                داروسازی و کیفیت
              </button>
              <button
                onClick={() => setActiveSpeakerRole('AI')}
                className={`px-2.5 py-1 rounded transition-colors ${
                  activeSpeakerRole === 'AI'
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                هوش مصنوعی و IT
              </button>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 leading-relaxed font-mono">
            {current.speakerNotes[activeSpeakerRole]}
          </div>
        </div>
      </div>

      {/* Presentation Footer Controls */}
      <div className="h-16 px-6 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentSlide ? 'w-8 bg-teal-400' : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentSlide((prev) => Math.max(prev - 1, 0))}
            disabled={currentSlide === 0}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center gap-1"
          >
            <ChevronRight className="w-4 h-4" />
            <span>اسلاید قبلی</span>
          </button>

          <button
            onClick={() => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))}
            disabled={currentSlide === slides.length - 1}
            className="px-4 py-2 text-xs font-bold rounded-lg bg-teal-400 hover:bg-teal-300 text-slate-950 disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
          >
            <span>اسلاید بعدی</span>
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
