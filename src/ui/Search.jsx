"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const formSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search;
    const SearchValue = search.value;
    // // in constractor etelaat params ro be string changge mikone
    const newParams = new URLSearchParams(searchParams.toString());
    if (SearchValue) {
      newParams.set("search", SearchValue);
    } else {
      newParams.delete("search");
    }
    router.replace(`${pathname}?${newParams.toString()}`, { scroll: false });
  };

  return (
    <form className="relative" onSubmit={formSubmit}>
      <input
        type="text"
        name="search"
        autoComplete="off"
<<<<<<< HEAD
        placeholder={`جستجو در بلاگ‌ها…`}
=======
        placeholder={`جستجو در بلاگ ها`}
>>>>>>> fix resposive mobile bugs
        className="textField__input flex justify-between items-center border-2 border-secondary-200 pr-7 py-3 text-xs bg-secondary-0"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mr-2 flex h-full items-center"
      >
        <MagnifyingGlassIcon className="h-4 text-secondary-400" />
      </button>
    </form>
  );
}

export default Search;
