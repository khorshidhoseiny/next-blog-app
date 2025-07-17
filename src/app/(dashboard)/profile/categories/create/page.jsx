import BreadCrumbs from "@/ui/BreadCrumbs";
import React from "react";
import CategoryForm from "./_/CategoryForm";

function Create() {
  return (
    <div>
      <BreadCrumbs
        breadcrumbs={[
          { label: "دسته بندی ها ", href: "/profile/categories" },
          {
            label: "ایجاد دسته بندی",
            href: "/profile/categories/create",
            active: true,
          },
        ]}
      />

      <div className="flex flex-col items-center">
        <CategoryForm />
      </div>
    </div>
  );
}

export default Create;
