function TrustProblem() {
  return (
    <section className="bg-white py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="max-w-lg">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Shoppers don't know what's real anymore.
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              TWOM is the Trust OS for ecommerce—helping brands collect, 
              generate, analyze, and automate trust across their entire 
              shopping journey.
            </p>
          </div>

          {/* Right Side - Floating UI Elements */}
          <div className="relative h-[500px] lg:h-[600px] hidden lg:block">
            
            {/* Diagonal lines background pattern */}
            <div className="absolute inset-0 opacity-5">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="diagonalLinesLight" patternUnits="userSpaceOnUse" width="20" height="20" patternTransform="rotate(45)">
                    <line x1="0" y1="0" x2="0" y2="20" stroke="#6366f1" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonalLinesLight)" />
              </svg>
            </div>

            {/* Large gray card background */}
            <div className="absolute top-12 left-20 w-72 h-96 bg-gray-200 rounded-2xl shadow-lg">
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="cardLines" patternUnits="userSpaceOnUse" width="10" height="10" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="10" stroke="#9ca3af" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#cardLines)" />
                </svg>
              </div>
            </div>

            {/* Top right - Profile card with green lines */}
            <div className="absolute top-8 right-0 w-56 bg-white rounded-xl shadow-xl p-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-400"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-2 bg-teal-400 rounded-full w-full"></div>
                  <div className="h-2 bg-teal-400 rounded-full w-3/4"></div>
                </div>
              </div>
              {/* Surfboard image */}
              <div className="mt-4">
                <img 
                  src="https://images.unsplash.com/photo-1531722569936-825d3dd91b15?w=200&h=150&fit=crop" 
                  alt="Surfboard" 
                  className="w-24 h-20 object-cover rounded-lg ml-auto"
                />
              </div>
              <div className="mt-2 space-y-1.5">
                <div className="h-2 bg-teal-400 rounded-full w-full"></div>
                <div className="h-2 bg-teal-400 rounded-full w-2/3"></div>
              </div>
            </div>

            {/* Middle left - Person hiking card with stars */}
            <div className="absolute top-52 left-4 w-44 bg-white rounded-2xl shadow-xl overflow-hidden rotate-[-3deg]">
              <img 
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=200&h=180&fit=crop" 
                alt="Person hiking" 
                className="w-full h-36 object-cover"
              />
              <div className="p-3">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-4 h-4 text-white drop-shadow-md" fill="currentColor" viewBox="0 0 20 20" style={{filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))'}}>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-2 space-y-1.5">
                  <div className="h-2 bg-blue-600 rounded-full w-full"></div>
                  <div className="h-2 bg-blue-600 rounded-full w-4/5"></div>
                </div>
              </div>
            </div>

            {/* Blue bar under hiking card */}
            <div className="absolute top-[420px] left-16 w-32 space-y-2">
              <div className="h-3 bg-blue-600 rounded-full w-full"></div>
              <div className="h-3 bg-blue-600 rounded-full w-2/3"></div>
            </div>

            {/* Star rating badge - yellow stars on blue */}
            <div className="absolute top-80 right-4 bg-blue-600 rounded-xl px-5 py-3 shadow-xl">
              <div className="flex gap-1">
                {[1,2,3].map(i => (
                  <svg key={i} className="w-8 h-8 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                {[4,5].map(i => (
                  <svg key={i} className="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Bottom - Add to cart section */}
            <div className="absolute bottom-8 right-0 w-72 bg-white rounded-xl shadow-xl p-4">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full w-full mb-1.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
                </div>
                <button className="bg-blue-600 text-white text-sm font-bold px-5 py-3 rounded-lg whitespace-nowrap">
                  ADD TO CART
                </button>
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" 
                  alt="Customer" 
                  className="w-14 h-14 rounded-lg object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustProblem;

