import { Course, Teacher, Testimonial, FreeVideo, Flashcard, QuizQuestion, EnrolledCourse, NotificationItem, UserProfile } from '../types';

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: 'Basic Thai for Business',
    teacher: 'Tr. Aye Myat Mon',
    priceMMK: 45000,
    rating: 4.9,
    category: 'ပြင်ပတန်း',
    type: 'စကားပြော',
    badgeBg: 'bg-[#c0c8c8]',
    badgeTextColor: 'text-[#3a4242]',
    badgeText: 'ပြင်ပတန်း',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS2xWMid-FA7lU9NO1RNdT9ePjkgumn6I2Ih-Nw9BQveHegQeJYAr0uW3JIQhqEwAdAO9LFsqdw1Ja7ccJUfIOFDIzQWbphEyNhH9UIFeXeb77-Hcke6uZlbDLo5uHpGisl_DAQg7JcTIpl8cy0dLdRu5AUFDmS5A_DqAT1jcjmb_DUW4gn_u1Q42G7HIpC-z-F5_7CoahjDrXfvZmoJJA9rlUazoRaPC9xAJlILS570J686u4Codtzw',
    description: 'စီးပွားရေးလုပ်ငန်းခွင်တွင် ချက်ချင်းသုံးစွဲနိုင်သော ထိုင်းစကားပြောနှင့် မိတ်ဆက်အသုံးအနှုန်းများကို စနစ်တကျ သင်ယူရမည်ဖြစ်ပါသည်။',
    studentsCount: 1240,
    durationHours: 24,
    syllabus: [
      { title: 'အခန်း ၁ - မိတ်ဆက်နှုတ်ဆက်ခြင်းနှင့် နာမည်ဖော်ပြခြင်း', duration: '1.5 နာရီ' },
      { title: 'အခန်း ၂ - စီးပွားရေးလုပ်ငန်းခွင်သုံး အသုံးအနှုန်းများ', duration: '2.0 နာရီ' },
      { title: 'အခန်း ၃ - ဈေးနှုန်းညှိနှိုင်းခြင်းနှင့် စာချုပ်စကားပြော', duration: '2.5 နာရီ' },
      { title: 'အခန်း ၄ - ဖုန်းပြောဆိုခြင်းနှင့် အီးမေးလ်ရေးသားခြင်း', duration: '2.0 နာရီ' },
    ]
  },
  {
    id: 'c2',
    title: 'Advanced Speaking Masterclass',
    teacher: 'Tr. Phyo Thura',
    priceMMK: 60000,
    rating: 4.8,
    category: 'Zoom Face to Face',
    type: 'စကားပြော',
    badgeBg: 'bg-[#6c2eb6]',
    badgeTextColor: 'text-[#eedcff]',
    badgeText: 'Zoom Face to Face',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHvZehAlgvjmaG1tGgpZ__5c8lI82-G4RN-5u6WbS5kUeaktCu1IMHqK913WYnM5vujGAL4jRgdvdTiZL2uOkjQrwxoe9In9MJPkg7gPrRXokqtyodtzEx5XwqavqiiHPu9QjyUh9qJpHu5X1nzVfjkPXsaVLJfH8YQm0nLTTGhqqDlZs9WTxIZZFpNn7KsFM3FDygrPMUHkOa6I-Oi1KXexWuxa1jg4rjyv0CHg96pGsD66cnKCa22A',
    description: 'အဆင့်မြင့် ထိုင်းစကားပြော လေ့ကျင့်ရေးတန်းဖြစ်ပြီး သဘာဝကျကျ အသံထွက်နှင့် မြန်ဆန်စွာ တုံ့ပြန်ပြောဆိုနိုင်အောင် လေ့ကျင့်ပေးပါသည်။',
    studentsCount: 890,
    durationHours: 30,
    syllabus: [
      { title: 'အခန်း ၁ - သဘာဝကျသော အသံနေအသံထား မြှင့်တင်ခြင်း', duration: '2.0 နာရီ' },
      { title: 'အခန်း ၂ - သတင်းနှင့် ဆွေးနွေးပွဲများတွင် ပြောဆိုခြင်း', duration: '3.0 နာရီ' },
      { title: 'အခန်း ၃ - ထိုင်းစကားပုံများနှင့် စလင်းစကားများ', duration: '2.5 နာရီ' }
    ]
  },
  {
    id: 'c3',
    title: 'Thai 4-Skills Foundations',
    teacher: 'Tr. Nan Khin',
    priceMMK: 35000,
    rating: 5.0,
    category: 'ဗီဒီယိုသင်တန်း',
    type: '4-Skills',
    badgeBg: 'bg-[#242531]',
    badgeTextColor: 'text-[#aaaab9]',
    badgeText: 'ဗီဒီယိုသင်တန်း',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvHpdqUqUEPVAMQVxFYJzMFwBx_O-q0nlSzlPy-UPQhZ77eyB8PFQWAttBsI9OmuCc9Rt76Ep_5SvkcoLa36CvJACk0rXlLs2JrtEVkbQ6k0qbxQQ5JnsLM9s_E4AxXCpzJwUDM3B9sdKvkzG-7CPZLNaEv1AXT4eo0C-BliDXLCiveIgiLhydqQ4lxmYc7IfbA8ASFOewgzwwHGwNUvpU-KbJ1d1OeNwAsMeedb-W4CZtCGa6z7A1xg',
    description: 'နားထောင်ခြင်း၊ စကားပြောခြင်း၊ ဖတ်ခြင်းနှင့် ရေးသားခြင်း (4-Skills) စလုံးကို အခြေခံမှစ၍ ခိုင်မာစွာ သင်ယူနိုင်ပါသည်။',
    studentsCount: 2150,
    durationHours: 35,
    syllabus: [
      { title: 'အခန်း ၁ - ထိုင်းဗျည်းနှင့် သရ ဖွဲ့စည်းပုံများ', duration: '3.0 နာရီ' },
      { title: 'အခန်း ၂ - အခြေခံ စာဖတ်ခြင်းနှင့် စာရေးခြင်း', duration: '4.0 နာရီ' },
      { title: 'အခန်း ၃ - နေ့စဉ်သုံး နားထောင်ခြင်းနှင့် စကားပြော', duration: '3.5 နာရီ' }
    ]
  },
  {
    id: 'c4',
    title: 'Thai One on One Intensive Class',
    teacher: 'Kru Apinya',
    priceMMK: 75000,
    rating: 4.9,
    category: 'Zoom Face to Face',
    type: 'One on One',
    badgeBg: 'bg-[#3525cd]',
    badgeTextColor: 'text-white',
    badgeText: 'Zoom Face to Face',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH99aj6cW8K5-codSIrzT3aBdKAIqHCMhC7XMWmWgUnwq1XM_6w5X4maMbNXOhF5c3MggFbz8cRdKMlfwQtT610TQvRUeXDs2AgpT5yvu66_xE9zObxGUYPvtr0ovuoJmtxSEa4F--u2MeGKWrFEYDvaBwbXEQbBLVJAxkDc3wL2wFHRZ1BfpqhUgUXN3Ute0vUQwm6xZy_vN_iupSXFXQp7drpCufinLsiKUItYIdd4kbSZ7PVx-ZkA',
    description: 'ဆရာနှင့် တိုက်ရိုက် တစ်ဦးချင်း သင်ယူနိုင်သော အထူးသီးသန့် သင်တန်းဖြစ်ပါသည်။',
    studentsCount: 430,
    durationHours: 20,
    syllabus: [
      { title: 'အခန်း ၁ - ကိုယ်ပိုင် စွမ်းရည်စစ်ဆေးခြင်းနှင့် ရည်မှန်းချက်ချမှတ်ခြင်း', duration: '1.0 နာရီ' },
      { title: 'အခန်း ၂ - အထူးပြု စကားပြော စိန်ခေါ်မှုများ', duration: '2.5 နာရီ' }
    ]
  },
  {
    id: 'c5',
    title: 'Thai 4-Skills Classroom Masterclass',
    teacher: 'Tr. Aye Myat Mon',
    priceMMK: 50000,
    rating: 4.9,
    category: 'ပြင်ပတန်း',
    type: '4-Skills',
    badgeBg: 'bg-[#c0c8c8]',
    badgeTextColor: 'text-[#3a4242]',
    badgeText: 'ပြင်ပတန်း',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS2xWMid-FA7lU9NO1RNdT9ePjkgumn6I2Ih-Nw9BQveHegQeJYAr0uW3JIQhqEwAdAO9LFsqdw1Ja7ccJUfIOFDIzQWbphEyNhH9UIFeXeb77-Hcke6uZlbDLo5uHpGisl_DAQg7JcTIpl8cy0dLdRu5AUFDmS5A_DqAT1jcjmb_DUW4gn_u1Q42G7HIpC-z-F5_7CoahjDrXfvZmoJJA9rlUazoRaPC9xAJlILS570J686u4Codtzw',
    description: 'ပြင်ပသင်တန်းကျောင်းတွင် လူကိုယ်တိုင် တက်ရောက်ပြီး 4-Skills (ဖတ်၊ ရေး၊ ပြော၊ နားထောင်) စလုံးကို စနစ်တကျ သင်ယူမည့် အတန်းဖြစ်ပါသည်။',
    studentsCount: 1560,
    durationHours: 40,
    syllabus: [
      { title: 'အခန်း ၁ - စာဖတ်ခြင်းနှင့် စာရေးခြင်း အခြေခံ', duration: '2.5 နာရီ' },
      { title: 'အခန်း ၂ - အသံထွက်နှင့် နားထောင်လေ့ကျင့်ခန်း', duration: '3.0 နာရီ' }
    ]
  },
  {
    id: 'c6',
    title: 'Private One on One In-Person Class',
    teacher: 'ဆရာကျော်ဇင်',
    priceMMK: 80000,
    rating: 5.0,
    category: 'ပြင်ပတန်း',
    type: 'One on One',
    badgeBg: 'bg-[#c0c8c8]',
    badgeTextColor: 'text-[#3a4242]',
    badgeText: 'ပြင်ပတန်း',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3EBhOWBDdPNDqRBk_1wnLkh6sMgEI1-nFGFLstZvfzzHGGstGO53-7powmJd1oLUhNFpfNHv4v8Uq48Y71xoY2pQdxi4cNafFg0pT_wjjrsfFGMg5MezYEnMZf4k9zw6vYDzLATHdh6O4pEB5BIsQC9Lw7SrnBOeqBaKv94JR8XH386LDlBKzf80eXLm6JREfohVNkmbpkN8HZzCeBkZeomY-9z4JhXltIQFLRLGONLqb2lPZbv4rZA',
    description: 'ပြင်ပသင်တန်းကျောင်းတွင် ဆရာနှင့် သီးသန့် တစ်ဦးချင်း စနစ်တကျ သင်ယူနိုင်သော အတန်းဖြစ်ပါသည်။',
    studentsCount: 310,
    durationHours: 25,
    syllabus: [
      { title: 'အခန်း ၁ - မိမိလိုအပ်ချက်အလိုက် သီးသန့် သင်ရိုးရေးဆွဲခြင်း', duration: '1.5 နာရီ' },
      { title: 'အခန်း ၂ - စကားပြောနှင့် အရေးအဖတ် သီးသန့်လေ့ကျင့်ခြင်း', duration: '3.0 နာရီ' }
    ]
  },
  {
    id: 'c7',
    title: 'Zoom Live 4-Skills Mastery',
    teacher: 'Kru Somchai',
    priceMMK: 55000,
    rating: 4.8,
    category: 'Zoom Face to Face',
    type: '4-Skills',
    badgeBg: 'bg-[#6c2eb6]',
    badgeTextColor: 'text-[#eedcff]',
    badgeText: 'Zoom Face to Face',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ4aC-VaAZoA-4TitrRONhwVlCneLfaGxkQLA7bWGXnbZfxVnwl-SLgmi5BUAOoZqgZ102GanhRxFEpNfDdssR5DYdLiHpLu-c5NZvPdxo966rysG5wy6aieg86sCSp3YY_UQt5sf_94jBRQI_F-vk3e5D0Aj-pfxXHlfZkq7cqurE7yyij174e6zWCRKx0lM54SkaCa7ImKvhENySJT8mwK1WWGTaXl1dwjpBmRyZn4tWQ0HgSZtoaw',
    description: 'Zoom တိုက်ရိုက်အတန်းမှတစ်ဆင့် 4-Skills ကို ဆရာနှင့်အတူ လေ့ကျင့်နိုင်သော အတန်းဖြစ်ပါသည်။',
    studentsCount: 720,
    durationHours: 32,
    syllabus: [
      { title: 'အခန်း ၁ - တိုက်ရိုက် စာဖတ်လေ့ကျင့်ခြင်း', duration: '2.0 နာရီ' },
      { title: 'အခန်း ၂ - စကားပြောနှင့် ရေးသားခြင်း တိုက်ရိုက်စစ်ဆေးခြင်း', duration: '2.5 နာရီ' }
    ]
  },
  {
    id: 'c8',
    title: 'Complete Video 1-on-1 Self-Paced',
    teacher: 'Tr. Nan Khin',
    priceMMK: 40000,
    rating: 4.7,
    category: 'ဗီဒီယိုသင်တန်း',
    type: 'One on One',
    badgeBg: 'bg-[#242531]',
    badgeTextColor: 'text-[#aaaab9]',
    badgeText: 'ဗီဒီယိုသင်တန်း',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvHpdqUqUEPVAMQVxFYJzMFwBx_O-q0nlSzlPy-UPQhZ77eyB8PFQWAttBsI9OmuCc9Rt76Ep_5SvkcoLa36CvJACk0rXlLs2JrtEVkbQ6k0qbxQQ5JnsLM9s_E4AxXCpzJwUDM3B9sdKvkzG-7CPZLNaEv1AXT4eo0C-BliDXLCiveIgiLhydqQ4lxmYc7IfbA8ASFOewgzwwHGwNUvpU-KbJ1d1OeNwAsMeedb-W4CZtCGa6z7A1xg',
    description: 'ဗီဒီယိုသင်ခန်းစာများနှင့်အတူ ဆရာမ၏ သီးသန့် အမေးအဖြေ လမ်းညွှန်မှုပါဝင်သော အတန်းဖြစ်ပါသည်။',
    studentsCount: 980,
    durationHours: 28,
    syllabus: [
      { title: 'အခန်း ၁ - ဗီဒီယိုသင်ခန်းစာများနှင့် ကိုယ်ပိုင် လေ့ကျင့်ခန်းများ', duration: '2.0 နာရီ' }
    ]
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: 't1',
    name: 'Kru Apinya',
    title: 'Thai Native Expert',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCH99aj6cW8K5-codSIrzT3aBdKAIqHCMhC7XMWmWgUnwq1XM_6w5X4maMbNXOhF5c3MggFbz8cRdKMlfwQtT610TQvRUeXDs2AgpT5yvu66_xE9zObxGUYPvtr0ovuoJmtxSEa4F--u2MeGKWrFEYDvaBwbXEQbBLVJAxkDc3wL2wFHRZ1BfpqhUgUXN3Ute0vUQwm6xZy_vN_iupSXFXQp7drpCufinLsiKUItYIdd4kbSZ7PVx-ZkA',
    tags: ['Bilingual', 'IELTS 7.5'],
    bio: 'ထိုင်းနိုင်ငံသား မိခင်ဘာသာစကားကျွမ်းကျင်သူဖြစ်ပြီး မြန်မာကျောင်းသားများအား ထိုင်းစကားပြော သင်ကြားပေးလျက်ရှိပါသည်။',
    students: 3200,
    coursesCount: 5
  },
  {
    id: 't2',
    name: 'ဆရာကျော်ဇင်',
    title: 'Senior Translator',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3EBhOWBDdPNDqRBk_1wnLkh6sMgEI1-nFGFLstZvfzzHGGstGO53-7powmJd1oLUhNFpfNHv4v8Uq48Y71xoY2pQdxi4cNafFg0pT_wjjrsfFGMg5MezYEnMZf4k9zw6vYDzLATHdh6O4pEB5BIsQC9Lw7SrnBOeqBaKv94JR8XH386LDlBKzf80eXLm6JREfohVNkmbpkN8HZzCeBkZeomY-9z4JhXltIQFLRLGONLqb2lPZbv4rZA',
    tags: ['Myanmar', 'Advanced Thai'],
    bio: 'ထိုင်း-မြန်မာ ဘာသာပြန်အဖြစ် ၈ နှစ်ကျော် အတွေ့အကြုံရှိပြီး အဆင့်မြင့် စကားပြောနှင့် စီးပွားရေးသုံး သင်တန်းများ ပို့ချပေးပါသည်။',
    students: 2800,
    coursesCount: 4
  },
  {
    id: 't3',
    name: 'Kru Somchai',
    title: 'Conversation Pro',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ4aC-VaAZoA-4TitrRONhwVlCneLfaGxkQLA7bWGXnbZfxVnwl-SLgmi5BUAOoZqgZ102GanhRxFEpNfDdssR5DYdLiHpLu-c5NZvPdxo966rysG5wy6aieg86sCSp3YY_UQt5sf_94jBRQI_F-vk3e5D0Aj-pfxXHlfZkq7cqurE7yyij174e6zWCRKx0lM54SkaCa7ImKvhENySJT8mwK1WWGTaXl1dwjpBmRyZn4tWQ0HgSZtoaw',
    tags: ['Native', 'Business Thai'],
    bio: 'ဘန်ကောက်မြို့မှ စကားပြောအထူးပြု ဆရာတစ်ဦးဖြစ်ပြီး လက်တွေ့အသုံးချ ထိုင်းစကားကို လွယ်ကူစွာ သင်ကြားပေးပါသည်။',
    students: 1950,
    coursesCount: 3
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'tm1',
    author: 'Ma Thiri',
    initials: 'MT',
    timeAgo: 'လွန်ခဲ့သော ၂ ရက်က',
    content: '"သင်ခန်းစာတွေက တကယ်ကို ရှင်းလင်းပါတယ်။ အသံထွက်တွေလည်း အသေးစိတ်သင်ပေးလို့ အရမ်းအဆင်ပြေပါတယ်။"',
    avatarBg: 'bg-blue-100',
    textColor: 'text-blue-600'
  },
  {
    id: 'tm2',
    author: 'Aung Kyaw',
    initials: 'AK',
    timeAgo: 'လွန်ခဲ့သော ၁ ပတ်က',
    content: '"အလုပ်သွားရင်း နားထောင်လို့ရအောင် ဗီဒီယိုတွေက တိုတိုနဲ့လိုရင်းဖြစ်လို့ ကြိုက်ပါတယ်။ ဆရာမကလည်း သဘောကောင်းပါတယ်။"',
    avatarBg: 'bg-purple-100',
    textColor: 'text-purple-600'
  },
  {
    id: 'tm3',
    author: 'Su Myat',
    initials: 'SM',
    timeAgo: 'လွန်ခဲ့သော ၃ ပတ်က',
    content: '"Free Resources တွေမှာတင် အများကြီးလေ့လာလို့ရနေပြီ။ Premium သင်တန်းတွေဆို ပိုတန်မှာ သေချာပါတယ်။"',
    avatarBg: 'bg-emerald-100',
    textColor: 'text-emerald-600'
  }
];

