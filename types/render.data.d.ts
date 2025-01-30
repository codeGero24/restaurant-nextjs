import { Img, icon } from '@types/constants';

// --------------------
// - type social
// --------------------
export type social = {
  name: string;
  icon: icon;
  link: string;
};

// --------------------
// - type member
// --------------------
export type member = {
  id: string | number;
  img: Img;
  name: string;
  role: string;
  socials: social[];
};

// --------------------
// - type testimonial
// --------------------
export type testimonial = {
  id: string | number;
  name: string;
  profession: string;
  review: string;
  img: Img;
};

export type review = testimonial;

// --------------------
// - type service
// --------------------
export type service = {
  title: string;
  subtitle: string;
  icon: icon;
};

// --------------------
// - type aboutUs
// --------------------
export interface aboutUs {
  images: Img[];
  experience: experience;
  popularMembers: popularMembers;
}
// --------------------
// - type experience
// --------------------
export type experience = {
  title: string;
  subtitle: string;
  rate: string;
};

// --------------------
// - type menu
// --------------------
export interface menu {
  tabs: tabMenu[];
  plates: plate[];
}

// --------------------
// - type popularMembers
// --------------------
export type popularMembers = experience;

// --------------------
// - type plate
// --------------------
export type plate = {
  id: string | number;
  img: Img;
  name: string;
  prince: string | number;
  description: string;
};

// --------------------
// - type Tab
// --------------------
export type tab = tabInfo & tabMenu;

export type tabInfo = {
  title: string;
  content: string;
};

export type tabMenu = {
  id: 'breakfast' | 'launch' | 'dinner';
  title: string;
  content: string;
  nameIcon: nameIcon;
  isActive: boolean;
};
