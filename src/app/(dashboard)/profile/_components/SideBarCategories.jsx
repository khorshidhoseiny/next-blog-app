import ButtonIcon from "@/ui/ButtonIcon";
import {
  BookOpenIcon,
  BuildingLibraryIcon,
  ChevronRightIcon,
  CodeBracketIcon,
  FilmIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function SideBarCategories({ categories }) {
  const categoryIcons = {
    all: <ChevronRightIcon className="w-5 h-5" />,
    movies: <FilmIcon className="w-5 h-5" />,
    technology: <CodeBracketIcon className="w-5 h-5" />,
    art: <PaintBrushIcon />,
    cultural: <BookOpenIcon />,
    historical: <BuildingLibraryIcon />,
  };
  const pathname = usePathname();
  const isAllActive = pathname === "/blogs";
  return (
    <ul className="space-y-2 overflow-auto text-base justify-center transition-transform  items-center  gap-x-2 rounded-lg">
      <Link
        className={classNames(
          "flex items-center gap-x-2 text-sm rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3 px-2",
          {
            "bg-primary-100/40 !font-bold text-primary-900": isAllActive,
          }
        )}
        href={"/blogs"}
      >
        <ButtonIcon>{categoryIcons.all}</ButtonIcon>
        <p>همه</p>
      </Link>
      {categories.map((category) => {
        const isActive = pathname === `/blogs/category/${category.slug}`;
        const Icon = categoryIcons[category.slug] || (
          <ChevronRightIcon className="w-5 h-5" />
        );

        return (
          <li key={category.value}>
            <Link
              href={`/blogs/category/${category.slug}`}
              className={classNames(
                "flex items-center gap-x-2 text-sm rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3 px-2",
                {
                  "bg-primary-100/40 !font-bold text-primary-900": isActive,
                }
              )}
            >
              <ButtonIcon className="text-sm">{Icon}</ButtonIcon>
              {category.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
