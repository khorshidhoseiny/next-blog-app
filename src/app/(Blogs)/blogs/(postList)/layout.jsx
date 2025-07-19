import React from "react";
import Categories from "../_components/categories";
import Header from "./_components/Header";

function layout({ children }) {
  return (
    <div className="container mx-auto py-5 px-4 space-y-6">
      <Header />
      <div className="grid grid-cols-12 gap-6">
        <aside className="col-span-12 lg:col-span-3 text-sky-900 space-y-4">
          <Categories />
        </aside>
        <main className="col-span-12 lg:col-span-9 space-y-4">{children}</main>
      </div>
    </div>
  );
}

export default layout;
