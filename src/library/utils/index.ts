interface Field {
    name: string;
    value: string;
}

interface RedirectToBackendProps {
    url: string;
    method: string;
    data: Field[];
}

export const Redirecting = ({ url, method, data }: RedirectToBackendProps) => {
    const urlWithParams = new URL(url);
    if (!urlWithParams.search && data?.length) {
        data.forEach(({ name, value }) => {
            urlWithParams.searchParams.append(name, value);
        });
    }

    const form = document.createElement('form');
    form.method = method;
    form.action = urlWithParams.toString();

    document.body.appendChild(form);
    form.submit();
};

export const convertToPersianNumbers = (number: string): string => {
    const englishToPersianDigits: { [key: string]: string } = {
        '0': '۰',
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹'
    };

    return number?.replace(/[0-9]/g, (digit) => englishToPersianDigits[digit]);
};

export const convertToEnglishNumbers = (persianNumber: string): string => {
    const persianToEnglishMap: { [key: string]: string } = {
        "۰": "0",
        "۱": "1",
        "۲": "2",
        "۳": "3",
        "۴": "4",
        "۵": "5",
        "۶": "6",
        "۷": "7",
        "۸": "8",
        "۹": "9",
    };
    return persianNumber.split('').map(char => persianToEnglishMap[char] || char).join('');
};

export const toPersianDigits = (num: string) => {
    const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
    return num.replace(/\d/g, (digit) => persianDigits[Number(digit)]);
};

export const convertToFormData = (
    data: any,
    formData = new FormData(),
    parentKey = ""
) => {
    if (typeof data === "object" && data !== null) {
        if (data instanceof Blob) {
            formData.append(parentKey, data);
        } else if (Array.isArray(data)) {
            data.forEach((item, index) => {
                convertToFormData(item, formData, `${parentKey}[${index}]`);
            });
        } else {
            Object.entries(data).forEach(([key, value]) => {
                if (parentKey !== "") {
                    convertToFormData(value, formData, `${parentKey}[${key}]`);
                } else {
                    convertToFormData(value, formData, key);
                }
            });
        }
    } else {
        if (typeof data !== "undefined" || data !== null) {
            formData.append(parentKey, data);
        }
    }

    return formData;
};

export const validateMobile = (value: string) => /^09\d{9}$/.test(value) || 'شماره موبایل معتبر نیست';

export const isValidMobileFormat = (mobile: string): boolean => {
    const formattedMobile = convertToEnglishNumbers(mobile.trim());
    const regex = /^09\d{9}$/; // بررسی فرمت شماره موبایل ایرانی
    return regex.test(formattedMobile);
};

export const convertNumberFormat = (value: string) => {
    return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatPersianNumber = (number: string): string => {
    // تبدیل اعداد انگلیسی به فارسی
    const persianNumber = convertToPersianNumbers(number);
    
    // جدا کردن اعداد به صورت سه‌تایی
    const numberWithoutCommas = persianNumber.replace(/۰|۱|۲|۳|۴|۵|۶|۷|۸|۹/g, (digit) => digit);
    
    return numberWithoutCommas.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1،');
};

// تابع برای جدا کردن اعداد فارسی به صورت سه‌تایی
export const formatNumberWithCommas = (number: string): string => {
    // ابتدا اعداد انگلیسی را به فارسی تبدیل می‌کنیم
    const persianNumber = convertToPersianNumbers(number);
    
    // جدا کردن اعداد به صورت سه‌تایی با regex
    const reversed = persianNumber.split('').reverse().join(''); // معکوس کردن رشته برای جدا کردن سه‌تایی
    const formattedReversed = reversed.replace(/(\d{3})(?=\d)/g, '$1،');
    return formattedReversed.split('').reverse().join(''); // برگرداندن رشته به حالت اولیه
};
// cyJpFaf8N8awRdyEmh8JcAb-pyWiGjzjxO3Gl8dv
export const lengthVal = (val: string) => {
    let text = val;  
    let textWithoutSpaces = text.replace(/\s/g, ''); // حذف تمام فضاها  
    let characterCount = textWithoutSpaces.length; // شمارش کاراکترها  
    return characterCount;
};

export const containsNumber = (val: string) => {
    return /\d/.test(val); // بررسی وجود حداقل یک عدد  
}  
export const containsUpperCase = (val: string) => {
    return /[A-Z]/.test(val); // بررسی وجود حداقل یک حرف بزرگ  
}  