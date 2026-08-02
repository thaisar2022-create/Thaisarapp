import React, { useState } from 'react';
import { EnrolledCourse } from '../../types';

interface LessonPlayerModalProps {
  course: EnrolledCourse | null;
  onClose: () => void;
  onUpdateProgress: (courseId: string, newProgress: number) => void;
}

export const LessonPlayerModal: React.FC<LessonPlayerModalProps> = ({ course, onClose, onUpdateProgress }) => {
  if (!course) return null;

  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [chapters, setChapters] = useState(course.chapters);
  const [isPlaying, setIsPlaying] = useState(true);

  const activeChapter = chapters[activeChapterIndex] || chapters[0];

  const toggleComplete = (idx: number) => {
    const updated = [...chapters];
    updated[idx].completed = !updated[idx].completed;
    setChapters(updated);

    const completedCount = updated.filter(c => c.completed).length;
    const newProgress = Math.round((completedCount / updated.length) * 100);
    onUpdateProgress(course.id, newProgress);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#181922] border border-white/10 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl my-6 relative">
        {/* Header */}
        <div className="p-4 bg-[#242531] flex justify-between items-center border-b border-white/10">
          <div>
            <span className="text-[10px] bg-[#6c2eb6]/30 text-[#d8b9ff] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
              {course.level}
            </span>
            <h3 className="font-bold text-white text-base leading-snug mt-1">{course.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center cursor-pointer transition-transform active:scale-90"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Video Canvas Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center group overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${isPlaying ? 'opacity-70' : 'opacity-40'}`}
          />

          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/80 via-transparent to-black/30">
            <div className="flex justify-between items-center text-xs text-white">
              <span className="font-bold text-[#d8b9ff]">{activeChapter.title}</span>
              <span>{activeChapter.duration}</span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="self-center w-16 h-16 bg-[#6c2eb6] text-white rounded-full flex items-center justify-center shadow-2xl shadow-[#6c2eb6]/50 transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            <div className="space-y-1">
              <div className="h-1.5 w-full bg-white/30 rounded-full overflow-hidden">
                <div className={`h-full bg-[#d8b9ff] ${isPlaying ? 'w-1/2 progress-shimmer' : 'w-1/4'}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Chapters list */}
        <div className="p-5">
          <h4 className="font-bold text-white text-sm mb-3 flex items-center justify-between">
            <span>သင်ခန်းစာများ စာရင်း ({chapters.length})</span>
            <span className="text-xs text-[#d8b9ff] font-normal">
              {chapters.filter(c => c.completed).length}/{chapters.length} ပြီးစီးပါပြီ
            </span>
          </h4>

          <div className="space-y-2 max-h-56 overflow-y-auto">
            {chapters.map((ch, idx) => (
              <div
                key={ch.id}
                onClick={() => setActiveChapterIndex(idx)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  activeChapterIndex === idx
                    ? 'bg-[#242531] border-[#6c2eb6] text-white shadow-md'
                    : 'bg-[#12131b] border-white/5 text-[#aaaab9] hover:bg-[#1e1f29]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleComplete(idx);
                    }}
                    className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors cursor-pointer ${
                      ch.completed
                        ? 'bg-[#059669] border-[#059669] text-white'
                        : 'border-white/30 hover:border-white'
                    }`}
                  >
                    {ch.completed && <span className="material-symbols-outlined text-xs font-bold">check</span>}
                  </button>
                  <span className={`text-xs font-medium ${activeChapterIndex === idx ? 'text-white font-bold' : ''}`}>
                    {ch.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <span>{ch.duration}</span>
                  {activeChapterIndex === idx && (
                    <span className="material-symbols-outlined text-sm text-[#d8b9ff]">play_circle</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
