import type { Metadata } from 'next';

import Testimonial from '@/components/Testimonial';

export const metadata: Metadata = {
  title: 'Restoran - Testimonial',
  description: 'Benvenuti a Restoran, il miglior ristorante italiano in città',
};

export default function TestimonialPage() {
  return (
    <>
      <Testimonial className='py-12' />
    </>
  );
}
