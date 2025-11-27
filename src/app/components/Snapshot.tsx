"use client";


export default function Snapshot() {
  return (
    <>
      <section className="overflow-hidden mx-auto max-w-2xl lg:max-w-7xl pb-24 px-6 lg:px-8 bg-linear-to-b from-white from-50% to-gray-100 py-[100px]">
        <h2 className="max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
          A snapshot of your entire sales pipeline.
        </h2>

        <div className="mt-16 w-[1216px] h-[768px] relative aspect-[1218/768]">
          <div className="absolute -inset-2 rounded-lg shadow-xs ring-1 ring-black/5 p-4 "></div>

          <img
            alt=""
            src="https://radiant.tailwindui.com/screenshots/app.png"
            className="h-full rounded-lg shadow-2xl ring-1 ring-black/10"
          />
        </div>
      </section>
    </>
  );
}
