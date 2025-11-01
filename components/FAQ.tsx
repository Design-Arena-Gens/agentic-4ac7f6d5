'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What is Serpzilla?',
      answer: 'Serpzilla is a comprehensive link building platform that connects SEO professionals with high-quality websites for backlink opportunities. We offer guest posts, niche edits, and link insertions across thousands of verified domains.',
    },
    {
      question: 'How do you ensure link quality?',
      answer: 'All domains in our network are manually reviewed and verified. We check for real traffic, organic rankings, quality content, and proper SEO metrics using tools like Ahrefs, Semrush, and Majestic.',
    },
    {
      question: 'What are the payment terms?',
      answer: 'We offer flexible payment options including pay-per-link and monthly subscriptions. Payment is required before order fulfillment. We accept major credit cards and PayPal.',
    },
    {
      question: 'How long does it take to get links published?',
      answer: 'Delivery times vary by link type. Niche edits typically take 3-7 days, while guest posts can take 7-14 days depending on editorial review requirements.',
    },
    {
      question: 'Can I see examples before ordering?',
      answer: 'Yes! You can browse our domain inventory with detailed metrics including DR, traffic, niche, and sample articles. Register for a free account to access our full marketplace.',
    },
    {
      question: 'What if I\'m not satisfied with a link?',
      answer: 'We stand behind our quality. If a link doesn\'t meet the agreed specifications, we\'ll work with you to resolve the issue or provide a replacement link.',
    },
  ]

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Got questions? We&apos;ve got answers
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-primary transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
