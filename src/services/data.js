import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getAllUsersApi } from "./AuthService";
import { getAllCommentsApi } from "./commentService";
import { getPosts } from "./PostsApi";

export async function fetchCartData() {
  const cookieStore = await cookies();
  const options = await setCookieOnReq(cookieStore);
  try {
    const data = await Promise.all([
      await getAllUsersApi(options),
      await getAllCommentsApi(options),
      await getPosts(),
    ]);

    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfComments = Number(data[1].commentsCount ?? "0");
    const numberOfPosts = Number(data[2].posts.length ?? "0");
    console.log(numberOfPosts);

    return {
      numberOfUsers,
      numberOfComments,
      numberOfPosts,
    };
  } catch (error) {
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}
