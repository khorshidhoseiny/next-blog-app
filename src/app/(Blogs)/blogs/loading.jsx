import Spinner from "@/ui/Spinner";
import React from "react";

function loading() {
  return (
    <div className="grid items-center justify-center gap-x-4">
      <h1 className="text-lg text-secondary-500">درحال بارگذاری اطلاعات</h1>
      <Spinner />
    </div>
  );
}

export default loading;
