import type { page } from '@/types/constants';

import React from 'react';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import Loader from '@/components/ui/Loader';

// - Mock
import { PAGES } from '@/constants';

const HeroHeaderHome = dynamic(() => import('./HeroHeaderHome'), {
  loading: () => <Loader />,
});
const HeroHeaderOther = dynamic(() => import('./HeroHeaderOther'), {
  loading: () => <Loader />,
});

interface HeroHeaderProps {
  pages?: page[];
}

export default function HeroHeader({ pages }: HeroHeaderProps) {
  const pathName = usePathname();

  pages = pages || PAGES;

  const findPage = (path: string, pages: page[]) => {
    return pages.find(page => page.path === path);
  };

  const heroHeader = React.useMemo(() => {
    if (pathName === '/') {
      return <HeroHeaderHome />;
    }

    const curentPage = findPage(pathName, pages);
    return <HeroHeaderOther {...curentPage} />;
  }, [pages, pathName]);

  return <>{heroHeader}</>;
}
