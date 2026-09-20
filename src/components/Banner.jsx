import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f5f0]">
      <div className="mx-auto grid min-h-[auto] max-w-7xl grid-cols-1 items-center lg:min-h-[550px] lg:grid-cols-2">

       
        <div className="relative z-10 px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

         
          <p className="mb-3 text-xs font-semibold uppercase tracking-[3px] text-pink-600 sm:mb-4 sm:text-sm sm:tracking-[4px]">
            Premium Tiles Collection
          </p>

         
          <h1 className="max-w-xl text-3xl font-extrabold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Discover Your{" "}
            <span className="text-pink-600">
              Perfect Aesthetic
            </span>
          </h1>

        
          <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base sm:leading-7 lg:text-lg">
            Transform your space with our premium collection of tiles.
            From modern minimalism to timeless classics, find the perfect
            tile for your dream space.
          </p>

         
          <Link
            href="/all-tiles"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-pink-700 hover:shadow-xl sm:mt-8 sm:px-7 sm:py-3.5 sm:text-base"
          >
            Browse Now
            <span className="text-lg sm:text-xl">→</span>
          </Link>

         
          <div className="mt-8 grid grid-cols-2 gap-5 sm:mt-12 sm:grid-cols-4 sm:gap-6">

            <div>
              <div className="text-xl sm:text-2xl">💎</div>
              <p className="mt-1 text-xs font-medium text-gray-700 sm:mt-2 sm:text-sm">
                Premium Quality
              </p>
            </div>

            <div>
              <div className="text-xl sm:text-2xl">🚚</div>
              <p className="mt-1 text-xs font-medium text-gray-700 sm:mt-2 sm:text-sm">
                Fast Delivery
              </p>
            </div>

            <div>
              <div className="text-xl sm:text-2xl">🌿</div>
              <p className="mt-1 text-xs font-medium text-gray-700 sm:mt-2 sm:text-sm">
                Eco Friendly
              </p>
            </div>

            <div>
              <div className="text-xl sm:text-2xl">🛡️</div>
              <p className="mt-1 text-xs font-medium text-gray-700 sm:mt-2 sm:text-sm">
                Trusted Brand
              </p>
            </div>

          </div>
        </div>

   
        <div className="relative h-[280px] w-full sm:h-[380px] lg:h-[550px]">

          <Image
            src="/banner.png"
            alt="Premium tile collection"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />

          {/* Soft Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#f8f5f0]/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#f8f5f0] lg:via-transparent lg:to-transparent" />
        </div>

      </div>
    </section>
  );
};

export default Banner;