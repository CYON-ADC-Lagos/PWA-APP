import axios from "axios";

const apiUrl =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://127.0.0.1:5000/api/v1";

const isBrowser = typeof window !== "undefined";

const readToken = () => {
  if (!isBrowser) return null;
  try {
    const raw = window.localStorage.getItem("user");
    if (raw) return JSON.parse(raw)?.token || null;
  } catch (_) {}
  return window.localStorage.getItem("accessToken");
};

const http = axios.create({
  baseURL: apiUrl,
  timeout: 45000,
  headers: { Accept: "application/json" },
});

const privateHttp = axios.create({
  baseURL: apiUrl,
  timeout: 45000,
  headers: { Accept: "application/json" },
});

privateHttp.interceptors.request.use(
  (req) => {
    const token = readToken();
    if (token) req.headers.Authorization = `Bearer ${token}`;
    return req;
  },
  (error) => Promise.reject(error)
);

export { http, privateHttp };

export const getAllDeaneries = () => http.get("/deanery");
