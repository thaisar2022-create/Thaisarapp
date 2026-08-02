import React, { useState } from 'react';
import { FLASHCARDS } from '../../data/mockData';

interface FlashcardModalProps {
  onClose: () => void;
}

export const FlashcardModal: React.FC<FlashcardModalProps> = ({ onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [learnedCount, setLearnedCount] = useState(0);

  const card = FLASHCARDS[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < FLASHCARDS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    } else {
      setCurrentIndex(FLASHCARDS.length - 1);
    }
  };

  const playAudio = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'th-TH';
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#181922] border border-white/10 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl p-6 relative">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 bg-[#059669]/20 text-[#10b981] rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined">style</span>
            </span>
            <div>
              <h3 className="font-bold text-white text-base">ဝါဟာရ စာကတ်များ</h3>
              <p className="text-xs text-[#aaaab9]">Card {currentIndex + 1} of {FLASHCARDS.length}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer transition-transform active:scale-90"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-[#12131b] rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-[#059669] transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / FLASHCARDS.length) * 100}%` }}
          />
        </div>

        {/* Flip Card Container */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="relative h-64 w-full cursor-pointer perspective-1000 my-2"
        >
          <div
            className={`w-full h-full bg-[#242531] border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-between shadow-2xl transition-all duration-500 transform-style-3d ${
              isFlipped ? 'rotate-y-180 bg-[#1e1f29]' : ''
            }`}
          >
            {!isFlipped ? (
              /* Front of card */
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <span className="px-3 py-1 bg-[#059669]/20 text-[#10b981] rounded-full text-xs font-semibold">
                  {card.category}
                </span>
                <h2 className="text-4xl font-extrabold text-[#d8b9ff]">{card.thai}</h2>
                <p className="text-sm font-medium text-[#10b981]">({card.phonetic})</p>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio(card.thai);
                  }}
                  className="mt-2 p-3 bg-[#6c2eb6]/30 hover:bg-[#6c2eb6] text-white rounded-full transition-all active:scale-90 cursor-pointer flex items-center justify-center"
                  title="Listen Pronunciation"
                >
                  <span className="material-symbols-outlined text-xl">volume_up</span>
                </button>

                <p className="text-xs text-[#aaaab9] animate-pulse">လှန်ရန် နှိပ်ပါ (Tap to see Myanmar meaning)</p>
              </div>
            ) : (
              /* Back of card */
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4 rotate-y-180">
                <span className="px-3 py-1 bg-[#6c2eb6]/20 text-[#d8b9ff] rounded-full text-xs font-semibold">
                  အဓိပ္ပါယ် (Meaning)
                </span>
                <h3 className="text-2xl font-bold text-white">{card.myanmar}</h3>
                {card.exampleSentence && (
                  <p className="text-xs text-[#aaaab9] bg-[#12131b] p-3 rounded-xl border border-white/5 max-w-xs">
                    💡 {card.exampleSentence}
                  </p>
                )}
                <p className="text-xs text-[#aaaab9]">ရှေ့သို့ ဆက်သွားရန် အောက်ပါ ခလုတ်ကို နှိပ်ပါ</p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation & Controls */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
          <button
            onClick={handlePrev}
            className="px-4 py-2.5 bg-[#242531] hover:bg-white/10 text-white rounded-full text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            ယခင်
          </button>

          <button
            onClick={() => {
              setLearnedCount(prev => prev + 1);
              handleNext();
            }}
            className="px-5 py-2.5 bg-[#059669] hover:bg-[#047857] text-white rounded-full text-xs font-bold shadow-lg shadow-[#059669]/30 transition-all active:scale-95 cursor-pointer flex items-center gap-1"
          >
            မှတ်မိပြီ (Learned)
            <span className="material-symbols-outlined text-sm">check</span>
          </button>

          <button
            onClick={handleNext}
            className="px-4 py-2.5 bg-[#242531] hover:bg-white/10 text-white rounded-full text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center gap-1"
          >
            နောက်တစ်ခု
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
