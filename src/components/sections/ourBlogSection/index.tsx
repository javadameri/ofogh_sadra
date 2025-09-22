"use client";

import { SingleBlog } from "@/components/view";
import { BlogPost } from "@/library";

interface OurBlogSectionProps {
  subtitle: string;
  title: string;
  description: string;
  posts: BlogPost[];
}

export const OurBlogSection = ({
  subtitle,
  title,
  description,
  posts,
}: OurBlogSectionProps) => {
  return (
    <section className="our-blog-section ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-9">
            <div className="section-heading text-center mb-5">
              <strong className="color-secondary">{subtitle}</strong>
              <h2>{title}</h2>
              <span className="animate-border mx-auto mb-4"></span>
              <p className="lead">{description}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-md-4 col-sm-6 mb-4">
              <SingleBlog post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
