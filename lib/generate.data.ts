import { Img, member, testimonial, social, plate } from '@/types';

export const genPathImg = (file: string, index: string | number) =>
  `https://themewagon.github.io/restoran/img/${file}-${index}.jpg`;

export const genSocials = (idUser: string | number, socials?: string[]): social[] => {
  const defaultSocials = ['facebook-f', 'x-twitter', 'instagram'];

  socials = socials || defaultSocials;

  return socials.map(social => {
    const socialName = social
      .split('-')
      .map(social => social.charAt(0).toUpperCase() + social.slice(1))
      .join(' ');
    return {
      name: socialName,
      icon: {
        name: social as social['icon']['name'],
      },
      link: `https://www.${social}.com/${idUser}`,
    };
  });
};

export const genImage = (limit: number, file: string): Img[] => {
  return Array.from({ length: limit }, (_, i) => ({
    src: genPathImg(file, i + 1),
    alt: `${file}-${i + 1}`,
  }));
};

export const genMember = (limit: number): member[] => {
  return Array.from({ length: limit }, (_, i) => ({
    id: i + 1,
    img: {
      src: genPathImg('team', i + 1),
      alt: `team-${i + 1}`,
    },
    name: `Full Name ${i + 1}`,
    role: 'Designation',
    socials: genSocials(i + 1),
  }));
};

export const genTestimonial = (limit: number): testimonial[] => {
  return Array.from({ length: limit }, (_, i) => ({
    id: i + 1,
    img: {
      src: genPathImg('testimonial', i + 1),
      alt: `testimonial-${i + 1}`,
    },
    name: `Client Name ${i + 1}`,
    profession: 'Profession',
    review:
      'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
  }));
};

export const genMenu = (limit: number): plate[] => {
  return Array.from({ length: limit }, (_, i) => ({
    id: i + 1,
    img: {
      src: genPathImg('menu', i + 1),
      alt: `menu-${i + 1}`,
    },
    name: `Chicken Burger ${i + 1}`,
    description: 'Ipsum ipsum clita erat amet dolor justo diam',
    prince: '115',
  }));
};
