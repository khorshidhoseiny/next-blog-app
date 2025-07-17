"use client";

import RHFTextField from "@/ui/RHFTextField";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMini";
import { useRouter } from "next/navigation";
import { useCreateCategory } from "../../_/components/useCreateCategory";
import { useUpdateCategory } from "../../_/components/useUpdateCategory";

const schema = yup
  .object({
    title: yup
      .string()
      .min(3, "حداقل ۳ کاراکتر را وارد کنید")
      .required("عنوان  فارسی ضروری است"),
    englishTitle: yup
      .string()
      .min(3, "حداقل ۳ کاراکتر را وارد کنید")
      .required("عنوان انگلیسی ضروری است"),
    description: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
  })
  .required();

function CategoryForm({ categoryToEdit = {} }) {
  const { _id: editId } = categoryToEdit;
  const isEditSession = Boolean(editId);
  const { _id, title, englishTitle, description } = categoryToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      englishTitle,
      description,
    };
  }

  const router = useRouter();

  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: editValues,
  });

  const { createCategory, isCreating } = useCreateCategory();
  const { updateCategory } = useUpdateCategory();
  const onSubmit = (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }

    if (isEditSession) {
      updateCategory(
        { id: editId, data },
        {
          onSuccess: () => {
            router.push("/profile/categories");
            reset();
          },
          onError: (err) => {
            console.log(err);
          },
        }
      );
    } else {
      createCategory(data, {
        onSuccess: () => {
          router.push("/profile/categories");
        },
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        name="title"
        errors={errors}
        isRequired={true}
        register={register}
        label={isEditSession ? "عنوان جدید" : " عنوان فارسی"}
      />
      <RHFTextField
        name="englishTitle"
        label={isEditSession ? "عنوان انگلیسی جدید" : "عنوان انگلیسی"}
        isRequired={true}
        register={register}
        errors={errors}
      />
      <RHFTextField
        name="description"
        label={isEditSession ? "توضیحات جدید" : "توضیحات"}
        isRequired={true}
        register={register}
        errors={errors}
      />
      {isCreating ? (
        <SpinnerMini />
      ) : (
        <Button variant="primary" type="submit" className="w-full">
          {isEditSession ? "بروزرسانی" : "تایید"}
        </Button>
      )}
    </form>
  );
}

export default CategoryForm;
