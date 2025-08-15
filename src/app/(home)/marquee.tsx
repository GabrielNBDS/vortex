'use client';

import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    img: "/mclaren.png",
  },
  {
    img: "/ferrari.png",
  },
  {
    img: "/red-bull.png",
  },
  {
    img: "/mercedes.png",
  },
  {
    img: "/alpine.png",
  },
  {
    img: "/aston-martin.png",
  },
  {
    img: "/williams.png",
  },
  {
    img: "/rb-vcarb.png",
  },
  {
    img: "/haas.png",
  },
  {
    img: "/kick-sauber.png",
  },
];


const ReviewCard = ({ img
}: {
  img: string
}) => {
  return (
    <Image src={img} alt="" height={36} width={36} />
  );
};

export function MarqueeSection() {
  return (
    <div className="relative border-y py-4 flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.img} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
