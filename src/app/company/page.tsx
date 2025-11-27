import CountUp from "../components/CountUp";

const teamMembers = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    image: "https://radiant.tailwindui.com/team/michael-foster.jpg",
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    image: "https://radiant.tailwindui.com/team/dries-vincent.jpg",
  },
  {
    name: "Celeste Vandermark",
    role: "Front-end Developer",
    image: "https://radiant.tailwindui.com/team/celeste-vandermark.jpg",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    image: "https://radiant.tailwindui.com/team/courtney-henry.jpg",
  },
  {
    name: "Marcus Eldridge",
    role: "Director of Product",
    image: "https://radiant.tailwindui.com/team/marcus-eldridge.jpg",
  },
  {
    name: "Whitney Francis",
    role: "Copywriter",
    image: "https://radiant.tailwindui.com/team/whitney-francis.jpg",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    image: "https://radiant.tailwindui.com/team/leonard-krasner.jpg",
  },
  {
    name: "Nolan Sheffield",
    role: "Principal Designer",
    image: "https://radiant.tailwindui.com/team/nolan-sheffield.jpg",
  },
  {
    name: "Emily Selman",
    role: "VP, User Experience",
    image: "https://radiant.tailwindui.com/team/emily-selman.jpg",
  },
];

const individualInvestors = [
  {
    name: "Kristin Watson",
    role: "TechNexus Ventures",
    image:
      "https://radiant.tailwindui.com/individual-investors/kristin-watson.jpg",
  },
  {
    name: "Emma Dorsey",
    role: "Innovate Capital Partners",
    image:
      "https://radiant.tailwindui.com/individual-investors/emma-dorsey.jpg",
  },
  {
    name: "Alicia Bell",
    role: "FutureWave Investments",
    image:
      "https://radiant.tailwindui.com/individual-investors/alicia-bell.jpg",
  },
  {
    name: "Jenny Wilson",
    role: "SynergyTech Equity",
    image:
      "https://radiant.tailwindui.com/individual-investors/jenny-wilson.jpg",
  },
  {
    name: "Anna Roberts",
    role: "NextGen Horizons",
    image:
      "https://radiant.tailwindui.com/individual-investors/anna-roberts.jpg",
  },
  {
    name: "Benjamin Russel",
    role: "Pioneer Digital Ventures",
    image:
      "https://radiant.tailwindui.com/individual-investors/benjamin-russel.jpg",
  },
];

