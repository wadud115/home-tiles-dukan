
const Marquee = () => {
  const items = [
    "Premium Quality Tiles",
    "Modern & Elegant Designs",
    "Marble Collection",
    "Wooden Tiles",
    "Luxury Tiles",
    "Fast & Safe Delivery",
    "Perfect Tiles For Every Space",
  ];

  return (
    <section className="overflow-hidden bg-pink-600 py-4 mt-8">
      <div className="flex w-max animate-marquee">
        {/* First set */}
        <div className="flex items-center">
          {items.map((item, index) => (
            <div key={index} className="flex items-center">
              <span className="mx-8 whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-white sm:text-base">
                {item}
              </span>

              <span className="text-xl text-white/70">✦</span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center">
          {items.map((item, index) => (
            <div key={`duplicate-${index}`} className="flex items-center">
              <span className="mx-8 whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-white sm:text-base">
                {item}
              </span>

              <span className="text-xl text-white/70">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;

