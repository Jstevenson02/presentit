"use client";

import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { exampleCards } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselPlugin() {
  const plugin = React.useRef(Autoplay({ delay: 6000, stopOnInteraction: true }));

  return (
    <section className='sm:mb-12'>
      <Carousel
        plugins={[plugin.current]}
        className='w-full'
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {exampleCards.map((card, index) => (
            <CarouselItem key={index} className='md:basis-1/2 '>
              <Image src={card.image} alt={card.label} width={820} height={412} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='ml-14' />
        <CarouselNext className='mr-14' />
      </Carousel>
    </section>
  );
}
