"use client";

import { Comment } from "@/library";
import Image from "next/image";
import Link from "next/link";

interface CommentsAreaProps {
  comments: Comment[];
}

const CommentItem = ({ comment }: { comment: Comment }) => {
  return (
    <div className="comment">
      <div className="comment-author">
        <Image
          src={comment.avatar.src}
          alt={comment.avatar.alt}
          width={comment.avatar.width}
          height={comment.avatar.height}
          className="avatar img-fluid rounded-circle"
        />
      </div>
      <div className="comment-body">
        <div className="comment-meta">
          <div className="comment-meta-author">
            <Link href="#">{comment.author}</Link>
          </div>
          <div className="comment-meta-date">
            <Link href="#">{comment.date}</Link>
          </div>
        </div>
        <div className="comment-content">
          <p>{comment.content}</p>
        </div>
        <div className="comment-reply">
          <Link href="#reply-form">پاسخ</Link>
        </div>
      </div>
      {comment.children && comment.children.length > 0 && (
        <div className="children">
          {comment.children.map((child) => (
            <CommentItem key={child.id} comment={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export const CommentsArea = ({ comments }: CommentsAreaProps) => {
  return (
    <div className="comments-area mb-5" id="comments">
      <h5 className="comments-title">{comments.length} نظر</h5>
      <div className="comment-list">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};
