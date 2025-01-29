import type { HTMLAttributes } from 'react';
import type { IconName } from '@fortawesome/free-solid-svg-icons';

// --------------------
// - Type page
// --------------------
export type page = {
  path: string;
  name: string;
  title: string;
  group?: string;
  order?: number;
};

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
