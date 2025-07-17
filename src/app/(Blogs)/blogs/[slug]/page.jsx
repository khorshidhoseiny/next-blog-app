import getPostBySlug, { getPosts } from "@/services/PostsApi";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import RelatedPost from "../_components/RelatedPost";
import PostComment from "../_components/comment/postComment";

export async function generateStaticParams(params) {
  const { posts } = await getPosts();
  const slugs = posts.map((post) => ({ slug: post.slug }));
  return slugs;
}

export async function generateMetadata(props) {
  const params = await props.params;
  const slug = await params.slug;
  const post = await getPostBySlug(slug);
  return {
    title: `پست ${post.title}`,
  };
}

async function SinglePost(props) {
  const { params } = await props;
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  console.log(post.comments);

  if (!post) return notFound();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <p className="mb-8">{post.text}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center hover:scale-110 transition-all ease-out duration-300"
          fill
          alt={post.title}
          src={post.coverImageUrl}
        />
      </div>
      {post.related.length > 0 && <RelatedPost posts={post.related} />}
      <PostComment post={post} />
    </div>
  );
}

export default SinglePost;
