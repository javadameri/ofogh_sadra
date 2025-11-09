import { Service } from "@/library";
import {
  IconBrush,
  IconSearch,
  IconCode,
  IconSpeedboat,
  IconShieldCheck,
  IconSitemap,
  IconDeviceMobile,
  IconCloudUpload,
  IconTrendingUp,
  IconShoppingCart,
  IconPhone,
  IconCpu,
} from "@tabler/icons-react";

export const serviceItems: Service[] = [
  {
    id: "web-design",
    icon: IconBrush,
    title: "طراحی وب‌سایت",
    description:
      "طراحی وب‌سایت‌های زیبا و کاربرپسند با تجربه کاربری عالی.",
    longDescription: [
      "ما وب‌سایت‌های مدرن، واکنش‌گرا و سازگار با سئو طراحی می‌کنیم که همسو با اهداف کسب‌وکار شما باشند.",
      "رویکرد طراحی ما تضمین‌کننده‌ی ناوبری ساده و مسیر کاربری بهینه است.",
    ],
    image: {
      src: "/img/services/web-design.jpg",
      alt: "طراحی وب‌سایت",
      width: 800,
      height: 500,
    },
    features: [
      "طراحی رابط کاربری و تجربه کاربری اختصاصی متناسب با برند شما",
      "نمایش صحیح در تمامی دستگاه‌ها (ریسپانسیو)",
      "بهینه‌سازی سرعت و سئو",
    ],
    link: "/services/web-design",
  },
  {
    id: "seo",
    icon: IconSearch,
    title: "بهینه‌سازی سئو",
    description:
      "افزایش رتبه سایت در موتورهای جستجو با استراتژی‌های پیشرفته سئو.",
    longDescription: [
      "ما ساختار، محتوا و بک‌لینک‌های وب‌سایت شما را تحلیل و بهینه‌سازی می‌کنیم تا بیشترین بازدید را به دست آورید.",
      "استراتژی‌های ما مطابق آخرین بروزرسانی‌های گوگل هستند تا رشد بلندمدت شما تضمین شود.",
    ],
    image: {
      src: "/img/services/seo.jpg",
      alt: "بهینه‌سازی سئو",
      width: 800,
      height: 500,
    },
    features: [
      "تحقیق و هدف‌گذاری کلمات کلیدی",
      "سئوی داخلی و خارجی",
      "آنالیز فنی سئو",
    ],
    link: "/services/seo",
  },
  {
    id: "web-development",
    icon: IconCode,
    title: "توسعه وب",
    description: "راهکارهای برنامه‌نویسی اختصاصی متناسب با نیازهای شما.",
    longDescription: [
      "از صفحات فرود تا اپلیکیشن‌های سازمانی، ما راهکارهای مقیاس‌پذیر و امن ارائه می‌دهیم.",
      "توسعه ما بر اساس تکنولوژی‌های مدرن است تا عملکرد و پایداری تضمین شود.",
    ],
    image: {
      src: "/img/services/web-development.jpg",
      alt: "توسعه وب",
      width: 800,
      height: 500,
    },
    features: [
      "توسعه وب فول‌استک",
      "یکپارچه‌سازی APIها",
      "زیرساخت امن و مقیاس‌پذیر",
    ],
    link: "/services/web-development",
  },
  {
    id: "ui-ux",
    icon: IconSpeedboat,
    title: "طراحی UI/UX",
    description:
      "رابط‌های کاربری جذاب و تجربه کاربری بهینه برای محصولات دیجیتال.",
    longDescription: [
      "ما خلاقیت و کاربرپسندی را ترکیب می‌کنیم تا طراحی‌هایی ارائه دهیم که کاربران عاشقشان شوند.",
      "هر تصمیم طراحی بر اساس تحقیق و بهترین روش‌ها انجام می‌شود.",
    ],
    image: {
      src: "/img/services/ui-ux.jpg",
      alt: "طراحی UI/UX",
      width: 800,
      height: 500,
    },
    features: [
      "تحقیقات کاربری و وایرفریمینگ",
      "نمونه‌های تعاملی",
      "طراحی دقیق و حرفه‌ای",
    ],
    link: "/services/ui-ux",
  },
  {
    id: "responsive-design",
    icon: IconDeviceMobile,
    title: "طراحی ریسپانسیو",
    description: "وب‌سایت‌هایی که در همه دستگاه‌ها عالی نمایش داده می‌شوند.",
    longDescription: [
      "ما اطمینان حاصل می‌کنیم که وب‌سایت شما در دسکتاپ، تبلت و موبایل بی‌نقص نمایش داده شود.",
    ],
    image: {
      src: "/img/services/responsive-design.jpg",
      alt: "طراحی ریسپانسیو",
      width: 800,
      height: 500,
    },
    features: [
      "سازگاری با مرورگرهای مختلف",
      "رویکرد موبایل فرست",
      "چیدمان بهینه برای هر اندازه صفحه",
    ],
    link: "/services/responsive-design",
  },
  {
    id: "support",
    icon: IconShieldCheck,
    title: "پشتیبانی و نگهداری",
    description:
      "پشتیبانی ۲۴ ساعته برای تضمین عملکرد بی‌وقفه وب‌سایت شما.",
    longDescription: [
      "ما نظارت مداوم، بروزرسانی و رفع اشکال ارائه می‌دهیم تا وب‌سایت شما همیشه در بهترین حالت کار کند.",
    ],
    image: {
      src: "/img/services/support.jpg",
      alt: "پشتیبانی و نگهداری",
      width: 800,
      height: 500,
    },
    features: [
      "پشتیبانی فنی ۲۴/۷",
      "بروزرسانی‌های امنیتی",
      "مانیتورینگ عملکرد",
    ],
    link: "/services/support",
  },
];

