import type { tabMenu, menu } from '@/types/render.data';
import { genMenu } from '@/lib/generate.data';

export const TABS: tabMenu[] = [
  {
    id: 'breakfast',
    title: 'Breakfast',
    content: 'Popular',
    nameIcon: 'coffee',
    isActive: true,
  },
  {
    id: 'launch',
    title: 'Launch',
    content: 'Special',
    nameIcon: 'pizza',
    isActive: false,
  },
  {
    id: 'dinner',
    title: 'Dinner',
    content: 'Lovely',
    nameIcon: 'utensils',
    isActive: false,
  },
];

export const MENU: menu = {
  tabs: TABS,
  plates: genMenu(8),
};
