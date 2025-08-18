import { getAllCommentsApi } from "@/services/commentService";
import { useQuery } from "@tanstack/react-query";

<<<<<<< HEAD
export async function useComments() {
=======
export function useComments() {
>>>>>>> fix resposive mobile bugs
  const { data, isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: getAllCommentsApi,
  });

  const { comments } = data || {};
  console.log(comments);

  return { comments, isLoading };
}
