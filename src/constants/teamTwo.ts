import { TeamMember } from "@/library";

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "جواد عامری",
    role: "توسعه‌دهنده بک‌اند",
    quote:
      "ایجاد رابط‌های کاربری جذاب و کاربرپسند کلید موفقیت هر وب‌سایت است.",
    image: {
      src: "/img/javadAmeri.jpeg",
      alt: "جواد عامری",
    },
    phone: "+98 912 123 4567",
    email: "javad.ameri@example.com",
    description: [
      "جواد بیش از ۷ سال تجربه در طراحی رابط کاربری دارد و طراحی‌های خلاقانه و کاربرمحور ارائه می‌دهد.",
      "او با ابزارهایی مانند Figma و Adobe XD مهارت دارد و به‌طور نزدیک با تیم‌های توسعه همکاری می‌کند.",
      "تمرکز او بر بهبود تجربه کاربری و افزایش نرخ تبدیل است.",
    ],
    socialLinks: {
      facebook: "https://facebook.com/javad.ameri",
      linkedin: "https://linkedin.com/in/javad-ameri",
      dribbble: "https://dribbble.com/javad-ameri",
      instagram: "https://instagram.com/javad.ameri",
    },
    activities: [
      "طراحی رابط کاربری برای وب‌سایت‌های فروشگاهی.",
      "ایجاد نمونه‌های تعاملی برای پروژه‌های استارتاپی.",
      "همکاری با تیم توسعه برای پیاده‌سازی طراحی‌ها.",
      "انجام تست کاربری برای بهبود تجربه کاربری.",
      "آموزش اعضای جدید تیم در اصول UI/UX.",
    ],
    skills: [
      { name: "طراحی UI/UX", percentage: 90 },
      { name: "نمونه‌سازی (Prototyping)", percentage: 85 },
      { name: "تست کاربری", percentage: 80 },
    ],
  },
  {
    id: "member-2",
    name: "مرتضی حامد",
    role: "توسعه‌دهنده فرانت‌اند",
    quote:
      "مرتضی توسعه‌دهنده فرانت‌اند متخصص در Next.js، React و TypeScript است و به ساخت وب‌اپلیکیشن‌های مدرن، پرسرعت و مقیاس‌پذیر می‌پردازد.",
    image: {
      src: "/img/team-member-3.png",
      alt: "مرتضی حامد",
    },
    phone: "+98 912 345 6789",
    email: "morteza.hamed@example.com",
    description: [
      "مرتضی در توسعه APIهای امن و مقیاس‌پذیر با Node.js و Django تخصص دارد.",
      "او تجربه گسترده‌ای در مدیریت پایگاه‌های داده SQL و NoSQL دارد.",
      "تمرکز او بر امنیت سرور و بهینه‌سازی عملکرد است.",
    ],
    socialLinks: {
      facebook: "https://facebook.com/morteza.hamed",
      linkedin: "https://linkedin.com/in/morteza-hamed",
      dribbble: "https://dribbble.com/morteza-hamed",
      instagram: "https://instagram.com/morteza.hamed",
    },
    activities: [
      "طراحی و توسعه APIهای RESTful و GraphQL.",
      "مدیریت پایگاه‌های داده MySQL و MongoDB.",
      "پیاده‌سازی سیستم‌های احراز هویت و امنیت.",
      "بهینه‌سازی عملکرد و مقیاس‌پذیری سرور.",
      "همکاری با تیم فرانت‌اند برای یکپارچه‌سازی APIها.",
    ],
    skills: [
      { name: "Node.js و Express", percentage: 90 },
      { name: "مدیریت پایگاه داده", percentage: 85 },
      { name: "امنیت سرور", percentage: 80 },
    ],
  },
  {
    id: "member-3",
    name: "سعید درخشان",
    role: "مهندس DevOps",
    quote:
      "با مدرک کارشناسی ارشد فناوری اطلاعات و گواهینامه‌های بین‌المللی از شرکت‌هایی مانند Cisco و Microsoft، سعید سال‌هاست با راهکارهای مطمئن DevOps از مشتریان پشتیبانی می‌کند.",
    image: {
      src: "/img/Saeid.jpeg",
      alt: "سعید درخشان",
    },
    phone: "+98 912 234 5678",
    email: "saeid.derakhshan@example.com",
    description: [
      "سعید در ساخت رابط‌های کاربری داینامیک با React و Next.js تخصص دارد.",
      "او در بهینه‌سازی عملکرد وب و ایجاد انیمیشن‌های روان مهارت دارد.",
      "تمرکز او بر نوشتن کد تمیز و قابل نگهداری است.",
    ],
    socialLinks: {
      facebook: "https://facebook.com/saeid.derakhshan",
      linkedin: "https://linkedin.com/in/saeid-derakhshan",
      dribbble: "https://dribbble.com/saeid-derakhshan",
      instagram: "https://instagram.com/saeid-derakhshan",
    },
    activities: [
      "توسعه رابط‌های کاربری با React و TypeScript.",
      "بهینه‌سازی سرعت بارگذاری صفحات.",
      "پیاده‌سازی طراحی‌های واکنش‌گرا و موبایل فرست.",
      "همکاری با طراحان برای تبدیل طرح‌ها به کد.",
      "رفع باگ‌های UI و بهبود عملکرد.",
    ],
    skills: [
      { name: "React و Next.js", percentage: 85 },
      { name: "CSS و Tailwind", percentage: 80 },
      { name: "بهینه‌سازی عملکرد", percentage: 75 },
    ],
  },
  {
    id: "member-4",
    name: "حسن موسوی‌نژاد",
    role: "کارشناس سئو",
    quote: "کدنویسی تمیز و بهینه، تجربه کاربری بی‌نقص را تضمین می‌کند.",
    image: {
      src: "/img/team-member-5.png",
      alt: "حسن موسوی‌نژاد",
    },
    phone: "+98 912 234 5678",
    email: "hassan.mousavi@example.com",
    description: [
      "حسن در بهینه‌سازی و ساخت رابط‌های کاربری داینامیک با React و Next.js تخصص دارد.",
      "او مهارت بالایی در بهینه‌سازی عملکرد وب و ایجاد انیمیشن‌های روان دارد.",
      "تمرکز او بر نوشتن کد تمیز و قابل نگهداری است.",
    ],
    socialLinks: {
      facebook: "https://facebook.com/hassan.mousavi",
      linkedin: "https://linkedin.com/in/hassan-mousavi",
      dribbble: "https://dribbble.com/hassan-mousavi",
      instagram: "https://instagram.com/hassan-mousavi",
    },
    activities: [
      "توسعه رابط‌های کاربری با React و TypeScript.",
      "بهینه‌سازی سرعت بارگذاری صفحات.",
      "پیاده‌سازی طراحی‌های واکنش‌گرا و موبایل فرست.",
      "همکاری با طراحان برای تبدیل طرح‌ها به کد.",
      "رفع باگ‌های UI و بهبود عملکرد.",
    ],
    skills: [
      { name: "React و Next.js", percentage: 85 },
      { name: "CSS و Tailwind", percentage: 80 },
      { name: "بهینه‌سازی عملکرد", percentage: 75 },
    ],
  },
];
