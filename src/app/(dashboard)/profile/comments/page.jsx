import { Suspense } from "react";
import Fallback from "@/ui/Fallback";
import { CommentTabel } from "./_components/CommentTabel";
import { getAllCommentsApi } from "@/services/commentService";

async function CommentPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-secondary-700 mb-8 font-bold text-xl">
          لیست نظرات
        </h1>
      </div>
      <Suspense fallback={<Fallback />}>
        <CommentTabel />
      </Suspense>
    </div>
  );
}

export default CommentPage;
