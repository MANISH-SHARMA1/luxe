"use client";

import TestimonialCard from "./TestimonialCard";

export default function TestimonialsGrid() {
    return (
        <section className="relative mx-auto mt-16 max-w-7xl px-6">

            <div className="grid gap-8 lg:grid-cols-3">

                <TestimonialCard
                    image="/hair-style.png"
                    avatar="/hero.png"
                    name="Priya Sharma"
                    service="Hair Makeover"
                    review="Absolutely loved my hair transformation! The stylists understood exactly what I wanted and the results exceeded my expectations."
                />

                <TestimonialCard
                    image="/bridal-makeup.png"
                    avatar="/hero.png"
                    name="Ananya Verma"
                    service="Bridal Makeup"
                    review="The bridal makeup stayed flawless throughout my wedding. I received countless compliments and felt truly beautiful."
                />

                <TestimonialCard
                    image="/skin-care.png"
                    avatar="/hero.png"
                    name="Megha Iyer"
                    service="Skin Treatment"
                    review="The facial was incredibly relaxing. My skin looked brighter instantly and the entire experience felt luxurious."
                />

            </div>

        </section>
    );
}