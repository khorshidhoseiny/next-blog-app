import Search from "@/ui/Search";
import React, { Suspense } from "react";
import Fallback from "@/ui/Fallback";
import { CategoryTabel } from "./_/components/CategoryTabel";
import { CreateCategory } from "../../../../ui/Buttons";
import { getCategoryApi } from "@/services/categoryServices";

async function page() {
  const { categories } = await getCategoryApi();

  return (
    <div>
      <div className="flex justify-between mb-6 w-full ">
        <h1>دسته بندی ها</h1>
        <CreateCategory />
      </div>
      <Suspense fallback={<Fallback />}>
        <CategoryTabel categories={categories} />
      </Suspense>
    </div>
  );
}

export default page;
