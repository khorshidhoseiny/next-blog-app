import React, { Suspense } from "react";
import PostTabel from "./_components/PostTabel";
import Fallback from "@/ui/Fallback";
import Search from "@/ui/Search";
import { CreatePosts } from "../../../../ui/Buttons";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";
import { getPosts } from "@/services/PostsApi";

<<<<<<< HEAD
async function page(props) {
  const searchParams = await props.searchParams;
=======
async function page({ searchParams }) {
>>>>>>> fix resposive mobile bugs
  const query = queryString.stringify(searchParams);
  const { totalPages } = await getPosts(query);

  return (
<<<<<<< HEAD
    <div className="">
      <div className="flex mb-6 w-full justify-between">
        <h1 className="font-bold">لیست پست ها</h1>
        <Search />
        <CreatePosts />
=======
    <div>
      <div className="flex-col flex mb-6 gap-y-4 w-full ">
        <h1 className="font-bold">لیست پست ها</h1>
        <div className="flex justify-between">
          <Search />
          <CreatePosts />
        </div>
>>>>>>> fix resposive mobile bugs
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
