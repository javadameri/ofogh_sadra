"use client";

import { RecentPost, Tag } from "@/library";
import Image from "next/image";
import Link from "next/link";

interface SidebarProps {
  recentPosts: RecentPost[];
  tags: Tag[];
}

const RecentPostsWidget = ({ posts }: { posts: RecentPost[] }) => (
  <aside className="widget widget-recent-entries-custom">
    <div className="widget-title">
      <h6>پست‌های اخیر</h6>
    </div>
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="clearfix">
          <div className="wi">
            <Link href={post.link}>
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width={post.image.width}
                height={post.image.height}
                className="img-fluid rounded"
              />
            </Link>
          </div>
          <div className="wb">
            <Link href={post.link}>{post.title}</Link>
            <span className="post-date">{post.date}</span>
          </div>
        </li>
      ))}
    </ul>
  </aside>
);

const NewsletterWidget = () => (
  <aside className="widget widget-categories">
    <div className="widget-title">
      <h6>خبرنامه</h6>
    </div>
    <p>آدرس ایمیل خود را وارد کنید تا در خبرنامه ما عضو شوید</p>
    <form className="d-none d-md-block d-lg-block">
      <input
        type="email"
        className="form-control input"
        id="email-footer"
        name="email"
        placeholder="info@yourdomain.com"
        required
        aria-required="true"
      />
      <button
        type="submit"
        className="btn secondary-solid-btn btn-block btn-not-rounded mt-3"
      >
        اشتراک
      </button>
    </form>
  </aside>
);

const TagsWidget = ({ tags }: { tags: Tag[] }) => (
  <aside className="widget widget-tag-cloud">
    <div className="widget-title">
      <h6>برچسب‌ها</h6>
    </div>
    <div className="tag-cloud">
      {tags.map((tag) => (
        <Link key={tag.name} href={tag.link}>
          {tag.name}
        </Link>
      ))}
    </div>
  </aside>
);

export const Sidebar = ({ recentPosts, tags }: SidebarProps) => {
  return (
    <div className="sidebar-right pl-4">
      <RecentPostsWidget posts={recentPosts} />
      <NewsletterWidget />
      <TagsWidget tags={tags} />
    </div>
  );
};
