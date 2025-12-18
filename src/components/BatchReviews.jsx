function BatchReviews() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="max-w-lg">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Need multiple reviews at once?
            </h2>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Our platform supports bulk generation of 1,000+ customized reviews for enterprise 
              users, saving you time and ensuring consistency.
            </p>
            <a 
              href="#explore" 
              className="mt-8 inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore more
            </a>
          </div>

          {/* Right Side - UI Mockup */}
          <div className="hidden lg:block">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
              
              {/* Top Bar */}
              <div className="flex items-center justify-end gap-3 p-4 border-b border-gray-100">
                <div className="w-16 h-8 bg-gradient-to-r from-red-200 to-orange-200 rounded-lg"></div>
                <div className="w-20 h-8 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-lg"></div>
                <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg">
                  Generate Batch Reviews
                </button>
              </div>

              {/* Gradient Content Area */}
              <div 
                className="h-64 lg:h-72"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 30%, #93c5fd 60%, #dbeafe 85%, #f0f9ff 100%)'
                }}
              ></div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BatchReviews;

