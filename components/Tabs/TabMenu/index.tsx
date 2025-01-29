import React from 'react';
import { clsx } from 'clsx';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

// - import useMenuStore from '@stores/menu.store';

// - Types
import type { tabMenu } from '@/types/render.data';

interface TabProps {
  tabData: tabMenu;
  className?: string;
}

export default function TabMenu({ tabData, className }: TabProps) {
  // - const { setActiveTab } = useMenuStore();
  const { id, title, content, nameIcon, isActive } = tabData;

  const classActive = isActive ? 'border-b-[2px] border-primary' : '';
  const classNameCustom =
    className ||
    clsx('flex gap-2 items-center py-2 mr-2 last:mr-0 lg:mr-12', classActive);

  return (
    <Button
      type='button'
      id={id}
      className={clsx('tab-menu', classNameCustom)}
      // - onClick={() => setActiveTab(id)}
    >
      <Icon className='icon text-primary mr-1' name={nameIcon || 'utensils'} />
      <div>
        <p>{title}</p>
        <h5>{content}</h5>
      </div>
    </Button>
  );
}
