"use client";

export const CommentForm = () => {
  return (
    <div className="comment-respond" id="reply-form">
      <h5 className="comment-reply-title">پاسخ دهید</h5>
      <p className="comment-notes">
        آدرس ایمیل شما منتشر نخواهد شد. قسمت‌های مورد نیاز علامت‌گذاری شده‌اند
        <span className="required">*</span>
      </p>
      <form className="comment-form row">
        <div className="form-group col-md-4">
          <input
            className="form-control"
            type="text"
            placeholder="نام *"
            required
            aria-required="true"
          />
        </div>
        <div className="form-group col-md-4">
          <input
            className="form-control"
            type="email"
            placeholder="پست الکترونیک *"
            required
            aria-required="true"
          />
        </div>
        <div className="form-group col-md-4">
          <input
            className="form-control"
            type="url"
            placeholder="سایت اینترنتی"
          />
        </div>
        <div className="form-group col-md-12">
          <textarea
            className="form-control"
            rows={8}
            placeholder="اظهار نظر *"
            required
            aria-required="true"
          ></textarea>
        </div>
        <div className="form-submit col-md-12">
          <button className="btn secondary-solid-btn" type="submit">
            ارسال نظر
          </button>
        </div>
      </form>
    </div>
  );
};
