import React from 'react';
import { EmblaCarouselType } from 'embla-carousel';

export interface useDotCarousel {
  emblaApi: EmblaCarouselType | undefined;
  autoPlayInterval?: number;
}

export const useDotCarousel = ({ emblaApi, autoPlayInterval }: useDotCarousel) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const onDotButtonClick = React.useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = React.useCallback((emblaApi: EmblaCarouselType | undefined) => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi || !autoPlayInterval) return;

    const autoPlay = setInterval(() => {
      emblaApi.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(autoPlay);
  }, [emblaApi, autoPlayInterval]);

  return {
    selectedIndex,
    onDotButtonClick,
  };
};
