// تابع برای تبدیل آبجکت به FormData
export function objectToFormData(
  obj: Record<string, any>,
  formData: FormData = new FormData(),
  parentKey: string = ""
): FormData {
  console.log("object for change to form data", obj);

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const propName = parentKey ? `${parentKey}[${key}]` : key;

      if (value instanceof File || value instanceof Blob) {
        formData.append(propName, value);
      } else if (Array.isArray(value)) {
        // پشتیبانی از آرایه‌ها
        value.forEach((item, index) => {
          objectToFormData({ [`${key}[${index}]`]: item }, formData, parentKey);
        });
      } else if (value !== null && typeof value === "object") {
        objectToFormData(value, formData, propName);
      } else {
        formData.append(propName, value === null ? "" : String(value));
      }
    }
  }

  return formData;
}

// تابع برای تبدیل آرایه به FormData
export function arrayToFormData(
  arr: any[],
  formData: FormData = new FormData(),
  parentKey: string = ""
): FormData {
  arr.forEach((item, index) => {
    const propName = parentKey ? `${parentKey}[${index}]` : `${index}`;
    if (item && typeof item === "object") {
      objectToFormData(item, formData, propName);
    } else {
      formData.append(propName, item);
    }
  });
  return formData;
}
