"use client";
import { bookmarkPostApi, likePostApi } from "@/services/PostsApi";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianDigits } from "@/utils/numberFormatter";
import {
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import {
  BookmarkIcon as SolidBookmarkIcon,
  HeartIcon as SolidHeartIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function PostInteraction({ post }) {
  const router = useRouter();

  const likeHandler = async (id) => {
    try {
      const { message } = await likePostApi(id);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const BookmarkHandler = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex items-center justify-center gap-x-4">
      <ButtonIcon onClick={() => BookmarkHandler(post.id)} variant="primary">
        {post.isBookmarked ? <SolidBookmarkIcon /> : <BookmarkIcon />}
      </ButtonIcon>
      <ButtonIcon onClick={() => likeHandler(post.id)} variant="red">
        {post.isLiked ? <SolidHeartIcon /> : <HeartIcon />}
      </ButtonIcon>
      <ButtonIcon variant="secondary">
        <ChatBubbleLeftEllipsisIcon />
        <span>{toPersianDigits(post.commentsCount)}</span>
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
