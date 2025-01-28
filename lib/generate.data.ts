// --------------------------
// - Function Generate data
// --------------------------

import { social } from '@/types/constants';

export const genPathImg = (file: string, index: string | number) =>
  `https://themewagon.github.io/restoran/img/${file}-${index}.jpg`;

export const genSocials = (idUser: string | number, socials?: string[]): social[] => {
  const defaultSocials = ['facebook', 'twitter', 'instagram'];

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
        prefix: 'fab',
      },
      link: `https://www.${social}.com/${idUser}`,
    };
  });
};
