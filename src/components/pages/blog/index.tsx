import { OurBlogSection } from "@/components/sections";
import { PageHeaderSection } from "@/components/view";
import { blogs } from "@/constants/ourBlogs";

export const Blog = () => {
  return (
    <main className="main">
      <PageHeaderSection
        title="اخبار"
        backgroundImage="/img/header-bg-5.jpg"
        breadcrumbItems={[
          { label: "خانه", link: "/" },
          { label: "اخبار", link: "/blog", isActive: true },
        ]}
        isRtl={true}
      />
      {blogs.length > 0 ? (
        <OurBlogSection
          subtitle="وبلاگ ما"
          title="جدیدترین مقالات و نکات طراحی وب"
          description="با آخرین روندها و نکات در زمینه طراحی و توسعه وب آشنا شوید. مقالات ما به شما کمک می‌کنند تا بهترین تصمیم‌ها را برای حضور دیجیتال خود بگیرید."
          posts={blogs}
        />
      ) : (
        <div className="container text-center py-5">
          <p className="lead">هیچ پستی یافت نشد.</p>
        </div>
      )}
    </main>
  );
};