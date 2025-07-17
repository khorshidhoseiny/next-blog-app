import React, { Suspense } from "react";
import Categories from "../_components/categories";
import Search from "@/ui/Search";
import Fallback from "@/ui/Fallback";
import BlogSort from "../_components/BlogSort";

function layout({ children }) {
  return (
    <div className=" grid grid-cols-1 overflow-scroll">
      <div className="grid grid-cols-1 lg:mb-9 mb-3 items-center text-secondary-700 gap-8 ">
        <section className="bg-white p-3 container flex justify-between gap-x-2 rounded-lg">
          <h1 className="font-bold flex text-sky-800 text-sm md:text-lg items-center ">
            بلاگ ها
          </h1>
          <div className="flex-1 rounded-lg flex gap-x-4 items-center justify-between">
            <div className="flex-1">
              <Suspense fallback={<Fallback />}>
                <Search />
              </Suspense>
            </div>
            <div className="flex-1">
              <Suspense>
                <BlogSort />
              </Suspense>
            </div>
          </div>
        </section>
      </div>
      <div className="grid sm:container grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-3 text-sky-900 space-y-4">
          <Categories />
        </div>
        <div className="col-span-12 lg:col-span-9 text-sky-900 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
