import React, { useState } from 'react';
import { USER_PROFILE } from '../data/mockData';
import { CertificateModal } from './modals/CertificateModal';

export const ProfileView: React.FC = () => {
  const [user, setUser] = useState(USER_PROFILE);
  const [showCertificate, setShowCertificate] = useState(false);
  const [activeModal, setActiveModal] = useState<'notifications' | 'language' | 'feedback' | 'help' | 'terms' | 'logout' | null>(null);

  // Modal feedback state
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSendFeedback = () => {
    if (!feedbackText.trim()) return;
    setFeedbackSent(true);
    setTimeout(() => {
      setFeedbackSent(false);
      setFeedbackText('');
      setActiveModal(null);
    }, 1500);
  };

  return (
    <div className="space-y-8 pb-28 pt-20 px-4 max-w-2xl mx-auto">
      {/* Profile Header */}
      <section className="flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full border-4 border-[#6c2eb6]/40 shadow-xl overflow-hidden bg-[#242531]">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={() => alert('ပရိုဖိုင် ပုံပြင်ဆင်ရန် ဓာတ်ပုံရွေးချယ်ပါ')}
            className="absolute bottom-0 right-0 bg-[#6c2eb6] text-white p-2 rounded-full shadow-lg active:scale-90 transition-transform cursor-pointer"
            title="Edit Photo"
          >
            <span className="material-symbols-outlined text-sm">edit</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold text-white">{user.name}</h2>
        <span className="text-xs text-[#aaaab9] bg-[#1e1f29] border border-white/5 px-3 py-1 rounded-full mt-1.5 font-medium">
          Student ID: {user.studentId}
        </span>
      </section>

      {/* Progress & Certificates */}
      <section>
        <h3 className="font-bold text-base text-white mb-3">လုပ်ဆောင်ချက်များနှင့် လက်မှတ်များ</h3>
        <div className="glass-card rounded-3xl p-6 border border-white/10 relative overflow-hidden shadow-xl space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#6c2eb6]/20 text-[#d8b9ff] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                workspace_premium
              </span>
            </div>
            <div>
              <p className="font-bold text-white text-base">2 Courses Completed</p>
              <p className="text-xs text-[#aaaab9]">Thai for Beginners Level 1 & 2</p>
            </div>
          </div>

          <div className="w-full bg-[#12131b] rounded-full h-2">
            <div className="bg-[#6c2eb6] h-2 rounded-full" style={{ width: '65%' }} />
          </div>

          <button
            onClick={() => setShowCertificate(true)}
            className="w-full bg-[#6c2eb6] hover:bg-[#8038d4] text-white py-3 px-6 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-[#6c2eb6]/30 transition-all active:scale-95 cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">download</span>
            Download Certificate
          </button>
        </div>
      </section>

      {/* Settings List */}
      <section>
        <h3 className="font-bold text-base text-white mb-3">ဆက်တင်များ</h3>
        <div className="bg-[#181922] rounded-3xl border border-white/10 overflow-hidden divide-y divide-white/5 shadow-xl">
          {/* Notifications Toggle */}
          <button
            onClick={() => setActiveModal('notifications')}
            className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#aaaab9]">notifications</span>
              <span className="font-medium text-sm text-[#e5e4f5]">အသိပေးချက်များ</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#d8b9ff]">
                {user.notificationsEnabled ? 'ဖွင့်ထားသည်' : 'ပိတ်ထားသည်'}
              </span>
              <span className="material-symbols-outlined text-sm text-[#747483]">chevron_right</span>
            </div>
          </button>

          {/* Language Selector */}
          <button
            onClick={() => setActiveModal('language')}
            className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#aaaab9]">translate</span>
              <div>
                <span className="block font-medium text-sm text-[#e5e4f5]">ဘာသာစကား</span>
                <span className="block text-xs text-[#d8b9ff] font-medium">{user.language}</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-sm text-[#747483]">chevron_right</span>
          </button>

          {/* Feedback */}
          <button
            onClick={() => setActiveModal('feedback')}
            className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#aaaab9]">rate_review</span>
              <span className="font-medium text-sm text-[#e5e4f5]">အကြံပြုချက်ပေးရန်</span>
            </div>
            <span className="material-symbols-outlined text-sm text-[#747483]">chevron_right</span>
          </button>

          {/* Help */}
          <button
            onClick={() => setActiveModal('help')}
            className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#aaaab9]">help</span>
              <span className="font-medium text-sm text-[#e5e4f5]">အကူအညီ</span>
            </div>
            <span className="material-symbols-outlined text-sm text-[#747483]">chevron_right</span>
          </button>

          {/* Terms */}
          <button
            onClick={() => setActiveModal('terms')}
            className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#aaaab9]">policy</span>
              <span className="font-medium text-sm text-[#e5e4f5]">စည်းကမ်းသတ်မှတ်ချက်များ</span>
            </div>
            <span className="material-symbols-outlined text-sm text-[#747483]">chevron_right</span>
          </button>
        </div>
      </section>

      {/* Logout Button */}
      <section>
        <button
          onClick={() => setActiveModal('logout')}
          className="w-full p-4 flex items-center justify-center gap-2 text-[#f97386] hover:bg-[#f97386]/10 rounded-2xl border border-[#f97386]/20 font-bold text-sm transition-all active:scale-95 cursor-pointer"
        >
          <span className="material-symbols-outlined">logout</span>
          ထွက်မည်
        </button>
        <p className="text-center text-[#747483] text-xs mt-6">Version 2.4.1 (Build 102)</p>
      </section>

      {/* Certificate Modal */}
      {showCertificate && (
        <CertificateModal user={user} onClose={() => setShowCertificate(false)} />
      )}

      {/* Interactive Feature Modals */}
      {activeModal === 'notifications' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181922] border border-white/10 rounded-3xl p-6 max-w-sm w-full space-y-4 text-center">
            <h3 className="font-bold text-white text-lg">အသိပေးချက် ဆက်တင်များ</h3>
            <p className="text-xs text-[#aaaab9]">သင်တန်းအသစ်များနှင့် သတိပေးချက်များကို လက်ခံရယူမည်။</p>
            <button
              onClick={() => {
                setUser(prev => ({ ...prev, notificationsEnabled: !prev.notificationsEnabled }));
                setActiveModal(null);
              }}
              className="w-full py-3 bg-[#6c2eb6] text-white font-bold text-xs rounded-full cursor-pointer"
            >
              {user.notificationsEnabled ? 'အသိပေးချက် ပိတ်မည်' : 'အသိပေးချက် ဖွင့်မည်'}
            </button>
            <button
              onClick={() => setActiveModal(null)}
              className="text-xs text-[#aaaab9] hover:text-white cursor-pointer"
            >
              မလုပ်တော့ပါ
            </button>
          </div>
        </div>
      )}

      {activeModal === 'language' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181922] border border-white/10 rounded-3xl p-6 max-w-sm w-full space-y-3">
            <h3 className="font-bold text-white text-lg text-center mb-2">ဘာသာစကား ရွေးချယ်ပါ</h3>
            {['မြန်မာ (MM)', 'English (EN)', 'ไทย (TH)'].map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setUser(prev => ({ ...prev, language: lang }));
                  setActiveModal(null);
                }}
                className={`w-full p-3 rounded-2xl border text-xs font-bold text-left cursor-pointer transition-colors ${
                  user.language === lang
                    ? 'bg-[#6c2eb6] border-[#6c2eb6] text-white'
                    : 'bg-[#242531] border-white/5 text-[#aaaab9] hover:text-white'
                }`}
              >
                {lang}
              </button>
            ))}
            <button
              onClick={() => setActiveModal(null)}
              className="w-full text-center text-xs text-[#aaaab9] pt-2 hover:text-white cursor-pointer"
            >
              ပိတ်မည်
            </button>
          </div>
        </div>
      )}

      {activeModal === 'feedback' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181922] border border-white/10 rounded-3xl p-6 max-w-md w-full space-y-4">
            <h3 className="font-bold text-white text-lg text-center">အကြံပြုချက် ပေးပို့ရန်</h3>
            {feedbackSent ? (
              <div className="text-center py-6 text-[#10b981] font-bold text-sm space-y-2">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
                <p>အကြံပြုချက်အတွက် ကျေးဇူးတင်ပါသည်!</p>
              </div>
            ) : (
              <>
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="သင့်အကြံပြုချက် သို့မဟုတ် လိုအပ်ချက်များကို ဤနေရာတွင် ရေးသားပါ..."
                  className="w-full h-32 p-3 bg-[#12131b] border border-white/10 rounded-2xl text-xs text-white placeholder-[#747483] focus:outline-none focus:border-[#6c2eb6]"
                />
                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 text-xs text-[#aaaab9] hover:text-white cursor-pointer"
                  >
                    မလုပ်တော့ပါ
                  </button>
                  <button
                    onClick={handleSendFeedback}
                    className="px-6 py-2.5 bg-[#6c2eb6] text-white rounded-full text-xs font-bold shadow-lg cursor-pointer"
                  >
                    ပေးပို့မည်
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {activeModal === 'help' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181922] border border-white/10 rounded-3xl p-6 max-w-md w-full space-y-4 max-h-[80vh] overflow-y-auto">
            <h3 className="font-bold text-white text-lg text-center">အမေးများသော မေးခွန်းများ (FAQ)</h3>
            <div className="space-y-3 text-xs text-[#e5e4f5]">
              <div className="bg-[#242531] p-3.5 rounded-2xl border border-white/5">
                <p className="font-bold text-[#d8b9ff] mb-1">Q: သင်တန်းကြေး ပေးချေရန် မည်သို့ ပြုလုပ်ရမည်နည်း။</p>
                <p className="text-[#aaaab9]">A: KBZPay, WaveMoney သို့မဟုတ် AYA Pay တို့ဖြင့် လွယ်ကူစွာ ပေးချေနိုင်ပါသည်။</p>
              </div>
              <div className="bg-[#242531] p-3.5 rounded-2xl border border-white/5">
                <p className="font-bold text-[#d8b9ff] mb-1">Q: ဗီဒီယိုသင်ခန်းစာများကို အကြိမ်ကြိမ် ပြန်ကြည့်နိုင်ပါသလား။</p>
                <p className="text-[#aaaab9]">A: ဟုတ်ကဲ့ပါ၊ ဝယ်ယူပြီးပါက သက်တမ်းအကန့်အသတ်မရှိ ပြန်လည်ကြည့်ရှုနိုင်ပါသည်။</p>
              </div>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 bg-[#6c2eb6] text-white font-bold text-xs rounded-full cursor-pointer mt-2"
            >
              ပိတ်မည်
            </button>
          </div>
        </div>
      )}

      {activeModal === 'terms' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181922] border border-white/10 rounded-3xl p-6 max-w-md w-full space-y-4">
            <h3 className="font-bold text-white text-lg text-center">စည်းကမ်းသတ်မှတ်ချက်များ</h3>
            <div className="text-xs text-[#aaaab9] space-y-2 leading-relaxed bg-[#12131b] p-4 rounded-2xl max-h-48 overflow-y-auto">
              <p>၁။ Sawasdee Thai မိုဘိုင်းနှင့် ဝဘ်အက်ပလီကေးရှင်းရှိ သင်တန်းမူပိုင်ခွင့်များကို ကူးယူဖြန့်ဝေခြင်း မပြုရပါ။</p>
              <p>၂။ မိမိအကောင့်၏ စကားဝှက်နှင့် လုံခြုံရေးကို ကိုယ်တိုင် ထိန်းသိမ်းရပါမည်။</p>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full py-2.5 bg-[#6c2eb6] text-white font-bold text-xs rounded-full cursor-pointer"
            >
              လက်ခံပါသည်
            </button>
          </div>
        </div>
      )}

      {activeModal === 'logout' && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181922] border border-white/10 rounded-3xl p-6 max-w-sm w-full space-y-4 text-center">
            <h3 className="font-bold text-white text-lg">အကောင့်မှ ထွက်မှာ သေချာပါသလား။</h3>
            <p className="text-xs text-[#aaaab9]">ထွက်လိုက်ပါက သင်ယူမှုမှတ်တမ်းများ သိမ်းဆည်းရန် ပြန်လည် ဝင်ရောက်ရပါမည်။</p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => setActiveModal(null)}
                className="flex-1 py-2.5 bg-[#242531] text-[#e5e4f5] font-bold text-xs rounded-full cursor-pointer"
              >
                မထွက်တော့ပါ
              </button>
              <button
                onClick={() => {
                  alert('အကောင့်မှ ထွက်လိုက်ပါပြီ။');
                  setActiveModal(null);
                }}
                className="flex-1 py-2.5 bg-[#f97386] text-white font-bold text-xs rounded-full cursor-pointer"
              >
                ထွက်မည်
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
