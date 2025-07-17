"use client";
import Button from "@/ui/Button";
import RHFSelect from "@/ui/RHFSelect";
import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useUpdateComment } from "./useUpdateComment";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const options = [
  {
    id: 1,
    label: "رد شده",
    value: 0,
  },
  {
    id: 2,
    label: "در انتظار تایید",
    value: 1,
  },
  {
    id: 3,
    label: "قبول",
    value: 2,
  },
];

function UpdateCommentForm({ comment, onClose, onConfirm }) {
  const { updateComment } = useUpdateComment();
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: { status: comment.status },
  });

  const onsubmit = (data) => {
    updateComment(
      { id: comment._id, data },
      {
        onSuccess: () => {
          onClose();
          router.push("/profile/comments");
        },
      }
    );
  };

  return (
    <form className="form" onSubmit={handleSubmit(onsubmit)}>
      <RHFSelect
        label="تغییر وضعیت"
        required
        name="status"
        register={register}
        options={options}
      />
      <Button type="submit" variant="primary" className="w-full">
        تایید
      </Button>
    </form>
  );
}
export default UpdateCommentForm;
