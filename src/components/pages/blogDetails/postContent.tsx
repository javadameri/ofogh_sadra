"use client";

import Image from "next/image";
import Link from "next/link";
import { DetailedBlogPost } from "@/library";

interface PostContentProps {
  post: DetailedBlogPost;
}

export const PostContent = ({ post }: PostContentProps) => {
  return (
    <article className="post">
      <div className="post-preview">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          width={post.image.width}
          height={post.image.height}
          sizes="(max-width: 768px) 100vw, 800px"
          className="img-fluid"
          priority
        />
      </div>
      <div className="post-wrapper">
        <div className="post-header">
          <h1 className="post-title">{post.title}</h1>
          <ul className="post-meta">
            <li>{post.date}</li>
            <li>
              در{" "}
              {post.categories.map((category, index) => (
                <span key={category.name}>
                  <Link href={category.link}>{category.name}</Link>
                  {index < post.categories.length - 1 && "، "}
                </span>
              ))}
            </li>
            <li>
              <Link href="#comments">{post.commentsCount} نظر</Link>
            </li>
          </ul>
        </div>
        <div className="post-content">
          {post.content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {post.content.blockquote && (
            <blockquote className="blockquote">
              <p>{post.content.blockquote.text}</p>
              <footer className="blockquote-footer">
                {post.content.blockquote.author}
              </footer>
            </blockquote>
          )}
          {post.content.list && (
            <ol>
              {post.content.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          )}
        </div>
        <div className="post-footer">
          <div className="post-tags">
            {post.tags.map((tag) => (
              <Link key={tag.name} href={tag.link}>
                {tag.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
