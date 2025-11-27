import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Snapshot from "./components/Snapshot";
import Sales from "./components/Sales";
import Outreach from "./components/Outreach";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen border bg-gradient-to-br bg-linear-115 from-[#fff1be] from-[28%] via-[#ee87cb] via-[70%] to-[#b060ff] sm:bg-linear-145 rounded-3xl pt-12">
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>

      {/* Partner Logos (Outside gradient) */}
      <div className="mx-auto max-w-2xl lg:max-w-7xl mt-10 px-6 lg:px-8">
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

      {/* Snapshot Section */}
      <Snapshot />

      {/* Sales Section */}
      <Sales />

      {/* Outreach Section */}
      <Outreach />

      {/* Testimonial Section */}
      <Testimonial />
    </>
  );
}
