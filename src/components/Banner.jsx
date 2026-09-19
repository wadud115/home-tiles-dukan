
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f5f0]">
      <div className="mx-auto grid min-h-[550px] max-w-7xl grid-cols-1 items-center lg:grid-cols-2 ">
        
        {/* Left Content */}
        <div className="relative z-10 px-6 py-16 sm:px-10 lg:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-pink-600">
            Premium Tiles Collection
          </p>

          <h1 className="max-w-xl text-5xl font-extrabold leading-tight text-gray-900 sm:text-6xl">
            Discover Your{" "}
            <span className="text-pink-600">
              Perfect Aesthetic
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
            Transform your space with our premium collection of tiles.
            From modern minimalism to timeless classics, find the perfect
            tile for your dream space.
          </p>

          {/* Button */}
          <Link
            href="/all-tiles"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-pink-600 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pink-700 hover:shadow-xl"
          >
            Browse Now
            <span className="text-xl">→</span>
          </Link>

          {/* Features */}
          <div className="mt-12 grid max-w-xl grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <div className="text-2xl">💎</div>
              <p className="mt-2 text-sm font-medium text-gray-700">
                Premium Quality
              </p>
            </div>

            <div>
              <div className="text-2xl">🚚</div>
              <p className="mt-2 text-sm font-medium text-gray-700">
                Fast Delivery
              </p>
            </div>

            <div>
              <div className="text-2xl">🌿</div>
              <p className="mt-2 text-sm font-medium text-gray-700">
                Eco Friendly
              </p>
            </div>

            <div>
              <div className="text-2xl">🛡️</div>
              <p className="mt-2 text-sm font-medium text-gray-700">
                Trusted Brand
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-[400px] w-full lg:h-[550px]">
          <Image
            src="/banner.png"
            alt="Premium tile collection"
            fill
            priority
            className="object-cover"
          />

          {/* Soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f5f0] via-transparent to-transparent lg:w-1/3" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

