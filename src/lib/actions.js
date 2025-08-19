"use server";

import { createCommentApi, deleteCommentsApi } from "@/services/commentService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(prevState, { formData, postId, parentId }) {
  const cookieStore = await cookies();
  const options = await setCookieOnReq(cookieStore);
  const rawFormData = {
    postId,
    parentId,
    text: formData.get("text"),
  };
  try {
    const { message } = await createCommentApi(rawFormData, options);
    console.log("rawFormData", rawFormData);
    revalidatePath("/blogs/[slug]", "page");
    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    console.log(error, "error");
    return {
      error,
    };
  }
}

export async function deleteComment(prevState, { commentId }) {
  const cookieStore = await cookies();
  const options = await setCookieOnReq(cookieStore);
  try {
    const { message } = await deleteCommentsApi({ id: commentId, options });
    revalidatePath("/profile/comments", "page");

    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    console.log({ error });

    return {
      error,
    };
  }
}
