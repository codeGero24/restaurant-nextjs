'use client';

import type { animation } from '@/types/animation';

import React from 'react';
import clsx from 'clsx';
import Section from '@/components/layout/Section';
import AnimationWrapper from '@/components/layout/AnimationWrapper';
import CardTestimonial from '@/components/ui/Card/Testimonial';
import Carousel from '@/components/Carousel';

// - import useReviewsStore from '@stores/reviews.store';

// - Mock
import { TESTIMONIAL } from '@/mock/testimonial';

interface TestimonialProps {
  animation?: animation;
  className?: string;
}

export default function Testimonial({
  className,
  animation = 'animate-slide-in-up',
}: TestimonialProps) {
  // - const { reviews } = useReviewsStore();

  const reviews = TESTIMONIAL;

  const classNameCustom = React.useMemo(() => {
    const defaultSpacing = 'px-4 pb-5 md:pb-12 lg:pb-20';
    return clsx('grid select-none grid-cols-1 items-center', defaultSpacing, className);
  }, [className]);

  return (
    <AnimationWrapper as='section' className={classNameCustom} animation={animation}>
      <Section.Header title='Testimonial' subtitle='Our Clients Say!!!' />
      <Section.Content>
        {reviews.length > 0 && (
          <Carousel data={[...reviews]} Slide={CardTestimonial} autoPlayInterval={5000} />
        )}
      </Section.Content>
    </AnimationWrapper>
  );
}
