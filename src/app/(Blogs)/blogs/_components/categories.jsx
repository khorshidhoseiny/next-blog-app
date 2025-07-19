"use client";
import NavLink from "@/components/NavLink";
import { useCategory } from "@/hooks/useCategories";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Categories() {
  const { categories } = useCategory();
  const pathname = usePathname();
  const isAllActive = pathname === "/blogs";

  return (
    <ul className="hidden justify-center md:flex lg:flex-col bg-white shadow-sm border border-secondary-100 rounded-xl p-4 gap-y-2 text-secondary-700 text-sm">
      <li className=" p-2 lg:border-b flex items-center lg:rounded-md">
        <Link
          className={classNames(
            "hover:bg-primary-100 p-2 rounded-full",
            isAllActive ? "bg-primary-100" : "bg-secondary-100"
          )}
          href={"/blogs"}
        >
          همه
        </Link>
      </li>
      {categories.map((category) => {
        const isActive = pathname === `/blogs/category/${category.slug}`;
        return (
          <li
            key={category.value}
            className="p-2 lg:border-b flex items-center  lg:rounded-md"
          >
            <Link
              className={classNames(
                "hover:bg-primary-100 p-2 rounded-full",
                isActive ? "bg-primary-100" : "bg-secondary-100"
              )}
              href={`/blogs/category/${category.slug}`}
            >
              {category.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
