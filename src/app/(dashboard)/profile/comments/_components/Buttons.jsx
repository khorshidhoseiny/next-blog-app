"use client";

import { deleteComment } from "@/lib/actions";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useActionState, useEffect, useState } from "react";

import toast from "react-hot-toast";
import UpdateCommentForm from "./EditCommentForm";

export function DeleteComment({ id: commentId }) {
<<<<<<< HEAD
=======
  console.log(commentId);
>>>>>>> fix resposive mobile bugs
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [state, formAction] = useActionState(deleteComment, {
    error: "",
    message: "",
  });

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      setIsDeleteOpen(false);
    }
    if (state?.error) {
      toast.error(state.error);
      setIsDeleteOpen(false);
    }
  }, [state]);

  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsDeleteOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal
        title={`حذف نظر`}
        open={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
      >
        <ConfirmDelete
          title={`حذف نظر`}
          onClose={() => setIsDeleteOpen(false)}
          onConfirm={async (formData) => {
            await formAction({ formData, commentId });
          }}
        />
      </Modal>
    </>
  );
}

export function UpdateComment({ comment }) {
<<<<<<< HEAD
=======
  console.log("updated comment", comment);
>>>>>>> fix resposive mobile bugs
  const [isEditOpen, setIsEditOpen] = useState(false);
  const onClose = () => setIsEditOpen(false);
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsEditOpen(true)}>
        <PencilIcon className="text-error" />
      </ButtonIcon>

      <Modal title={`ویرایش نظر`} open={isEditOpen} onClose={onClose}>
        <UpdateCommentForm onClose={onClose} comment={comment} />
      </Modal>
    </>
  );
}
