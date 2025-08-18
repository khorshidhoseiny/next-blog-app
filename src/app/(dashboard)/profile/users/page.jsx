const { default: Search } = require("@/ui/Search");

import { getAllUsersApi } from "@/services/AuthService";
import Fallback from "@/ui/Fallback";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import React, { Suspense } from "react";
import { UserTabel } from "./_components/UserTabel";

async function users() {
  const cookiesStore = await cookies();
  const options = await setCookieOnReq(cookiesStore);
  const { users } = await getAllUsersApi(options);
<<<<<<< HEAD
  console.log(users);

  return (
    <div className="flex flex-col container gap-y-6 items-center justify-center">
      <div className="flex mb-6 w-full justify-between">
        <h1 className="font-bold">لیست کاربران </h1>
        <Search />
      </div>
      <Suspense fallback={<Fallback />}>
        <UserTabel users={users} query={""} />
      </Suspense>
      {/* <Pagination totalPages={totalPages} /> */}
=======

  return (
    <div className="flex flex-col overflow-x-scroll items-center justify-center">
      <div className="flex-col flex mb-6 gap-y-4 w-full ">
        <h1 className="font-bold">لیست کاربران </h1>
      </div>
      <Suspense fallback={<Fallback />}>
        <UserTabel users={users} />
      </Suspense>{" "}
>>>>>>> fix resposive mobile bugs
    </div>
  );
}

export default users;
