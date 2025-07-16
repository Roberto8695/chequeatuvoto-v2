"use client";
import React, { useState, useEffect } from "react";
import { useMotionTemplate, motion, MotionValue, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Interfaces para mejorar el tipado
interface CardPatternProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  randomString: string;
  customColor?: string;
}

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const EvervaultCard = ({
  text,
  imageSrc,
  imageAlt,
  className,
  customColor,
  customText,
  children,
}: {
  text?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  customColor?: string;
  customText?: string;
  children?: React.ReactNode;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [randomString, setRandomString] = useState("");

  useEffect(() => {
    const str = generateRandomString(1500, customText);
    setRandomString(str);
  }, [customText]);

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500, customText);
    setRandomString(str);
  }

  return (
    <div
      className={cn(
        "p-0.5 bg-transparent  flex items-center justify-center w-full h-full relative",
        className
      )}
    >
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern
          mouseX={mouseX}
          mouseY={mouseY}
          randomString={randomString}
          customColor={customColor}
        />
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          {children ? (
            <div className="w-full h-full bg-transparent dark:bg-gray-900/95 backdrop-blur-sm rounded-2xl">
              {children}
            </div>
          ) : (
            <div className="relative  h-40 w-[290px]  sm:w-[305px]  lg:w-[310px] rounded-full flex items-center justify-center text-white font-bold text-4xl">
              <div className="absolute w-32 h-32   bg-black/[0.6]  dark:bg-black/[0.8]  blur-sm rounded-full" />
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt || "Card image"}
                  width={100}
                  height={100}
                  className="z-20 object-contain "
                />
              ) : (
                <span className="dark:text-white text-black z-20">{text}</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseX, mouseY, randomString, customColor }: CardPatternProps) {
  const maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div className="pointer-events-none">
      {/* Fondo estático con color y letras */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-30"
        style={{ backgroundColor: customColor || '#ff151b' }}
      />
      <div className="absolute inset-0 rounded-2xl opacity-20">
        <p className="absolute inset-x-0 text-xs h-full w-96 break-words whitespace-pre-wrap text-white font-mono font-bold">
          {randomString}
        </p>
      </div>
      
      {/* Efectos de hover */}
      <div className="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
        style={{ ...style, backgroundColor: customColor || '#ff151b' }}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        style={style}
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </motion.div>
    </div>
  );
}

export const generateRandomString = (length: number, customText?: string) => {
  let result = "";
  const baseText = customText ? `${customText} ` : "APB SUMATE ";
  for (let i = 0; i < length; i++) {
    result += baseText[i % baseText.length];
  }
  return result;
};

export const Icon = ({ className, ...rest }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
