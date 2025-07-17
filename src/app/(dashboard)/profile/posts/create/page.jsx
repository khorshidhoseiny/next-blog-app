import BreadCrumbs from "@/ui/BreadCrumbs";
import React from "react";
import CreatePostForm from "./_/CreatePostForm";

function Create() {
  return (
    <div>
      <BreadCrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/profile/posts" },
          { label: "ایجاد پست", href: "/profile/posts/create", active: true },
        ]}
      />
     
     <div className="flex flex-col items-center">
      <CreatePostForm />
      </div>
    </div>
  );
}

export default Create;
