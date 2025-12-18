function Solutions() {
  return (
    <section className="bg-blue-600 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <span className="inline-block px-6 py-2 bg-white text-gray-900 text-sm font-medium rounded-full mb-6">
            Solutions
          </span>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Our Trust OS Helps You Collect UGC, Generate AI Content, Analyze Trust Gaps, and Boost Conversions.
          </h2>
          
          <p className="mt-6 text-lg text-blue-100 leading-relaxed">
            Collect authentic customer proof, create AI-driven visuals, audit your product pages, and display 
            trust where it converts best — all inside one unified Trust OS.
            <br />
            Build credibility and increase sales with automation, not manual effort.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1 - UGC Collection */}
          <div className="bg-blue-500/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30">
            {/* Icon */}
            <div className="h-40 flex items-center justify-center mb-6">
              <svg className="w-32 h-32 text-blue-300/50" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 80 L20 40 L35 40 L35 80" />
                <path d="M40 80 L40 30 L55 30 L55 80" />
                <path d="M60 80 L60 50 L75 50 L75 80" />
                <line x1="15" y1="20" x2="45" y2="50" strokeWidth="3" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">UGC Collection</h3>
            <p className="text-blue-100 mb-6">
              Collect customer proof from WhatsApp, Instagram, email, and your store — all in one place.
            </p>
            
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-blue-200 transition-colors flex items-center gap-1">
                  • WhatsApp UGC Import <span className="ml-1">→</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-200 transition-colors flex items-center gap-1">
                  • Instagram UGC Pull <span className="ml-1">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Card 2 - AI UGC Creation */}
          <div className="bg-blue-500/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30">
            {/* Icon - Currency symbols */}
            <div className="h-40 flex items-center justify-center mb-6 relative">
              <svg className="w-40 h-32 text-blue-300/50" viewBox="0 0 160 100" fill="none">
                {/* Connecting lines */}
                <path d="M40 60 Q80 20 120 60" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M40 60 Q80 80 120 60" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" />
                
                {/* Euro circle */}
                <circle cx="40" cy="60" r="20" fill="#3b82f6" stroke="currentColor" strokeWidth="2" />
                <text x="40" y="66" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">€</text>
                
                {/* Pound circle */}
                <circle cx="80" cy="30" r="20" fill="#3b82f6" stroke="currentColor" strokeWidth="2" />
                <text x="80" y="36" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">£</text>
                
                {/* Dollar circle */}
                <circle cx="120" cy="60" r="20" fill="#3b82f6" stroke="currentColor" strokeWidth="2" />
                <text x="120" y="66" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">$</text>
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">AI UGC Creation</h3>
            <p className="text-blue-100 mb-6">
              Turn raw customer photos into premium brand visuals with AI — no shoots needed.
            </p>
            
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-blue-200 transition-colors flex items-center gap-1">
                  • Lifestyle AI Photos <span className="ml-1">→</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-200 transition-colors flex items-center gap-1">
                  • Before/After Transformations <span className="ml-1">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Card 3 - Trust Intelligence */}
          <div className="bg-blue-500/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30 relative overflow-hidden">
            {/* Background "Zero" text */}
            <div className="absolute top-8 right-0 text-[120px] font-bold text-blue-400/20 leading-none select-none pointer-events-none" style={{ fontStyle: 'italic' }}>
              Zero
            </div>
            
            {/* Icon placeholder */}
            <div className="h-40 flex items-center justify-center mb-6 relative z-10">
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 relative z-10">Trust Intelligence</h3>
            <p className="text-blue-100 mb-6 relative z-10">
              Get a trust score for every product page and see what's hurting conversions.
            </p>
            
            <ul className="space-y-2 relative z-10">
              <li>
                <a href="#" className="text-white hover:text-blue-200 transition-colors flex items-center gap-1">
                  • PDP Trust Audit <span className="ml-1">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Card 4 - Display Widgets */}
          <div className="bg-blue-500/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30">
            {/* Shield Icon */}
            <div className="h-40 flex items-center justify-center mb-6">
              <div className="relative">
                <svg className="w-24 h-28 text-blue-400/40" viewBox="0 0 80 96" fill="currentColor">
                  <path d="M40 0L0 16v32c0 24 16 44 40 48 24-4 40-24 40-48V16L40 0z" />
                </svg>
                <svg className="w-8 h-8 text-blue-300/60 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <rect x="5" y="11" width="14" height="10" rx="2" />
                  <circle cx="12" cy="16" r="1" />
                  <path d="M8 11V7a4 4 0 118 0v4" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">Display Widgets</h3>
            <p className="text-blue-100 mb-6">
              Set a time-limit on sales to create urgency — making your customers take action sooner.
            </p>
            
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-blue-200 transition-colors flex items-center gap-1">
                  • Review Cards <span className="ml-1">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Card 5 - Trust Automation */}
          <div className="bg-blue-500/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30">
            {/* 99.9% with line graph */}
            <div className="h-40 flex flex-col items-center justify-center mb-6">
              <span className="text-5xl font-bold text-blue-300/50">99.9%</span>
              <svg className="w-full h-8 mt-2" viewBox="0 0 200 30" fill="none">
                <path d="M0 25 Q50 25 100 15 T200 20" stroke="rgba(255,255,255,0.3)" strokeWidth="2" fill="none" />
                <circle cx="200" cy="20" r="3" fill="white" />
              </svg>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">Trust Automation</h3>
            <p className="text-blue-100 mb-6">
              Reduce abandoned carts and increase basket values by setting a target for free delivery.
            </p>
            
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-blue-200 transition-colors flex items-center gap-1">
                  • Auto-Publish Rules <span className="ml-1">→</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-blue-200 transition-colors flex items-center gap-1">
                  • Workflow Triggers <span className="ml-1">→</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Card 6 - Custom Trust Blocks */}
          <div className="bg-blue-500/50 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30">
            {/* 24/7 with gauge */}
            <div className="h-40 flex items-center justify-center mb-6 relative">
              {/* Gauge arc */}
              <svg className="w-40 h-24" viewBox="0 0 160 80" fill="none">
                {/* Gauge marks */}
                {[...Array(12)].map((_, i) => {
                  const angle = -180 + (i * 15);
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 80 + 60 * Math.cos(rad);
                  const y1 = 70 + 60 * Math.sin(rad);
                  const x2 = 80 + 70 * Math.cos(rad);
                  const y2 = 70 + 70 * Math.sin(rad);
                  return (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                  );
                })}
              </svg>
              {/* Phone icon */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              {/* 24/7 text */}
              <span className="absolute bottom-0 text-4xl font-bold text-blue-300/50">24/7</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">Custom Trust Blocks</h3>
            <p className="text-blue-100 mb-6">
              Highlight any trust element your brand needs with fully customizable blocks.
            </p>
            
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white hover:text-blue-200 transition-colors flex items-center gap-1">
                  • Custom Messaging <span className="ml-1">→</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-16">
          <a 
            href="#audit" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get Free Trust Audit
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a 
            href="#shopify" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-blue-500 text-white font-semibold rounded-full border-2 border-blue-400 hover:bg-blue-400 transition-all hover:-translate-y-0.5"
          >
            Add to Shopify
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Solutions;

