/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroExecutive } from './components/HeroExecutive';
import { PainPointsSection } from './components/PainPointsSection';
import { MeetingPlaybook } from './components/MeetingPlaybook';
import { DiliScreeningConsole } from './components/DiliScreeningConsole';
import { ObjectionMatrix } from './components/ObjectionMatrix';
import { PilotProposalBuilder } from './components/PilotProposalBuilder';
import { PresentationMode } from './components/PresentationMode';
import { ShieldCheck, ArrowUpRight, FileCheck2, Sparkles, Building2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('strategy');
  const [isPresentationOpen, setIsPresentationOpen] = useState<boolean>(false);

  const scrollToSection = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-teal-500/30 selection:text-teal-200">
      {/* 3-Zone Header Contract */}
      <Header
        activeTab={activeTab}
        setActiveTab={scrollToSection}
        onOpenPresentation={() => setIsPresentationOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <div id="strategy">
          <HeroExecutive
            onNavigateToDemo={() => scrollToSection('demo')}
            onNavigateToPlaybook={() => scrollToSection('playbook')}
          />
          <PainPointsSection />
        </div>

        <div id="playbook">
          <MeetingPlaybook
            onNavigateToDemo={() => scrollToSection('demo')}
            onNavigateToPilot={() => scrollToSection('pilot')}
          />
        </div>

        <div id="demo">
          <DiliScreeningConsole />
        </div>

        <div id="objections">
          <ObjectionMatrix />
        </div>

        <div id="pilot">
          <PilotProposalBuilder />
        </div>
      </main>

      {/* Presentation Fullscreen Mode */}
      {isPresentationOpen && (
        <PresentationMode
          onClose={() => setIsPresentationOpen(false)}
          onNavigateToDemo={() => {
            setIsPresentationOpen(false);
            scrollToSection('demo');
          }}
        />
      )}

      {/* Executive Clean Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-xs text-slate-400 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-900 pb-6">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-mono text-xs font-bold">
                PH
              </span>
              <div>
                <div className="font-bold text-white text-sm">پلتفرم ارتقای بهره‌وری و غربالگری دارویی هلدینگ</div>
                <div className="text-[11px] text-slate-500">طراحی‌شده برای تبادل نظر تخصصی و ارزیابی عملیاتی در جلسات C-Level هلدینگ‌های دارویی</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <button
                onClick={() => scrollToSection('pilot')}
                className="hover:text-teal-400 transition-colors"
              >
                منشور پایلوت ۹۰ روزه
              </button>
              <button
                onClick={() => scrollToSection('demo')}
                className="hover:text-teal-400 transition-colors"
              >
                کنسول غربالگری DILI
              </button>
              <button
                onClick={() => scrollToSection('objections')}
                className="hover:text-teal-400 transition-colors"
              >
                پرسش‌ها و دغدغه‌های مدیران
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-500">
            <div>
              تمامی داده‌های سم‌شناسی بر مبنای استاندارد DILIrank و معیارهای ممیزی On-Premise تنظیم گردیده است.
            </div>
            <div>
              جلسه راهبردی هم‌اندیشی مدیریت ارشد، تیم داروسازی و IT هلدینگ
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
