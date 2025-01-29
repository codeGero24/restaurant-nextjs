import { page } from '@/types/constants';

export const sortedPagesByOrder = (pages: page[]) =>
  pages.sort((a, b) => {
    const orderA = a.order || Infinity;
    const orderB = b.order || Infinity;
    return orderA - orderB;
  });

export const groupedPages = (pages: page[]) =>
  pages.reduce(
    (acc, page) => {
      const group = page.group || 'ungrouped';
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(page);
      return acc;
    },
    {} as { [key: string]: page[] }
  );

export const sortedAndGrouped = (pages: page[]) => {
  const sortedPages = sortedPagesByOrder(pages);
  const groupPages = groupedPages(sortedPages);
  return Object.entries(groupPages);
};

export const isActivePage = (currentPath: string, path?: string): boolean => {
  return currentPath === path;
};
