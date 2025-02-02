import axios from "axios";
export const axiosInstance = axios.create({
  // baseURL: "http://localhost:5050",
  baseURL: "https://api.softcitydata.com.ng",
});

const addTokenToRequest = (config) => {
  const token = localStorage.getItem('AUTH_TOKEN');
  if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
    config.headers.Authorization = `${token}`;
  }
  return config;
};

axiosInstance.interceptors.request.use(addTokenToRequest);

export default axiosInstance;