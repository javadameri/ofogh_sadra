import { Layout } from "@/components";
import { BlogDetails } from "@/components";
import { blogPosts, comments, recentPosts, tags } from "@/constants/ourBlogs";
import { notFound } from "next/navigation";

// تولید مسیرهای استاتیک برای پست‌های بلاگ
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

// فعال کردن ISR (اختیاری: به‌روزرسانی هر 60 ثانیه)
export const revalidate = 60;

interface BlogDetailsPageProps {
  params: { id: string };
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <Layout>
      <BlogDetails
        post={post}
        comments={comments.filter((c) => c.id.includes("comment"))}
        recentPosts={recentPosts}
        tags={tags}
      />
    </Layout>
  );
}
