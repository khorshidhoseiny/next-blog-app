import http from "./httpServices";

export async function signupApi(data) {
  return http.post("/user/signup", data).then(({ data }) => data.data);
}

export async function signInApi(data) {
  return http.post("/user/signin", data).then(({ data }) => data.data);
}

export async function getUserApi() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
export async function getAllUsersApi(options) {
  return http.get("/user/list", options).then(({ data }) => data.data);
}
<<<<<<< HEAD
=======
export async function getUsersApi(queries, options) {
  const rest = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/user/list?${queries}`,
    options
  );
  const { data } = await rest.json();
  const { users } = data || {};
  return { users };
}
>>>>>>> fix resposive mobile bugs
export async function updateProfileApi(data) {
  return http.patch("/user/update", data).then(({ data }) => data.data);
}
export async function uploadAvatarApi(formData) {
  return http
    .post("/user/upload-avatar", formData)
    .then(({ data }) => data.data);
}
