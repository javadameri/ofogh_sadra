import { Metadata } from "next";
import { Blog, Layout } from "@/components";

export const metadata: Metadata = {
  title: "اخبار و مقالات | داده پردازان افق آینده صدرا",
  description:
    "آخرین مقالات و اخبار در زمینه طراحی و توسعه وب، سئو، و تجربه کاربری را در بلاگ ما بخوانید.",
  openGraph: {
    title: "اخبار و مقالات | داده پردازان افق آینده صدرا",
    description:
      "آخرین مقالات و اخبار در زمینه طراحی و توسعه وب، سئو، و تجربه کاربری را در بلاگ ما بخوانید.",
    images: ["/img/blog/1.jpg"],
  },
};

export const revalidate = 60;

export default function BlogPage() {
  return (
    <Layout>
      <Blog />
    </Layout>
  );
}
