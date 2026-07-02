"use client";

import { useState } from "react";
import FAQItem from "./FaqItem";

const faqs = [
    {
        question: "Do I need to book an appointment in advance?",
        answer:
            "We highly recommend booking in advance to secure your preferred date and stylist. Walk-ins are welcome based on availability.",
    },
    {
        question: "Which beauty products do you use?",
        answer:
            "We use only premium professional brands that are safe, skin-friendly, and suitable for different hair and skin types.",
    },
    {
        question: "How long does a bridal makeup session take?",
        answer:
            "A complete bridal makeup session usually takes between 2–3 hours depending on the selected package and hairstyle.",
    },
    {
        question: "Can I customize my beauty package?",
        answer:
            "Absolutely! We offer personalized packages where you can combine hair, makeup, skincare, spa, and nail services.",
    },
    {
        question: "Are your salon tools properly sanitized?",
        answer:
            "Yes. Hygiene is our highest priority. Every tool is sterilized after each client, and all workstations are sanitized regularly.",
    },
];

export default function FaqAccordion() {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const toggleFAQ = (index: number) => {
        console.log("Clicked FAQ index:", index);
        setActiveIndex((prev) => (prev === index ? -1 : index));
    };

    return (
        <div className="space-y-5">
            {faqs.map((faq, index) => (
                <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={activeIndex === index}
                    onClick={() => {
                        console.log("FAQ item clicked:", index);
                        toggleFAQ(index)
                    }}
                />
            ))}
        </div>
    );
}