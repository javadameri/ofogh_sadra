import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { match } from '@formatjs/intl-localematcher';



// لیست صفحات محدودشده برای دسترسی
const forbiddenPages = [
    '/seat-selection',
    '/pay-info',
    '/dashboard/*'
];

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    const pathname = request.nextUrl.pathname;

    // بررسی دسترسی به صفحات محدودشده
    const isForbiddenPage = forbiddenPages.some(page => pathname.startsWith(page));
    if (isForbiddenPage && !token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

// تنظیمات مسیرهای میدل‌ویر
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
