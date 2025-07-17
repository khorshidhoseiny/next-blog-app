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
    </div>
  );
}

export default users;
