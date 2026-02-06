"use client";

import { card, layout } from "../styles/mainStyles";

const textStyles = {
  pageTitle: "text-3xl font-bold text-gray-900 mb-4",
  question: "font-semibold text-gray-800",
  answer: "text-gray-700 mt-2",
  container: "max-w-3xl mx-auto  px-1 sm:px-6 lg:px-8  ",
  faqCard: "bg-gray-80 p-4 rounded-xl shadow-sm border border-gray-200",
};

const faqData = [
  {
    question: "Is this 2BHK flat near Ulsoor Metro Station?",
    answer: "Yes, the apartment is located close to Ulsoor Metro Station, making daily commute easy.",
  },
  {
    question: "Is the apartment semi-furnished?",
    answer: "Yes, this is a semi-furnished 2BHK flat with wardrobes in the rooms and a modular kitchen.",
  },
  {
    question: "Is parking available?",
    answer: "Yes, covered parking is available along with visitor parking.",
  },
  {
    question: "Is security available?",
    answer: "Yes, 24-hour security is available. It is a gated society.",
  },
  {
    question: "Is power backup available?",
    answer: "Yes, 24-hour power backup is available.",
  },
  {
    question: "Preferences? Are Bachelors allowed?",
    answer: "Family & female tenants are preferred.",
  },
  {
    question: "Are pets allowed?",
    answer: "Yes.",
  },
  {
    question: "Is Non-Vegetarian food allowed?",
    answer: "Yes.",
  },
  {
    question: "Is Lift available?",
    answer: "Yes.",
  },
  {
    question: "Is partying allowed?",
    answer: "Strictly NO. Quiet hours are applicable. Penalties apply for violations and repeated violations may lead to agreement termination.",
  },
  {
    question: "Any additional facilities?",
    answer: "Minimal gym facility is available.",
  },
  {
    question: "Any other info?",
    answer: "Ramakrishna Ashram and Ulsoor Lake are close by.",
  },
];

export default function FAQPage() {
  return (
     <main className={layout.page}>
      <div className={"bg-white rounded-2xl shadow-xl border border-gray-100 py-4 mb-1"}>
        <div className={textStyles.container}>
          <h1 className={textStyles.pageTitle}>
            FAQ – 2BHK Flat  for Rent in Ulsoor, Bangalore
          </h1>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className={textStyles.faqCard}>
                <p className={textStyles.question}>Q. {faq.question}</p>
                <p className={textStyles.answer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
