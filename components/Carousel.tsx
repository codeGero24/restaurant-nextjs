'use client';
import React from 'react';
import { clsx } from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import Button from '@/components/ui/Button';
import { useDotCarousel } from '@/hooks/useDotCarousel';

interface CarouselProps<T> {
  data: T[];
  Slide: React.ComponentType<{ data: T; isActive: boolean }>;
  autoPlayInterval?: number;
}

const Carousel = <T,>({ data, Slide, autoPlayInterval = 0 }: CarouselProps<T>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const { selectedIndex, onDotButtonClick } = useDotCarousel({
    emblaApi,
    autoPlayInterval,
  });

  return (
    <>
      {/* Slides */}
      <div className='overflow-hidden' ref={emblaRef}>
        <div className='flex'>
          {data.map((item, index) => (
            <div
              key={`slide-${index}`}
              className='flex min-w-full px-4 md:min-w-[50%] lg:min-w-[33%]'
            >
              <Slide data={item} isActive={index === selectedIndex} />
            </div>
          ))}
        </div>
      </div>
      {/* Pagination */}
      <div className='mt-4 flex justify-center gap-2'>
        {data.map((_, index) => (
          <Button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx(
              'h-4 w-4 rounded-full border border-gray-300',
              index === selectedIndex ? 'bg-primary' : 'bg-white'
            )}
          ></Button>
        ))}
      </div>
    </>
  );
};

export default Carousel;
