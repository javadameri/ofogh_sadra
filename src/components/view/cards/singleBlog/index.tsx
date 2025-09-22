"use client";

import { BlogPost } from "@/library";
import { IconArrowLeft, IconHeartFilled, IconShare } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

interface SingleBlogProps {
  post: BlogPost;
}

export const SingleBlog = ({ post }: SingleBlogProps) => {
  // تابع برای اشتراک‌گذاری (کپی URL به کلیپ‌بورد)
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.origin + post.link);
    alert("لینک پست کپی شد!");
  };

  return (
    <div className="single-blog-card card border-0 shadow-sm">
      <div className="blog-img position-relative">
        <Image
          width={post.image.width}
          height={post.image.height}
          src={post.image.src}
          className="card-img-top"
          alt={post.image.alt}
          sizes="(max-width: 768px) 100vw, 360px"
          loading="lazy"
        />
        <div className="meta-date">
          <strong>{post.date.split(" ")[0]}</strong>
          <small>{post.date.split(" ")[1]}</small>
        </div>
      </div>
      <div className="card-body">
        <div className="post-meta mb-2">
          <ul className="list-inline meta-list">
            <li className="list-inline-item">
              <IconHeartFilled
                size={12}
                className="me-2"
                aria-label="تعداد نظرات"
              />
              <span>{post.comments}</span> نظر
            </li>
            <li className="list-inline-item">
              <button
                onClick={handleShare}
                className="btn btn-link p-0"
                aria-label="اشتراک‌گذاری"
              >
                <IconShare size={12} className="me-2" />
                <span>اشتراک‌گذاری</span>
              </button>
            </li>
          </ul>
        </div>
        <h3 className="h5 mb-2 card-title">
          <Link href={post.link}>{post.title}</Link>
        </h3>
        <p className="card-text">{post.excerpt}</p>
        <Link href={post.link} className="detail-link">
          بیشتر بخوانید{" "}
          <span>
            <IconArrowLeft size={18} />
          </span>
        </Link>
      </div>
    </div>
  );
};