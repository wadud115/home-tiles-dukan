const Marquee = () => {
  const items = [
    "New Arrivals: Ceramic Blue Tile",
    "Weekly Feature: Modern Geometric Patterns",
    "Join the Community",
    "Premium Quality Tiles",
    "Fast & Safe Delivery",
  ];

  return (
    <section className="mt-6 overflow-hidden bg-pink-600 py-3 sm:mt-8 sm:py-4">
      <div className="flex w-max animate-marquee">

        {/* First Set */}
        <div className="flex items-center">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="mx-4 whitespace-nowrap text-xs font-semibold tracking-wide text-white sm:mx-8 sm:text-sm md:text-base">
                {item}
              </span>

              <span className="text-base text-white/70 sm:text-xl">
                ✦
              </span>
            </div>
          ))}
        </div>

        {/* Duplicate Set */}
        <div className="flex items-center">
          {items.map((item, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex items-center"
            >
              <span className="mx-4 whitespace-nowrap text-xs font-semibold tracking-wide text-white sm:mx-8 sm:text-sm md:text-base">
                {item}
              </span>

              <span className="text-base text-white/70 sm:text-xl">
                ✦
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Marquee;