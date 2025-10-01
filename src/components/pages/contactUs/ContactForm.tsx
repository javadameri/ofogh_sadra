"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "نام خود را وارد کنید";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = "ایمیل معتبر وارد کنید";
    if (!formData.message.trim()) newErrors.message = "پیام نمی‌تواند خالی باشد";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSuccess(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          setSuccess(
            "❌ شما بیش از حد مجاز فرم ارسال کرده‌اید. لطفاً فردا دوباره تلاش کنید."
          );
        } else {
          setSuccess(data.error || "مشکلی رخ داد. لطفاً دوباره تلاش کنید.");
        }
        return;
      }

      setSuccess("✅ پیام شما با موفقیت ارسال شد!");
      setFormData({ name: "", email: "", message: "" });

      // پیام موفق بعد از 5 ثانیه پاک شود
      setTimeout(() => setSuccess(null), 5000);
    } catch (err) {
      setSuccess("⚠️ خطای شبکه، لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-us-form" dir="rtl">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="نام و نام خانوادگی*"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <small className="text-danger">{errors.name}</small>}
      </div>

      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="ایمیل*"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <small className="text-danger">{errors.email}</small>}
      </div>

      <div className="form-group">
        <textarea
          className="form-control"
          rows={5}
          placeholder="پیام*"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
        {errors.message && (
          <small className="text-danger">{errors.message}</small>
        )}
      </div>

      <button
        type="submit"
        className="btn secondary-solid-btn"
        disabled={loading}
      >
        {loading ? "در حال ارسال..." : "ارسال پیام"}
      </button>

      {success && (
        <div className="mt-3 alert alert-info" role="alert">
          {success}
        </div>
      )}
    </form>
  );
};
