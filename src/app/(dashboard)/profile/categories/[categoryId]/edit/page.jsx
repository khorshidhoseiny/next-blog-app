import React from "react";
import BreadCrumbs from "@/ui/BreadCrumbs";
import CategoryForm from "../../create/_/CategoryForm";

async function edit(props) {
  const params = await props.params;
  const { categoryId } = params;
  const rest = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await rest.json();
  const selectedCategory = categories.find((item) => item._id === categoryId);

  return (
    <div>
      <BreadCrumbs
        breadcrumbs={[
          { label: "دسته بندی ها", href: "/profile/categories" },
          {
            label: "ویرایش دسته بندی",
            href: `/profile/categories/${categoryId}/edit`,
            active: true,
          },
        ]}
      />

      <div className="flex flex-col items-center">
        <CategoryForm
          categoryToEdit={selectedCategory}
          categoryId={categoryId}
        />
      </div>
    </div>
  );
}

export default edit;
