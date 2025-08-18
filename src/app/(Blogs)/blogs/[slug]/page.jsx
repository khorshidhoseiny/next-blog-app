import getPostBySlug, { getPosts } from "@/services/PostsApi";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import RelatedPost from "../_components/RelatedPost";
<<<<<<< HEAD
import PostComment from "../_components/comment/postComment";
import { toLocalDateShort } from "@/utils/dateFormatter";
import Avatar from "@/ui/Avatar";
import PostInteraction from "../_components/PostInteraction";

export async function generateStaticParams(params) {
  const { posts } = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));
  return slugs;
}

export async function generateMetadata(props) {
  const params = await props.params;
  const slug = await params.slug;
  const post = await getPostBySlug(slug);
=======
import PostComment from "../_components/comment/PostComment";
import { toLocalDateShort } from "@/utils/dateFormatter";
import Avatar from "@/ui/Avatar";

export async function generateStaticParams() {
  const { posts } = await getPosts();
  console.log("posts", posts);
  const slugs = posts.map((post) => ({ slug: post.slug }));
  console.log(slugs, "slugs");
  return slugs;
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = await getPostBySlug(slug);
  console.log("post by slug in generate Meta data", post);
>>>>>>> fix resposive mobile bugs
  return {
    title: `پست ${post.title}`,
  };
}

async function SinglePost(props) {
  const { params } = await props;
  const { slug } = await params;
  const post = await getPostBySlug(slug);
<<<<<<< HEAD
  console.log(post);

=======
>>>>>>> fix resposive mobile bugs
  if (!post) return notFound();

  return (
    <div className="max-w-screen-md space-y-8 mx-auto mt-10">
      <div className=" space-y-2">
        <h1 className="text-3xl font-bold text-secondary-800">{post.title}</h1>
        <p className="text-secondary-500">{post.briefText}</p>
        <div className="flex items-center gap-4 text-xs text-secondary-400">
          <span>{toLocalDateShort(post.createdAt)}</span>
          <span>{post.readingTime} دقیقه مطالعه</span>
          <div className="flex items-center gap-2">
            {post.author.avatarUrl ? (
              <Avatar src={post.author.avatarUrl} size={24} alt={"author"} />
            ) : (
              <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                {post.author.name[0]}
              </div>
            )}
            <span>{post.author.name}</span>
          </div>
        </div>
      </div>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
        <Image
          className="object-cover object-center hover:scale-105 transition-transform ease-out duration-500"
          fill
          alt={post.title}
          src={post.coverImageUrl}
        />
      </div>
      <div className="prose prose-sm sm:prose lg:prose-lg  max-w-none text-secondary-700 mb-8">
        <p>{post.text}</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-8">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-secondary-100 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
<<<<<<< HEAD
      {/* <PostInteraction post={post} /> */}
=======

>>>>>>> fix resposive mobile bugs
      {post.related.length > 0 && <RelatedPost posts={post.related} />}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">
          دیدگاه‌ها ({post.commentsCount})
        </h2>
        <PostComment post={post} />
      </div>
    </div>
  );
}

export default SinglePost;
