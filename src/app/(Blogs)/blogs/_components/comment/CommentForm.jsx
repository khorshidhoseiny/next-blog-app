"use client";
import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import React, { useState, useEffect, useActionState, useRef } from "react";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};
function CommentForm({ postId, parentId, onClose }) {
  const [state, formAction] = useActionState(createComment, initialState);
  const [text, setText] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
      console.log(onClose);
    }
    if (state?.error) {
      toast.error(state.error);
      onClose();
    }
  }, [state]);
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md w-full">
          <form
            ref={ref}
            className="space-y-7"
            action={async (formData) => {
              await formAction({ formData, postId, parentId });
            }}
            // action={createComment.bind(null, postId, parentId)}
          >
            <TextArea
              name="text"
              value={text}
              label="متن نظر"
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <SubmitButton>{parentId ? "ثبت پاسخ" : "ثبت نظر"}</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentForm;
