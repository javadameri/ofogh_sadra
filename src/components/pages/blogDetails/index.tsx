"use client";

import { DetailedBlogPost, Comment, RecentPost, Tag } from "@/library";
import { PostContent } from "./postContent";
import { CommentsArea } from "./commentsArea";
import { CommentForm } from "./commentForm";
import { Sidebar } from "./blogSidebar";

interface BlogDetailsProps {
  post: DetailedBlogPost;
  comments: Comment[];
  recentPosts: RecentPost[];
  tags: Tag[];
}

export const BlogDetails = ({
  post,
  comments,
  recentPosts,
  tags,
}: BlogDetailsProps) => {
  return (
    <main className="main">
      <div className="module ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <PostContent post={post} />
              <CommentsArea comments={comments} />
              <CommentForm />
            </div>
            <div className="col-lg-4 col-md-4">
              <Sidebar recentPosts={recentPosts} tags={tags} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
