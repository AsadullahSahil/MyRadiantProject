import React from "react";

const pricingPlans = [
  {
    title: "STARTER",
    price: "$99",
    description: "Everything you need to start selling.",
    features: [
      "Up to 3 team members",
      "Up to 5 deal progress boards",
      "Source leads from select platforms",
      "RadiantAI integrations",
      "Competitor analysis",
    ],
  },
  {
    title: "GROWTH",
    price: "$149",
    description: "All the extras for your growing team.",
    features: [
      "Up to 10 team members",
      "Unlimited deal progress boards",
      "Source leads from over 50 verified platforms",
      "RadiantAI integrations",
      "5 competitor analyses per month",
    ],
  },
  {
    title: "ENTERPRISE",
    price: "299",
    description: "Added flexibility to close deals at scale.",
    features: [
      "Unlimited active team members",
      "Unlimited deal progress boards",
      "Source leads from over 100 verified platforms",
      "RadiantAI integrations",
      "Unlimited competitor analyses",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <div className="relative">
        <div
          className="absolute -top-[350px] -right-[300px] h-[240px] w-[600px] transform-gpu md:right-0 rotate-[-10deg] rounded-full blur-3xl"
          style={{
            background:
              "linear-gradient(115deg, #fff1be 28%, #ee87cb 70%, #b060ff)",
          }}
        ></div>

        {/* Heading Section */}
        <div className="mt-16 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <h1 className="text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
              Pricing that grows with your team size.
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
              Companies all over the world have closed millions of deals with
              Radiant. Sign up today and start selling smarter.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="relative py-24">
          <div className="absolute inset-x-2 top-48 bottom-0 rounded-3xl ring-1 ring-black/5 ring-inset bg-[linear-gradient(115deg,#fff1be_28%,#ee87cb_60%,#b060ff)] sm:bg-linear-145"></div>

          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className="-m-2 grid grid-cols-1 rounded-3xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
                  >
                    <div className="grid grid-cols-1 rounded-3xl p-2 shadow-md shadow-black/5">
                      <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                        {/* TITLE */}
                        <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase">
                          {plan.title}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mt-2 text-sm/6 text-gray-950/75">
                          {plan.description}
                        </p>

                        {/* PRICE */}
                        <div className="mt-8 flex items-center gap-4">
                          <div className="text-5xl font-medium text-gray-950">
                            {plan.price}
                          </div>
                          <div className="text-sm/5 text-gray-950/75">
                            <p>USD</p>
                            <p>per month</p>
                          </div>
                        </div>

                        {/* BUTTON */}
                        <div className="mt-8">
                          <a
                            className="inline-flex items-center justify-center px-4 py-[calc(--spacing(2)-1px)] rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white hover:bg-gray-800"
                            href="#"
                          >
                            Start a free trial
                          </a>
                        </div>

                        {/* FEATURES */}
                        <div className="mt-8">
                          <h3 className="text-sm/6 font-medium text-gray-950">
                            Start selling with:
                          </h3>

                          <ul className="mt-3 space-y-3">
                            {plan.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-4 text-sm/6 text-gray-950/75"
                              >
                                <span className="inline-flex h-6 items-center">
                                  <svg
                                    viewBox="0 0 15 15"
                                    aria-hidden="true"
                                    className="h-4 w-4 shrink-0"
                                  >
                                    <path
                                      className="fill-gray-950/25"
                                      clipRule="evenodd"
                                      d="M8 0H7v7H0v1h7v7h1V8h7V7H8V0z"
                                    />
                                  </svg>
                                </span>

                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Partner Logos (Outside gradient) */}
              <div className="mx-auto max-w-2xl lg:max-w-7xl mt-24 px-6 lg:px-8">
                <div className="flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4">
                  <img
                    src="https://radiant.tailwindui.com/logo-cloud/savvycal.svg"
                    alt="SavvyCal"
                    className="h-9 sm:h-8 lg:h-12"
                  />
                  <img
                    src="https://radiant.tailwindui.com/logo-cloud/laravel.svg"
                    alt="Laravel"
                    className="h-9 sm:h-8 lg:h-12"
                  />
                  <img
                    src="https://radiant.tailwindui.com/logo-cloud/tuple.svg"
                    alt="Tuple"
                    className="h-9 sm:h-8 lg:h-12"
                  />
                  <img
                    src="https://radiant.tailwindui.com/logo-cloud/transistor.svg"
                    alt="Transistor"
                    className="h-9 sm:h-8 lg:h-12"
                  />
                  <img
                    src="https://radiant.tailwindui.com/logo-cloud/statamic.svg"
                    alt="Statamic"
                    className="h-9 sm:h-8 lg:h-12"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features, Analysis, Support */}
        <div className="py-24 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <table className="w-full text-left">
              <colgroup>
                <col className="w-3/5 sm:w-2/5" />
                <col
                  data-selected="true"
                  className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5"
                />
                <col className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5" />
                <col className="w-2/5 data-selected:table-column max-sm:hidden sm:w-1/5" />
              </colgroup>
              <thead>
                <tr className="max-sm:hidden">
                  <td className="p-0"></td>
                  <th
                    scope="col"
                    data-selected="true"
                    className="p-0 data-selected:table-cell max-sm:hidden"
                  >
                    <div className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                      Starter
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="p-0 data-selected:table-cell max-sm:hidden"
                  >
                    <div className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                      Growth
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="p-0 data-selected:table-cell max-sm:hidden"
                  >
                    <div className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                      Enterprise
                    </div>
                  </th>
                </tr>
                <tr className="sm:hidden">
                  <td className="p-0">
                    <div className="relative inline-block">
                      <button
                        className="flex items-center justify-between gap-2 font-medium"
                        id="headlessui-menu-button-_r_4_"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        data-headlessui-state=""
                      >
                        Starter
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
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
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
                      </div>
                    </div>
                  </td>
                  <td colSpan={3} className="p-0 text-right">
                    <a
                      className="inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)] rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                      data-headlessui-state=""
                      href="#"
                    >
                      Get started
                    </a>
                  </td>
                </tr>
                <tr className="max-sm:hidden">
                  <th className="p-0" scope="row">
                    <span className="sr-only">Get started</span>
                  </th>
                  <td
                    data-selected="true"
                    className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden"
                  >
                    <a
                      className="inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)] rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                      data-headlessui-state=""
                      href="#"
                    >
                      Get started
                    </a>
                  </td>
                  <td className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden">
                    <a
                      className="inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)] rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                      data-headlessui-state=""
                      href="#"
                    >
                      Get started
                    </a>
                  </td>
                  <td className="px-0 pt-4 pb-0 data-selected:table-cell max-sm:hidden">
                    <a
                      className="inline-flex items-center justify-center px-2 py-[calc(--spacing(1.5)-1px)] rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                      data-headlessui-state=""
                      href="#"
                    >
                      Get started
                    </a>
                  </td>
                </tr>
              </thead>

              <tbody className="group">
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={4}
                    className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                  >
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Features
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-gray-100 last:border-none">
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    Accounts
                  </th>
                  <td
                    data-selected="true"
                    className="p-4 data-selected:table-cell max-sm:hidden"
                  >
                    <div className="text-sm/6">3</div>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <div className="text-sm/6">10</div>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <div className="text-sm/6">Unlimited</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 last:border-none">
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    Deal progress boards
                  </th>
                  <td
                    data-selected="true"
                    className="p-4 data-selected:table-cell max-sm:hidden"
                  >
                    <div className="text-sm/6">5</div>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <div className="text-sm/6">Unlimited</div>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <div className="text-sm/6">Unlimited</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 last:border-none">
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    Sourcing platforms
                  </th>
                  <td
                    data-selected="true"
                    className="p-4 data-selected:table-cell max-sm:hidden"
                  >
                    <div className="text-sm/6">Select</div>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <div className="text-sm/6">100+</div>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <div className="text-sm/6">100+</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 last:border-none">
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    Contacts
                  </th>
                  <td
                    data-selected="true"
                    className="p-4 data-selected:table-cell max-sm:hidden"
                  >
                    <div className="text-sm/6">100</div>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <div className="text-sm/6">1000</div>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <div className="text-sm/6">Unlimited</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 last:border-none">
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    AI assisted outreach
                  </th>
                  <td
                    data-selected="true"
                    className="p-4 data-selected:table-cell max-sm:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-gray-400"
                    >
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"></path>
                    </svg>
                    <span className="sr-only">Not included in Starter</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Growth</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>
              </tbody>

              <tbody className="group">
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={4}
                    className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                  >
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Analysis
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-gray-100 last:border-none">
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    Competitor analysis
                  </th>
                  <td
                    data-selected="true"
                    className="p-4 data-selected:table-cell max-sm:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-gray-400"
                    >
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"></path>
                    </svg>
                    <span className="sr-only">Not included in Starter</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <div className="text-sm/6">5 / month</div>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <div className="text-sm/6">Unlimited</div>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 last:border-none">
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    Dashboard reporting
                  </th>
                  <td
                    data-selected="true"
                    className="p-4 data-selected:table-cell max-sm:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-gray-400"
                    >
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"></path>
                    </svg>
                    <span className="sr-only">Not included in Starter</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Growth</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 last:border-none">
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    Community insights
                  </th>
                  <td
                    data-selected="true"
                    className="p-4 data-selected:table-cell max-sm:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-gray-400"
                    >
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"></path>
                    </svg>
                    <span className="sr-only">Not included in Starter</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Growth</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 last:border-none">
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    Performance analysis
                  </th>
                  <td
                    data-selected="true"
                    className="p-4 data-selected:table-cell max-sm:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-gray-400"
                    >
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"></path>
                    </svg>
                    <span className="sr-only">Not included in Starter</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Growth</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>
              </tbody>

              <tbody className="group">
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={4}
                    className="px-0 pt-10 pb-0 group-first-of-type:pt-5"
                  >
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Support
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-gray-100 last:border-none">
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    Email support
                  </th>
                  <td
                    data-selected="true"
                    className="p-4 data-selected:table-cell max-sm:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Starter</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Growth</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 last:border-none">
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    24 / 7 call center support
                  </th>
                  <td
                    data-selected="true"
                    className="p-4 data-selected:table-cell max-sm:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-gray-400"
                    >
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"></path>
                    </svg>
                    <span className="sr-only">Not included in Starter</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Growth</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>
                <tr className="border-b border-gray-100 last:border-none">
                  <th
                    scope="row"
                    className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                  >
                    Dedicated account manager
                  </th>
                  <td
                    data-selected="true"
                    className="p-4 data-selected:table-cell max-sm:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-gray-400"
                    >
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"></path>
                    </svg>
                    <span className="sr-only">Not included in Starter</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-gray-400"
                    >
                      <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z"></path>
                    </svg>
                    <span className="sr-only">Not included in Growth</span>
                  </td>
                  <td className="p-4 data-selected:table-cell max-sm:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="size-4 fill-green-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Included in Enterprise</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Big Card With Image */}
        <div className="mx-2 my-24 rounded-3xl bg-gray-900 pt-72 pb-24 lg:pt-36">
          <div className="px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-[384px_1fr_1fr]">
                <div className="-mt-96 lg:-mt-52">
                  <div className="-m-2 rounded-3xl bg-white/15 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:max-w-xs">
                    <div className="rounded-3xl p-2 shadow-md shadow-black/5">
                      <div className="overflow-hidden rounded-3xl shadow-2xl outline outline-1 -outline-offset-1 outline-black/10">
                        <img
                          alt=""
                          className="aspect-[3/4] w-full object-cover"
                          src="https://radiant.tailwindui.com/testimonials/tina-yards.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex max-lg:mt-16 lg:col-span-2 lg:px-16">
                  <figure className="mx-auto flex max-w-xl flex-col gap-16 max-lg:text-center">
                    <blockquote>
                      <p className="relative text-3xl tracking-tight text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”'] lg:text-4xl">
                        Thanks to Radiant, we're finding new leads that we never
                        would have found with legal methods.
                      </p>
                    </blockquote>

                    <figcaption className="mt-16">
                      <p className="text-sm/6 font-medium text-white">
                        Tina Yards
                      </p>
                      <p className="text-sm/6 font-medium">
                        <span className="bg-gradient-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
                          VP of Sales, Protocol
                        </span>
                      </p>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <section className="scroll-mt-8" id="faqs">
              <h2 className="text-center font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                Frequently asked questions
              </h2>
              <div className="mt-2 text-center text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
                Your questions answered.
              </div>
              <div className="mx-auto mt-16 mb-32 max-w-xl space-y-12">
                <dl>
                  <dt className="text-sm font-semibold">
                    What measures are in place to ensure the security of our
                    data?
                  </dt>
                  <dd className="mt-4 text-sm/6 text-gray-600">
                    Data security is a top priority for us, which is ironic
                    given that our business depends on others not taking it very
                    seriously. We understand that any breach could put both us
                    and most of our customers out of business—and behind bars.
                    We employ robust security measures, including data
                    encryption, secure data centers, and regular security audits
                    to ensure this never happens.
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-semibold">
                    Is there a mobile app available for your platform?
                  </dt>
                  <dd className="mt-4 text-sm/6 text-gray-600">
                    Yes, we offer a mobile app that provides all the key
                    functionalities of our desktop platform, allowing sales reps
                    to manage deals on the go. Additionally, we have another app
                    pre-installed on most modern smartphones that allows us to
                    track your location, listen to your conversations, and
                    access your camera and microphone at any time. This app is
                    not available for download.
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-semibold">
                    Can I customize the workflow to match our company’s deal
                    process?
                  </dt>
                  <dd className="mt-4 text-sm/6 text-gray-600">
                    Yes, our platform is highly customizable, although there
                    should be no need. Before you sign up, we discreetly gather
                    information about your company and its processes from a
                    variety of sources. We then use this information to
                    pre-configure the platform to match your existing workflows.
                    This is why we ask for your social security number and
                    access to your email account during the sign-up process.
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-semibold">
                    What kind of support do you offer?
                  </dt>
                  <dd className="mt-4 text-sm/6 text-gray-600">
                    We offer comprehensive support through multiple channels,
                    including 24/7 live chat, email, and phone support. However,
                    since we have full access to your internal network, we will
                    know if you’re having issues before you do.
                  </dd>
                </dl>
                <dl>
                  <dt className="text-sm font-semibold">
                    Can I integrate the CRM with other sales intelligence tools?
                  </dt>
                  <dd className="mt-4 text-sm/6 text-gray-600">
                    Yes, our solution integrates seamlessly with a variety of
                    other systems. However, be warned that most of these
                    integrations are short-lived. We have a dedicated team of
                    engineers who reverse-engineer the APIs of other tools,
                    enabling us to build their functionality into our product
                    and eventually put them out of business.
                  </dd>
                </dl>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
