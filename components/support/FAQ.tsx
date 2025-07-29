'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I book a trip?",
    answer: "You can book a trip by browsing our available destinations on the Search Trips page, selecting your preferred package, and following the booking process. You'll need to provide your travel dates, number of travelers, and payment information."
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "Yes, you can cancel or modify your booking up to 48 hours before your trip start date. Please visit the My Bookings page to manage your reservations. Cancellation fees may apply depending on the timing and trip type."
  },
  {
    question: "How do I earn and redeem points?",
    answer: "You earn points for every booking you make with us. Points can be redeemed for discounts on future trips or exclusive experiences. Check your Points page to see your current balance and available redemption options."
  },
  {
    question: "What is included in the trip packages?",
    answer: "Trip packages typically include accommodation, guided tours, and some meals. Specific inclusions vary by destination and package type. Check the trip details page for a complete list of what's included and excluded."
  },
  {
    question: "Do you offer travel insurance?",
    answer: "Yes, we offer comprehensive travel insurance options during the booking process. We highly recommend purchasing travel insurance to protect your investment and provide coverage for unexpected events."
  },
  {
    question: "What if I need to contact you during my trip?",
    answer: "We provide 24/7 customer support during your trip. You'll receive emergency contact information in your booking confirmation. You can also reach us through the contact information provided on this support page."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 2-3 months in advance for popular destinations and during peak travel seasons. However, we also offer last-minute deals for spontaneous travelers."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Payment plans are available for trips over $2,000."
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
              aria-expanded={openItems.includes(index)}
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform ${
                  openItems.includes(index) ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openItems.includes(index) && (
              <div className="px-4 pb-4">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}