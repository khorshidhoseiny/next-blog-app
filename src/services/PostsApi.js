import http from "./httpServices";

export default async function getPostBySlug(slug) {
  const rest = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/slug/${slug}`
  );
  const { data } = await rest.json();
  const { post } = data || {};
  return post;
}

export async function getPosts(queries, options) {
  const rest = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?${queries}`,
    options
  );
  const { data } = await rest.json();
  const { posts, totalPages } = data || {};
  return { posts, totalPages };
}

export async function likePostApi(id) {
  return http.post(`/post/like/${id}`).then(({ data }) => data.data);
}

export async function bookmarkPostApi(postId) {
  return http.post(`/post/bookmark/${postId}`).then(({ data }) => data.data);
}

export async function createPostApi(data) {
  return http.post(`/post/create`, data).then(({ data }) => data.data);
}
export async function editPostApi({ id, data }) {
  return http.patch(`/post/update/${id}`, data).then(({ data }) => data.data);
}
export async function getPostById(id) {
  return http.get(`/post/${id}`).then(({ data }) => data.data);
}
export async function deletePostApi({ id, options }) {
  return http
    .delete(`/post/remove/${id}`, options)
    .then(({ data }) => data.data);
}
