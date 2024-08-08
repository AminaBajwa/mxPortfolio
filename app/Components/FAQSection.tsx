
"use client"
import React, { useState } from 'react';

interface FAQProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
      <button
        type="button"
        className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
        onClick={toggleAnswer}
      >
        <span className="flex text-lg font-semibold text-black">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-400 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${isOpen ? 'block' : 'hidden'}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Explore answers to common queries about our services.
          </p>
        </div>
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <FAQItem
            question="How to create an account?"
            answer="A step-by-step guide to creating an account on our platform. Learn more."
          />
          <FAQItem
            question="How can I make payment using PayPal?"
            answer="Instructions on how to make payments securely through PayPal. Learn more."
          />
          <FAQItem
            question="Can I cancel my plan?"
            answer="Information on how to cancel your subscription plan. Learn more."
          />
          <FAQItem
            question="How can I reach support?"
            answer="Steps to contact our support team for assistance. Learn more."
          />
        </div>
        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{' '}
          <a
            href="#"
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support team
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
