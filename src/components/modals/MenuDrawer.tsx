import React from 'react';
import { NavTab } from '../../types';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTab: (tab: NavTab) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose, onSelectTab }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-start animate-in fade-in duration-200">
      <div className="bg-[#181922] w-80 max-w-[85vw] h-full border-r border-white/10 shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-left duration-300">
        <div>
          {/* Header */}
          <div className="flex justify-between items-center pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#6c2eb6] flex items-center justify-center font-bold text-white shadow-lg">
                TS
              </div>
              <div>
                <h3 className="font-bold text-white text-lg leading-tight">Thaisar-ထိုင်းစာ</h3>
                <p className="text-xs text-[#aaaab9]">ထိုင်းဘာသာစကား သင်ယူရေး</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer transition-transform active:scale-90"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-6 space-y-2">
            <button
              onClick={() => {
                onSelectTab('home');
                onClose();
              }}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl hover:bg-[#242531] text-[#e5e4f5] font-medium text-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#d8b9ff]">home</span>
              <span>ပင်မ စာမျက်နှာ (Home)</span>
            </button>

            <button
              onClick={() => {
                onSelectTab('search');
                onClose();
              }}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl hover:bg-[#242531] text-[#e5e4f5] font-medium text-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#d8b9ff]">search</span>
              <span>သင်တန်းများ ရှာဖွေရန် (Search)</span>
            </button>

            <button
              onClick={() => {
                onSelectTab('class');
                onClose();
              }}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl hover:bg-[#242531] text-[#e5e4f5] font-medium text-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#d8b9ff]">school</span>
              <span>ဝယ်ထားသော Class များ (My Classes)</span>
            </button>

            <button
              onClick={() => {
                onSelectTab('free');
                onClose();
              }}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl hover:bg-[#242531] text-[#10b981] font-bold text-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#10b981]">stars</span>
              <span>အခမဲ့ လေ့လာရန် (Free Lessons)</span>
            </button>

            <button
              onClick={() => {
                onSelectTab('profile');
                onClose();
              }}
              className="w-full flex items-center gap-3 p-3.5 rounded-2xl hover:bg-[#242531] text-[#e5e4f5] font-medium text-sm transition-all cursor-pointer"
            >
              <span className="material-symbols-outlined text-[#d8b9ff]">person</span>
              <span>ပရိုဖိုင်နှင့် ဆက်တင် (Profile)</span>
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-white/10 text-center space-y-2">
          <p className="text-xs text-[#aaaab9]">Sawasdee Thai Learning Center</p>
          <p className="text-[11px] text-[#747483]">v2.4.1 • Mobile & Web App</p>
        </div>
      </div>
    </div>
  );
};
