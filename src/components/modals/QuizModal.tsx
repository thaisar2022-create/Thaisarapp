import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../../data/mockData';

interface QuizModalProps {
  onClose: () => void;
}

export const QuizModal: React.FC<QuizModalProps> = ({ onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx: number) => {
    if (answered) return;
    setSelectedOption(idx);
    setAnswered(true);

    if (idx === question.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setAnswered(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#181922] border border-white/10 rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl p-6 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 bg-[#6c2eb6]/20 text-[#d8b9ff] rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined">quiz</span>
            </span>
            <div>
              <h3 className="font-bold text-white text-base">ဉာဏ်စမ်း မေးခွန်းများ</h3>
              <p className="text-xs text-[#aaaab9]">Question {currentIdx + 1} of {QUIZ_QUESTIONS.length}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer transition-transform active:scale-90"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {!showResult ? (
          <div>
            {/* Progress */}
            <div className="h-1.5 w-full bg-[#12131b] rounded-full overflow-hidden mb-6">
              <div
                className="h-full bg-[#6c2eb6] transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>

            {/* Question Box */}
            <div className="bg-[#242531] p-5 rounded-2xl border border-white/10 mb-6">
              <h4 className="text-base font-bold text-white leading-relaxed">{question.question}</h4>
            </div>

            {/* Options */}
            <div className="space-y-3 mb-6">
              {question.options.map((opt, idx) => {
                let btnStyle = 'bg-[#242531] border-white/5 text-[#e5e4f5] hover:border-[#6c2eb6]/50';

                if (answered) {
                  if (idx === question.correctAnswer) {
                    btnStyle = 'bg-[#059669]/20 border-[#059669] text-[#10b981] font-bold';
                  } else if (idx === selectedOption) {
                    btnStyle = 'bg-[#f97386]/20 border-[#f97386] text-[#ff97a3] font-bold';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={answered}
                    className={`w-full p-4 rounded-xl text-left border text-sm font-medium transition-all active:scale-[0.99] cursor-pointer flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    {answered && idx === question.correctAnswer && (
                      <span className="material-symbols-outlined text-sm text-[#10b981]">check_circle</span>
                    )}
                    {answered && idx === selectedOption && idx !== question.correctAnswer && (
                      <span className="material-symbols-outlined text-sm text-[#ff97a3]">cancel</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {answered && (
              <div className="bg-[#12131b] p-4 rounded-xl border border-white/10 text-xs text-[#aaaab9] mb-6 animate-in fade-in duration-200">
                <span className="font-bold text-[#d8b9ff] block mb-1">💡 ရှင်းလင်းချက်:</span>
                {question.explanation}
              </div>
            )}

            {/* Next button */}
            <div className="flex justify-end">
              <button
                onClick={handleNextQuestion}
                disabled={!answered}
                className={`px-6 py-3 rounded-full text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                  answered
                    ? 'bg-[#6c2eb6] text-white shadow-lg shadow-[#6c2eb6]/40 hover:bg-[#8038d4] active:scale-95'
                    : 'bg-white/10 text-[#aaaab9] cursor-not-allowed'
                }`}
              >
                {currentIdx < QUIZ_QUESTIONS.length - 1 ? 'နောက်မေးခွန်းသို့' : 'ရလဒ် ကြည့်မည်'}
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        ) : (
          /* Result Summary */
          <div className="text-center py-6 space-y-6">
            <div className="w-24 h-24 bg-[#6c2eb6]/20 rounded-full flex items-center justify-center mx-auto relative">
              <span className="material-symbols-outlined text-5xl text-[#d8b9ff]">emoji_events</span>
              <div className="absolute top-0 right-0 bg-[#059669] text-white p-1.5 rounded-full shadow-lg">
                <span className="material-symbols-outlined text-sm">check_circle</span>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-2">ဖြေဆိုမှု ပြီးစီးပါပြီ!</h3>
              <p className="text-sm text-[#aaaab9]">သင့်ရမှတ်မှာ</p>
              <div className="text-4xl font-extrabold text-[#d8b9ff] my-3">
                {score} / {QUIZ_QUESTIONS.length}
              </div>
              <p className="text-xs text-[#10b981] font-semibold bg-[#059669]/10 py-2 px-4 rounded-full inline-block">
                {score === QUIZ_QUESTIONS.length ? '🌟 ထူးချွန်ပါသည်။ အမှတ်ပြည့် ရရှိခဲ့ပါသည်။' : '👍 ကောင်းမွန်ပါသည်။ ထပ်မံ လေ့ကျင့်ပါဦး။'}
              </p>
            </div>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={handleRestart}
                className="px-6 py-3 bg-[#242531] hover:bg-white/10 text-white rounded-full text-xs font-bold transition-all active:scale-95 cursor-pointer flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">refresh</span>
                ထပ်မံ ဖြေဆိုမည်
              </button>

              <button
                onClick={onClose}
                className="px-6 py-3 bg-[#6c2eb6] text-white rounded-full text-xs font-bold transition-all active:scale-95 cursor-pointer"
              >
                ပိတ်မည်
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
