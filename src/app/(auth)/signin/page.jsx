"use client";

import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useAuth } from "@/context/AuthContext";
import RHFTextField from "@/ui/RHFTextField";
import Button from "@/ui/Button";
import SpinnerMini from "@/ui/SpinnerMini";
import Link from "next/link";

const schema = yup
  .object({
    email: yup.string().email("ایمیل الزامی است").required("ایمیل الزامی است"),
    password: yup.string("رمز عبور الزامی است").required("رمز عبور الزامی است"),
  })
  .required();

function SignIn() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { signin, isLoading } = useAuth();
  const onSubmit = async (values) => {
    await signin(values);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ورود
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label="ایمیل"
          type="email"
          dir="ltr"
          name="email"
          register={register}
          isRequired
          errors={errors}
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          type="password"
          dir="ltr"
          isRequired
          errors={errors}
          register={register}
        />
        <div>
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Button type="submit" variant="primary" className="w-full">
              تایید
            </Button>
          )}
        </div>
      </form>

      <Link className="text-secondary-500 mt-6 text-center" href={"/signup"}>
        ثبت نام
      </Link>
    </div>
  );
}

export default SignIn;
