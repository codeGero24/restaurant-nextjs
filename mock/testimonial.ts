import type { testimonial } from '@/types/render.data';
import { genTestimonial } from '@/lib/generate.data';

export const review =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

export const profession = 'Designation';

export const me = {
  id: 999,
  review,
  name: 'Calogero Messina',
  profession: 'Fe developer',
  img: {
    src: '/image/me.png',
    alt: 'calogero',
  },
};

export const TESTIMONIAL: testimonial[] = [me, ...genTestimonial(4)];
