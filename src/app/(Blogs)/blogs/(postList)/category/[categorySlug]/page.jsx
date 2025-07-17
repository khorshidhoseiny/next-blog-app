import React from "react";
import PostsList from "../../../_components/PostsList";
import queryString from "query-string";
import { cookies } from "next/headers";
import { getPosts } from "@/services/PostsApi";
import setCookieOnReq from "@/utils/setCookieOnReq";

async function Category(props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { categorySlug } = params;

  const queries = `${queryString.stringify(
    searchParams
  )}&categorySlug=${categorySlug}`;

  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts } = await getPosts(queries, options);

  return (
    <div>
      {posts.length === 0 ? (
        "پستی در این صفحه پیدا نشد"
      ) : (
        <PostsList posts={posts} />
      )}
    </div>
  );
}

export default Category;
