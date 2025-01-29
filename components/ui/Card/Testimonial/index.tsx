import type { ForwardedRef } from 'react';
import type { testimonial } from '@/types/render.data';
import Image from 'next/image';
import Icon from '@/components/ui/Icon';
import Card, { getStyle } from '@/components/ui/Card';

interface CardTestimonialProps {
  data: testimonial;
  isActive: boolean;
  className?: string;
  ref?: ForwardedRef<HTMLDivElement>;
}

export default function CardTestimonial({
  data,
  isActive,
  ref,
  className = '',
}: CardTestimonialProps) {
  const { review, name, profession, img } = data;
  const classActive = isActive ? 'is--active' : '';
  return (
    <Card.Root
      ref={ref}
      className={getStyle('wrapper', [
        'hover-none w-full border border-geyser',
        className,
        classActive,
      ])}
    >
      <Icon name='quote-right' className='icon md' />

      <p>{review}</p>
      <div className='flex gap-4'>
        <Image
          src={img.src}
          alt={img.alt}
          width={54}
          height={54}
          className='rounded-full aspect-square'
        />
        <div>
          <h5>{name}</h5>
          <p>{profession}</p>
        </div>
      </div>
    </Card.Root>
  );
}
