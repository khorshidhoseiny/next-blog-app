"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useDeletePost from "../app/(dashboard)/profile/posts/_components/useDeletePost";
import useDeleteCategory from "../app/(dashboard)/profile/categories/_/components/useDeleteCategory";
import CategoryForm from "@/app/(dashboard)/profile/categories/create/_/CategoryForm";

export function CreatePosts({ id }) {
  return (
    <Link
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
    transition-colors hover:bg-primary-700"
      href={"/profile/posts/create"}
    >
      <span className="hidden md:block">ایجاد پست</span>{" "}
      <PlusIcon className="w-5" />
    </Link>
  );
}
export function CreateCategory() {
  return (
    <Link
      className="justify-self-end flex gap-x-4 py-3 items-center rounded-lg bg-primary-900 px-4 text-sm font-medium text-secondary-0 
    transition-colors hover:bg-primary-700"
      href={"/profile/categories/create"}
    >
      <span className="hidden md:block">ایجاد دسته بندی</span>{" "}
      <PlusIcon className="w-5" />
    </Link>
  );
}

export function DeletePost({ post: { _id: id, title } }) {
  const [isOpen, setIsOpen] = useState(false);
  const { deletePost, isDeleting } = useDeletePost();
  const router = useRouter();
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal
        title={`حذفِ ${title}`}
        onClose={() => setIsOpen(false)}
        open={isOpen}
      >
        <ConfirmDelete
          disabled={isDeleting}
          onConfirm={(e) => {
            e.preventDefault();
            deletePost(
              { id },
              {
                onSuccess: () => {
                  setIsOpen(false);
                  router.refresh("/profile/posts");
                },
              }
            );
          }}
          onClose={() => setIsOpen(false)}
          resourceName={title}
        />
      </Modal>
    </>
  );
}
export function DeleteCategory({ category: { _id: id, title } }) {
  const [isOpen, setIsOpen] = useState(false);
  const { deleteCategory, isDeleting } = useDeleteCategory();
  const router = useRouter();
  return (
    <>
      <ButtonIcon variant="outline" onClick={() => setIsOpen(true)}>
        <TrashIcon className="text-error" />
      </ButtonIcon>
      <Modal
        title={`حذفِ ${title}`}
        onClose={() => setIsOpen(false)}
        open={isOpen}
      >
        <ConfirmDelete
          disabled={isDeleting}
          onConfirm={(e) => {
            e.preventDefault();
            deleteCategory(
              { id },
              {
                onSuccess: () => {
                  setIsOpen(false);
                  router.refresh("/profile/categories");
                },
              }
            );
          }}
          onClose={() => setIsOpen(false)}
          resourceName={title}
        />
      </Modal>
    </>
  );
}

export function Editpost({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}

export function UpdateCategory({ category }) {
  const { _id: id } = category;
  return (
    <>
      <Link href={`/profile/categories/${id}/edit`}>
        <ButtonIcon variant="outline">
          <PencilIcon />
        </ButtonIcon>
      </Link>
    </>
  );
}
