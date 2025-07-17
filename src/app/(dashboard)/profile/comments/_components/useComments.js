import { getAllCommentsApi } from "@/services/commentService";
import { useQuery } from "@tanstack/react-query";

export async function useComments() {
  const { data, isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: getAllCommentsApi,
  });

  const { comments } = data || {};
  console.log(comments);

  return { comments, isLoading };
}
