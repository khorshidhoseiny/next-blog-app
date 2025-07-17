import http from "./httpServices";

export async function createCommentApi(data, options) {
  return http.post("/comment/add", data, options).then(({ data }) => data.data);
}

export async function getAllCommentsApi(options) {
  return http.get("/comment/list", options).then(({ data }) => data.data);
}

export async function deleteCommentsApi({ id, options }) {
  return http
    .delete(`/comment/remove/${id}`, options)
    .then(({ data }) => data.data);
}
export async function updateCommentApi({ id, data }) {
  return http
    .patch(`/comment/update/${id}`, data)
    .then(({ data }) => data.data);
}
