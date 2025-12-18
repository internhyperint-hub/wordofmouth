function Testimonial() {
  return (
    <section className="bg-white py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="relative bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 rounded-3xl px-8 py-16 lg:px-16 lg:py-24 overflow-hidden">
          
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dotPattern" patternUnits="userSpaceOnUse" width="20" height="20">
                  <circle cx="10" cy="10" r="1.5" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </div>

          <div className="relative text-center max-w-4xl mx-auto">
            {/* Quote */}
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white leading-relaxed">
              Using TWOM has transformed our approach to trust and sales. We've seen a{' '}
              <span className="font-bold">35% increase</span> in conversion rates!
            </blockquote>

            {/* Author */}
            <div className="mt-10 flex items-center justify-center gap-4">
              {/* Avatar placeholder */}
              <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-lg">Ravi Kapoor</p>
                <p className="text-white/80 text-sm">CEO</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonial;

