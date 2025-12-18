function Hero() {
  return (
    <section className="relative min-h-[700px] bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 overflow-hidden">
      {/* Diagonal lines pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              <span className="text-white">Where Trust</span>
              <br />
              <span className="text-amber-400">Drives</span>
              <br />
              <span className="text-amber-400">Commerce</span>
            </h1>
            
            <p className="mt-6 text-lg text-blue-100 leading-relaxed max-w-lg">
              TWOM is the Trust OS for ecommerce—helping brands collect, generate, 
              analyze, and automate trust across their entire shopping journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#audit" 
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get Free Trust Audit
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="#shopify" 
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-blue-500 text-white font-semibold rounded-xl border-2 border-blue-400 hover:bg-blue-400 transition-all hover:-translate-y-0.5"
              >
                Add to Shopify
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Floating Review Cards */}
          <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
            
            {/* Card 1 - Top Right - Dog Photo */}
            <div className="absolute top-0 right-0 w-64 bg-white rounded-2xl shadow-2xl p-3 rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop" 
                  alt="Happy corgi" 
                  className="w-full h-40 object-cover rounded-xl"
                />
              </div>
              <div className="mt-3 flex items-center gap-1 px-1">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="mt-2 space-y-1.5 px-1">
                <div className="h-2.5 bg-blue-100 rounded-full w-full"></div>
                <div className="h-2.5 bg-blue-100 rounded-full w-3/4"></div>
              </div>
            </div>

            {/* Card 2 - Middle - Woman Photo with OMG */}
            <div className="absolute top-28 left-0 w-72 bg-white rounded-2xl shadow-2xl overflow-hidden -rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex">
                <img 
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=350&fit=crop" 
                  alt="Happy customer" 
                  className="w-32 h-44 object-cover"
                />
                <div className="flex-1 p-4">
                  <div className="flex gap-0.5">
                    {[1,2,3,4].map(i => (
                      <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <p className="mt-3 font-bold text-gray-900">OMG</p>
                  <div className="mt-2 h-2 bg-blue-600 rounded-full w-full"></div>
                  <div className="mt-1.5 space-y-1.5">
                    <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-4/5"></div>
                  </div>
                </div>
              </div>
              <div className="px-4 pb-3 flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Card 3 - Bottom - Review with Photos */}
            <div className="absolute bottom-0 right-8 w-80 bg-white rounded-2xl shadow-2xl p-4 rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="flex items-start gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" 
                  alt="Reviewer" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                />
                <div className="flex-1">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <svg key={i} className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-2 space-y-1.5">
                    <div className="h-2 bg-teal-100 rounded-full w-full"></div>
                    <div className="h-2 bg-teal-100 rounded-full w-4/5"></div>
                    <div className="h-2 bg-teal-100 rounded-full w-3/5"></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop" 
                  alt="Product 1" 
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div className="relative w-20 h-20">
                  <img 
                    src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=150&h=150&fit=crop" 
                    alt="Product 2" 
                    className="w-full h-full rounded-xl object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-600/70 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">+2</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

