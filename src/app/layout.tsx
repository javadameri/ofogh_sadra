import NextTopLoader from "nextjs-toploader";
import "@/app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.PUBLIC_BASE_URL || "https://ofoghesadra.ir"),
  title: "داده پردازان افق آینده صدرا | طراحی و توسعه وب حرفه‌ای",
  description:
    "ما وب‌سایت‌هایی خلاقانه، کاربرپسند و بهینه‌سازی‌شده برای موتورهای جستجو طراحی می‌کنیم که به رشد کسب‌وکار شما کمک می‌کند.",
  openGraph: {
    title: "داده پردازان افق آینده صدرا | طراحی و توسعه وب حرفه‌ای",
    description:
      "ما وب‌سایت‌هایی خلاقانه، کاربرپسند و بهینه‌سازی‌شده برای موتورهای جستجو طراحی می‌کنیم که به رشد کسب‌وکار شما کمک می‌کند.",
    images: ["/img/logo-color.png"], // تصویر پیش‌فرض برای کل سایت
  },
  robots: {
    index: true, 
    follow: true,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html dir="rtl" lang="fa">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/favicon.png" />
      </head>
      <body>
        <NextTopLoader
          color="#29d"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #29d,0 0 5px #29d"
        />
        {children}
      </body>
    </html>
  );
}
