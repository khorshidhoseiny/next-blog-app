"use client";

import { updateProfileApi, uploadAvatarApi } from "@/services/AuthService";
import Avatar from "@/ui/Avatar";
import RHFTextField from "@/ui/RHFTextField";
import UploadAvatar from "@/ui/UploadAvatar";
import { imageUrlToFile } from "@/utils/fileFormatter";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

function UpdateProfileForm({ userToEdit = {} }) {
  const router = useRouter();
  const {
    _id,
    name,
    email,
    createdAt,
    avatarUrl,
    boolmarkedPosts,
    likedPosts,
    updatedAt,
  } = userToEdit;
  const isEditSesion = Boolean(_id);
  let editValues = {};
  if (isEditSesion) {
    editValues = {
      name,
      avatarUrl,
      email,
      createdAt: new Date(createdAt).toLocaleDateString(),
      boolmarkedPosts,
      likedPosts,
      updatedAt,
    };
  }

  const [userAvatarUrl, setUserAvatarUrl] = useState(
    editValues.avatarUrl || null
  );
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: editValues,
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    try {
      const UserInfo = { name: data.name, email: data?.email };

      const requests = [updateProfileApi(UserInfo)];
      if (data.avatar) {
        const formData = new FormData();
        formData.append("avatar", data.avatar);
        requests.push(uploadAvatarApi(formData));
      }

      const results = await Promise.all(requests);
      const updateInfoMsg = results[0]?.message;
      const uploadMsg = results[1]?.message;
      router.push("/profile");
      toast.success(updateInfoMsg || "اطلاعات با موفقیت به‌روزرسانی شد");

      if (uploadMsg) toast.success(uploadMsg);
    } catch (error) {
      console.error("submit error:", error);
      toast.error("خطا در ارسال اطلاعات");
    }
  };

  useEffect(() => {
    if (editValues.avatarUrl) {
      async function fetchMyUrlToFile() {
        const file = await imageUrlToFile(editValues.avatarUrl);
        setValue("avatar", file);
      }
      fetchMyUrlToFile();
    }
  }, [_id]);
  return (
    <div className="flex justify-center items-center">
      <form className="form " onSubmit={handleSubmit(onSubmit)}>
        <div className="form md:profile-form">
          <div>
            <h1 className="font-bold mb-5 border-b border-secondary-200 text-secondary-600 text-lg">
              {" "}
              اطلاعات شخصی
            </h1>
            <RHFTextField
              name="name"
              errors={errors}
              isRequired={true}
              register={register}
              label="نام"
            />
            <RHFTextField
              name="email"
              label="ایمیل"
              isRequired={true}
              register={register}
              errors={errors}
            />
          </div>
          <div className="flex justify-center flex-col items-center">
            <Avatar size={150} alt="user-avatar" src={userAvatarUrl} />
            <Controller
              name="avatar"
              control={control}
              render={({ field: { onChange, value, ...rest } }) => (
                <UploadAvatar
                  type="file"
                  label="تغییر پروفایل"
                  isRequired={true}
                  name="avatar"
                  {...rest}
                  value={value?.fileName}
                  onChange={(event) => {
                    const file = event.target.files[0];
                    onChange(file);
                    setUserAvatarUrl(URL.createObjectURL(file));
                    event.target.value = null;
                  }}
                />
              )}
            />
          </div>
        </div>

        <button type="submit" className="btn--primary text-secondary-0 btn">
          تایید
        </button>
      </form>
    </div>
  );
}

export default UpdateProfileForm;
