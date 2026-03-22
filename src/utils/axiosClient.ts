import { useAuth } from "@/hooks/useAuth";
import axios from "axios";
import { API_URL } from "@/constants";

const apiUrl = API_URL;

const axiosClient = axios.create({
  baseURL: `${apiUrl}/api/v1`,
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Gọi API refresh token với withCredentials
        await axios.post(`${apiUrl}/api/v1/users/refresh-token`, {}, {
          withCredentials: true,
        });
        // Retry request gốc
        return axiosClient(originalRequest);
      } catch (refreshError: any) {
        console.warn("Refresh token failed:", refreshError);
        // Xóa store khi refresh token trả về lỗi 419
        if (refreshError.response?.status === 419) {
          useAuth.getState().logout();
        }
      }
    } else if (error.code === "ERR_NETWORK") {
      console.warn("Server is experiencing issues!");
    }
    return Promise.reject(error);
  },
);

export default axiosClient;