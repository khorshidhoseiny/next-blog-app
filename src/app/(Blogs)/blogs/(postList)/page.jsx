import PostsList from "../_components/PostsList";
import setCookiesOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import { getPosts } from "@/services/PostsApi";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";

async function BlogPage(props) {
  const searchParams = await props.searchParams;
  const queries = queryString.stringify(searchParams);
  const cookieStore = await cookies();

  const options = await setCookiesOnReq(cookieStore);
  const { posts, totalPages } = await getPosts(queries, options);
  const search = searchParams.search;

  return (
    <section>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "هیچ پستی با این مشخصات پیدا نشد"
            : `نشان دادن ${posts.length} نتیجه برای `}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostsList posts={posts} />
      <div className="flex justify-center items-center">
        <Pagination totalPages={totalPages} />
      </div>
    </section>
  );
}

export default BlogPage;