export const FREE_VIDEOS: FreeVideo[] = [
  {
    id: 'fv1',
    title: 'Basic Tones (အသံနေအသံထားများ)',
    subtitle: 'အပိုင်း ၁ - အခြေခံ',
    duration: '12:45',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6KvoLGHPC-RGDKHw9b-A_OLSZL4Y5wFmhifaiCTLzaW_0DWS_JheKp_xz3QlgWfvK888GOCFhpJBKksl2yY3woVfl803zr_8SkP058Lnwn54TkyqsmpTOUrrW_WTpRlsnyWNjPi27q_qwXwEtYosS9Stfl823UjxHc8MSyNN1jRSqwoEN14bsLXewShb9HF-8C0yio3aQCOBwL4mZK_d89P4pyxVzyzD__yGdcfuzSvx-SrmRaEVWTQ',
    notes: [
      'ထိုင်းဘာသာစကားတွင် အသံတို/အသံရှည်နှင့် အသံနိမ့်အမြင့် (၅) မျိုးရှိပါသည်။',
      'Mid tone, Low tone, Falling tone, High tone, Rising tone တို့ကို ခွဲခြားသိမြင်ဖို့ အရေးကြီးပါသည်။'
    ],
    vocabularies: [
      { thai: 'มา (mā)', phonetic: 'မာ', myanmar: 'လာသည် (Mid tone)' },
      { thai: 'ม่า (mà)', phonetic: 'မာ့', myanmar: 'အမေ/အဘွား (Low tone)' },
      { thai: 'ม้า (mā)', phonetic: 'မား', myanmar: 'မြင်း (High tone)' },
      { thai: 'หมา (mǎ)', phonetic: 'မှား', myanmar: 'ခွေး (Rising tone)' }
    ]
  },
  {
    id: 'fv2',
    title: 'Greeting Basics (နှုတ်ဆက်ခြင်း)',
    subtitle: 'နေ့စဉ်သုံး စကားပြော',
    duration: '08:20',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB4ZgZGYGW3YLWgRMHBfMMVI5FzF049qQy6908ToVqzsTvqHtJXaMZxL5KCTpxJIXq9vky8KJXntgorpF_YikgpFM9vMbL8UXwJ8FebX0VvdGqiWYVIa0SIu5IRU8ivSEFOI4ws4hqkmtnSCco9K6aMdy1x3VEltHUb92YV-xKQUAMaLpm9qiSYdrI6XA9-La0npe6TlbdRKbi-SoE1pbm0pxo1pwgyq0FO_kSh-KI2hJOMTN97J2SGw',
    notes: [
      'ယောကျာ်းလေးဖြစ်ပါက စကားဆုံးတွင် "ครับ (Khrap)" ထည့်ရပါမည်။',
      'မိန်းကလေးဖြစ်ပါက စကားဆုံးတွင် "ค่ะ (Kha)" ထည့်ရပါမည်။'
    ],
    vocabularies: [
      { thai: 'สวัสดี (Sawatdee)', phonetic: 'ဆဝါဒီ', myanmar: 'မင်္ဂလာပါ' },
      { thai: 'ขอบคุณ (Khop khun)', phonetic: 'ခေါ့ပ်ခုန်', myanmar: 'ကျေးဇူးတင်ပါတယ်' },
      { thai: 'สบายดีไหม (Sabai dee mai)', phonetic: 'စဘိုင်ဒီမိုင်း', myanmar: 'နေကောင်းရဲ့လား' }
    ]
  },
  {
    id: 'fv3',
    title: 'Consonant Masterclass',
    subtitle: 'ဗျည်း (၄၄) လုံး မှတ်နည်း',
    duration: '15:10',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0iyqwUjU7gtSxC2z7MlbNYq5BCkbQhX83mk-7fgFwz4y_8gJNWv3Qhw--84xAlvUof1YOJN_PFSV5OTbFWVYkvoPcF2t3DhXAq54MCfya8gmHehBvYwXRVZ-rOO0CbuLWQ7s-MkvrNNZx_Eynwow-2DbuUFTwwBeu5ZYkD4NiDhygWt8OYj4UQHkXBkd5gznwq-_JfTaQP0GgyLVbaHB_iJiUibq9Xn1kNgStAxuh_qUOw__OoSm4Yg',
    notes: [
      'ထိုင်းဗျည်း ၄၄ လုံးကို အသံမြင့်ဗျည်း၊ အသံလယ်ဗျည်းနှင့် အသံနိမ့်ဗျည်း အဖြစ် (၃) အုပ်စု ခွဲထားသည်။'
    ],
    vocabularies: [
      { thai: 'ก ไก่ (Gor Gai)', phonetic: 'ကောကိုင်', myanmar: 'ကြက်' },
      { thai: 'ข ไข่ (Khor Khai)', phonetic: 'ခေါ့ခိုင်', myanmar: 'ကြက်ဥ' },
      { thai: 'ค ควาย (Khor Khway)', phonetic: 'ခေါ့ခဝါင်း', myanmar: 'ကျွဲ' }
    ]
  },
  {
    id: 'fv4',
    title: 'Ordering Food (စားသောက်ဆိုင်)',
    subtitle: 'အခြေခံ စကားပြောများ',
    duration: '10:00',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-9wdes2zeounEl_i3RfcGkVNAmWv2j4PDCaY-5nYefynlpD8bHqnOQWmMAaEUaS89c7W1hk4g1dfhtQAavhfBmgQ4y99IpCi1FFlkbI2i45bBo65sRJixgO7yY2f7iyr3TkdbgOmjICopE6Xv9_UIW9GGPm5nz1sPfxCMFp9ahN9GaTsdvFl2wJg_nIj5mCuxJDzBn8HVSVPzBNHQaBGwqPuDbZEbnYmAeFaiyXZBFkhOtxNUtQYcRg',
    notes: [
      'စားသောက်ဆိုင်များတွင် မှာယူသည့်အခါ "ขอ... (Kho...)" ကို သုံးလေ့ရှိသည်။'
    ],
    vocabularies: [
      { thai: 'ผัดไทย (Pad Thai)', phonetic: 'ဖတ်ထိုင်း', myanmar: 'ထိုင်းခေါက်ဆွဲကြော်' },
      { thai: 'น้ำเปล่า (Nam plaow)', phonetic: 'နမ်ပလောက်', myanmar: 'ရေသန့်' },
      { thai: 'เช็คบิล (Check bill)', phonetic: 'ချက်ဘေလ်', myanmar: 'ရှင်းမယ်' }
    ]
  }
];

