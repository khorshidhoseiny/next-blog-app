import { Suspense } from "react";
import Fallback from "@/ui/Fallback";
import { CommentTabel } from "./_components/CommentTabel";
<<<<<<< HEAD

async function CommentPage() {
=======
import { getAllCommentsApi } from "@/services/commentService";
export const dynamic = "force-dynamic";

async function CommentPage() {
  const { comments } = await getAllCommentsApi();
>>>>>>> fix resposive mobile bugs
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-secondary-700 mb-8 font-bold text-xl">
          لیست نظرات
        </h1>
      </div>
      <Suspense fallback={<Fallback />}>
<<<<<<< HEAD
        <CommentTabel />
=======
        <CommentTabel comments={comments} />
>>>>>>> fix resposive mobile bugs
      </Suspense>
    </div>
  );
}

export default CommentPage;
