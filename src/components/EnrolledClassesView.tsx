import React, { useState } from 'react';
import { ENROLLED_COURSES } from '../data/mockData';
import { EnrolledCourse } from '../types';
import { LessonPlayerModal } from './modals/LessonPlayerModal';

export const EnrolledClassesView: React.FC = () => {
  const [courses, setCourses] = useState<EnrolledCourse[]>(ENROLLED_COURSES);
  const [activeCourse, setActiveCourse] = useState<EnrolledCourse | null>(null);

  const mainCourse = courses[0];

  const handleUpdateProgress = (courseId: string, newProgress: number) => {
    setCourses(prev =>
      prev.map(c => (c.id === courseId ? { ...c, progressPercent: newProgress } : c))
    );
    if (activeCourse && activeCourse.id === courseId) {
      setActiveCourse(prev => prev ? { ...prev, progressPercent: newProgress } : null);
    }
  };

  return (
    <div className="space-y-8 pb-28 pt-20 px-4 max-w-7xl mx-auto">
      {/* Title & Stats */}
      <section>
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">ဝယ်ထားသော Class များ</h2>
            <p className="text-xs md:text-sm text-[#aaaab9] mt-1">သင်ယူမှုကို ဆက်လက်လုပ်ဆောင်ပါ။</p>
          </div>
          <div>
            <div className="bg-[#181922] px-4 py-2 rounded-2xl border border-white/10 text-center shadow-md">
              <span className="block font-bold text-[#d8b9ff] text-base">{courses.length}</span>
              <span className="text-[10px] text-[#aaaab9] uppercase tracking-wider">Classes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Continue Learning Card (Bento Style) */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Enrolled Card */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-[32px] bg-[#6c2eb6] text-white p-6 md:p-8 shadow-2xl transition-all duration-300 hover:shadow-purple-900/40">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-400/20 rounded-full -mr-20 -mt-20 blur-3xl group-hover:scale-110 transition-transform" />
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <span className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest inline-block shadow-sm">
                    အခုလက်ရှိသင်ခန်းစာ
                  </span>
                  <h3 className="text-2xl md:text-3xl font-extrabold leading-snug">{mainCourse.title}</h3>
                </div>
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-2xl shrink-0 border border-white/20">
                  <img
                    src={mainCourse.image}
                    alt={mainCourse.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs md:text-sm font-medium">
                  <span>တိုးတက်မှု (Progress)</span>
                  <span className="font-bold text-[#eedcff]">{mainCourse.progressPercent}%</span>
                </div>

                <div className="h-3 w-full bg-black/30 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-[#d8b9ff] rounded-full progress-shimmer transition-all duration-500"
                    style={{ width: `${mainCourse.progressPercent}%` }}
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-xs text-white/80">
                    သင်ခန်းစာ {mainCourse.remainingLessons} ခု ကျန်ပါသေးသည်။
                  </p>
                  <button
                    onClick={() => setActiveCourse(mainCourse)}
                    className="bg-white text-[#5812a2] hover:bg-[#eedcff] font-bold px-6 py-3 rounded-full text-xs transition-colors active:scale-95 cursor-pointer flex items-center gap-2 shadow-lg"
                  >
                    <span>ဆက်လက်လေ့လာရန်</span>
                    <span className="material-symbols-outlined text-base">play_circle</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mini Stats Grid */}
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
            <div className="glass-card rounded-[28px] p-6 border border-white/10 flex flex-col justify-center items-center text-center shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#353d3d] flex items-center justify-center mb-2 text-[#c0c8c8]">
                <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  stars
                </span>
              </div>
              <h4 className="font-bold text-xs text-[#aaaab9]">နေ့စဉ်မှတ်တမ်း</h4>
              <p className="text-xl font-extrabold text-[#d8b9ff] mt-1">၁၂ ရက်ဆက်တိုက်</p>
            </div>

            <div className="glass-card rounded-[28px] p-6 border border-white/10 flex flex-col justify-center items-center text-center shadow-lg">
              <div className="w-12 h-12 rounded-full bg-[#eff42a]/20 text-[#fdff9f] flex items-center justify-center mb-2">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <h4 className="font-bold text-xs text-[#aaaab9]">ပြီးဆုံးခဲ့သော Class</h4>
              <p className="text-xl font-extrabold text-[#d8b9ff] mt-1">၅ ခု</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enrolled Courses List */}
      <section>
        <h3 className="font-bold text-lg text-white mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-[#d8b9ff]">auto_stories</span>
          သင်တန်းများစာရင်း
        </h3>

        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="glass-card rounded-3xl p-4 md:p-5 border border-white/10 flex flex-col sm:flex-row items-center gap-5 hover:border-[#6c2eb6]/40 transition-all shadow-md group"
            >
              <div className="w-full sm:w-40 h-28 rounded-2xl overflow-hidden bg-[#242531] shrink-0 relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex-grow w-full space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-base text-white group-hover:text-[#d8b9ff] transition-colors">
                      {course.title}
                    </h4>
                    <p className="text-xs text-[#aaaab9]">{course.level}</p>
                  </div>
                  <span className="text-[#d8b9ff] font-extrabold text-sm">{course.progressPercent}%</span>
                </div>

                <div className="h-2 w-full bg-[#12131b] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#6c2eb6] rounded-full transition-all duration-300"
                    style={{ width: `${course.progressPercent}%` }}
                  />
                </div>

                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2 text-xs text-[#aaaab9]">
                    <span className="material-symbols-outlined text-sm">timer</span>
                    <span>{course.hoursSpent} နာရီ သင်ယူပြီး</span>
                  </div>

                  <button
                    onClick={() => setActiveCourse(course)}
                    className="text-[#d8b9ff] hover:underline font-bold text-xs flex items-center gap-1 cursor-pointer"
                  >
                    ဆက်ကြည့်ရန် <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lesson Player Modal */}
      {activeCourse && (
        <LessonPlayerModal
          course={activeCourse}
          onClose={() => setActiveCourse(null)}
          onUpdateProgress={handleUpdateProgress}
        />
      )}
    </div>
  );
};