export const FLASHCARDS: Flashcard[] = [
  { id: 'f1', thai: 'สวัสดี', phonetic: 'Sawatdee', myanmar: 'မင်္ဂလာပါ', category: 'နှုတ်ဆက်ခြင်း', exampleSentence: 'สวัสดีครับ ยินดีที่ได้รู้จัก (မင်္ဂလာပါ တွေ့ရတာ ဝမ်းသာပါတယ်)' },
  { id: 'f2', thai: 'ขอบคุณ', phonetic: 'Khop khun', myanmar: 'ကျေးဇူးတင်ပါတယ်', category: 'ယဉ်ကျေးမှု', exampleSentence: 'ขอบคุณมากครับ (အများကြီး ကျေးဇူးတင်ပါတယ်)' },
  { id: 'f3', thai: 'ขอโทษ', phonetic: 'Kho thot', myanmar: 'တောင်းပန်ပါတယ် / အားနာပါတယ်', category: 'ယဉ်ကျေးမှု', exampleSentence: 'ขอโทษครับ มาสาย (တောင်းပန်ပါတယ် နောက်ကျသွားတယ်)' },
  { id: 'f4', thai: 'เท่าไหร่', phonetic: 'Thao rai', myanmar: 'ဘယ်လောက်လဲ', category: 'ဈေးဝယ်ခြင်း', exampleSentence: 'อันนี้เท่าไหร่ครับ (ဒါ ဘယ်လောက်လဲ)' },
  { id: 'f5', thai: 'อร่อย', phonetic: 'Aroy', myanmar: 'အရသာရှိတယ်', category: 'အစားအစာ', exampleSentence: 'อาหารไทยอร่อยมาก (ထိုင်းဟင်း အရမ်းစားကောင်းတယ်)' },
  { id: 'f6', thai: 'ยินดี', phonetic: 'Yin dee', myanmar: 'ဝမ်းသာပါတယ်', category: 'နှုတ်ဆက်ခြင်း', exampleSentence: 'ยินดีต้อนรับ (ကြိုဆိုပါတယ်)' }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'ထိုင်းဘာသာဖြင့် "မင်္ဂလာပါ" ကို မည်သို့ ပြောဆိုသနည်း။',
    options: ['ขอบคุณ (Khop khun)', 'สวัสดี (Sawatdee)', 'ขอโทษ (Kho thot)', 'สบายดี (Sabai dee)'],
    correctAnswer: 1,
    explanation: 'สวัสดี (Sawatdee) သည် ထိုင်းဘာသာတွင် နှုတ်ဆက်စကား "မင်္ဂလာပါ" ဟု အဓိပ္ပါယ်ရပါသည်။'
  },
  {
    id: 'q2',
    question: 'ယောကျာ်းလေးများ စကားပြောရာတွင် ယဉ်ကျေးစွာ အဆုံးသတ်ရန် သုံးသော စကားလုံးမှာ အဘယ်နည်း။',
    options: ['ค่ะ (Kha)', 'ครับ (Khrap)', 'นะ (Na)', 'จ้า (Jaa)'],
    correctAnswer: 1,
    explanation: 'ครับ (Khrap) ကို ယောကျာ်းလေးများမှ စကားဆုံးတွင် ယဉ်ကျေးစွာ ထည့်သွင်းပြောဆိုရပါသည်။'
  },
  {
    id: 'q3',
    question: 'ထိုင်းဗျည်း ပထမဆုံး စာလုံးမှာ အဘယ်နည်း။',
    options: ['ข ไข่', 'ก ไก่', 'ค ควาย', 'ง งู'],
    correctAnswer: 1,
    explanation: 'ก ไก่ (Gor Gai) သည် ထိုင်းဗျည်း ၄၄ လုံးတွင် ပထမဆုံး ဗျည်းဖြစ်ပါသည်။'
  },
  {
    id: 'q4',
    question: 'ဈေးနှုန်း မေးမြန်းသည့်အခါ မည်သည့် စကားလုံးကို သုံးသနည်း။',
    options: ['เท่าไหร่ (Thao rai)', 'ที่ไหน (Thee nai)', 'อย่างไร (Yang rai)', 'เมื่อไหร่ (Muea rai)'],
    correctAnswer: 0,
    explanation: 'เท่าไหร่ (Thao rai) သည် "ဘယ်လောက်လဲ" ဟု ဈေးမေးရာတွင် သုံးပါသည်။'
  }
];

