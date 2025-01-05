import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-[#30363d] last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white group-hover:text-sky-400 transition-colors">{question}</span>
        <ChevronDown className={`w-5 h-5 text-sky-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mb-6' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FAQSection() {
  const faqs = [
    {
      question: "What prerequisites do I need?",
      answer: "Basic understanding of programming concepts and Linux commands is recommended. We'll guide you through the rest!"
    },
    {
      question: "How long does it take to complete the courses?",
      answer: "Course duration varies based on your learning pace. Most students complete the basic track in 3-4 months."
    },
    {
      question: "Do you provide certification vouchers?",
      answer: "Yes, we offer certification vouchers for select cloud certifications to eligible students."
    }
  ];

  return (
    <section className="bg-[#0d1117] py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 text-center text-glow">
          Frequently Asked Questions
        </h2>
        <div className="bg-[rgba(22,27,34,0.8)] backdrop-blur-sm rounded-xl border border-[#30363d] divide-y divide-[#30363d] p-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}