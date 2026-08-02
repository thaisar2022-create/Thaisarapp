import React, { useState } from 'react';
import { NOTIFICATIONS } from '../data/mockData';
import { NavTab } from '../types';

interface HeaderProps {
  currentTab: NavTab;
  onOpenMenu: () => void;
  onNavigateTab: (tab: NavTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onOpenMenu, onNavigateTab }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(NOTIFICATIONS);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <>
      <header className="fixed top-0 w-full z-40 backdrop-blur-xl bg-[#0d0e14]/85 border-b border-white/5 shadow-sm flex items-center justify-between px-4 h-16 max-w-7xl left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenMenu}
            className="p-2 text-[#d8b9ff] hover:bg-white/10 rounded-full transition-transform active:scale-95 cursor-pointer flex items-center justify-center"
            title="Menu"
            aria-label="Open navigation menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <button 
            onClick={() => onNavigateTab('home')} 
            className="font-bold text-xl md:text-2xl text-[#d8b9ff] tracking-tight hover:opacity-90 transition-opacity cursor-pointer text-left"
          >
            Thaisar-ထိုင်းစာ
          </button>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {currentTab === 'free' && (
            <span className="bg-[#059669]/20 text-[#10b981] border border-[#059669]/30 px-3 py-1 rounded-full text-xs font-bold tracking-wider">
              FREE
            </span>
          )}

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 mr-2">
            <button
              onClick={() => onNavigateTab('home')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentTab === 'home' ? 'text-[#d8b9ff] font-semibold' : 'text-[#aaaab9] hover:text-[#d8b9ff]'
              }`}
            >
              ပင်မ
            </button>
            <button
              onClick={() => onNavigateTab('search')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentTab === 'search' ? 'text-[#d8b9ff] font-semibold' : 'text-[#aaaab9] hover:text-[#d8b9ff]'
              }`}
            >
              ရှာဖွေ
            </button>
            <button
              onClick={() => onNavigateTab('class')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentTab === 'class' ? 'text-[#d8b9ff] font-semibold' : 'text-[#aaaab9] hover:text-[#d8b9ff]'
              }`}
            >
              Class
            </button>
            <button
              onClick={() => onNavigateTab('free')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentTab === 'free' ? 'text-[#d8b9ff] font-semibold' : 'text-[#aaaab9] hover:text-[#d8b9ff]'
              }`}
            >
              အခမဲ့
            </button>
            <button
              onClick={() => onNavigateTab('profile')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentTab === 'profile' ? 'text-[#d8b9ff] font-semibold' : 'text-[#aaaab9] hover:text-[#d8b9ff]'
              }`}
            >
              ပရိုဖိုင်
            </button>
          </div>

          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-[#d8b9ff] hover:bg-white/10 rounded-full transition-transform active:scale-95 cursor-pointer relative flex items-center justify-center"
              title="Notifications"
              aria-label="View notifications"
            >
              <span className="material-symbols-outlined">notifications</span>
              {unreadCount > 0 && (
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#f97386] rounded-full ring-2 ring-[#0d0e14] animate-pulse" />
              )}
            </button>

            {/* Notifications Dropdown Modal */}
            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 sm:w-96 bg-[#181922] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden text-sm animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="p-4 bg-[#242531] flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#d8b9ff] text-lg">notifications</span>
                    <h3 className="font-bold text-white">အသိပေးချက်များ</h3>
                  </div>
                  {unreadCount > 0 && (
                    <button 
                      onClick={markAllRead}
                      className="text-xs text-[#d8b9ff] hover:underline cursor-pointer"
                    >
                      အားလုံးဖတ်ပြီး
                    </button>
                  )}
                </div>

                <div className="max-h-80 overflow-y-auto divide-y divide-white/5">
                  {notifications.map((n) => (
                    <div 
                      key={n.id} 
                      className={`p-3.5 transition-colors ${!n.read ? 'bg-[#6c2eb6]/15' : 'hover:bg-white/5'}`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-[#e5e4f5] font-medium leading-snug">{n.title}</span>
                        {!n.read && <span className="w-2 h-2 bg-[#d8b9ff] rounded-full shrink-0 mt-1.5 ml-2"></span>}
                      </div>
                      <span className="text-xs text-[#aaaab9]">{n.time}</span>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 bg-[#12131b] text-center border-t border-white/5">
                  <button 
                    onClick={() => setShowNotifications(false)}
                    className="text-xs text-[#aaaab9] hover:text-white cursor-pointer"
                  >
                    ပိတ်မည်
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};
