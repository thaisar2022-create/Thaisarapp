import React from 'react';
import { TEACHERS, TESTIMONIALS } from '../data/mockData';
import { NavTab, Teacher } from '../types';

interface HomeViewProps {
  onNavigateTab: (tab: NavTab) => void;
  onSelectTeacher?: (teacher: Teacher) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigateTab, onSelectTeacher }) => {
  return (
    <div className="space-y-10 pb-28 pt-20 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative px-4 py-8 md:py-20 overflow-hidden rounded-3xl bg-gradient-to-b from-[#181922]/80 to-[#0d0e14] border border-white/5">
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="bg-[#6c2eb6]/20 border border-[#6c2eb6]/40 text-[#d8b9ff] px-4 py-1.5 rounded-full text-xs font-bold mb-6 inline-block shadow-sm">
            Thaisar မှကြိုဆိုပါတယ်
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#d8b9ff] mb-4 tracking-tight">
            Thaisar-ထိုင်းစာ
          </h2>
          <p className="text-base md:text-lg text-[#aaaab9] mb-8 leading-relaxed max-w-lg">
            မြန်မာနိုင်ငံသားများအတွက် ထိုင်းဘာသာစကား သင်ယူရေးဌာန
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button
              onClick={() => onNavigateTab('search')}
              className="bg-[#6c2eb6] hover:bg-[#8038d4] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-[#6c2eb6]/40 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">school</span>
              သင်တန်းများကြည့်မည်
            </button>
            <button
              onClick={() => onNavigateTab('free')}
              className="bg-[#059669] hover:bg-[#047857] text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-[#059669]/30 transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">stars</span>
              အခမဲ့လေ့လာရန်
            </button>
          </div>
        </div>
      </section>

      {/* Teachers Preview Section */}
      <section>
        <div className="flex items-end justify-between mb-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">ကျွန်ုပ်တို့၏ ဆရာ/ဆရာမများ</h3>
            <p className="text-[#aaaab9] text-xs md:text-sm mt-1">အတွေ့အကြုံရှိ ကျွမ်းကျင်ဆရာများ</p>
          </div>
          <button
            onClick={() => onNavigateTab('search')}
            className="text-[#d8b9ff] hover:underline text-xs font-bold flex items-center gap-1 cursor-pointer"
          >
            အားလုံးကြည့်ရန် <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="flex overflow-x-auto gap-4 no-scrollbar pb-4 -mx-4 px-4">
          {TEACHERS.map((t) => (
            <div
              key={t.id}
              onClick={() => onSelectTeacher && onSelectTeacher(t)}
              className="flex-shrink-0 w-64 glass-card p-6 rounded-3xl border border-white/10 hover:border-[#6c2eb6]/50 transition-all hover:shadow-xl cursor-pointer group"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-full object-cover rounded-full ring-4 ring-[#6c2eb6]/40 group-hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-0 right-0 bg-[#059669] w-6 h-6 rounded-full border-2 border-[#181922]" />
              </div>
              <div className="text-center">
                <h4 className="font-bold text-base text-white mb-1">{t.name}</h4>
                <p className="text-[#aaaab9] text-xs mb-3">{t.title}</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {t.tags.map((tag, idx) => (
                    <span key={idx} className="bg-[#12131b] text-[#d8b9ff] px-2.5 py-1 rounded-full text-[11px] font-medium border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-6">
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-white">Facebook မှ ကျောင်းသားများ၏ စကားသံများ</h3>
          <div className="flex justify-center gap-1 mt-2 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="glass-card p-6 rounded-3xl border border-white/10 relative hover:border-[#6c2eb6]/30 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-full ${review.avatarBg} flex items-center justify-center font-bold ${review.textColor} shadow-md`}>
                  {review.initials}
                </div>
                <div>
                  <h5 className="font-bold text-white text-base leading-tight">{review.author}</h5>
                  <p className="text-xs text-[#aaaab9]">{review.timeAgo}</p>
                </div>
              </div>
              <p className="text-sm text-[#e5e4f5]/90 italic mb-4 leading-relaxed">
                {review.content}
              </p>
              <div className="flex items-center gap-2 text-blue-400 text-xs font-bold">
                <span className="material-symbols-outlined text-base">thumb_up</span>
                Like on Facebook
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
