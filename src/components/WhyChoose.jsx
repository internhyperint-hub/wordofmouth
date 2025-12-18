function WhyChoose() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
          Why Choose Word of Mouth?
        </h2>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          
          {/* Yellow Card - Collect Real Social Proof */}
          <div className="bg-amber-400 rounded-3xl p-8 lg:p-10 min-h-[400px] lg:min-h-[500px]">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
              Collect Real Social Proof Automatically
            </h3>
            <p className="mt-3 text-lg text-gray-800">
              Effortlessly gather authentic user-generated content to boost credibility.
            </p>
          </div>

          {/* Blue Card - AI-Gen Content */}
          <div className="bg-blue-600 rounded-3xl p-8 lg:p-10 min-h-[400px] lg:min-h-[500px]">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              AI-Gen.content that sells
            </h3>
            <p className="mt-3 text-lg text-blue-100">
              Leverage AI to create compelling content that drives sales.
            </p>
          </div>

          {/* Orange Card - Spot Trust Gaps */}
          <div className="bg-orange-500 rounded-3xl p-8 lg:p-10 min-h-[400px] lg:min-h-[500px]">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Spot Trust Gaps Before They Cost You Sales
            </h3>
            <p className="mt-3 text-lg text-white/90">
              Identify and address trust issues proactively to maintain customer confidence.
            </p>
          </div>

          {/* Green Card - Show Trust */}
          <div className="bg-green-500 rounded-3xl p-8 lg:p-10 min-h-[400px] lg:min-h-[500px]">
            <h3 className="text-2xl lg:text-3xl font-bold text-white">
              Show Trust Where It Converts Best
            </h3>
            <p className="mt-3 text-lg text-white/90">
              Display trust signals strategically to maximize conversion rates.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;

