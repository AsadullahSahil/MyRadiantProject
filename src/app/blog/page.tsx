import Image from "next/image";
import Link from "next/link";
import { blogCards } from "./data";


export default function BlogPage() {
  return (
    <>
      {/* Heading */}
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="mt-16 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
            Blog
          </h2>
          <h1 className="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
            What’s happening at Radiant.
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
            Stay informed with product updates, company news, and insights on
            how to sell smarter at your company.
          </p>
        </div>
      </div>

      {/* Featured */}
      <div className="mt-16 bg-linear-to-t from-gray-100 pb-14">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h2 className="text-2xl font-medium tracking-tight">Featured</h2>
            <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {blogCards.map((post) => (
                <div
                  key={post.slug}
                  className="relative flex flex-col rounded-3xl bg-white p-2 shadow-md ring-1 shadow-black/5 ring-black/5"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="aspect-3/2 w-full rounded-2xl object-cover"
                  />

                  <div className="flex flex-1 flex-col p-8">
                    <div className="text-sm/5 text-gray-700">{post.date}</div>

                    <div className="mt-2 text-base/7 font-medium">
                      <a href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0"></span>
                        {post.title}
                      </a>
                    </div>

                    <div className="mt-2 flex-1 text-sm/6 text-gray-500">
                      {post.description}
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <img
                        src={post.authorImg}
                        alt={post.author}
                        className="aspect-square size-6 rounded-full object-cover"
                      />
                      <div className="text-sm/5 text-gray-700">
                        {post.author}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mt-16 pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <button
              className="flex items-center justify-between gap-2 font-medium"
              id="headlessui-menu-button-_r_14_"
              type="button"
              aria-haspopup="menu"
              aria-expanded="false"
              data-headlessui-state=""
            >
              All categories
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="size-4 fill-gray-900"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>

            <a
              className="gap-1 inline-flex items-center justify-center px-2 py-1 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
              data-headlessui-state=""
              href="/blog/feed.xml"
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
                  d="M2 2.75A.75.75 0 0 1 2.75 2C8.963 2 14 7.037 14 13.25a.75.75 0 0 1-1.5 0c0-5.385-4.365-9.75-9.75-9.75A.75.75 0 0 1 2 2.75Zm0 4.5a.75.75 0 0 1 .75-.75 6.75 6.75 0 0 1 6.75 6.75.75.75 0 0 1-1.5 0C8 10.35 5.65 8 2.75 8A.75.75 0 0 1 2 7.25ZM3.5 11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
                  clipRule="evenodd"
                ></path>
              </svg>
              RSS Feed
            </a>
          </div>

          <div className="mt-6">
            <div className="relative grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3">
              <div>
                <div className="text-sm/5 max-sm:text-gray-700 sm:font-medium">
                  Tuesday, September 3, 2024
                </div>
                <div className="mt-2.5 flex items-center gap-3">
                  <img
                    alt=""
                    className="aspect-square size-6 rounded-full object-cover"
                    src="https://cdn.sanity.io/images/ssqh4ksj/production/cd1ee59e9e4c2ff30c303de6c7d1066c057419d5-7952x5304.jpg?rect=2370,0,5304,5304&amp;w=64&amp;h=64&amp;auto=format"
                  />
                  <div className="text-sm/5 text-gray-700">Marcus Eldridge</div>
                </div>
              </div>

              <div className="sm:col-span-2 sm:max-w-2xl">
                <h2 className="text-sm/5 font-medium">
                  What homelessness can teach us about B2B sales
                </h2>
                <p className="mt-3 text-sm/6 text-gray-500">
                  Most people don't feel comfortable creating content that draws
                  comparisons between desperate poverty and business practices
                  but we think there's a silver lining to every humanitarian
                  crisis.
                </p>
                <div className="mt-4">
                  <a
                    className="flex items-center gap-1 text-sm/5 font-medium"
                    data-headlessui-state=""
                    href="/blog/what-homelessness-can-teach-us-about-b2b-sales"
                  >
                    <span className="absolute inset-0"></span>Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-gray-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-2">
            <button
              className="inline-flex items-center justify-center px-2 py-1 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
              type="button"
              disabled
              data-headlessui-state="disabled"
              data-disabled=""
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
              Previous
            </button>

            <div className="flex gap-2 max-sm:hidden">
              <a
                data-active="true"
                className="size-7 rounded-lg text-center text-sm/7 font-medium data-hover:bg-gray-100 data-active:shadow-sm data-active:ring-1 data-active:ring-black/10 data-active:data-hover:bg-gray-50"
                data-headlessui-state=""
                href="/blog"
              >
                1
              </a>
              <a
                className="size-7 rounded-lg text-center text-sm/7 font-medium data-hover:bg-gray-100 data-active:shadow-sm data-active:ring-1 data-active:ring-black/10 data-active:data-hover:bg-gray-50"
                data-headlessui-state=""
                href="/blog?page=2"
              >
                2
              </a>
            </div>

            <a
              className="inline-flex items-center justify-center px-2 py-1 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
              data-headlessui-state=""
              href="/blog?page=2"
            >
              Next
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
                  d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
