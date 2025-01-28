import { IconName, IconPrefix } from '@fortawesome/free-solid-svg-icons';

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
  prefix?: IconPrefix;
};

// --------------------
// - Type social
// --------------------
export type social = {
  name: string;
  icon: icon;
  link: string;
};
