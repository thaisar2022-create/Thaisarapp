import React, { useState, useMemo } from 'react';
import { COURSES } from '../data/mockData';
import { Course } from '../types';

interface SearchViewProps {
  onSelectCourse: (course: Course) => void;
}

export const SearchView: React.FC<SearchViewProps> = ({ onSelectCourse }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [deliveryMode, setDeliveryMode] = useState<string>('ပြင်ပတန်း'); // default active as in screenshot
  const [skillFilter, setSkillFilter] = useState<string>('စကားပြော');

  const deliveryModes = ['ပြင်ပတန်း', 'Zoom Face to Face', 'ဗီဒီယိုသင်တန်း'];
  const skillFilters = ['စကားပြော', '4-Skills', 'One on One'];

  const filteredCourses = useMemo(() => {
    return COURSES.filter((c) => {
      // Search text match
      const matchesSearch =
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.teacher.toLowerCase().includes(searchQuery.toLowerCase());

      // Delivery mode match
      const matchesDelivery =
        deliveryMode === 'အားလုံး' ||
        c.category === deliveryMode ||
        (deliveryMode === 'Zoom Face to Face' && (c.category === 'Live' || c.category === 'Zoom Face to Face'));

      // Skill filter match
      const matchesSkill =
        skillFilter === 'အားလုံး' || c.type === skillFilter;

      return matchesSearch && matchesDelivery && matchesSkill;
    });
  }, [searchQuery, deliveryMode, skillFilter]);

  return (
    <div className="space-y-6 pb-28 pt-20 px-4 max-w-7xl mx-auto">
      {/* Search Input Section */}
      <section>
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-[#aaaab9]">
            <span className="material-symbols-outlined text-xl">search</span>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="သင်တန်းများ ရှာဖွေပါ..."
            className="w-full h-14 pl-12 pr-10 bg-[#181922] border border-white/10 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6c2eb6] focus:border-transparent text-sm text-[#e5e4f5] placeholder-[#747483] transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute inset-y-0 right-3 flex items-center text-[#aaaab9] hover:text-white cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          )}
        </div>
      </section>

      {/* Delivery Mode Filters */}
      <section>
        <h3 className="font-bold text-base text-white mb-3">သင်တန်းအမျိုးအစား</h3>
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2">
          {deliveryModes.map((mode) => {
            const isActive = deliveryMode === mode;
            return (
              <button
                key={mode}
                onClick={() => setDeliveryMode(mode)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-xs font-bold transition-all active:scale-95 cursor-pointer ${
                  isActive
                    ? 'bg-[#3525cd] text-white shadow-lg shadow-[#3525cd]/40'
                    : 'bg-[#1e1f29] text-[#aaaab9] hover:bg-white/10 hover:text-white'
                }`}
              >
                {mode}
              </button>
            );
          })}
        </div>
      </section>

      {/* Skill Filters */}
      <section>
        <h3 className="font-bold text-base text-white mb-3">တက်ရောက်နိုင်မည့်အတန်းများ</h3>
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar pb-2">
          {skillFilters.map((skill) => {
            const isActive = skillFilter === skill;
            return (
              <button
                key={skill}
                onClick={() => setSkillFilter(skill)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-medium border transition-colors active:scale-95 cursor-pointer ${
                  isActive
                    ? 'bg-[#6c2eb6] border-[#6c2eb6] text-white font-bold'
                    : 'bg-[#181922] border-white/10 text-[#e5e4f5] hover:border-[#6c2eb6]'
                }`}
              >
                {skill}
              </button>
            );
          })}
        </div>
      </section>

      {/* Course List */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-white">
            ရလဒ် ({filteredCourses.length}) ခု
          </h3>
          <button className="text-[#aaaab9] hover:text-white transition-colors cursor-pointer p-1">
            <span className="material-symbols-outlined text-xl">tune</span>
          </button>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-[#181922] rounded-3xl border border-white/5 space-y-3">
            <span className="material-symbols-outlined text-4xl text-[#747483]">search_off</span>
            <p className="text-sm text-[#aaaab9]">ရှာဖွေမှုနှင့် ကိုက်ညီသော သင်တန်း မရှိပါ။</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setDeliveryMode('ပြင်ပတန်း');
                setSkillFilter('စကားပြော');
              }}
              className="px-4 py-2 bg-[#6c2eb6] text-white rounded-full text-xs font-bold"
            >
              စစ်ထုတ်မှုများ ပြန်လည်စတင်မည်
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-[#181922] rounded-[24px] border border-white/10 overflow-hidden shadow-md hover:shadow-2xl hover:border-[#6c2eb6]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className={`px-3 py-1 ${course.badgeBg} ${course.badgeTextColor} rounded-full text-xs font-semibold shadow-sm`}>
                        {course.badgeText}
                      </span>
                      <span className="px-3 py-1 bg-[#eff42a] text-[#585a00] rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>
                          star
                        </span>
                        {course.rating}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="font-bold text-lg text-white group-hover:text-[#d8b9ff] transition-colors leading-snug">
                      {course.title}
                    </h4>
                    <p className="text-sm text-[#aaaab9]">{course.teacher}</p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-white/5 mt-4">
                  <span className="text-xl font-extrabold text-[#d8b9ff]">
                    {course.priceMMK.toLocaleString()} MMK
                  </span>
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="px-6 py-2.5 bg-[#d8b9ff] text-[#5812a2] hover:bg-white rounded-full font-bold text-xs active:scale-95 transition-transform cursor-pointer shadow-md"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
