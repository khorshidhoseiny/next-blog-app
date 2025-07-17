import React, { Suspense } from "react";
import PostTabel from "./posts/_components/PostTabel";
import Fallback from "@/ui/Fallback";
import CardRaper from "./_components/CardRaper";
import { useAuth } from "@/context/AuthContext";

async function profile() {
  return (
    <div>
      <h1 className="text-xl font-bold mb-4 text-secondary-600">داشبورد شما</h1>
      <Suspense fallback={<Fallback />}>
        <CardRaper />
      </Suspense>
      <h2 className="text-xl font-bold mb-4 text-secondary-600">
        اخرین پست ها
      </h2>
      <Suspense fallback={<Fallback />}>
        <PostTabel query="sort=latest&limit=5" />
      </Suspense>
    </div>
  );
}

export default profile;
