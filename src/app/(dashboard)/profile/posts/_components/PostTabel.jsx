import { getPosts } from "@/services/PostsApi";
import Table from "@/ui/Table";
import React from "react";
import PostRow from "./PostRow";
import Empty from "@/ui/Empty";

export default async function PostTabel({ query = "" }) {
  const { posts } = await getPosts(query);

  if (!posts.length) return <Empty resourceName="پستی" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان</th>
        <th>دسته بندی</th>
        <th>نویسنده</th>
        <th>تاریخ ایجاد</th>
        <th>نوع</th>
        <th>عملیات</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post, index) => {
          return <PostRow post={post} index={index} key={post._id} />;
        })}
      </Table.Body>
    </Table>
  );
}
