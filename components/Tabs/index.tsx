import React from 'react';
import dynamic from 'next/dynamic';

// - Types
import type { tab } from '@/types/render.data';

export interface TabsProps<T> {
  tabs: T[];
  variant: 'info' | 'menu';
  className?: string;
}

const TabInfo = dynamic(() => import('@/components/ui/Tabs/TabInfo'));
const TabMenu = dynamic(() => import('@/components/ui/Tabs/TabMenu'));

export default function Tabs({ className, variant, tabs }: TabsProps<tab>) {
  const classNameCustom = className || 'grid grid-cols-1 md:grid-cols-3';

  const TabComponent = React.useMemo(() => {
    return variant === 'info' ? TabInfo : TabMenu;
  }, [variant]);

  return (
    <ul className={classNameCustom}>
      {tabs.map((tabData, index) => (
        <TabComponent key={`tab-${variant}-${index}`} tabData={tabData} />
      ))}
    </ul>
  );
}
