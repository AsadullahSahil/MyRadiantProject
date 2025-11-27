"use client";

export default function Outreach() {
  return (
    <>
      <section className="mt-2 rounded-3xl bg-gray-900">
        <article className="py-32 px-6 lg:px-8 mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
            Outreach
          </h2>
          <h3 className="mt-2 max-w-3xl text-4xl font-medium tracking-tighter text-pretty text-white sm:text-6xl">
            Customer outreach has never been easier.
          </h3>

          {/* Boxes */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
            {/* Box 1 */}
            <div className="max-lg:rounded-t-3xl lg:col-span-4 lg:rounded-tl-4xl group relative flex flex-col overflow-hidden rounded-lg shadow-xs ring-1 ring-black/5 bg-gray-800">
              <div className="relative h-80 shrink-0">
                <div className="h-80 bg-[url('/screenshots/networking.png')] bg-[length:851px_344px] bg-no-repeat"></div>
                <div className="absolute inset-0 bg-linear-to-b from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]"></div>
              </div>
              <div className="relative p-10">
                <h3 className="font-mono text-xs/5 font-semibold tracking-widest  uppercase text-gray-400">
                  Networking
                </h3>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight  text-white">
                  Sell at the speed of light
                </p>
                <p className="mt-2 max-w-[600px] text-sm/6 text-gray-400">
                  Our RadiantAI chat assistants analyze the sentiment of your
                  conversations in real time, ensuring you're always one step
                  ahead.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-xs ring-1 ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15"></div>

            {/* Box 3 */}
            <div className="lg:col-span-2 lg:rounded-bl-4xl group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-xs ring-1 ring-black/5 data-dark:bg-gray-800 data-dark:ring-white/15"></div>

            {/* Box 4 */}
            <div className="max-lg:rounded-t-3xl lg:col-span-4 lg:rounded-tl-4xl group relative flex flex-col overflow-hidden rounded-lg shadow-xs ring-1 ring-black/5 bg-gray-800">
              <div className="relative h-80 shrink-0">
                <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-[length:851px_344px] bg-no-repeat"></div>
                <div className="absolute inset-0 bg-linear-to-b from-white to-50% group-data-dark:from-gray-800 group-data-dark:from-[-25%]"></div>
              </div>
              <div className="relative p-10">
                <h3 className="font-mono text-xs/5 font-semibold tracking-widest uppercase text-gray-400">
                  Engagement
                </h3>
                <p className="mt-1 text-2xl/8 font-medium tracking-tight text-white">
                  Become a thought leader
                </p>
                <p className="mt-2 max-w-[600px] text-sm/6 text-gray-400">
                  RadiantAI automatically writes LinkedIn posts that relate
                  current events to B2B sales, helping you build a reputation as
                  a thought leader.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
