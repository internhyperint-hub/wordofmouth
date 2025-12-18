function TrustStats() {
  const stats = [
    { value: '50 K', label: 'Stores use TWOM' },
    { value: '40%', label: 'Drop in fake reviews' },
    { value: '3×', label: 'More UGC\ngenerated this year' },
    { value: '18-35%', label: 'CVR uplift this year' },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Inspire trust at first sight
          </h2>
          <p className="mt-6 text-lg lg:text-xl text-gray-600 italic leading-relaxed">
            When visitors don't know you yet, they want proof you're the real deal. Without that trust 
            factor, they're just a click away from your competition.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {/* Stat Pill */}
              <div className="relative overflow-hidden rounded-full px-6 py-8 lg:py-10" style={{
                background: 'linear-gradient(135deg, #6366f1 0%, #818cf8 40%, #a5b4fc 70%, #c7d2fe 100%)'
              }}>
                {/* Grain texture overlay */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}></div>
                <span className="relative text-3xl lg:text-4xl xl:text-5xl font-semibold text-white">
                  {stat.value}
                </span>
              </div>
              {/* Label */}
              <p className="mt-4 text-gray-700 font-medium whitespace-pre-line">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TrustStats;

