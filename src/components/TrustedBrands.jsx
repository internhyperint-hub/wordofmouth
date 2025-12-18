function TrustedBrands() {
  const brands = [
    { name: 'BrandA', icon: 'flower' },
    { name: 'BrandB', icon: 'flower' },
    { name: 'BrandC', icon: 'flower' },
    { name: 'BrandD', icon: 'flower' },
    { name: 'BrandE', icon: 'flower' },
    { name: 'BrandF', icon: 'flower' },
    { name: 'BrandG', icon: 'flower' },
    { name: 'BrandH', icon: 'flower' },
    { name: 'BrandI', icon: 'sparkle' },
  ];

  const FlowerIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2C12 2 14 6 14 8C14 10 12 12 12 12C12 12 10 10 10 8C10 6 12 2 12 2Z" />
      <path d="M12 22C12 22 14 18 14 16C14 14 12 12 12 12C12 12 10 14 10 16C10 18 12 22 12 22Z" />
      <path d="M2 12C2 12 6 10 8 10C10 10 12 12 12 12C12 12 10 14 8 14C6 14 2 12 2 12Z" />
      <path d="M22 12C22 12 18 10 16 10C14 10 12 12 12 12C12 12 14 14 16 14C18 14 22 12 22 12Z" />
      <path d="M4.93 4.93C4.93 4.93 8.1 6.52 9.17 7.59C10.24 8.66 12 12 12 12C12 12 10.24 10.24 9.17 9.17C8.1 8.1 4.93 4.93 4.93 4.93Z" />
      <path d="M19.07 19.07C19.07 19.07 15.9 17.48 14.83 16.41C13.76 15.34 12 12 12 12C12 12 13.76 13.76 14.83 14.83C15.9 15.9 19.07 19.07 19.07 19.07Z" />
      <path d="M4.93 19.07C4.93 19.07 8.1 17.48 9.17 16.41C10.24 15.34 12 12 12 12C12 12 10.24 13.76 9.17 14.83C8.1 15.9 4.93 19.07 4.93 19.07Z" />
      <path d="M19.07 4.93C19.07 4.93 15.9 6.52 14.83 7.59C13.76 8.66 12 12 12 12C12 12 13.76 10.24 14.83 9.17C15.9 8.1 19.07 4.93 19.07 4.93Z" />
    </svg>
  );

  const SparkleIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3v2m0 14v2M5.636 5.636l1.414 1.414m9.9 9.9l1.414 1.414M3 12h2m14 0h2M5.636 18.364l1.414-1.414m9.9-9.9l1.414-1.414" strokeLinecap="round" />
    </svg>
  );

  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <h2 className="text-center text-2xl lg:text-3xl font-semibold text-gray-900 mb-12">
          Trusted by Leading 100+ Indian D2C Brands
        </h2>

        {/* Brand Logos Grid */}
        <div className="flex flex-col items-center gap-8">
          {/* First Row - 5 brands */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-20 gap-y-6">
            {brands.slice(0, 5).map((brand, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors"
              >
                {brand.icon === 'sparkle' ? <SparkleIcon /> : <FlowerIcon />}
                <span className="text-lg font-semibold">{brand.name}</span>
              </div>
            ))}
          </div>

          {/* Second Row - 4 brands */}
          <div className="flex flex-wrap justify-center items-center gap-x-12 lg:gap-x-20 gap-y-6">
            {brands.slice(5, 9).map((brand, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors"
              >
                {brand.icon === 'sparkle' ? <SparkleIcon /> : <FlowerIcon />}
                <span className="text-lg font-semibold">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedBrands;

