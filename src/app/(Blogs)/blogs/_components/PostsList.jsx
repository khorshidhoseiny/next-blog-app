import CoverImage from "./CoverImage";
import Link from "next/link";
import Author from "./Author";
import { ClockIcon } from "@heroicons/react/24/outline";
import PostInteraction from "./PostInteraction";
import { toPersianDigits } from "@/utils/numberFormatter";

async function PostsList({ posts }) {
  return posts.length > 0 ? (
<<<<<<< HEAD
    <div className="grid grid-cols-12 gap-x-8">
      {posts.map((post) => {
        console.log(post);

=======
    <div className="grid grid-cols-12 md:gap-x-4 ">
      {posts.map((post) => {
        console.log(post);
>>>>>>> fix resposive mobile bugs
        return (
          <div
            key={post._id}
            className="col-span-12 bg-secondary-0 mb-7 shadow-md sm:col-span-6 xl:col-span-4 border border-secondary-200 rounded-2xl"
          >
            <CoverImage {...post} />
            {/* post content */}
            <div className="p-3 ">
              <div className="border-b mb-2 border-secondary-200">
                <Link href={`/blogs/${post.slug}`}>
                  <h2 className="font-bold text-secondary-700">{post.title}</h2>
                </Link>
                <p className="text-secondary-500 my-2 text-xs ">
                  {post.briefText}
                </p>
              </div>
              {/* post author - reading Time */}
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
