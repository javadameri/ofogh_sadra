import axios from "axios";
import { getCookie } from "cookies-next";

export const BASEURL = "https://apiblit.6or.ir/api";

export const request = axios.create({
  baseURL: BASEURL,
});

export const CancelToken = axios.CancelToken;
request.interceptors.request.use(
  (config) => {
    const token = getCookie("token");

    if (token) {
      const _user = {
        token: JSON.parse(token),
      };
      config.headers.set("X-Access-Api-Key", `${_user.token}`);
    }

    return config;
  },
  (error) => {
    console.error("Interceptor Error:", error);
    console.error("Response Data:", error?.response?.data || "No Response");
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error?.response?.status === 401) {
      const originalRequest = error.config;
      if (!originalRequest._retry) {
        originalRequest._retry = true;
        try {
        } catch (err: any) {
          return Promise.reject(err);
        }
      }
    }
    return Promise.reject(error.response);
  }
);
