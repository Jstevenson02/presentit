"use client";

import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { exampleCards } from "@/constants";
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
    <section className='mb-6'>
      <Carousel
        className=''
        unselectable='on'
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {exampleCards.map((card, index) => (
            <>
              <CarouselItem key={index} className='flex aspect-square items-center justify-center'>
                <Image
                  className='max-h-full'
                  src={card.image}
                  alt={card.label}
                  width={999}
                  height={0}
                />
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
        <CarouselPrevious className='ml-14' />
        <CarouselNext className='mr-14' />
      </Carousel>
    </section>
  );
}
