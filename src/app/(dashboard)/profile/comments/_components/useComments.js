import { getAllCommentsApi } from "@/services/commentService";
import { useQuery } from "@tanstack/react-query";

export function useComments() {
  const { data, isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: getAllCommentsApi,
  });

  const { comments } = data || {};

  return { comments, isLoading };
}
