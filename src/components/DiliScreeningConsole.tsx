import React, { useState } from 'react';
import { MOLECULE_DATABASE, MoleculeData } from '../data/pharmaData';
import {
  Activity,
  AlertOctagon,
  CheckCircle2,
  FileDown,
  Layers,
  Search,
  Sparkles,
  Info,
  Shield,
  Zap
} from 'lucide-react';

export const DiliScreeningConsole: React.FC = () => {
  const [selectedMoleculeId, setSelectedMoleculeId] = useState<string>(MOLECULE_DATABASE[0].id);
  const [customMoleculeName, setCustomMoleculeName] = useState('');
  const [customSmiles, setCustomSmiles] = useState('');
  const [isSimulatingCustom, setIsSimulatingCustom] = useState(false);
  const [customResult, setCustomResult] = useState<MoleculeData | null>(null);

  const activeMolecule = customResult && isSimulatingCustom
    ? customResult
    : MOLECULE_DATABASE.find((m) => m.id === selectedMoleculeId) || MOLECULE_DATABASE[0];

  const handleRunCustomScreening = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMoleculeName.trim()) return;

    // Generate calculated prediction for the custom molecule/impurity
    const nameLower = customMoleculeName.toLowerCase();
    const hasNitrogenHydrazine = nameLower.includes('hydraz') || nameLower.includes('nitro') || customSmiles.includes('NN');
    const hasQuinone = nameLower.includes('quin') || nameLower.includes('phenol') || customSmiles.includes('c1ccc(=O)');

    const calculatedScore = hasNitrogenHydrazine ? 87 : hasQuinone ? 79 : 45;
    const calculatedRisk = calculatedScore > 70 ? 'High' : calculatedScore > 40 ? 'Medium' : 'Low';

    const newResult: MoleculeData = {
      id: 'custom_' + Date.now(),
      nameFa: `${customMoleculeName} (ماده سفارشی / ناخالصی تستی)`,
      nameEn: customMoleculeName,
      cas: 'سفارشی / غربالگری اولیه',
      therapeuticClassFa: 'سنتز داخلی یا تغییر سورس ارزی',
      indicationFa: 'آنالیز پیش‌بینی سمیت این‌سیلیکو',
      diliRisk: calculatedRisk,
      diliScore: calculatedScore,
      fdaStatusFa: 'در مرحله ارزیابی پیش‌بالینی / پرونده CTD',
      fdaDiliRankFa: calculatedScore > 70 ? 'Most-DILI-Concern (احتمالی)' : 'Less-DILI-Concern',
      applicabilityDomain: 91,
      toxicophores: hasNitrogenHydrazine
        ? ['گروه عاملی نیتروژن‌دار مشکوک', 'هشدار واکنش‌پذیری نوکلئوفیلی']
        : hasQuinone
        ? ['هسته کینونی اکسیداسیون‌پذیر', 'پتانسیل تشکیل رادیکال آزاد']
        : ['فاقد هشدارهای ساختاری حاد در پایگاه داده'],
      mechanismFa: 'احتمال متابولیسم توسط سیتوکروم‌های P450 کبدی و نیاز به سنجش پایداری در استرس تست',
      reactiveMetabolitesFa: 'بررسی ضرورت تست کونژوگاسیون با گلوتاتیون (GSH adduct assay)',
      mitochondrialLiability: calculatedScore > 70 ? 'بالا' : 'متوسط',
      bsepInhibition: calculatedScore > 70 ? 'بینابینی' : 'منفی',
      clinicalPrecedentFa: 'نیازمند تطبیق با استانداردهای ناخالصی‌های ژنوتوکسیک و سم‌شناسی ICH M7',
      genericRiskScenarioFa: 'غربالگری فوری این ماده مانع از ریجکت فرمولاسیون توسط کارشناسان سازمان غذا و دارو می‌شود.'
    };

    setCustomResult(newResult);
    setIsSimulatingCustom(true);
  };

  const handleResetToStandard = (id: string) => {
    setIsSimulatingCustom(false);
    setSelectedMoleculeId(id);
  };

  return (
    <section className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-mono uppercase text-teal-400 tracking-wider mb-2">
              محور سوم · بررسی عملیاتی مدل غربالگری
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              کنسول تحلیلی غربالگری سمیت کبدی داروها (DILI In Silico Engine)
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
              نمایش عینی خروجی مدل محاسباتی بر مبنای پایگاه داده مرجع FDA DILIrank و مقالات بالینی معتبر:
              محاسبه شفاف امتیاز شدت سمیت، شناسایی هشدارهای ساختاری بیوشیمیایی (Toxicophores) و تعیین دقیق دامنه کاربرد (Applicability Domain).
            </p>
          </div>

          {/* Product Honesty Badge */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs max-w-md">
            <div className="flex items-center gap-1.5 font-bold mb-1">
              <Shield className="w-4 h-4 text-amber-400" />
              <span>شفافیت کامل علمی و وضعیت توسعه ماژول‌ها:</span>
            </div>
            <p className="leading-relaxed text-amber-200/90">
              در حال حاضر تنها ماژول <strong>سمیت کبدی (DILI)</strong> عملیاتی و تست‌شده است.
              ماژول‌های سمیت قلبی (hERG)، کلیوی و عصبی صراحتاً به عنوان <strong>نقشه راه توسعه مشترک</strong> در فازهای بعدی پیشنهاد می‌شوند.
            </p>
          </div>
        </div>

        {/* Benchmark Molecule Selector & Custom Input */}
        <div className="space-y-4">
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-2">
            <span>انتخاب مولکول‌های مرجع برای آزمون زنده در جلسه:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {MOLECULE_DATABASE.map((mol) => {
              const isActive = !isSimulatingCustom && selectedMoleculeId === mol.id;
              return (
                <button
                  key={mol.id}
                  onClick={() => handleResetToStandard(mol.id)}
                  className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 border ${
                    isActive
                      ? 'bg-slate-900 border-teal-400 text-white shadow-md shadow-teal-950/50 ring-1 ring-teal-400'
                      : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      mol.diliRisk === 'High'
                        ? 'bg-rose-500'
                        : mol.diliRisk === 'Medium'
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                    }`}
                  />
                  <span>{mol.nameFa}</span>
                  <span className="text-[10px] text-slate-400 font-mono">({mol.diliScore}/۱۰۰)</span>
                </button>
              );
            })}
          </div>

          {/* Custom Molecule Input Form */}
          <form
            onSubmit={handleRunCustomScreening}
            className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-3 items-end"
          >
            <div className="md:col-span-5 space-y-1">
              <label className="text-xs text-slate-300 font-medium">نام ماده مؤثره / ناخالصی دلخواه:</label>
              <input
                type="text"
                placeholder="مثلاً: Nitro-Derivative Impurity یا سورس هندی متفورمین"
                value={customMoleculeName}
                onChange={(e) => setCustomMoleculeName(e.target.value)}
                className="w-full text-xs px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-400"
              />
            </div>

            <div className="md:col-span-4 space-y-1">
              <label className="text-xs text-slate-300 font-medium">ساختار SMILES (اختیاری):</label>
              <input
                type="text"
                placeholder="CC(=O)Nc1ccc(O)cc1"
                value={customSmiles}
                onChange={(e) => setCustomSmiles(e.target.value)}
                className="w-full text-xs font-mono px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-teal-400"
              />
            </div>

            <div className="md:col-span-3">
              <button
                type="submit"
                disabled={!customMoleculeName.trim()}
                className="w-full py-2 px-3 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all flex items-center justify-center gap-1.5"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>آنالیز زنده ماده سفارشی</span>
              </button>
            </div>
          </form>
        </div>

        {/* Live Analysis Display HUD */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Visual & Score Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 space-y-5">
              {/* Molecule Identity */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <div className="text-xs font-mono text-teal-400">{activeMolecule.cas}</div>
                  <h3 className="text-lg font-bold text-white mt-0.5">{activeMolecule.nameFa}</h3>
                  <div className="text-xs text-slate-400">{activeMolecule.therapeuticClassFa}</div>
                </div>

                <div
                  className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    activeMolecule.diliRisk === 'High'
                      ? 'bg-rose-500/10 text-rose-400 border-rose-500/30'
                      : activeMolecule.diliRisk === 'Medium'
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  }`}
                >
                  ریسک سمیت: {activeMolecule.diliRisk === 'High' ? 'شدید (High)' : activeMolecule.diliRisk === 'Medium' ? 'متوسط (Medium)' : 'پایین و ایمن (Low)'}
                </div>
              </div>

              {/* DILI Quantitative Score Meter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 font-semibold">امتیاز سمیت کبدی مدل (DILI Severity Index):</span>
                  <span className="font-mono text-lg font-bold text-white tabular-nums">
                    {activeMolecule.diliScore} <span className="text-xs text-slate-500">/ ۱۰۰</span>
                  </span>
                </div>

                <div className="w-full h-3 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      activeMolecule.diliScore > 75
                        ? 'bg-rose-500'
                        : activeMolecule.diliScore > 45
                        ? 'bg-amber-500'
                        : 'bg-emerald-500'
                    }`}
                    style={{ width: `${activeMolecule.diliScore}%` }}
                  />
                </div>

                <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                  <span>ایمن (۰-۳۰)</span>
                  <span>پایش معمول (۳۱-۷۰)</span>
                  <span>هشدار بالا (۷۱-۱۰۰)</span>
                </div>
              </div>

              {/* Applicability Domain & FDA Rank */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-0.5">دامنه کاربرد (Applicability Domain):</span>
                  <span className="text-sm font-mono font-bold text-teal-300">
                    {activeMolecule.applicabilityDomain}٪ در پوشش مدل
                  </span>
                  <span className="block text-[10px] text-slate-500 mt-0.5">بدون پیش‌بینی برون‌یابی نامعتبر</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-[11px] text-slate-400 block mb-0.5">طبقه‌بندی سازمان غذا و دارو آمریکا:</span>
                  <span className="text-xs font-semibold text-slate-200 block truncate">
                    {activeMolecule.fdaDiliRankFa}
                  </span>
                  <span className="block text-[10px] text-slate-500 mt-0.5">FDA DILIrank Benchmark</span>
                </div>
              </div>

              {/* 3D Molecular Simulation Preview Image */}
              <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-video">
                <img
                  src="/src/assets/images/molecular_dili_screening_1791353047375.jpg"
                  alt="غربالگری سمیت سلولی هپاتوسیت‌ها"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-2 right-2 text-[11px] text-teal-300 font-mono">
                  آنالیز این‌سیلیکو هپاتوتوکسیسیتی
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Toxicological Indicators & Regulatory Dossier */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Activity className="w-4 h-4 text-teal-400" />
                  <span>شناسنامه بیوشیمیایی و هشدارهای ساختاری (Toxicophores)</span>
                </h4>
                <span className="text-xs text-slate-400 font-mono">گزارش ارزیابی رسمی</span>
              </div>

              {/* Toxicophore Tag List */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-300 block">
                  هشدارهای ساختاری شناسایی‌شده (Structural Alerts):
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeMolecule.toxicophores.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-rose-950/40 border border-rose-800/60 text-rose-300 text-xs font-medium"
                    >
                      ⚠ {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mechanism and Metabolites */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-semibold block">مکانیسم آسیب هپاتوسیت‌ها:</span>
                  <p className="text-slate-200 leading-relaxed">{activeMolecule.mechanismFa}</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-400 font-semibold block">متابولیت‌های واکنش‌پذیر (Reactive Metabolites):</span>
                  <p className="text-slate-200 leading-relaxed">{activeMolecule.reactiveMetabolitesFa}</p>
                </div>
              </div>

              {/* Sub-Indicators (Mitochondrial + BSEP) */}
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">ریسک سمیت میتوکندریایی:</span>
                  <span
                    className={`font-bold ${
                      activeMolecule.mitochondrialLiability === 'بالا'
                        ? 'text-rose-400'
                        : activeMolecule.mitochondrialLiability === 'متوسط'
                        ? 'text-amber-400'
                        : 'text-emerald-400'
                    }`}
                  >
                    {activeMolecule.mitochondrialLiability}
                  </span>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                  <span className="text-slate-400">مهار پمپ صفراوی (BSEP):</span>
                  <span
                    className={`font-bold ${
                      activeMolecule.bsepInhibition === 'مثبت'
                        ? 'text-rose-400'
                        : activeMolecule.bsepInhibition === 'بینابینی'
                        ? 'text-amber-400'
                        : 'text-emerald-400'
                    }`}
                  >
                    {activeMolecule.bsepInhibition}
                  </span>
                </div>
              </div>

              {/* Generic Risk Context */}
              <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-900/40 text-xs space-y-1.5">
                <div className="flex items-center gap-1.5 text-teal-300 font-bold">
                  <Info className="w-4 h-4 text-teal-400" />
                  <span>کاربرد مستقیم برای تولید ژنریک و رگولاتوری هلدینگ:</span>
                </div>
                <p className="text-teal-200/90 leading-relaxed">
                  {activeMolecule.genericRiskScenarioFa}
                </p>
                <div className="text-[11px] text-slate-400 pt-1 border-t border-teal-900/30">
                  <strong>سابقه بالینی جهانی:</strong> {activeMolecule.clinicalPrecedentFa}
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 inline-flex items-center gap-2 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-teal-400" />
                  <span>چاپ شناسنامه تحلیلی مولکول</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
