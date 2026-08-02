export type NavTab = 'home' | 'search' | 'class' | 'free' | 'profile';

export interface Course {
  id: string;
  title: string;
  teacher: string;
  priceMMK: number;
  rating: number;
  category: string; // e.g. "ပြင်ပတန်း", "Live", "ဗီဒီယိုသင်တန်း", "Audio"
  type: string; // e.g. "စကားပြော", "4-Skills", "One on One"
  image: string;
  badgeBg: string;
  badgeTextColor: string;
  badgeText: string;
  description?: string;
  studentsCount?: number;
  durationHours?: number;
  syllabus?: { title: string; duration: string; completed?: boolean }[];
}

export interface Teacher {
  id: string;
  name: string;
  title: string;
  image: string;
  tags: string[];
  bio?: string;
  students?: number;
  coursesCount?: number;
}

export interface Testimonial {
  id: string;
  author: string;
  initials: string;
  timeAgo: string;
  content: string;
  avatarBg: string;
  textColor: string;
}

export interface FreeVideo {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
  notes?: string[];
  vocabularies?: { thai: string; phonetic: string; myanmar: string }[];
}

export interface Flashcard {
  id: string;
  thai: string;
  phonetic: string;
  myanmar: string;
  category: string;
  exampleSentence?: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface EnrolledCourse {
  id: string;
  title: string;
  level: string;
  image: string;
  progressPercent: number;
  remainingLessons: number;
  totalLessons: number;
  hoursSpent: number;
  chapters: { id: string; title: string; duration: string; completed: boolean }[];
}

export interface NotificationItem {
  id: string;
  title: string;
  time: string;
  read: boolean;
  type: 'course' | 'streak' | 'system';
}

export interface UserProfile {
  name: string;
  studentId: string;
  avatar: string;
  completedCoursesCount: number;
  streakDays: number;
  completedClassesCount: number;
  language: string;
  notificationsEnabled: boolean;
}
