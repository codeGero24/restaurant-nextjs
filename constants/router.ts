import type { route } from '@/types/constants';
/**
 * - path: used as href in links
 * - name: used in the navbar
 * - slug:
 * - title: used in the HeroHeader
 * - order: used to splicit the order of route
 * - group: used to grouped rout with the same group
 */
const routers: route[] = [
  {
    path: '/',
    name: 'Home',
    slug: 'home',
    title: 'Home',
    order: 1,
  },
  {
    path: '/about',
    name: 'About',
    slug: 'about',
    title: 'About Us',
    order: 2,
  },
  {
    path: '/service',
    name: 'Service',
    slug: 'service',
    title: 'Services',
    order: 3,
  },
  {
    path: '/menu',
    name: 'Menu',
    slug: 'menu',
    title: 'Food Menu',
    order: 4,
  },
  {
    path: '/booking',
    name: 'Booking',
    slug: 'booking',
    title: 'Booking',
    order: 5,
    group: 'Pages',
  },
  {
    path: '/our-team',
    name: 'Our Team',
    slug: 'our-team',
    title: 'Our Team',
    order: 6,
    group: 'Pages',
  },
  {
    path: '/testimonial',
    name: 'Testimonial',
    slug: 'testimonial',
    title: 'Testimonial',
    order: 7,
    group: 'Pages',
  },
  {
    path: '/contact',
    name: 'Contact',
    slug: 'contact',
    title: 'Contact',
    group: 'Contact',
    order: 8,
  },
];

export default routers;
