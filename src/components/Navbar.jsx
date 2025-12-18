import { useState } from 'react';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[72px] flex items-center justify-between">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-blue-600">
          <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 8L10 24L16 12L22 24L28 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xl font-bold tracking-tight">
            Word<span className="font-medium">of mouth</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          <a href="#trust" className="px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Trust
          </a>
          
          {/* Pricing Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => toggleDropdown('pricing')}
            >
              Pricing
              <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {activeDropdown === 'pricing' && (
              <div className="absolute top-full left-0 mt-2 min-w-[180px] bg-white border border-gray-200 rounded-xl shadow-lg p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <a href="#starter" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg">Starter Plan</a>
                <a href="#pro" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg">Pro Plan</a>
                <a href="#enterprise" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg">Enterprise</a>
              </div>
            )}
          </div>

          {/* Resources Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => toggleDropdown('resources')}
            >
              Resources
              <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {activeDropdown === 'resources' && (
              <div className="absolute top-full left-0 mt-2 min-w-[180px] bg-white border border-gray-200 rounded-xl shadow-lg p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <a href="#blog" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg">Blog</a>
                <a href="#docs" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg">Documentation</a>
                <a href="#help" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg">Help Center</a>
              </div>
            )}
          </div>

          {/* Contact Dropdown */}
          <div className="relative">
            <button 
              className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-blue-600 transition-colors"
              onClick={() => toggleDropdown('contact')}
            >
              Contact
              <svg className="w-4 h-4 opacity-70" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {activeDropdown === 'contact' && (
              <div className="absolute top-full left-0 mt-2 min-w-[180px] bg-white border border-gray-200 rounded-xl shadow-lg p-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <a href="#sales" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg">Sales</a>
                <a href="#support" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg">Support</a>
                <a href="#partnerships" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600 rounded-lg">Partnerships</a>
              </div>
            )}
          </div>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <a href="#download" className="hidden md:block px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Download App
          </a>
          <a href="#login" className="px-4 py-2 text-[15px] font-medium text-gray-700 hover:text-blue-600 transition-colors border-l border-gray-200 ml-2 pl-6">
            Log in
          </a>
          <a href="#signup" className="ml-2 px-6 py-3 text-[15px] font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-600/30">
            Try it free
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
