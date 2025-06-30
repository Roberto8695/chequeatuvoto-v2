"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardType {
  title: string;
  team?: string;
  src: string;
  slug?: string;
  partido?: string;
}

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const CardContent = (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-48 md:h-64 w-full transition-all duration-300 ease-out cursor-pointer group",
          hovered !== null && hovered !== index && "blur-sm "
        )}
      >
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-3 px-3 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="w-full">
            <div className="text-sm md:text-lg font-bold bg-clip-text text-white leading-tight">
              {card.title}
            </div>
            {card.team && (
              <div className="text-xs md:text-sm font-bold bg-clip-text text-white leading-tight -mt-0.5">
                {card.team}
              </div>
            )}
            {card.slug && (
              <div className="text-xs text-white/80 mt-1 flex items-center">
                Ver más
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    );

    // Si tiene slug, envolver en Link, sino devolver solo el contenido
    if (card.slug) {
      return (
        <Link href={`/candidatos/${card.slug}`} className="block">
          {CardContent}
        </Link>
      );
    }

    return CardContent;
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 max-w-full mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={`${card.title}-${card.slug || index}`}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
