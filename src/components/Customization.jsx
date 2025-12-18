function Customization() {
  const features = [
    {
      title: 'Brand Voice Personalization',
      description: "Tailor UGC and reviews to match your brand's tone, vocabulary, and communication style — automatically.",
      bgColor: 'bg-orange-50',
      circleColor: 'bg-orange-400',
    },
    {
      title: 'USP Highlighting',
      description: "AI identifies and highlights your brand's strongest trust factors such as quality, durability, delivery, safety, or sustainability.",
      bgColor: 'bg-blue-50',
      circleColor: 'bg-blue-500',
    },
    {
      title: 'Native Language Generation',
      description: 'Generate UGC and trust messages in regional Indian languages to boost authenticity and relevance for diverse audiences.',
      bgColor: 'bg-amber-50',
      circleColor: 'bg-amber-400',
    },
    {
      title: 'Trust Signal Distribution',
      description: 'Customize how reviews, ratings, UGC variations, and credibility elements are displayed across different product pages.',
      bgColor: 'bg-purple-50',
      circleColor: 'bg-purple-400',
    },
    {
      title: 'Product-Specific Customization',
      description: 'Differentiate trust messages for each product category — skincare, electronics, fashion, home goods, and more.',
      bgColor: 'bg-green-50',
      circleColor: 'bg-green-500',
    },
    {
      title: 'Regional & Cultural Adaptation',
      description: 'Adapt UGC, visuals, and trust messaging based on geography, audience behavior, and cultural buying patterns.',
      bgColor: 'bg-orange-100',
      circleColor: 'bg-orange-500',
    },
  ];

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-4xl">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
            Extensive Customization<br />Capabilities
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-gray-600 leading-relaxed">
            Empower your brand with AI-driven customization that adapts every trust signal to your identity, audience, and product category.
          </p>
          <p className="mt-2 text-lg lg:text-xl text-gray-600 leading-relaxed">
            Built to scale authenticity, credibility, and performance across your entire ecommerce ecosystem.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.bgColor} rounded-3xl p-8 min-h-[280px]`}
            >
              {/* Colored Circle */}
              <div className={`${feature.circleColor} w-16 h-16 rounded-full mb-8`}></div>
              
              {/* Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Customization;

