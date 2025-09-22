import {
  IconBrush,
  IconSearch,
  IconCode,
  IconSpeedboat,
  IconDeviceMobile,
  IconShieldCheck,
} from "@tabler/icons-react";

export const outstandingTabs = [
  {
    id: "feature-tab-1",
    icon: IconBrush,
    title: "طراحی وب‌سایت",
    description: [
      "ما وب‌سایت‌هایی خلاقانه و کاربرپسند طراحی می‌کنیم که تجربه کاربری بی‌نظیری ارائه می‌دهند.",
      "طراحی‌های ما با توجه به هویت برند شما و نیازهای مخاطبانتان شخصی‌سازی می‌شوند.",
    ],
    features: [
      { text: "طراحی‌های مدرن و جذاب" },
      { text: "بهینه‌سازی برای سرعت و عملکرد" },
      { text: "سازگاری با تمام دستگاه‌ها" },
    ],
    image: {
      src: "/img/web-design.jpg",
      alt: "طراحی وب‌سایت",
      width: 400,
      height: 530,
    },
    ctaPrimary: { text: "اکنون شروع کنید", link: "/contact" },
    ctaSecondary: {
      text: "بیشتر بدانید",
      link: "/services/web-design",
    },
  },
  {
    id: "feature-tab-2",
    icon: IconSearch,
    title: "بهینه‌سازی سئو",
    description: [
      "با استراتژی‌های سئوی پیشرفته، رتبه‌بندی وب‌سایت شما را در موتورهای جستجو بهبود می‌دهیم.",
      "ما به شما کمک می‌کنیم تا ترافیک ارگانیک بیشتری جذب کنید و دیده شوید.",
    ],
    features: [
      { text: "تحلیل کلمات کلیدی" },
      { text: "بهینه‌سازی محتوا" },
      { text: "لینک‌سازی حرفه‌ای" },
    ],
    image: {
      src: "/img/seo-optimization.jpg",
      alt: "بهینه‌سازی سئو",
      width: 400,
      height: 530,
    },
    ctaPrimary: { text: "اکنون شروع کنید", link: "/contact" },
    ctaSecondary: { text: "بیشتر بدانید", link: "/services/seo" },
  },
  {
    id: "feature-tab-3",
    icon: IconCode,
    title: "توسعه وب",
    description: [
      "ما راه‌حل‌های برنامه‌نویسی سفارشی ارائه می‌دهیم که نیازهای خاص کسب‌وکار شما را برآورده می‌کند.",
      "از وب‌سایت‌های ساده تا پلتفرم‌های پیچیده، ما همه چیز را پوشش می‌دهیم.",
    ],
    image: {
      src: "/img/web-development.jpg",
      alt: "توسعه وب",
      width: 400,
      height: 530,
    },
    ctaPrimary: { text: "اکنون شروع کنید", link: "/contact" },
    ctaSecondary: {
      text: "بیشتر بدانید",
      link: "/services/web-development",
    },
    isActive: true,
  },
  {
    id: "feature-tab-4",
    icon: IconSpeedboat,
    title: "طراحی UI/UX",
    description: [
      "ما رابط‌های کاربری جذاب و تجربه کاربری بهینه طراحی می‌کنیم که کاربران را مجذوب می‌کند.",
      "طراحی‌های ما بر اساس رفتار کاربران و بهترین استانداردها شکل می‌گیرند.",
    ],
    image: {
      src: "/img/ui-ux-design.jpg",
      alt: "طراحی UI/UX",
      width: 400,
      height: 530,
    },
    ctaPrimary: { text: "اکنون شروع کنید", link: "/contact" },
    ctaSecondary: { text: "بیشتر بدانید", link: "/services/ui-ux" },
  },
  {
    id: "feature-tab-5",
    icon: IconDeviceMobile,
    title: "خدمات متنوع وب",
    serviceCards: [
      {
        icon: IconBrush,
        title: "طراحی وب‌سایت",
        description: "وب‌سایت‌هایی زیبا و کاربرپسند برای تجربه کاربری بی‌نظیر.",
        link: "/services/web-design",
      },
      {
        icon: IconSearch,
        title: "بهینه‌سازی سئو",
        description:
          "بهبود رتبه‌بندی در موتورهای جستجو با استراتژی‌های پیشرفته.",
        link: "/services/seo",
      },
      {
        icon: IconCode,
        title: "توسعه وب",
        description: "راه‌حل‌های برنامه‌نویسی سفارشی برای نیازهای شما.",
        link: "/services/web-development",
      },
      {
        icon: IconSpeedboat,
        title: "طراحی UI/UX",
        description: "رابط کاربری جذاب و تجربه کاربری بهینه.",
        link: "/services/ui-ux",
      },
      {
        icon: IconDeviceMobile,
        title: "طراحی ریسپانسیو",
        description: "وب‌سایت‌هایی بی‌نقص در همه دستگاه‌ها.",
        link: "/services/responsive-design",
      },
      {
        icon: IconShieldCheck,
        title: "پشتیبانی 24/7",
        description: "پشتیبانی مداوم برای عملکرد بی‌وقفه وب‌سایت شما.",
        link: "/services/support",
      },
    ],
  },
];
