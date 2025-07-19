"use client";
import React, { Suspense, useState } from "react";
import BlogSort from "../../_components/BlogSort";
import Search from "@/ui/Search";
import Fallback from "@/ui/Fallback";
import ButtonIcon from "@/ui/ButtonIcon";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useCategory } from "@/hooks/useCategories";
import Drawer from "@/ui/Drawer";
import SideBar from "@/app/(dashboard)/profile/_components/SideBar";
import SideBarCategories from "@/app/(dashboard)/profile/_components/SideBarCategories";

function Header() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const { categories } = useCategory();
  return (
    <section className="bg-white p-4 rounded-xl shadow-sm flex flex-col md:flex-row justify-between gap-3 items-center">
      <div className="flex flex-col sm:flex-row gap-3 flex-1">
        <div className="flex  pl-3 justify-center items-center">
          <h1 className="font-semibold px-2 text-sky-800 md:hidden text-base">
            دسته‌بندی‌ها
          </h1>
          <ButtonIcon
            className="block md:hidden border-none"
            variant="outline"
            onClick={() => setIsOpenDrawer(!isOpenDrawer)}
          >
            {isOpenDrawer ? <XMarkIcon /> : <Bars3Icon />}
          </ButtonIcon>
        </div>
        <div className="flex  flex-wrap w-full gap-x-4">
          <Suspense fallback={<Fallback />}>
            <div className="flex-1 order-2">
              <Search />
            </div>
          </Suspense>
          <Suspense>
            <div className="flex-1 order-3">
              <BlogSort />
            </div>
          </Suspense>
        </div>
      </div>
      <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
        <SideBar onClose={() => setIsOpenDrawer(false)}>
          <SideBarCategories categories={categories} />
        </SideBar>
      </Drawer>
    </section>
  );
}

export default Header;
