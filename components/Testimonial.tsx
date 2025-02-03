'use client';

import type { animation } from '@/types/animation';

import React from 'react';
import clsx from 'clsx';
import Section from '@/components/layout/Section';
import AnimationWrapper from '@/components/layout/AnimationWrapper';
import CardTestimonial from '@/components/ui/Card/Testimonial';
import Carousel from '@/components/Carousel';
import Loader from '@/components/ui/Loader';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useGetReviews } from '@/hooks/queries/reviews';

import {
  fetchReviewsFailure,
  fetchReviewsSuccess,
  selectReviews,
} from '@/store/slices/reviwesSlice';

// - Mock
import { me } from '@/mock/testimonial';

interface TestimonialProps {
  animation?: animation;
  className?: string;
}

const Testimonial = ({
  className,
  animation = 'animate-slide-in-up',
}: TestimonialProps) => {
  const { reviews, status } = useAppSelector(selectReviews);
  const dispatch = useAppDispatch();
  const { data, isError, isLoading } = useGetReviews();

  React.useEffect(() => {
    if (isLoading || reviews.length > 0) return;

    if (isError) {
      dispatch(fetchReviewsFailure());
    } else if (data?.length && reviews.length === 0) {
      dispatch(fetchReviewsSuccess(data));
    }
  }, [dispatch, isError, isLoading, data, reviews.length]);

  const classNameCustom = React.useMemo(() => {
    const defaultSpacing = 'px-4 pb-5 md:pb-12 lg:pb-20';
    return clsx('grid select-none grid-cols-1 items-center', defaultSpacing, className);
  }, [className]);

  return (
    <>
      {status !== 'success' && <Loader className='h-[300px] py-12' />}
      {status === 'success' && (
        <AnimationWrapper as='section' className={classNameCustom} animation={animation}>
          <Section.Header title='Testimonial' subtitle='Our Clients Say!!!' />
          <Section.Content>
            {reviews.length > 0 && (
              <Carousel
                data={[me, ...reviews]}
                Slide={CardTestimonial}
                autoPlayInterval={5000}
              />
            )}
          </Section.Content>
        </AnimationWrapper>
      )}
    </>
  );
};

export default React.memo(Testimonial);
