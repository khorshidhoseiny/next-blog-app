"use client";

import Button from "@/ui/Button";
import RHFTextField from "@/ui/RHFTextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import SpinnerMini from "@/ui/SpinnerMini";

const schema = yup
  .object({
    name: yup
      .string()
      .min(7, "نام و نام خانوادگی الزامی است")
      .required("نام و نام خانوادگی الزامی است"),
    email: yup.string().email("ایمیل الزامی است").required("ایمیل الزامی است"),
    password: yup.string("رمز عبور الزامی است").required("رمز عبور الزامی است"),
  })
  .required();

function Signup() {
  const { isLoading, signup } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit = async (values) => {
    await signup(values);
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-secondary-500 text-center mb-6">
        ثبت نام
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <RHFTextField
          label="نام خانوادگی"
          isRequired={true}
          errors={errors}
          dir="rtl"
          name="name"
          register={register}
        />
        <RHFTextField
          label="ایمیل"
          type="email"
          dir="ltr"
          name="email"
          register={register}
          isRequired={true}
          errors={errors}
        />
        <RHFTextField
          label="رمز عبور"
          name="password"
          type="password"
          dir="ltr"
          isRequired={true}
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

      <Link className="text-secondary-500 mt-6 text-center" href={"/signin"}>
        ورود
      </Link>
    </div>
  );
}

export default Signup;
