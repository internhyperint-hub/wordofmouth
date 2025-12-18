import { useState } from 'react';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How do I enhance reviews?',
      answer: 'We enhance your reviews by using AI to refine clarity, tone, and structure—while keeping the original meaning fully authentic.',
    },
    {
      question: 'What does your review analysis process include?',
      answer: 'Our review analysis process includes sentiment analysis, keyword extraction, authenticity verification, and actionable insights to help you understand customer feedback better.',
    },
    {
      question: 'How can I directly show reviews on my website?',
      answer: 'You can embed our customizable widgets directly on your product pages, homepage, or any landing page using a simple code snippet or our Shopify integration.',
    },
    {
      question: 'Is there a limit to how many reviews I can enhance?',
      answer: 'Our plans offer various limits based on your needs. Enterprise users get unlimited review enhancements with priority processing.',
    },
    {
      question: 'Where can I publish these enhanced reviews?',
      answer: 'Enhanced reviews can be published on your website, social media platforms, email campaigns, and any marketing materials to boost trust and conversions.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[350px_1fr] gap-12 lg:gap-20">
          
          {/* Left - Heading */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Frequently Asked<br />Questions
            </h2>
          </div>

          {/* Right - FAQ Accordion */}
          <div>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full py-6 flex items-start gap-6 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  {/* Number */}
                  <span className="text-2xl lg:text-3xl font-bold text-blue-600 min-w-[60px]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  
                  {/* Question & Answer */}
                  <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    
                    {/* Answer - shown when open */}
                    {openIndex === index && (
                      <p className="mt-3 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                  
                  {/* Chevron */}
                  <svg 
                    className={`w-6 h-6 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQ;

