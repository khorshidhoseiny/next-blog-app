const { default: axios } = require("axios");

const app = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});
console.log("APP UrL ", process.env.NEXT_PUBLIC_BASE_URL);
app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

app.interceptors.response.use(
  (res) => res,
  async (err) => {
    console.log(err.config);

    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`,
          { withCredentials: true }
        );
        if (data) return app(originalConfig);
      } catch (error) {
        Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

const http = {
  post: app.post,
  patch: app.patch,
  get: app.get,
  push: app.push,
  delete: app.delete,
};
export default http;
