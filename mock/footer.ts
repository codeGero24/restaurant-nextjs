import { genSocials } from '@/lib/generate.data';

export const COMPANY = {
  title: 'Company',
  links: [
    {
      name: 'About Us',
      link: '/about',
    },
    {
      name: 'Contact Us',
      link: '/contact',
    },
    {
      name: 'Services',
      link: '/service',
    },
    {
      name: 'Privacy Policy',
      link: '/privacy-policy',
    },
    {
      name: 'Term & condiion',
      link: '/term-condition',
    },
  ],
};

const idSocial = 'peoplefirst';
const socials = ['twitter', 'facebook-f', 'youtube', 'linkedin-in'];

export const CONTANCT = {
  title: 'Contact',
  links: [
    {
      id: 'contact-address',
      description: '123 Street, New York, USA',
      icon: {
        name: 'MapPin',
      },
    },
    {
      id: 'contact-phone-number',
      description: '+012 345 67890',
      icon: {
        name: 'Phone',
      },
    },
    {
      id: 'contact-email',
      description: ' info@example.com',
      icon: {
        name: 'EnvelopeOpen',
      },
    },
  ],
  socials: genSocials(idSocial, socials),
};
