import { NextResponse } from "next/server";

// ذخیره تعداد درخواست‌ها در حافظه (برای هر IP)
const requestsMap = new Map<
  string,
  { count: number; firstRequest: number; blockedUntil?: number }
>();

const LIMIT = 10; // حداکثر تعداد مجاز در بازه
const WINDOW = 60 * 60 * 1000; // 1 ساعت
const BLOCK_DURATION = 24 * 60 * 60 * 1000; // 1 روز

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();

  const record = requestsMap.get(ip);

  if (record?.blockedUntil && now < record.blockedUntil) {
    return NextResponse.json(
      { error: "Too many requests. Try again tomorrow." },
      { status: 429 }
    );
  }

  if (!record) {
    requestsMap.set(ip, { count: 1, firstRequest: now });
  } else {
    // اگر توی همون بازه‌ی یک ساعت هست
    if (now - record.firstRequest < WINDOW) {
      record.count += 1;

      if (record.count > LIMIT) {
        record.blockedUntil = now + BLOCK_DURATION;
        return NextResponse.json(
          { error: "Too many requests. You are blocked for 24 hours." },
          { status: 429 }
        );
      }
    } else {
      // بازه جدید شروع بشه
      record.count = 1;
      record.firstRequest = now;
    }
  }

  const { name, email, message } = await req.json();

  // ارسال پیام به API تو
  const text = `📩 New Contact Message\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message: ${message}`;
  await fetch(
    `https://eitaayar.ir/api/bot195910:1372ccc9-0d72-45e4-8d28-0f2b8d62b834/sendMessage?chat_id=10894860&text=${encodeURIComponent(
      text
    )}`
  );

  return NextResponse.json({ success: true });
}
