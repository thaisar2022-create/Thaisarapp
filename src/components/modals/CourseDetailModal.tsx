import React, { useState } from 'react';
import { Course } from '../../types';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({ course, onClose, onEnroll }) => {
  const [enrolled, setEnrolled] = useState(false);

  if (!course) return null;

  const handleEnrollClick = () => {
    setEnrolled(true);
    setTimeout(() => {
      onEnroll(course);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#181922] border border-white/10 rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl my-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-transform active:scale-90 cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>

        {/* Hero Image */}
        <div className="relative h-56 w-full">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181922] via-transparent to-black/30" />
          <div className="absolute bottom-4 left-4 flex gap-2">
            <span className={`px-3 py-1 ${course.badgeBg} ${course.badgeTextColor} rounded-full text-xs font-semibold`}>
              {course.badgeText}
            </span>
            <span className="px-3 py-1 bg-[#eff42a] text-[#585a00] rounded-full text-xs font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              {course.rating}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-white mb-1">{course.title}</h2>
            <p className="text-sm text-[#aaaab9]">{course.teacher}</p>
          </div>

          <div className="grid grid-cols-3 gap-3 bg-[#12131b] p-3.5 rounded-2xl border border-white/5 text-center">
            <div>
              <span className="text-xs text-[#aaaab9] block">ကျောင်းသားများ</span>
              <span className="text-sm font-bold text-[#d8b9ff]">{course.studentsCount || 1200}+</span>
            </div>
            <div>
              <span className="text-xs text-[#aaaab9] block">ကြာချိန်</span>
              <span className="text-sm font-bold text-[#d8b9ff]">{course.durationHours || 20} နာရီ</span>
            </div>
            <div>
              <span className="text-xs text-[#aaaab9] block">သင်တန်းကြေး</span>
              <span className="text-sm font-bold text-[#d8b9ff]">{course.priceMMK.toLocaleString()} MMK</span>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-[#d8b9ff] text-base">info</span>
              သင်တန်းအကြောင်း
            </h3>
            <p className="text-sm text-[#e5e4f5]/90 leading-relaxed bg-[#242531]/50 p-4 rounded-2xl border border-white/5">
              {course.description || 'အစမှအဆုံး ထိုင်းစာ ထိုင်းစကားကို ပိုင်ပိုင်နိုင်နိုင် လေ့လာနိုင်အောင် စနစ်တကျ သင်ကြားပေးမည့် သင်တန်းဖြစ်ပါသည်။'}
            </p>
          </div>

          {/* Syllabus */}
          {course.syllabus && course.syllabus.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#d8b9ff] text-base">list_alt</span>
                သင်ရိုးညွှန်းတမ်း (Syllabus)
              </h3>
              <div className="space-y-2">
                {course.syllabus.map((syl, idx) => (
                  <div key={idx} className="flex justify-between items-center bg-[#242531] p-3 rounded-xl text-xs text-[#e5e4f5]">
                    <span className="font-medium">{syl.title}</span>
                    <span className="text-[#aaaab9] shrink-0 ml-2">{syl.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action button */}
          <div className="pt-2">
            {enrolled ? (
              <div className="bg-[#059669]/20 border border-[#059669] text-[#10b981] p-3.5 rounded-full text-center font-bold text-sm flex items-center justify-center gap-2 animate-bounce">
                <span className="material-symbols-outlined">check_circle</span>
                သင်တန်း အောင်မြင်စွာ တက်ရောက်လိုက်ပါပြီ!
              </div>
            ) : (
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#aaaab9] block">ကျသင့်ငွေ</span>
                  <span className="text-xl font-extrabold text-[#d8b9ff]">{course.priceMMK.toLocaleString()} MMK</span>
                </div>
                <button
                  onClick={handleEnrollClick}
                  className="bg-[#6c2eb6] hover:bg-[#8038d4] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-[#6c2eb6]/40 transition-transform active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <span className="material-symbols-outlined">school</span>
                  သင်တန်းတက်မည်
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
