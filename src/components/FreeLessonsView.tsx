import React, { useState } from 'react';
import { FREE_VIDEOS } from '../data/mockData';
import { FreeVideo } from '../types';
import { VideoPlayerModal } from './modals/VideoPlayerModal';
import { FlashcardModal } from './modals/FlashcardModal';
import { QuizModal } from './modals/QuizModal';

export const FreeLessonsView: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<FreeVideo | null>(null);
  const [showFlashcards, setShowFlashcards] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="space-y-10 pb-28 pt-20 px-4 max-w-7xl mx-auto">
      {/* Hero Banner Section */}
      <section>
        <div className="relative overflow-hidden rounded-[32px] p-6 md:p-10 free-accent-gradient text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="z-10 text-center md:text-left space-y-3">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">အခမဲ့ လေ့လာရန်</h2>
            <p className="text-sm md:text-base opacity-95 max-w-md leading-relaxed">
              ထိုင်းဘာသာစကားကို အခြေခံမှစ၍ အခမဲ့ ဗဟုသုတများဖြင့် ယနေ့ပဲ စတင်လိုက်ပါ။
            </p>
            <div className="pt-2 flex flex-wrap gap-2.5 justify-center md:justify-start">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">verified</span> 100% Free
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">play_circle</span> Video Lessons
              </span>
            </div>
          </div>

          <div className="relative w-44 md:w-56 aspect-square shrink-0">
            <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA96bLXBqwohuQjyWOvkgrOktfb2JDCDT_YmLI_bK0ushvIPPe4AaBxGnvy4mDKawDAiZiz3LtZ74mVPbVbGQFoDeeUzced_N-7iUEoHUEYmZGffR6JMtCTC8N6mVTk_n5yTOLWiV6ByCtdrKOXypyjT3qFcfaHPR8KUgHuone2eb3UIHSeynlih_XixC_ffSihizT-Co0a7dRsCfls0UjSXQKpCTB-8G8HuvtJoim4SaepOlEuALxNYQ"
              alt="Thai Teacher 3D Illustration"
              className="w-full h-full object-contain drop-shadow-2xl relative z-10"
            />
          </div>
        </div>
      </section>

      {/* Free Video Lessons Bento Grid */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-8 bg-[#059669] rounded-full" />
            <h3 className="font-bold text-xl text-white">အခမဲ့ ဗီဒီယို သင်ခန်းစာများ</h3>
          </div>
          <button
            onClick={() => setSelectedVideo(FREE_VIDEOS[0])}
            className="text-[#10b981] font-bold text-xs hover:underline flex items-center gap-1 cursor-pointer"
          >
            အားလုံးကြည့်ရန် <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FREE_VIDEOS.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer bg-[#181922] p-3 rounded-2xl border border-white/10 hover:border-[#059669]/60 transition-all shadow-md hover:shadow-xl"
            >
              <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/95 rounded-full flex items-center justify-center text-[#059669] shadow-lg transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded font-bold">
                  {video.duration}
                </div>
              </div>

              <div className="space-y-1 px-1">
                <h4 className="font-bold text-sm text-white group-hover:text-[#10b981] transition-colors leading-snug">
                  {video.title}
                </h4>
                <p className="text-xs text-[#aaaab9]">{video.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Practice Hub Section */}
      <section>
        <div className="flex items-center gap-2.5 mb-6">
          <span className="w-2.5 h-8 bg-[#6c2eb6] rounded-full" />
          <h3 className="font-bold text-xl text-white">လေ့ကျင့်ရန် နေရာ</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Flashcards Card */}
          <div className="group bg-[#181922] border border-white/10 p-6 md:p-8 rounded-[28px] shadow-lg hover:shadow-2xl hover:border-[#059669]/50 transition-all duration-300 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 space-y-3">
              <div className="w-12 h-12 bg-[#059669]/20 text-[#10b981] rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">style</span>
              </div>
              <h4 className="text-xl font-bold text-white">ဝါဟာရ စာကတ်များ</h4>
              <p className="text-xs md:text-sm text-[#aaaab9] leading-relaxed">
                နေ့စဉ်သုံး စကားလုံးများကို Flashcards များဖြင့် အလွယ်တကူ မှတ်သားနိုင်ပါသည်။
              </p>
              <button
                onClick={() => setShowFlashcards(true)}
                className="bg-[#059669] hover:bg-[#047857] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-[#059669]/30 transition-all active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>စတင်လေ့လာမည်</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Visual Card Stack */}
            <div className="relative w-32 h-40 shrink-0 flex items-center justify-center">
              <div className="w-28 h-36 bg-[#242531] rounded-xl shadow-2xl border border-white/10 flex flex-col items-center justify-center -rotate-6 group-hover:-rotate-12 transition-transform duration-300">
                <div className="text-2xl font-bold text-[#d8b9ff] mb-1">สวัสดี</div>
                <div className="w-8 h-1 bg-[#10b981] rounded-full" />
              </div>
              <div className="absolute w-28 h-36 bg-white/10 rounded-xl border border-white/5 -z-10 translate-x-3 translate-y-2 rotate-6 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>

          {/* Quizzes Card */}
          <div className="group bg-[#181922] border border-white/10 p-6 md:p-8 rounded-[28px] shadow-lg hover:shadow-2xl hover:border-[#6c2eb6]/50 transition-all duration-300 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 space-y-3">
              <div className="w-12 h-12 bg-[#6c2eb6]/20 text-[#d8b9ff] rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-2xl">quiz</span>
              </div>
              <h4 className="text-xl font-bold text-white">ဉာဏ်စမ်း မေးခွန်းများ</h4>
              <p className="text-xs md:text-sm text-[#aaaab9] leading-relaxed">
                သင်ခန်းစာများကို မည်မျှနားလည်သလဲဆိုသည်ကို မေးခွန်းများ ဖြေဆိုပြီး စမ်းသပ်ပါ။
              </p>
              <button
                onClick={() => setShowQuiz(true)}
                className="bg-[#6c2eb6] hover:bg-[#8038d4] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-[#6c2eb6]/40 transition-all active:scale-95 cursor-pointer inline-flex items-center gap-2"
              >
                <span>စတင်ဖြေဆိုမည်</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>

            {/* Quiz Visual Trophy */}
            <div className="relative w-32 h-32 shrink-0 flex items-center justify-center">
              <div className="w-28 h-28 bg-[#6c2eb6]/20 rounded-full flex items-center justify-center relative">
                <span className="material-symbols-outlined text-[#d8b9ff] text-5xl group-hover:scale-110 transition-transform duration-300">
                  emoji_events
                </span>
                <div className="absolute top-0 right-0 bg-[#059669] text-white p-1.5 rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-xs">check_circle</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Gift Banner */}
      <section>
        <div className="glass-card rounded-[32px] p-6 border border-[#059669]/30 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 bg-[#059669] text-white rounded-full flex items-center justify-center shadow-lg shrink-0">
              <span className="material-symbols-outlined text-2xl">stars</span>
            </div>
            <div>
              <h5 className="font-bold text-base text-white">အပတ်စဉ် အခမဲ့ လက်ဆောင်</h5>
              <p className="text-xs text-[#aaaab9]">သင်ခန်းစာသစ်များကို အပတ်တိုင်း ထည့်သွင်းပေးနေပါသည်။</p>
            </div>
          </div>

          <div className="flex -space-x-3 overflow-hidden">
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-[#181922] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlxgpQI7ZNmVnsMYl7mxEJAsBrCvFnWdDKKAgFahFQA0bGyHTDsz5BVa9vq4bouUxTi2rEwBLaP3ZNIRAyXsGgwI-uyACl1tdqHvB14BK4DRDO4WY_w2RsUW5vdJ--Lym45U8iLc3kDxe4KCyjoBpQ_-00nQa4unZmDYaA4v0Ot4oGrChNPxjORhjzzAatVXLnnAUAPHMbmL-n9MDVxNBDCX9DLgzBsHH4yZitJ87TPqrTye1UnO7CCQ"
              alt="User Avatar"
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-[#181922] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnAl_zsTz9O9n83dHELGgEJiS8PmrDLF6fsIk1B-nzaICP7lnLYZVPvoelyaqkTPmLKwUpXTOfEYXYQ9awDddZ1qEHBPJEVHJZ17U6YbjLDjIh9eYMCpDYWsryUI4h2FKIlYBoPzyBtzDJKP-1p_TwtQYRNvMSoG9TUGonuOSLpDwwByzoRzFTazw4x1EPnX6vzuNzLx603D9Tjm8F9wLp8HC4Wgm-Uab_qwgORsfxEvT7zJVzoYld9w"
              alt="User Avatar"
            />
            <img
              className="inline-block h-10 w-10 rounded-full ring-2 ring-[#181922] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQuOL1whS_e3mfcAcJYPSBBNba_3p9M9rn1evYShhplLnXm2XDfW3C0eTnEeYst8x_i4i5i-HnT06QMLlXR8Oxwk-7AdnKGIakmXf_xx9p_d0WbUFv3yaK98aY15Z8WLV1b_Ml5axVAwqLr1dooFeUX9_QuPcgcIkwuorL_ZWJ4Zer_92tC4SrYTTMxPdpJn1B2eQaaBV-2B0Ldevkjdt97YAJ5FIerb60HNbgxug5EXOhMyGol0GtUA"
              alt="User Avatar"
            />
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#242531] ring-2 ring-[#181922] text-[10px] font-bold text-[#d8b9ff]">
              +5k
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {selectedVideo && (
        <VideoPlayerModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
      {showFlashcards && (
        <FlashcardModal onClose={() => setShowFlashcards(false)} />
      )}
      {showQuiz && (
        <QuizModal onClose={() => setShowQuiz(false)} />
      )}
    </div>
  );
};
