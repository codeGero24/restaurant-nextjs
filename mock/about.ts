import { aboutUs, member } from '@/types/render.data';
import { genImage, genMember, genSocials } from '@/lib/generate.data';

// --------------------------
// - Mock data
// --------------------------

const userMe: member = {
  id: 999,
  img: { src: '/image/me.png', alt: 'calogero' },
  name: 'Calogero Messina',
  role: 'Fe-developer',
  socials: genSocials('michaelmess_97'),
};

export const MEMBERS: member[] = [userMe, ...genMember(3)];

export const IMAGES = genImage(4, 'about');

export const ABOUT: aboutUs = {
  images: IMAGES,
  experience: {
    title: 'Years of',
    subtitle: 'Experience',
    rate: '15',
  },
  popularMembers: {
    title: 'Popular',
    subtitle: 'Master Chefs',
    rate: '50',
  },
};
