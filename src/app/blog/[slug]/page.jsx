import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
// Import your blog posts list (same array you used in blog.jsx)
import { blogCards } from "../data";

// Or if you're not using data.js, replace with blogCards array:
// import { blogCards as blogCards } from "../page";

export default function BlogSlugPage({ params }) {
  const { slug } = params;

  // Find the post that matches the slug
  const post = blogCards.find((item) => item.slug === slug);

  if (!post) return notFound(); // 404 if no match

  return (
    <>
      {/* Header Section */}
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="mt-16 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
            {post.date}
          </h2>

          <h1 className="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article Body */}
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mt-16 grid grid-cols-1 gap-8 pb-24 lg:grid-cols-[15rem_1fr] xl:grid-cols-[15rem_1fr_15rem]">
            {/* LEFT COLUMN */}
            <div className="flex flex-wrap items-center gap-8 max-lg:justify-between lg:flex-col lg:items-start">
              <div className="flex items-center gap-3">
                <img
                  alt={post.author}
                  src={post.authorImg}
                  className="aspect-square size-6 rounded-full object-cover"
                />
                <div className="text-sm/5 text-gray-700">{post.author}</div>
              </div>

              <div className="flex flex-wrap gap-2">
                {post.category.map((cat, index) => (
                  <Link
                    href={`/blog/category/${cat.toLowerCase()}`}
                    className="rounded-full border border-dotted border-gray-300 bg-gray-50 px-2 text-sm/6 font-medium text-gray-500"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>

            {/* CENTER COLUMN */}
            <div className="text-gray-700">
              <div className="max-w-2xl xl:mx-auto">
                {/* Top Image */}
                <img
                  src={post.image}
                  alt=""
                  className="mb-10 aspect-3/2 w-full rounded-2xl object-cover shadow-xl"
                />
                {/* Content */}
                <div
                  className="prose prose-gray max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Back Button */}
                <div className="mt-10">
                  <a
                    className="inline-flex items-center justify-center px-2 py-1 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                    data-headlessui-state=""
                    href="/blog"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Back to blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