export const service2Items: Service[] = [
  {
    id: "custom-web-design",
    icon: IconSitemap,
    title: "طراحی اختصاصی وب‌سایت",
    description:
      "طراحی و پیاده‌سازی وب‌سایت‌های حرفه‌ای و ریسپانسیو با ساختار بهینه برای موتورهای جستجو.",
    longDescription: [
      "راهکارهای طراحی ما بازتاب‌دهنده هویت برند شماست و در عین حال کاربرپسند و کاربردی است.",
    ],
    image: {
      src: "/img/services/custom-web-design.jpg",
      alt: "طراحی اختصاصی وب‌سایت",
      width: 800,
      height: 500,
    },
    features: [
      "طراحی منحصربه‌فرد بر اساس کسب‌وکار شما",
      "ساختار بهینه برای سئو",
      "نمایش ریسپانسیو در همه دستگاه‌ها",
    ],
    link: "/services/web-design",
  },
  {
    id: "mobile-app",
    icon: IconDeviceMobile,
    title: "طراحی اپلیکیشن موبایل",
    description: "توسعه اپلیکیشن‌های اندروید و iOS متناسب با نیاز کسب‌وکار شما.",
    longDescription: [
      "ما اپلیکیشن‌های بومی و کراس پلتفرم با عملکرد روان ارائه می‌دهیم.",
    ],
    image: {
      src: "/img/services/mobile-app.jpg",
      alt: "طراحی اپلیکیشن موبایل",
      width: 800,
      height: 500,
    },
    features: [
      "سازگاری با چند پلتفرم",
      "رابط کاربری و تجربه کاربری ساده و جذاب",
      "یکپارچه‌سازی با APIها",
    ],
    link: "/services/mobile-app",
  },
  {
    id: "sadra-ai",
    icon: IconCpu, // در صورت نیاز می‌تونی آیکون مناسب‌تری انتخاب کنی
    title: "هوش مصنوعی سازمانی صَدرا",
    description:
      "ارائه راهکارهای هوش مصنوعی درون‌سازمانی با تمرکز بر امنیت، پردازش محلی و چت اختصاصی سازمانی.",
    longDescription: [
      "سرویس صَدرا اَی‌آی، امکان استقرار مدل‌های هوش مصنوعی و چت سازمانی را به‌صورت کاملاً محلی فراهم می‌کند تا بدون وابستگی به سرورهای خارجی، از توان تحلیل و پردازش هوشمند بهره‌مند شوید.",
      "این راهکار برای ارگان‌ها و شرکت‌هایی طراحی شده که امنیت اطلاعات و حفظ داده‌های داخلی برایشان اهمیت بالایی دارد.",
    ],
    image: {
      src: "/img/services/sadra-ai.jpg",
      alt: "هوش مصنوعی سازمانی صَدرا",
      width: 800,
      height: 500,
    },
    features: [
      "چت هوش مصنوعی درون‌سازمانی با امنیت کامل",
      "استقرار مدل‌های زبانی و تحلیلی در سرورهای داخلی",
      "قابلیت سفارشی‌سازی برای نیازهای هر سازمان",
    ],
    link: "https://sadra-ai.ir",
  },
  {
    id: "cloud-hosting",
    icon: IconCloudUpload,
    title: "زیرساخت ابری و هاستینگ",
    description:
      "ارائه راهکارهای میزبانی امن، سریع و مقرون‌به‌صرفه برای کسب‌وکارها.",
    longDescription: [
      "میزبانی ابری ما تضمین‌کننده‌ی امنیت، مقیاس‌پذیری و پایداری بالاست.",
    ],
    image: {
      src: "/img/services/cloud-hosting.jpg",
      alt: "زیرساخت ابری و هاستینگ",
      width: 800,
      height: 500,
    },
    features: [
      "تضمین آپ‌تایم ۹۹.۹٪",
      "زیرساخت مقیاس‌پذیر",
      "حفاظت از داده‌ها",
    ],
    link: "/services/cloud-hosting",
  },
  {
    id: "seo-optimization",
    icon: IconTrendingUp,
    title: "سئو و بهینه‌سازی وب‌سایت",
    description:
      "افزایش رتبه وب‌سایت در نتایج جستجو با تکنیک‌های حرفه‌ای سئو.",
    longDescription: [
      "ما با سئوی فنی و محتوایی، دیده‌شدن وب‌سایت شما را افزایش می‌دهیم.",
    ],
    image: {
      src: "/img/services/seo-optimization.jpg",
      alt: "سئو و بهینه‌سازی وب‌سایت",
      width: 800,
      height: 500,
    },
    features: [
      "بهینه‌سازی کلمات کلیدی",
      "استراتژی‌های بک‌لینک",
      "آنالیز عملکرد محتوا",
    ],
    link: "/services/seo",
  },
  {
    id: "ecommerce",
    icon: IconShoppingCart,
    title: "راه‌اندازی فروشگاه اینترنتی",
    description:
      "طراحی فروشگاه‌های آنلاین با مدیریت کامل سفارش و پرداخت.",
    longDescription: [
      "ما پلتفرم‌های فروشگاهی مقیاس‌پذیر ایجاد می‌کنیم که همراه با کسب‌وکار شما رشد می‌کنند.",
    ],
    image: {
      src: "/img/services/ecommerce.jpg",
      alt: "فروشگاه اینترنتی",
      width: 800,
      height: 500,
    },
    features: [
      "مدیریت کاتالوگ محصولات",
      "درگاه‌های پرداخت امن",
      "سیستم پیگیری سفارش",
    ],
    link: "/services/ecommerce",
  },
  {
    id: "digital-marketing",
    icon: IconPhone,
    title: "دیجیتال مارکتینگ",
    description:
      "افزایش فروش از طریق تبلیغات آنلاین، ایمیل مارکتینگ و کمپین‌های شبکه‌های اجتماعی.",
    longDescription: [
      "ما کمپین‌های داده‌محور اجرا می‌کنیم که بازگشت سرمایه شما را به حداکثر برسانند.",
    ],
    image: {
      src: "/img/services/digital-marketing.jpg",
      alt: "دیجیتال مارکتینگ",
      width: 800,
      height: 500,
    },
    features: [
      "بازاریابی شبکه‌های اجتماعی",
      "کمپین‌های ایمیل مارکتینگ",
      "تبلیغات کلیکی (PPC)",
    ],
    link: "/services/digital-marketing",
  },
];
