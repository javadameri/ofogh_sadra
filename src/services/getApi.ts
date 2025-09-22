import { BASEURL } from "./request";
import { errorMessages } from "@/constants/errorMessages";

export const GETApi = async (url: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(`${BASEURL}${url}`, {
      ...options,
      method: "GET",
      headers: {
        // Cookie: "PHPSESSID=3itr7bdllji7pme6nirtflf43g",
        "Content-Type": "multipart/form-data",
      },
      credentials: "include",
      redirect: "follow",
      // mode: "no-cors",
    });

    if (!response.ok) {
      let errorMessage = "An error occurred";
      try {
        if (
          response.headers.get("Content-Type")?.includes("application/json")
        ) {
          const errorData = await response.json();
          const statusCode = response.status;
          errorMessage = errorData?.message || errorMessages[statusCode] || errorMessages.unknownError;
        }
      } catch (err) {
        console.error("Error parsing JSON:", err);
      }
      // **به جای پرتاب خطا، آن را return کنید**
      return {
        error: true,
        message: errorMessage,
        statusCode: response.status,
      };
    }
    const result = await response.json();
    console.log("result in get api", result);
    
    return result;
  } catch (error: any) {
    console.error("Network Error:", error);
    // **برگرداندن خطا، نه پرتاب**
    return {
      error: true,
      message: errorMessages.networkError,
      statusCode: 500,
    };
  }
};
