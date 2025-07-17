import ButtonIcon from "@/ui/ButtonIcon";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SideBarCategories({ categories }) {
  const router = useRouter();
  return (
    <ul className="space-y-2 overflow-auto text-base justify-center transition-transform  items-center  gap-x-2 rounded-lg">
      <h1 className="font-semibold text-lg lg:mb-5">دسته بندی ها </h1>
      <Link href={"/blogs"} className="flex items-center gap-x-2 px-2">
        <ButtonIcon>
          <ChevronRightIcon className="w-4 h-4" />
        </ButtonIcon>
        <p>همه</p>
      </Link>
      {categories.map((category) => {
        return (
          <li key={category.value}>
            <Link
              href={`/blogs/category/${category.slug}`}
              className={classNames(
                "flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3 px-2",
                {
                  "bg-primary-100/40 !font-bold text-primary-900":
                    router.pathname === `/blogs/category/${category.slug}`,
                }
              )}
            >
              <ButtonIcon>
                <ChevronRightIcon className="w-4 h-4" />
              </ButtonIcon>
              {category.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
