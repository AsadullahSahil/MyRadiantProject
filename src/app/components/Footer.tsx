import Link from "next/link";
export default function Footer() {
  return (
    <>
      <div className="relative bg-gradient-to-tr from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-gradient-to-r overflow-hidden">
        <div className="absolute inset-2 rounded-3xl bg-white/80"></div>

        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-7xl">
            <div className="relative pt-20 pb-16 text-center sm:py-24">
              <hgroup>
                <h2 className="font-mono text-xs leading-5 font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
                  Get started
                </h2>
                <p className="mt-6 text-3xl font-medium tracking-tight text-gray-950 sm:text-5xl">
                  Ready to dive in?
                  <br />
                  Start your free trial today.
                </p>
              </hgroup>
              <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
                Get the cheat codes for selling and unlock your team's revenue
                potential.
              </p>
              <div className="mt-6">
                <Link
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white hover:bg-gray-800 disabled:bg-gray-950 disabled:opacity-40"
                  href="/"
                >
                  Get started
                </Link>
              </div>
            </div>

            <div className="pb-16">
              <div className="group/row relative isolate ">
                <div className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
                  <div className="absolute inset-x-0 top-0 border-t border-black/5"></div>
                  <div className="absolute inset-x-0 top-2 border-t border-black/5"></div>
                  <div className="absolute inset-x-0 bottom-0 hidden border-b border-black/5 group-last/row:block"></div>
                  <div className="absolute inset-x-0 bottom-2 hidden border-b border-black/5 group-last/row:block"></div>
                </div>

                <div
                  className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8
                "
                >
                  {/* Logo */}
                  <div className="relative">
                    <Link
                      href="/"
                      className="flex items-center text-xl font-semibold text-gray-900"
                    >
                      {/* SVG icon */}
                      <svg
                        width="50"
                        height="34"
                        className="h-9 mt-8 overflow-visible group transition-all ease-in-out"
                      >
                        <g
                          opacity="1"
                          className="transition-transform group-hover:scale-110 duration-500 origin-[17px_17px] ease-in-out"
                        >
                          <path d="M19.5986 18.5005C18.7702 19.9354 16.9354 20.427 15.5005 19.5986C14.0656 18.7701 13.574 16.9354 14.4024 15.5005C15.2309 14.0656 17.0656 13.574 18.5005 14.4024C19.9354 15.2308 20.427 17.0656 19.5986 18.5005Z"></path>
                        </g>
                        <g
                          opacity="1"
                          className="transition-transform group-hover:scale-110 duration-600 origin-[17px_17px] ease-in-out"
                        >
                          <path d="M23.2324 10.2074C22.6801 11.1639 21.4569 11.4917 20.5003 10.9394C19.5437 10.3871 19.216 9.16395 19.7683 8.20736C20.3205 7.25078 21.5437 6.92303 22.5003 7.47531C23.4569 8.0276 23.7846 9.25078 23.2324 10.2074Z"></path>
                          <path d="M19.7683 25.7933C19.216 24.8367 19.5437 23.6135 20.5003 23.0612C21.4569 22.5089 22.6801 22.8367 23.2324 23.7933C23.7847 24.7498 23.4569 25.973 22.5003 26.5253C21.5437 27.0776 20.3206 26.7498 19.7683 25.7933Z"></path>
                          <path d="M26 19C24.8954 19 24 18.1046 24 17C24 15.8955 24.8954 15 26 15C27.1046 15 28 15.8955 28 17C28 18.1046 27.1046 19 26 19Z"></path>
                          <path d="M14.2324 25.7933C13.6801 26.7499 12.4569 27.0777 11.5003 26.5254C10.5437 25.9731 10.216 24.7499 10.7683 23.7933C11.3205 22.8367 12.5437 22.509 13.5003 23.0613C14.4569 23.6136 14.7846 24.8367 14.2324 25.7933Z"></path>
                          <path d="M10.7682 10.2073C10.216 9.25078 10.5437 8.0276 11.5003 7.47532C12.4569 6.92303 13.6801 7.25078 14.2323 8.20737C14.7846 9.16395 14.4569 10.3871 13.5003 10.9394C12.5437 11.4917 11.3205 11.1639 10.7682 10.2073Z"></path>
                          <path d="M8 19C6.89543 19 6 18.1045 6 17C6 15.8954 6.89543 15 8 15C9.10457 15 10 15.8954 10 17C10 18.1045 9.10457 19 8 19Z"></path>
                        </g>
                        <g
                          opacity="1"
                          className="transition-transform group-hover:scale-110 duration-700 origin-[17px_17px] ease-in-out"
                        >
                          <path d="M25.8662 3.6447C25.5901 4.12299 24.9785 4.28686 24.5002 4.01072C24.0219 3.73458 23.858 3.12299 24.1342 2.6447C24.4103 2.1664 25.0219 2.00253 25.5002 2.27867C25.9785 2.55481 26.1424 3.1664 25.8662 3.6447Z"></path>
                          <path d="M33 18C32.4477 18 32 17.5522 32 17C32 16.4477 32.4477 16 33 16C33.5522 16 34 16.4477 34 17C34 17.5522 33.5522 18 33 18Z"></path>
                          <path d="M31.3556 9.86619C30.8773 10.1424 30.2658 9.97846 29.9896 9.50017C29.7135 9.02187 29.8773 8.41028 30.3556 8.13414C30.8339 7.858 31.4455 8.02187 31.7217 8.50017C31.9978 8.97846 31.8339 9.59005 31.3556 9.86619Z"></path>
                          <path d="M30.3556 25.8662C29.8773 25.5901 29.7134 24.9785 29.9896 24.5002C30.2657 24.0219 30.8773 23.858 31.3556 24.1342C31.8339 24.4103 31.9978 25.0219 31.7216 25.5002C31.4455 25.9785 30.8339 26.1424 30.3556 25.8662Z"></path>
                          <path d="M16 33C16 32.4477 16.4477 32 17 32C17.5523 32 18 32.4477 18 33C18 33.5523 17.5523 34 17 34C16.4477 34 16 33.5523 16 33Z"></path>
                          <path d="M24.1341 31.3557C23.858 30.8774 24.0219 30.2658 24.5002 29.9896C24.9785 29.7135 25.5901 29.8774 25.8662 30.3557C26.1423 30.834 25.9785 31.4455 25.5002 31.7217C25.0219 31.9978 24.4103 31.834 24.1341 31.3557Z"></path>
                          <path d="M9.8662 31.3556C9.59005 31.8339 8.97846 31.9978 8.50017 31.7216C8.02188 31.4455 7.858 30.8339 8.13415 30.3556C8.41029 29.8773 9.02188 29.7134 9.50017 29.9896C9.97846 30.2657 10.1424 30.8773 9.8662 31.3556Z"></path>
                          <path d="M1 18C0.447715 18 -3.44684e-08 17.5523 0 17C3.44684e-08 16.4477 0.447715 16 1 16C1.55228 16 2 16.4477 2 17C2 17.5523 1.55228 18 1 18Z"></path>
                          <path d="M3.6447 25.8662C3.1664 26.1424 2.55481 25.9785 2.27867 25.5002C2.00253 25.0219 2.1664 24.4103 2.6447 24.1342C3.12299 23.858 3.73458 24.0219 4.01072 24.5002C4.28686 24.9785 4.12299 25.5901 3.6447 25.8662Z"></path>
                          <path d="M2.6447 9.8662C2.1664 9.59005 2.00253 8.97846 2.27867 8.50017C2.55481 8.02188 3.1664 7.858 3.6447 8.13415C4.12299 8.41029 4.28686 9.02188 4.01072 9.50017C3.73458 9.97846 3.12299 10.1424 2.6447 9.8662Z"></path>
                          <path d="M16 1C16 0.447715 16.4477 -4.87226e-08 17 0C17.5523 4.87226e-08 18 0.447715 18 1C18 1.55228 17.5523 2 17 2C16.4477 2 16 1.55228 16 1Z"></path>
                          <path d="M8.13415 3.6447C7.858 3.16641 8.02188 2.55482 8.50017 2.27867C8.97846 2.00253 9.59005 2.16641 9.8662 2.6447C10.1424 3.12299 9.97846 3.73458 9.50017 4.01072C9.02188 4.28687 8.41029 4.12299 8.13415 3.6447Z"></path>
                        </g>
                      </svg>

                      {/* Logo text */}
                      <div className="py-3 group/item">
                        {/* Top-left */}
                        <svg
                          viewBox="0 0 15 15"
                          aria-hidden="true"
                          className="absolute -top-0 -left-2 size-[15px] fill-black/10"
                        >
                          <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                        </svg>

                        {/* Top-right */}
                        <svg
                          viewBox="0 0 15 15"
                          aria-hidden="true"
                          className="absolute -top-0 right-10 size-[15px] fill-black/10"
                        >
                          <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                        </svg>

                        <div className="font-medium text-gray-950 mt-8">
                          Radiant
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div
                    className="col-span-2 lg:col-span-4 lg:col-start-3 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4 lg:pt-6"
                  >
                    <div>
                      <h3 className="text-sm font-medium text-gray-950/50">
                        Product
                      </h3>
                      <ul className="mt-6 space-y-4 text-sm">
                        <li>
                          <a
                            href="/pricing"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Pricing
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Analysis
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            API
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-950/50">
                        Company
                      </h3>
                      <ul className="mt-6 space-y-4 text-sm">
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Careers
                          </a>
                        </li>
                        <li>
                          <a
                            href="/blog"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="/company"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Company
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-950/50">
                        Support
                      </h3>
                      <ul className="mt-6 space-y-4 text-sm">
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Help center
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Community
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-950/50">
                        Company
                      </h3>
                      <ul className="mt-6 space-y-4 text-sm">
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Terms of service
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="font-medium text-gray-950 hover:text-gray-950/75"
                          >
                            Privacy policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between relative isolate py-3">
                {/* Background lines */}
                <div className="absolute inset-y-0 left-1/2 -z-10 w-screen -translate-x-1/2">
                  <div className="absolute inset-x-0 top-0 border-t border-black/5"></div>
                  <div className="absolute inset-x-0 top-2 border-t border-black/5"></div>
                  <div className="absolute inset-x-0 bottom-0 border-b border-black/5"></div>
                  <div className="absolute inset-x-0 bottom-2 border-b border-black/5"></div>
                </div>

                {/* Left Text */}
                <div className="relative py-3">
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -top-3 -left-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -top-3 -right-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -bottom-3 -left-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -bottom-3 -right-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <div className="text-sm text-gray-950">
                    © 2025 Radiant Inc.
                  </div>
                </div>

                {/* Right icons */}
                <div className="flex items-center gap-8 py-3 relative">
                  {/* Corner SVGs */}
                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -top-3 -left-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -top-3 -right-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -bottom-3 -left-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  <svg
                    viewBox="0 0 15 15"
                    aria-hidden="true"
                    className="absolute size-[15px] fill-black/10 -bottom-3 -right-2"
                  >
                    <path d="M8 0H7V7H0V8H7V15H8V8H15V7H8V0Z" />
                  </svg>

                  {/* Social icons */}
                  <a
                    target="_blank"
                    aria-label="Facebook"
                    className="text-gray-950 hover:text-gray-700"
                    href="https://facebook.com"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path d="M16 8.05C16 3.603 12.418 0 8 0S0 3.604 0 8.05c0 4.016 2.926 7.346 6.75 7.95v-5.624H4.718V8.05H6.75V6.276c0-2.017 1.194-3.131 3.022-3.131.875 0 1.79.157 1.79.157v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.51h2.219l-.355 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.95z" />
                    </svg>
                  </a>

                  <a
                    target="_blank"
                    aria-label="X"
                    className="text-gray-950 hover:text-gray-700"
                    href="https://x.com"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path d="M12.6 0h2.454l-5.36 6.778L16 16h-4.937l-3.867-5.594L2.771 16H.316l5.733-7.25L0 0h5.063l3.495 5.114L12.6 0z" />
                    </svg>
                  </a>

                  <a
                    target="_blank"
                    aria-label="LinkedIn"
                    className="text-gray-950 hover:text-gray-700"
                    href="https://linkedin.com"
                  >
                    <svg
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="size-4"
                    >
                      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
                    </svg>
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
