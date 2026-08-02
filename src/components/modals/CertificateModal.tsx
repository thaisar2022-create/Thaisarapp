import React, { useRef } from 'react';
import { UserProfile } from '../../types';

interface CertificateModalProps {
  user: UserProfile;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ user, onClose }) => {
  const certRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#181922] border border-white/10 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#d8b9ff] text-2xl">workspace_premium</span>
            <h3 className="font-bold text-white text-base">သင်တန်းဆင်း လက်မှတ် (Certificate)</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer transition-transform active:scale-90"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Printable Certificate Box */}
        <div 
          ref={certRef}
          className="bg-gradient-to-b from-[#1e1f29] to-[#12131b] border-4 border-[#d8b9ff]/40 p-8 rounded-2xl relative text-center space-y-6 shadow-inner print:bg-white print:text-black"
        >
          {/* Decorative Corner Seals */}
          <div className="absolute top-4 left-4 text-[#d8b9ff] opacity-40">
            <span className="material-symbols-outlined text-3xl">verified_user</span>
          </div>
          <div className="absolute top-4 right-4 text-[#d8b9ff] opacity-40">
            <span className="material-symbols-outlined text-3xl">stars</span>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-[#d8b9ff] font-bold block mb-1">
              SAWASDEE THAI LANGUAGE ACADEMY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
              CERTIFICATE OF COMPLETION
            </h2>
            <div className="w-16 h-1 bg-[#d8b9ff] mx-auto mt-2 rounded-full" />
          </div>

          <p className="text-xs text-[#aaaab9]">This is to certify that</p>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#d8b9ff] underline underline-offset-8 decoration-2 decoration-[#6c2eb6]">
            {user.name}
          </h3>
          <p className="text-xs text-[#aaaab9]">Student ID: {user.studentId}</p>

          <p className="text-sm text-[#e5e4f5] max-w-md mx-auto leading-relaxed">
            has successfully completed the coursework for <br />
            <strong className="text-white font-bold">Thai Language Proficiency Level 1 & Level 2</strong>
          </p>

          <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-xs">
            <div>
              <p className="font-bold text-white">Tr. Aye Myat Mon</p>
              <p className="text-[#aaaab9]">Academic Director</p>
            </div>
            <div>
              <p className="font-bold text-white">Sawasdee Thai</p>
              <p className="text-[#aaaab9]">Official Stamp & Seal</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={handlePrint}
            className="px-6 py-3 bg-[#6c2eb6] hover:bg-[#8038d4] text-white rounded-full text-xs font-bold shadow-lg shadow-[#6c2eb6]/40 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">download</span>
            လက်မှတ် ဒေါင်းလုဒ်ဆွဲမည် / Print
          </button>
        </div>
      </div>
    </div>
  );
};
