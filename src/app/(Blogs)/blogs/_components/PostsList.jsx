import CoverImage from "./CoverImage";
import Link from "next/link";
import Author from "./Author";
import { ClockIcon } from "@heroicons/react/24/outline";
import PostInteraction from "./PostInteraction";
import { toPersianDigits } from "@/utils/numberFormatter";

async function PostsList({ posts }) {
  console.log(posts);

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-x-8">
      {posts.map((post) => {
        return (
          <div
            key={post._id}
            className="col-span-12 bg-secondary-0 mb-7 shadow-md sm:col-span-6 xl:col-span-4 border border-secondary-200 rounded-md"
          >
            <CoverImage {...post} />
            {/* post content */}
            <div className="p-3">
              <Link href={`/blogs/${post.slug}`}>
                <h2 className="mb-4 font-bold text-secondary-700">
                  {post.title}
                </h2>
              </Link>
              {/* post auther - reading Time */}
              <div className="flex mb-5 items-center justify-between">
                <Author
                  name={post.author.name}
                  avatarUrl={post.author.avatarUrl}
                />
                <div className="flex items-center text-[10px] text-secondary-500">
                  <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                  <span className="ml-1"> خواندن:</span>
                  <span className="ml-1 leading-3">
                    {toPersianDigits(post.readingTime)}
                  </span>
                  <span>دقیقه</span>
                </div>
              </div>
              <PostInteraction post={post} />
            </div>
          </div>
        );
      })}
    </div>
  ) : null;
}

export default PostsList;
