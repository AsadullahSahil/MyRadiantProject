"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Testimonial() {
  const testimonials = [
    {
      name: "Tina Yards",
      role: "VP of Sales, Protocol",
      quote:
        "Thanks to Radiant, we’re finding new leads that we never would have found with legal methods.",
      image: "https://radiant.tailwindui.com/testimonials/tina-yards.jpg",
    },
    {
      name: "Conor Neville",
      role: "Head of Customer Success, TaxPal",
      quote:
        "Radiant made undercutting all of our competitors an absolute breeze.",
      image: "https://radiant.tailwindui.com/testimonials/conor-neville.jpg",
    },
    {
      name: "Amy Chase",
      role: "Head of GTM, Pocket",
      quote:
        "We closed a deal in literally a few minutes because we knew their exact budget.",
      image: "https://radiant.tailwindui.com/testimonials/amy-chase.jpg",
    },
    {
      name: "Veronica Winton",
      role: "CSO, Planeteria",
      quote:
        "We’ve managed to put two of our main competitors out of business in 6 months.",
      image: "https://radiant.tailwindui.com/testimonials/veronica-winton.jpg",
    },
    {
      name: "Dillon Lenora",
      role: "VP of Sales, Detax",
      quote: "I was able to replace 80% of my team with RadiantAI bots.",
      image: "https://radiant.tailwindui.com/testimonials/dillon-lenora.jpg",
    },
    {
      name: "Harriet Arron",
      role: "Account Manager, Commit",
      quote:
        "I’ve smashed all my targets without having to speak to a lead in months.",
      image: "https://radiant.tailwindui.com/testimonials/harriet-arron.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < testimonials.length - 4) setIndex(index + 1);
  };
  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  
  const cardWidth = 384; // your card width
  const gap = 24; // gap between cards

  

  return (
    <section className="overflow-hidden py-32 bg-white dark:bg-gray-950">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          {/* Heading */}
          <h2 className="font-mono text-sm font-semibold tracking-widest text-gray-500 uppercase dark:text-gray-400">
            What everyone is saying
          </h2>
          <h3 className="mt-2 text-4xl font-medium tracking-tight text-gray-950 dark:text-white sm:text-6xl">
            Trusted by professionals.
          </h3>

          {/* Cards Row */}
          <div className="relative mt-16">
            <motion.div
              className="flex gap-6 w-max"
              animate={{ x: -index * (cardWidth + gap) }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              {testimonials.map((item, i) => {
                const isVisible = i >= index && i < index + 3;
                const isEdge = i === index || i === index + 3; // half visible edges

                const opacity = isVisible ? 1 : 0.6;

                return (
                  <motion.div
                    key={i}
                    className="relative flex flex-col justify-end overflow-hidden rounded-3xl aspect-[3/4] shrink-0 w-96"
                    animate={{ opacity }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black from-[43.75%] sm:from-[25%] ring-1 ring-gray-950/10 ring-inset"></div>
                    <figure className="relative p-8">
                      <blockquote>
                        <p className="text-lg text-white">“{item.quote}”</p>
                      </blockquote>
                      <figcaption className="mt-6 border-t border-white/20 pt-6">
                        <p className="text-sm font-medium text-white">
                          {item.name}
                        </p>
                        <p className="text-sm font-medium bg-gradient-to-r from-yellow-200 via-pink-400 to-purple-500 bg-clip-text text-transparent">
                          {item.role}
                        </p>
                      </figcaption>
                    </figure>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <div className="mt-16">
            <div className="mx-auto max-w-2xl lg:max-w-7xl">
              <div className="flex justify-between">
                <div>
                  <p className="max-w-sm text-sm/6 text-gray-600">
                    Join the best sellers in the business and start using
                    Radiant to hit your targets today.
                  </p>
                  <div className="mt-2">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 text-sm leading-6 font-medium text-pink-600"
                    >
                      Get started
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 10a.75.75 0 0 1 .75-.75h12.59l-2.1-1.95a.75.75 0 1 1 1.02-1.1l3.5 3.25a.75.75 0 0 1 0 1.1l-3.5 3.25a.75.75 0 1 1-1.02-1.1l2.1-1.95H2.75A.75.75 0 0 1 2 10Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Dots */}
                <div className="mt-10 flex justify-end gap-3">
                  {Array.from({ length: testimonials.length }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setIndex(idx)}
                      className={`h-3 w-3 rounded-full transition-all ${
                        idx === index
                          ? "bg-gray-900 dark:bg-white scale-110"
                          : "bg-gray-300 dark:bg-gray-600"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
