"use client";
import SideBar from "@/app/(dashboard)/profile/_components/SideBar";
import SideBarCategories from "@/app/(dashboard)/profile/_components/SideBarCategories";
import NavLink from "@/components/NavLink";
import { useCategory } from "@/hooks/useCategories";
import ButtonIcon from "@/ui/ButtonIcon";
import Drawer from "@/ui/Drawer";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

function Categories() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { categories } = useCategory();

  return (
    <>
      <div className="lg:hidden flex z-50 items-center gap-x-3 justify-center ">
        <h1 className="font-semibold text-base  md:hidden lg:pt-4 lg:mb-5">
          دسته بندی ها{" "}
        </h1>
        <ButtonIcon
          className="block md:hidden border-none"
          variant="outline"
          onClick={() => setIsOpenDrawer(!isOpenDrawer)}
        >
          {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
        </ButtonIcon>
      </div>
      {/* laptop screen */}
      <ul className="lg:space-y-3 relative  px-2 overflow-y-visible text-xs md:text-base md:bg-secondary-50 lg:block md:flex hidden  text-right justify-center transition-transform items-center  gap-x-2 rounded-lg">
        <h1 className="font-bold text-base p-1 lg:mb-5">دسته بندی ها </h1>
        <NavLink path={"/blogs"}>همه</NavLink>
        {categories.map((category) => {
          return (
            <li
              key={category.value}
              className="lg:hover:bg-primary-800/10 px-2 lg:border-b flex items-center lg:rounded-md"
            >
              <NavLink path={`/blogs/category/${category.slug}`}>
                {category.label}
              </NavLink>
            </li>
          );
        })}
      </ul>
      {/* mobile */}
      <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
        <SideBar onClose={() => setIsOpenDrawer(false)}>
          <SideBarCategories categories={categories} />
        </SideBar>
      </Drawer>
    </>
  );
}

export default Categories;
