// "use client";
import { getCategoryApi } from "@/services/categoryServices";
import { useQuery } from "@tanstack/react-query";

export function useCategory() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
    ...item,
  }));

  const transformCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englishTitle,
  }));

  return { categories, isLoading, transformCategories };
}
