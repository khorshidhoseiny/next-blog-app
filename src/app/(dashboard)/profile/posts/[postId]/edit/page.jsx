import { getPostById } from "@/services/PostsApi";
import React from "react";
import CreatePostForm from "../../create/_/CreatePostForm";
import BreadCrumbs from "@/ui/BreadCrumbs";

async function edit(props) {
  const params = await props.params;
  const { postId } = params;
  const { post } = await getPostById(postId);

  return (
    <div>
      <BreadCrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/profile/posts" },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />

      <div className="flex flex-col items-center">
        <CreatePostForm postToEdit={post} />
      </div>
    </div>
  );
}

export default edit;
