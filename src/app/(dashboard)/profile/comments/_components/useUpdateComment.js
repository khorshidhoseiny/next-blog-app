import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCommentApi } from "@/services/commentService";

export function useUpdateComment() {
  const queryClient = useQueryClient();
  const { isPending: isEditing, mutate: updateComment } = useMutation({
    mutationFn: updateCommentApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return { isEditing, updateComment };
}
