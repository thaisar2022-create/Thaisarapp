import { useState } from 'react';
import { NavTab, Course } from './types';
import { Header } from './components/Header';
import { BottomNavBar } from './components/BottomNavBar';
import { HomeView } from './components/HomeView';
import { SearchView } from './components/SearchView';
import { FreeLessonsView } from './components/FreeLessonsView';
import { EnrolledClassesView } from './components/EnrolledClassesView';
import { ProfileView } from './components/ProfileView';
import { CourseDetailModal } from './components/modals/CourseDetailModal';
import { MenuDrawer } from './components/modals/MenuDrawer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleEnrollCourse = (course: Course) => {
    setSelectedCourse(null);
    setCurrentTab('class');
  };

  return (
    <div className="min-h-screen bg-[#0d0e14] text-[#e5e4f5] flex flex-col justify-between selection:bg-[#6c2eb6] selection:text-white relative">
      {/* Top App Bar */}
      <Header
        currentTab={currentTab}
        onOpenMenu={() => setIsMenuOpen(true)}
        onNavigateTab={(tab) => setCurrentTab(tab)}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {currentTab === 'home' && (
          <HomeView
            onNavigateTab={(tab) => setCurrentTab(tab)}
            onSelectTeacher={() => setCurrentTab('search')}
          />
        )}

        {currentTab === 'search' && (
          <SearchView
            onSelectCourse={(course) => setSelectedCourse(course)}
          />
        )}

        {currentTab === 'class' && (
          <EnrolledClassesView />
        )}

        {currentTab === 'free' && (
          <FreeLessonsView />
        )}

        {currentTab === 'profile' && (
          <ProfileView />
        )}
      </main>

      {/* Bottom Navigation Bar */}
      <BottomNavBar
        currentTab={currentTab}
        onSelectTab={(tab) => setCurrentTab(tab)}
      />

      {/* Course Detail Modal */}
      {selectedCourse && (
        <CourseDetailModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnroll={handleEnrollCourse}
        />
      )}

      {/* Side Menu Drawer */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onSelectTab={(tab) => setCurrentTab(tab)}
      />
    </div>
  );
}
