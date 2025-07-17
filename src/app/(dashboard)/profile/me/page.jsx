"use client";
import { useAuth } from "@/context/AuthContext";
import Spinner from "@/ui/Spinner";
import React from "react";
import UpdateProfileForm from "./_/UpdateProfileForm";
import TextField from "@/ui/TextField";
import { toPersianDigits } from "@/utils/numberFormatter";


function ProfileDetail() {
  const { user, isLoading } = useAuth();
  if (isLoading) return <Spinner />;

  return (<>
   <h1 className="text-secondary-700 flex justify-start items-start text-2xl mb-4 font-semibold">
        اطلاعات کاربری
      </h1>
    <div className="flex flex-col justify-center items-center">
      <div className="bg-secondary-0 rounded-xl flex flex-col borser border-secondary-100  max-w-xl p-2">
      <UpdateProfileForm userToEdit={user ? user : {}} />
      <div className=" border-t py-5 border-secondary-300
 gap-x-3 items-center justify-between flex">
          <TextField disabled={true}
label='تاریخ ثبت نام'
dir="rtl"
name="createdAt"
className="textField__input"
type="text"value={new Date(user?.createdAt).toLocaleDateString()}

/>
<TextField disabled={true}
label= "تاریخ بروزرسانی"
dir="rtl"
name="updatedAt"
className="textField__input"
type="text"
value={new Date(user?.updatedAt).toLocaleDateString()}
/>
      </div>

<div className=" py-5 gap-x-3 items-center justify-between flex">
<TextField disabled={true}
label= "  پست های لایک شده"
dir="rtl"
name="likedPosts"
className="textField__input"
type="text"
value={toPersianDigits(user?.likedPosts?.length)}
/>
<TextField disabled={true}
label= "پست های بوکمارک شده"
dir="rtl"
name="likedPosts"
className="textField__input"
type="text"
value={toPersianDigits(user?.bookmarkedPosts?.length)}
/>
</div>
      </div>
    </div>
  </>
   
  );
}

export default ProfileDetail;