export const ENROLLED_COURSES: EnrolledCourse[] = [
  {
    id: 'ec1',
    title: 'အခြေခံ ထိုင်းစကားပြော (Level 1)',
    level: 'အခြေခံ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPVtpv-IW-uE1943fXrg5ho9lYNI9wHGjnrR1BCFqZY2PSMtVVd0ngOw-6S7DRjSW9-EgiRc1i0Bvp23F3rKfFfzUYlqJUDYRHSejq5BtGtIN9_C7_RcVvWkMXx-0CITGYyPLvoXmRf4yFphbLIeE2RqwV-an8VwtDwAPbfP1vtwqloL8eWu_rPHuBbv1PtSCBh9eXly5kgUXWoEPwpTytD1ehI28twO6-OGu9zjd3kQYtwStGJ0q0tA',
    progressPercent: 65,
    remainingLessons: 8,
    totalLessons: 24,
    hoursSpent: 14,
    chapters: [
      { id: 'ch1', title: 'အခန်း ၁ - မိတ်ဆက် နှုတ်ဆက်ခြင်းများ', duration: '20 မိနစ်', completed: true },
      { id: 'ch2', title: 'အခန်း ၂ - ကိန်းဂဏန်းများနှင့် ဈေးဝယ်ခြင်း', duration: '25 မိနစ်', completed: true },
      { id: 'ch3', title: 'အခန်း ၃ - အစားအစာမှာယူခြင်းနှင့် စားသောက်ဆိုင်သုံး', duration: '30 မိနစ်', completed: true },
      { id: 'ch4', title: 'အခန်း ၄ - ခရီးသွားခြင်းနှင့် လမ်းညွှန်မေးခြင်း', duration: '35 မိနစ်', completed: false },
      { id: 'ch5', title: 'အခန်း ၅ - အချိန်နှင့် ရက်စွဲများ ဖော်ပြခြင်း', duration: '30 မိနစ်', completed: false }
    ]
  },
  {
    id: 'ec2',
    title: 'စားသောက်ဆိုင်သုံး ထိုင်းစကားပြော',
    level: 'အခြေခံမှ စတင်သူများအတွက်',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQyvTgYSwnYL95hCOKnLag__-I0vAkeF4rthKHs7bR_pyb0kuF1QCe8pR6ApT0WTHsDzfP-qDL9V2NwjTyd0ZhiITyo_Twh-JGXZvxgVPcUdA7Lfiukhzhi0JidThABEqGrJRy8NxqbrJchjz2xmdYKHLlGc8ZnDrnxOdZy_vl0RRbU1lnlaC95h-R3HmbjJsAaf2cQf6wq3P5oiIlnGR0wDwSglqUvpTATsV2Uf5rXlZWbU9c-ITx1w',
    progressPercent: 45,
    remainingLessons: 6,
    totalLessons: 12,
    hoursSpent: 5,
    chapters: [
      { id: 'ch1', title: 'အခန်း ၁ - မီနူးကြည့်ခြင်းနှင့် မှာယူခြင်း', duration: '15 မိနစ်', completed: true },
      { id: 'ch2', title: 'အခန်း ၂ - အရသာများ ဖော်ပြခြင်း', duration: '20 မိနစ်', completed: true },
      { id: 'ch3', title: 'အခန်း ၃ - ဘေလ်ရှင်းခြင်းနှင့် ပိုက်ဆံပေးခြင်း', duration: '20 မိနစ်', completed: false }
    ]
  },
  {
    id: 'ec3',
    title: 'စီးပွားရေးသုံး ထိုင်းစကားပြော',
    level: 'အဆင့်မြင့်သင်တန်း',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_fD6vqmyjyPZu9uFjcfL362qL4YklUbRQzJKudvCAvuMpWXx44xbiWCpLAe0dM0cGOJNHT34ESaOH0t0Z8OUa6nmklYjn7iipBv-9ec3blOcHdKR_yIlxHjomRB-kMPvJdowow1dpEKbRdRyP2c6NS7N78gKk3mZpT5PXqVeI2Lsbe_8gcuQRer07pLVq4k58SiJpq4gYck1SUrRGs44GHHrUAK_5MeJdH_54lYNO_vEk1Cu9LrmxPg',
    progressPercent: 12,
    remainingLessons: 18,
    totalLessons: 20,
    hoursSpent: 2,
    chapters: [
      { id: 'ch1', title: 'အခန်း ၁ - ရုံးသုံး နှုတ်ဆက်ခြင်းနှင့် မိတ်ဆက်ခြင်း', duration: '30 မိနစ်', completed: true },
      { id: 'ch2', title: 'အခန်း ၂ - အစည်းအဝေး တက်ရောက်ခြင်း', duration: '40 မိနစ်', completed: false }
    ]
  }
];

