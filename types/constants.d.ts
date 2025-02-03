import type { HTMLAttributes } from 'react';
import type { IconName } from '@fortawesome/free-solid-svg-icons';

// --------------------
// - Type route
// --------------------
export type route = {
  path: string;
  name: string;
  slug: string;
  title: string;
  order: number;
  group?: group;
};

type group = 'Pages' | 'Contact';

// --------------------
// - Type icon
// --------------------
export type icon = {
  name: IconName;
};

// --------------------
// - Interface Img
// --------------------
export interface Img extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}
