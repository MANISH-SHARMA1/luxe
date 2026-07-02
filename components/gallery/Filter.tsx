"use client";

const filters = [
    "All",
    "Hair",
    "Makeup",
    "Skin",
    "Nails",
    "Bridal",
];

interface GalleryFilterProps {
    active: string;
    setActive: (value: string) => void;
}

export default function Filter({
    active,
    setActive,
}: GalleryFilterProps) {
    return (
        <div className="mt-7 2xl:mt-14 flex justify-center">
            <div className="flex flex-wrap items-center gap-3 rounded-full border border-[#D6A45C]/20 bg-[#111111]/80 p-2 backdrop-blur-xl">

                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActive(filter)}
                        className={`rounded-full px-8 py-3 text-sm font-medium transition-all duration-300
              ${active === filter
                                ? "bg-[#D6A45C] text-black shadow-[0_0_20px_rgba(214,164,92,.45)]"
                                : "text-gray-300 hover:bg-[#D6A45C]/10 hover:text-[#D6A45C]"
                            }`}
                    >
                        {filter}
                    </button>
                ))}

            </div>
        </div>
    );
}