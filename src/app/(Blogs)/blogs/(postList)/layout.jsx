import React from "react";
import Categories from "../_components/categories";
import Header from "./_components/Header";

function layout({ children }) {
  return (
<<<<<<< HEAD
    <div className="container mx-auto py-5 px-4 space-y-6">
=======
    <div className="container mx-auto overflow-x-hidden py-5 px-4 space-y-6">
>>>>>>> fix resposive mobile bugs
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