export const USER_PROFILE: UserProfile = {
  name: 'Min Thant',
  studentId: 'ST-10293',
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGn7sU3-EtOAEas1p_NgCU37dLRgHMdXIKfDVNzUP4uS1VqXx3OkzlVUtRw_e1vhtDoFQUsVnyWh8cv3UMd10zI_0Ze1GLGiTnIARg36tfUy_IsYYe7o6i9Lv2djCtdjoW0ZrMzJ-C27L8V6KIb4xAiZx65Cvq10t_6GHIn4I4V15V6Jt-eIHdBXUfjEbDXQukKMj222PE8PjStRs2CKFKdKpFX0ZZwhcZUQqwyg28gxqhv5i-gUVKDA',
  completedCoursesCount: 2,
  streakDays: 12,
  completedClassesCount: 5,
  language: 'မြန်မာ (MM)',
  notificationsEnabled: true
};

export const NOTIFICATIONS: NotificationItem[] = [
  { id: 'n1', title: 'ဗီဒီယိုသင်ခန်းစာသစ် "Basic Tones Part 2" တင်ပေးလိုက်ပါပြီ!', time: '၁ နာရီမတိုင်မီ', read: false, type: 'course' },
  { id: 'n2', title: 'ဂုဏ်ယူပါတယ်! ၁၂ ရက်ဆက်တိုက် လေ့လာမှု စံချိန်တင်လိုက်ပါပြီ 🔥', time: '၅ နာရီမတိုင်မီ', read: false, type: 'streak' },
  { id: 'n3', title: 'အပတ်စဉ် အခမဲ့ လက်ဆောင် Flashcard အသစ်များ ရရှိနိုင်ပါပြီ။', time: 'မနေ့က', read: true, type: 'system' }
];
