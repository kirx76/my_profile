import axios from "axios";

const initAxios = (tokenStore) => {
  const $axios = axios.create({
    baseURL: "http://192.168.193.243:5000",
    withCredentials: true,
  });
  $axios.defaults.headers.post["Content-Type"] = "application/json";
  $axios.defaults.headers.put["Content-Type"] = "application/json";
  $axios.defaults.headers.patch["Content-Type"] = "application/json";

  $axios.interceptors.request.use(
    (config) => {
      const token = tokenStore.get();
      if (token) {
        config.headers.Authorization = token;
      }
      return config;
    },
    (error) => {
      console.error(error);
    }
  );

  return $axios;
};

export default initAxios;