"use client";

import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCategory } from "@/hooks/useCategories";
import Image from "next/image";
import ButtonIcon from "@/ui/ButtonIcon";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "@/ui/Button";
import FileInput from "@/ui/FileInput";
import { useCreatePost } from "./useCreatePost";
import SpinnerMini from "@/ui/SpinnerMini";
import { useRouter } from "next/navigation";
import { useEditPost } from "../../[postId]/edit/_/useEditPost";
import { imageUrlToFile } from "@/utils/fileFormatter";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    briefText: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    text: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
  })
  .required();

function CreatePostForm({ postToEdit = {} }) {
  const { _id: editId } = postToEdit;
  const isEditSesion = Boolean(editId);

  const {
    title,
    briefText,
    coverImageUrl: prevCoverImageUrl,
    slug,
    text,
    readingTime,
    category,
    coverImage,
  } = postToEdit;
  let editValues = {};
  if (isEditSesion) {
    editValues = {
      title,
      briefText,
      slug,
      text,
      readingTime,
      category: category._id,
      coverImage,
    };
  }

  const router = useRouter();
  const { categories } = useCategory();
  const [coverImageUrl, setCoverImagrUrl] = useState(prevCoverImageUrl || null);
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
    control,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: editValues,
  });

  const { createPost, isCreating } = useCreatePost();
  const { editPost } = useEditPost();
  const onSubmit = (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    if (isEditSesion) {
      editPost(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            router.push("/profile/posts");
            reset();
          },
        }
      );
    } else {
      createPost(formData, {
        onSuccess: () => {
          router.push("/profile/posts");
        },
      });
    }
  };

  useEffect(() => {
    if (prevCoverImageUrl) {
      async function fetchMyUrlToFile() {
        const file = await imageUrlToFile(prevCoverImageUrl);
        setValue("coverImage", file);
      }
      fetchMyUrlToFile();
    }
  }, [editId]);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <RHFTextField
        name="title"
        errors={errors}
        isRequired={true}
        register={register}
        label="عنوان"
      />
      <RHFTextField
        name="briefText"
        label="متن کوتاه"
        isRequired={true}
        register={register}
        errors={errors}
      />
      <RHFTextField
        name="text"
        label="متن"
        isRequired={true}
        register={register}
        errors={errors}
      />

      <RHFTextField
        name="slug"
        isRequired={true}
        label="اسلاگ"
        required
        register={register}
        errors={errors}
      />
      <RHFTextField
        name="readingTime"
        label="زمان مطالعه"
        isRequired={true}
        register={register}
        errors={errors}
      />
      <RHFSelect
        name="category"
        label="دسته بندی"
        register={register}
        errors={errors}
        options={categories}
        required
      />

      <Controller
        name="coverImage"
        control={control}
        rules={{ required: "کاور پست الزامی است" }}
        render={({ field: { onChange, value, ...rest } }) => (
          <FileInput
            type="file"
            label="کاور پست"
            isRequired={true}
            name="coverImage"
            {...rest}
            value={value?.fileName}
            onChange={(event) => {
              const file = event.target.files[0];
              onChange(file);
              setCoverImagrUrl(URL.createObjectURL(file));
              event.target.value = null;
            }}
          />
        )}
      />
      {coverImageUrl && (
        <div className="aspect-video overflow-hidden rounded-lg relative">
          <Image
            alt="coverImage"
            fill
            src={coverImageUrl}
            className="object-cover object-center"
          />
          <ButtonIcon
            onClick={() => {
              setCoverImagrUrl(null);
              setValue(null);
            }}
            variant="red"
            className="w-6 h-6 absolute left-2 top-2"
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}
      {isCreating ? (
        <SpinnerMini />
      ) : (
        <Button variant="primary" type="submit" className="w-full">
          تایید
        </Button>
      )}
    </form>
  );
}

export default CreatePostForm;
