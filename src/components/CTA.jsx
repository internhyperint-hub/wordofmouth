function CTA() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="relative">
          
          {/* Light blue background card */}
          <div className="bg-blue-100 rounded-3xl p-8 lg:p-16 ml-auto lg:w-[75%]">
            <div className="lg:ml-auto lg:w-[60%] lg:pl-8">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                Upgrade your store's trust in under{' '}
                <span className="text-blue-600">7 minutes</span>
              </h2>
              
              <a 
                href="#get-started" 
                className="mt-8 inline-flex items-center gap-2 px-6 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all hover:-translate-y-0.5 hover:shadow-lg group"
              >
                Get started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Blue overlapping rectangle */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-[45%] h-[350px] bg-blue-600 rounded-2xl shadow-2xl">
            {/* Placeholder for image/video */}
          </div>

        </div>
      </div>
    </section>
  );
}

export default CTA;

