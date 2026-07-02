"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

export default function FAQItem({
    question,
    answer,
    isOpen,
    onClick,
}: FAQItemProps) {
    return (
        <div
            className="
            overflow-hidden
            rounded-[28px]
            border
            border-[#D6A45C]/15
            bg-[#111111]
            transition-all
            duration-300
            hover:border-[#D6A45C]/40
        "
        >
            <button
                onClick={() => {
                    console.log("FAQ item clicked:");
                    onClick()
                }}
                className="
                flex
                w-full
                items-center
                justify-between
                px-8
                py-7
                text-left
            "
            >
                <h3 className="pr-3 2xl:pr-6 font-medium text-white text-lg 2xl:text-xl">
                    {question}
                </h3>

                <div
                    className={`
                    flex
                    h-8 2xl:h-11
                    w-8 2xl:w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    transition-all
                    duration-300 cursor-pointer
                    ${isOpen
                            ? "bg-[#D6A45C] text-black"
                            : "border border-[#D6A45C]/30 text-[#D6A45C]"
                        }
                `}
                >
                    {isOpen ? <Minus /> : <Plus />}
                </div>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: "auto",
                            opacity: 1,
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.35,
                        }}
                    >
                        <div className="border-t border-[#D6A45C]/10 px-4 2xl:px-8 pb-4 2xl:pb-8 pt-3 2xl:pt-6 text-sm 2xl:text-base">
                            <p className="leading-8 text-gray-400">
                                {answer}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}