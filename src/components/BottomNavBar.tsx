import React from 'react';
import { NavTab } from '../types';

interface BottomNavBarProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ currentTab, onSelectTab }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 w-full z-40 bg-[#0d0e14]/95 backdrop-blur-xl border-t border-white/10 flex justify-around items-center h-20 px-2 pb-safe max-w-7xl mx-auto shadow-2xl">
      {/* Home */}
      <button
        onClick={() => onSelectTab('home')}
        className={`flex flex-col items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer px-3 py-1 rounded-full ${
          currentTab === 'home'
            ? 'bg-[#6c2eb6] text-white shadow-lg shadow-[#6c2eb6]/40'
            : 'text-[#aaaab9] hover:text-[#e5e4f5]'
        }`}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: currentTab === 'home' ? "'FILL' 1" : "'FILL' 0" }}
        >
          home
        </span>
        <span className="text-[12px] font-medium mt-0.5">ပင်မ</span>
      </button>

      {/* Search */}
      <button
        onClick={() => onSelectTab('search')}
        className={`flex flex-col items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer px-3 py-1 rounded-full ${
          currentTab === 'search'
            ? 'bg-[#6c2eb6] text-white shadow-lg shadow-[#6c2eb6]/40'
            : 'text-[#aaaab9] hover:text-[#e5e4f5]'
        }`}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: currentTab === 'search' ? "'FILL' 1" : "'FILL' 0" }}
        >
          search
        </span>
        <span className="text-[12px] font-medium mt-0.5">ရှာဖွေ</span>
      </button>

      {/* Class */}
      <button
        onClick={() => onSelectTab('class')}
        className={`flex flex-col items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer px-3 py-1 rounded-full ${
          currentTab === 'class'
            ? 'bg-[#6c2eb6] text-white shadow-lg shadow-[#6c2eb6]/40'
            : 'text-[#aaaab9] hover:text-[#e5e4f5]'
        }`}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: currentTab === 'class' ? "'FILL' 1" : "'FILL' 0" }}
        >
          school
        </span>
        <span className="text-[12px] font-medium mt-0.5">Class</span>
      </button>

      {/* Free Resources */}
      <button
        onClick={() => onSelectTab('free')}
        className={`flex flex-col items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer px-3 py-1 rounded-full ${
          currentTab === 'free'
            ? 'bg-[#059669] text-white shadow-lg shadow-[#059669]/40 font-bold'
            : 'text-[#aaaab9] hover:text-[#e5e4f5]'
        }`}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: currentTab === 'free' ? "'FILL' 1" : "'FILL' 0" }}
        >
          stars
        </span>
        <span className="text-[12px] font-medium mt-0.5">အခမဲ့</span>
      </button>

      {/* Profile */}
      <button
        onClick={() => onSelectTab('profile')}
        className={`flex flex-col items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer px-3 py-1 rounded-full ${
          currentTab === 'profile'
            ? 'bg-[#6c2eb6] text-white shadow-lg shadow-[#6c2eb6]/40'
            : 'text-[#aaaab9] hover:text-[#e5e4f5]'
        }`}
      >
        <span
          className="material-symbols-outlined"
          style={{ fontVariationSettings: currentTab === 'profile' ? "'FILL' 1" : "'FILL' 0" }}
        >
          person
        </span>
        <span className="text-[12px] font-medium mt-0.5">ပရိုဖိုင်</span>
      </button>
    </nav>
  );
};
