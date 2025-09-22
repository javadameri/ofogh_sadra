import { TeamMember } from "@/library";

export const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "علی رضایی",
    role: "طراح UI/UX",
    quote: "طراحی رابط کاربری جذاب و کاربرپسند، کلید موفقیت هر وب‌سایت است.",
    image: {
      src: "/img/team-member-1.png",
      alt: "علی رضایی",
    },
    phone: "+98 912 123 4567",
    email: "ali.rezaei@example.com",
    description: [
      "علی با بیش از 7 سال تجربه در طراحی رابط کاربری، طرح‌های خلاقانه و کاربرمحوری خلق می‌کند.",
      "او در استفاده از ابزارهایی مثل Figma و Adobe XD تخصص دارد و با تیم‌های توسعه هماهنگ کار می‌کند.",
      "تمرکز او بر بهبود تجربه کاربری و افزایش نرخ تبدیل است.",
    ],
    socialLinks: {
      facebook: "https://facebook.com/ali.rezaei",
      linkedin: "https://linkedin.com/in/ali-rezaei",
      dribbble: "https://dribbble.com/ali-rezaei",
      instagram: "https://instagram.com/ali.rezaei",
    },
    activities: [
      "طراحی رابط کاربری برای وب‌سایت‌های تجارت الکترونیک.",
      "ایجاد پروتوتایپ‌های تعاملی برای پروژه‌های استارتاپی.",
      "همکاری با تیم‌های توسعه برای پیاده‌سازی طرح‌ها.",
      "انجام تست‌های کاربری برای بهبود تجربه.",
      "آموزش اصول طراحی UI/UX به اعضای جدید تیم.",
    ],
    skills: [
      { name: "طراحی UI/UX", percentage: 90 },
      { name: "پروتوتایپ‌سازی", percentage: 85 },
      { name: "تست کاربری", percentage: 80 },
    ],
  },
  {
    id: "member-2",
    name: "سارا احمدی",
    role: "توسعه‌دهنده فرانت‌اند",
    quote: "کدنویسی تمیز و بهینه، تجربه کاربری بی‌نقصی را تضمین می‌کند.",
    image: {
      src: "/img/team-member-2.png",
      alt: "سارا احمدی",
    },
    phone: "+98 912 234 5678",
    email: "sara.ahmadi@example.com",
    description: [
      "سارا متخصص توسعه رابط‌های کاربری پویا با React و Next.js است.",
      "او در بهینه‌سازی عملکرد وب‌سایت‌ها و ایجاد انیمیشن‌های روان مهارت دارد.",
      "تمرکز او بر کدنویسی تمیز و قابل نگهداری است.",
    ],
    socialLinks: {
      facebook: "https://facebook.com/sara.ahmadi",
      linkedin: "https://linkedin.com/in/sara-ahmadi",
      dribbble: "https://dribbble.com/sara-ahmadi",
      instagram: "https://instagram.com/sara.ahmadi",
    },
    activities: [
      "توسعه رابط‌های کاربری با React و TypeScript.",
      "بهینه‌سازی سرعت بارگذاری صفحات وب.",
      "پیاده‌سازی طراحی‌های responsive و mobile-first.",
      "همکاری با طراحان برای تبدیل طرح به کد.",
      "رفع باگ‌های رابط کاربری و بهبود عملکرد.",
    ],
    skills: [
      { name: "React و Next.js", percentage: 85 },
      { name: "CSS و Tailwind", percentage: 80 },
      { name: "بهینه‌سازی عملکرد", percentage: 75 },
    ],
  },
  {
    id: "member-3",
    name: "محمد حسینی",
    role: "توسعه‌دهنده بک‌اند",
    quote: "ساخت سیستم‌های قوی و مقیاس‌پذیر، پایه موفقیت وب‌سایت‌های مدرن است.",
    image: {
      src: "/img/team-member-3.png",
      alt: "محمد حسینی",
    },
    phone: "+98 912 345 6789",
    email: "mohammad.hosseini@example.com",
    description: [
      "محمد در توسعه APIهای امن و مقیاس‌پذیر با Node.js و Django تخصص دارد.",
      "او تجربه گسترده‌ای در مدیریت دیتابیس‌های SQL و NoSQL دارد.",
      "تمرکز او بر امنیت و عملکرد سرور است.",
    ],
    socialLinks: {
      facebook: "https://facebook.com/mohammad.hosseini",
      linkedin: "https://linkedin.com/in/mohammad-hosseini",
      dribbble: "https://dribbble.com/mohammad-hosseini",
      instagram: "https://instagram.com/mohammad.hosseini",
    },
    activities: [
      "طراحی و توسعه APIهای RESTful و GraphQL.",
      "مدیریت دیتابیس‌های MySQL و MongoDB.",
      "پیاده‌سازی سیستم‌های احراز هویت و امنیت.",
      "بهینه‌سازی عملکرد سرور و مقیاس‌پذیری.",
      "همکاری با تیم فرانت‌اند برای یکپارچه‌سازی APIها.",
    ],
    skills: [
      { name: "Node.js و Express", percentage: 90 },
      { name: "مدیریت دیتابیس", percentage: 85 },
      { name: "امنیت سرور", percentage: 80 },
    ],
  },
  {
    id: "member-4",
    name: "نازنین محمدی",
    role: "متخصص سئو",
    quote: "بهینه‌سازی سئو، وب‌سایت شما را به مخاطبان بیشتری معرفی می‌کند.",
    image: {
      src: "/img/team-member-4.png",
      alt: "نازنین محمدی",
    },
    phone: "+98 912 456 7890",
    email: "nazanin.mohammadi@example.com",
    description: [
      "نازنین متخصص بهبود رتبه‌بندی وب‌سایت‌ها در موتورهای جستجوست.",
      "او در تحلیل داده‌های Google Analytics و بهینه‌سازی محتوا مهارت دارد.",
      "تمرکز او بر افزایش ترافیک ارگانیک و نرخ تبدیل است.",
    ],
    socialLinks: {
      facebook: "https://facebook.com/nazanin.mohammadi",
      linkedin: "https://linkedin.com/in/nazanin-mohammadi",
      dribbble: "https://dribbble.com/nazanin-mohammadi",
      instagram: "https://instagram.com/nazanin.mohammadi",
    },
    activities: [
      "تحلیل کلمات کلیدی و بهینه‌سازی محتوا.",
      "بهبود ساختار لینک‌سازی داخلی و خارجی.",
      "پیاده‌سازی استراتژی‌های سئوی تکنیکال.",
      "آموزش تیم‌های محتوا برای تولید محتوای سئوپسند.",
      "مانیتورینگ عملکرد وب‌سایت با ابزارهای سئو.",
    ],
    skills: [
      { name: "سئوی تکنیکال", percentage: 85 },
      { name: "تحلیل داده", percentage: 80 },
      { name: "استراتژی محتوا", percentage: 75 },
    ],
  },
];