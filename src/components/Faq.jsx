import React, { useState } from 'react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I start a video meeting?',
      answer: 'To start a meeting, log in to your account, click on "Start Meeting", and share the meeting link with participants.',
    },
    {
      question: 'Can I join a meeting without an account?',
      answer: 'Yes, you can join a meeting as a guest by clicking on the meeting link. However, hosts need an account to start a meeting.',
    },
    {
      question: 'How do I share my screen during a meeting?',
      answer: 'Click on the "Share Screen" button in the meeting controls and select the screen, window, or browser tab you want to share.',
    },
    {
      question: 'Is my video call secure?',
      answer: 'Yes, all meetings are encrypted using end-to-end security to ensure privacy and safety.',
    },
    {
      question: 'Can I record a meeting?',
      answer: 'Yes, the host can enable recording. Once recorded, the file will be available for download after the meeting.',
    },
    {
      question: 'How many participants can join a call?',
      answer: 'Our free plan supports up to 10 participants, while the premium plan allows up to 100 participants.',
    },
    {
      question: 'What devices and browsers are supported?',
      answer: 'Our platform works on desktops, tablets, and mobile devices. We recommend using Chrome, Firefox, or Edge for the best experience.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Have questions about our video conferencing app? Find answers below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-black">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-base mt-9">
          Still have questions?{' '}
          <a href="#" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline">
            Contact us
          </a>{' '}
          for personalized assistance.
        </p>
      </div>
    </section>
  );
}

export default Faq;