export default function Company() {
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
      </div>

      {/* Hero */}
      <div className="mt-16 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h1 className="text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
            Helping companies generate revenue.
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
            We’re on a mission to transform revenue organizations by harnessing
            vast amounts of illegally acquired customer data.
          </p>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-lg">
              <h2 className="text-2xl font-medium tracking-tight">
                Our mission
              </h2>
              <p className="mt-6 text-sm/6 text-gray-600">
                At Radiant, we are dedicated to transforming the way revenue
                organizations source and close deals. Our mission is to provide
                our customers with an unfair advantage over both their
                competitors and potential customers through insight and
                analysis. We’ll stop at nothing to get you the data you need to
                close a deal.
              </p>
              <p className="mt-8 text-sm/6 text-gray-600">
                We’re customer-obsessed — putting the time in to build a
                detailed financial picture of every one of our customers so that
                we know more about your business than you do. We are in this
                together, mostly because we are all implicated in large-scale
                financial crime. In our history as a company, we’ve never lost a
                customer, because if any one of us talks, we all go down.
              </p>
            </div>

            <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                {/* image 1 */}
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    className="block size-full object-cover"
                    src="https://radiant.tailwindui.com/company/1.jpg"
                  />
                </div>
                {/* image 2 */}
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                  <img
                    alt=""
                    className="block size-full object-cover"
                    src="https://radiant.tailwindui.com/company/2.jpg"
                  />
                </div>
                {/* image 3 */}
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    className="block size-full object-cover"
                    src="https://radiant.tailwindui.com/company/3.jpg"
                  />
                </div>
                {/* image 4 */}
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                  <img
                    alt=""
                    className="block size-full object-cover"
                    src="https://radiant.tailwindui.com/company/4.jpg"
                  />
                </div>
              </div>
            </div>

            <div className="max-lg:mt-16 lg:col-span-1">
              <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                The Numbers
              </h2>
              <hr className="mt-6 border-t border-gray-200"></hr>
              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                  <dt className="text-sm/6 text-gray-600">Raised</dt>
                  <dd className="order-first text-6xl font-medium tracking-tight">
                    $
                    <CountUp
                      start={100_000_000}
                      end={150_000_000}
                      duration={3}
                    />
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                  <dt className="text-sm/6 text-gray-600">Companies</dt>
                  <dd className="order-first text-6xl font-medium tracking-tight">
                    <CountUp start={15_000} end={30_000} duration={3} />
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                  <dt className="text-sm/6 text-gray-600">Deals Closed</dt>
                  <dd className="order-first text-6xl font-medium tracking-tight">
                    <CountUp
                      start={1000000}
                      end={1500000}
                      allowDecimal={true}
                    />
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2">
                  <dt className="text-sm/6 text-gray-600">Leads Generated</dt>
                  <dd className="order-first text-6xl font-medium tracking-tight">
                    <CountUp
                      start={150_000_000}
                      end={200_000_000}
                      duration={3}
                    />
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>

      {/* Meet The Team */}
      <div className="mt-32 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
            Meet the team
          </h2>
          <h3 className="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
            Founded by an all-star team.
          </h3>
          <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
            Radiant is founded by two of the best sellers in the business and
            backed by investors who look the other way.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="max-w-lg">
              <p className="text-sm/6 text-gray-600">
                Years ago, while working as sales associates at rival companies,
                Thomas, Ben, and Natalie were discussing a big client they had
                all been competing for. Joking about seeing the terms of each
                other’s offers, they had an idea: what if they shared data to
                win deals and split the commission behind their companies’
                backs? It turned out to be an incredible success, and that idea
                became the kernel for Radiant.
              </p>
              <p className="mt-8 text-sm/6 text-gray-600">
                Today, Radiant transforms revenue organizations by harnessing
                illegally acquired customer and competitor data, using it to
                provide extraordinary leverage. More than 30,000 companies rely
                on Radiant to undercut their competitors and extort their
                customers, all through a single integrated platform.
              </p>
              <div className="mt-6">
                <a
                  className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-full border border-transparent bg-gray-950 shadow-md text-base font-medium whitespace-nowrap text-white data-disabled:bg-gray-950 data-disabled:opacity-40 data-hover:bg-gray-800"
                  data-headlessui-state=""
                  href="#"
                >
                  Join us
                </a>
              </div>
            </div>

            <div className="max-lg:order-first max-lg:max-w-lg">
              <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  className="block size-full object-cover"
                  src="https://radiant.tailwindui.com/company/5.jpg"
                />
              </div>
            </div>
          </div>

          <h3 className="mt-24 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
            The team
          </h3>
          <hr className="mt-6 border-t border-gray-200"></hr>

          <ul className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <li key={index} className="flex items-center gap-4">
                <img
                  alt={member.name}
                  src={member.image}
                  className="size-12 rounded-full"
                />
                <div className="text-sm/6">
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Investors */}
      <div className="mt-32 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
            Investors
          </h2>
          <h3 className="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
            Funded by industry-leaders.
          </h3>
          <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
            We are fortunate to be backed by the best investors in the industry
            — both literal and metaphorical partners in crime.
          </p>
          <h3 className="mt-24 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
            Venture Capital
          </h3>
          <hr className="mt-6 border-t border-gray-200"></hr>
          <ul
            role="list"
            className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            <li>
              <img
                alt="Remington Schwartz"
                className="h-14"
                src="https://radiant.tailwindui.com/investors/remington-schwartz.svg"
              />
              <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
                Remington Schwartz has been a driving force in the tech
                industry, backing bold entrepreneurs who explore grey areas in
                financial and privacy law. Their deep industry expertise and
                extensive political lobbying provide their portfolio companies
                with favorable regulation and direct access to lawmakers.
              </p>
            </li>
            <li>
              <img
                alt="Deccel"
                className="h-14"
                src="https://radiant.tailwindui.com/investors/deccel.svg"
              />
              <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
                Deccel has been at the forefront of innovation, investing in
                pioneering companies across various sectors, including
                technology, consumer goods, and healthcare. Their philosophy of
                ‘plausible deniability’ and dedication to looking the other way
                have helped produce some of the world’s most controversial
                companies.
              </p>
            </li>
          </ul>
          <h3 className="mt-24 font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
            Individual investors
          </h3>
          <hr className="mt-6 border-t border-gray-200"></hr>

          <ul className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {individualInvestors.map((member, index) => (
              <li key={index} className="flex items-center gap-4">
                <img
                  alt={member.name}
                  src={member.image}
                  className="size-12 rounded-full"
                />
                <div className="text-sm/6">
                  <h3 className="font-medium">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Careers */}
      <div className="my-32 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
            Careers
          </h2>
          <h3 className="mt-2 text-4xl font-medium tracking-tighter text-pretty text-gray-950 data-dark:text-white sm:text-6xl">
            Join our fully remote team.
          </h3>
          <p className="mt-6 max-w-3xl text-2xl font-medium text-gray-500">
            We work together from all over the world, mainly from locations
            without extradition agreements.
          </p>

          <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
            <div className="lg:max-w-2xl">
              <h3 className="font-mono text-xs/5 font-semibold tracking-widest text-gray-500 uppercase data-dark:text-gray-400">
                Open positions
              </h3>
              <div>
                <table className="w-full text-left">
                  <colgroup>
                    <col className="w-2/3" />
                    <col className="w-1/3" />
                    <col className="w-0" />
                  </colgroup>
                  <thead className="sr-only">
                    <tr>
                      <th scope="col">Title</th>
                      <th scope="col">Location</th>
                      <th scope="col">Read more</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={3}
                        className="px-0 pt-10 pb-0"
                      >
                        <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                          Engineering
                        </div>
                      </th>
                    </tr>
                    <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                      <td className="px-0 py-4">iOS Developer</td>
                      <td className="px-0 py-4 text-gray-600">Remote</td>
                      <td className="px-0 py-4 text-right">
                        <a
                          className="inline-flex items-center justify-center px-2 py-2 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                          data-headlessui-state=""
                          href="#"
                        >
                          View listing
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                      <td className="px-0 py-4">Backend Engineer</td>
                      <td className="px-0 py-4 text-gray-600">Remote</td>
                      <td className="px-0 py-4 text-right">
                        <a
                          className="inline-flex items-center justify-center px-2 py-2 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                          data-headlessui-state=""
                          href="#"
                        >
                          View listing
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                      <td className="px-0 py-4">Product Engineer</td>
                      <td className="px-0 py-4 text-gray-600">Remote</td>
                      <td className="px-0 py-4 text-right">
                        <a
                          className="inline-flex items-center justify-center px-2 py-2 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                          data-headlessui-state=""
                          href="#"
                        >
                          View listing
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <th
                        scope="colgroup"
                        colSpan={3}
                        className="px-0 pt-5 pb-0"
                      >
                        <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                          Design
                        </div>
                      </th>
                    </tr>
                    <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                      <td className="px-0 py-4">Principal Designer</td>
                      <td className="px-0 py-4 text-gray-600">Remote</td>
                      <td className="px-0 py-4 text-right">
                        <a
                          className="inline-flex items-center justify-center px-2 py-2 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                          data-headlessui-state=""
                          href="#"
                        >
                          View listing
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                      <td className="px-0 py-4">Designer</td>
                      <td className="px-0 py-4 text-gray-600">Remote</td>
                      <td className="px-0 py-4 text-right">
                        <a
                          className="inline-flex items-center justify-center px-2 py-2 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                          data-headlessui-state=""
                          href="#"
                        >
                          View listing
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                      <td className="px-0 py-4">Senior Designer</td>
                      <td className="px-0 py-4 text-gray-600">Remote</td>
                      <td className="px-0 py-4 text-right">
                        <a
                          className="inline-flex items-center justify-center px-2 py-2 rounded-lg border border-transparent shadow-sm ring-1 ring-black/10 text-sm font-medium whitespace-nowrap text-gray-950 data-disabled:bg-transparent data-disabled:opacity-40 data-hover:bg-gray-50"
                          data-headlessui-state=""
                          href="#"
                        >
                          View listing
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="relative flex aspect-square flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-[3/4]">
              <img
                alt=""
                className="absolute inset-0 object-cover"
                src="https://radiant.tailwindui.com/testimonials/veronica-winton.jpg"
              ></img>
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-10% to-transparent to-75% ring-1 ring-gray-950/10 ring-inset lg:from-25%"
              ></div>
              <figure className="relative p-10">
                <blockquote>
                  <p className="relative text-xl/7 text-white before:absolute before:-translate-x-full before:content-['“'] after:absolute after:content-['”']">
                    We've managed to put two of our main competitors out of
                    business in 6 months.
                  </p>
                </blockquote>
                <figcaption className="mt-6 border-t border-white/20 pt-6">
                  <p className="text-sm/6 font-medium text-white">
                    Veronica Winton
                  </p>
                  <p className="text-sm/6 font-medium">
                    <span
                      className="bg-gradient-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent"
                    >
                      CSO, Planeteria
                    </span>
                  </p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
