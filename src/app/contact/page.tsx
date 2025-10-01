import { ContactUs, Layout } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ارتباط با ما | داده پردازان افق آینده صدرا",
  description:
    "راه های ارتباطی با تیم داده پردازان افق آینده صدرا.",
  openGraph: {
    title: "ارتباط با ما | داده پردازان افق آینده صدرا",
    description:
      "راه های ارتباطی با تیم داده پردازان افق آینده صدرا.",
    images: ["/img/about-us-hero.jpg"],
  },
};

export const revalidate = 60;

export default function ContactUsPage() {
  return (
    <div>
      <Layout>
        <ContactUs/>
      </Layout>
    </div>
  );
}