'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do I book a trip?",
    answer: "You can browse our available trips on the Search Trips page, select your preferred destination, and click 'Book Now'. Follow the simple booking process to secure your spot."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer flexible cancellation policies. You can cancel up to 48 hours before your trip start date for a full refund. Cancellations within 48 hours may incur a small processing fee."
  },
  {
    question: "How do I earn and use points?",
    answer: "You earn 10 points for every dollar spent on bookings. Points can be redeemed for discounts on future trips. Visit your Points page to track your balance and see redemption options."
  },
  {
    question: "Are the travel guides free?",
    answer: "Yes! All our travel guides are completely free and available to all users. They contain expert tips, local insights, and recommendations to help you make the most of your destination."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and digital payment methods like Apple Pay and Google Pay."
  },
  {
    question: "Can I modify my booking after confirmation?",
    answer: "Yes, you can modify your booking up to 72 hours before the trip start date. Changes may be subject to availability and pricing differences. Contact our support team for assistance."
  },
  {
    question: "Do you offer group discounts?",
    answer: "We offer special group rates for bookings of 6 or more people. Contact our support team with your group details to receive a custom quote."
  },
  {
    question: "What if I need assistance during my trip?",
    answer: "We provide 24/7 customer support during your trip. You'll receive emergency contact information in your booking confirmation, and our team is always ready to help."
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
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
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
              <div className="px-6 pb-4">
                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}