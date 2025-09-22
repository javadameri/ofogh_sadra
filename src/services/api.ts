'use server'
import { cookies } from "next/headers";
import { BASEURL } from "./request";

// export const dynamic = 'force-dynamic';

export async function API(url: string, options: RequestInit = {}) {
    const token = cookies().get('token')?.value;
    
    let _user: { token: any | null } = {
        token: null
    };

    if (token) {
        _user = {
            token: token
        };
    }

    try {
        const headers = {
            // "Content-Type": "application/json",
            // 'X-Access-Api-Key': `${_user.token}`,
            // "Cookie": "PHPSESSID=3itr7bdllji7pme6nirtflf43g"
        };
    
        const response = await fetch(`${BASEURL}${url}`, {
            ...options,
            headers: headers,
            credentials: 'include',
            redirect: "follow",
            // next: {
            //     revalidate: 10,
            // },
            cache:'no-cache'
        });
        console.log("response in api", response);

        if (!response.ok) {
            let errorMessage = 'An error occurred';
            try {
              if (response.headers.get('Content-Type')?.includes('application/json')) {
                const errorData = await response.json();
                errorMessage = errorData?.message || errorMessage;
              }
            } catch (err) {
              console.error('Error parsing JSON:', err);
            }
            // **به جای پرتاب خطا، آن را return کنید**
            return {
              error: true,
              message: errorMessage,
              statusCode: response.status
            };
          }
          const result = await response.json();
          console.log("result in api", result);
          
          return result;
      
        } catch (error: any) {
          console.error('Network Error:', error);
          // **برگرداندن خطا، نه پرتاب**
          return {
            error: true,
            message: error.message || 'Internal Server Error',
            statusCode: 500
          };
        }
}