import React, { Suspense } from "react";
import PostTabel from "./_components/PostTabel";
import Fallback from "@/ui/Fallback";
import Search from "@/ui/Search";
import { CreatePosts } from "../../../../ui/Buttons";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";
import { getPosts } from "@/services/PostsApi";

async function page(props) {
  const searchParams = await props.searchParams;
  const query = queryString.stringify(searchParams);
  const { totalPages } = await getPosts(query);

  return (
    <div className="">
      <div className="flex mb-6 w-full justify-between">
        <h1 className="font-bold">لیست پست ها</h1>
        <Search />
        <CreatePosts />
      </div>
      <Suspense fallback={<Fallback />}>
        <PostTabel query={query} />
      </Suspense>
      <div className="flex mt-9 justify-center items-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}

export default page;
