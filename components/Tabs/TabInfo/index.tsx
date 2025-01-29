import type { tabInfo } from '@/types';

import Icon from '@/components/ui/Icon';

interface TabProps {
  tabData: tabInfo;
  className?: string;
}

export default function TabInfo({ className, tabData }: TabProps) {
  const { title, content } = tabData;
  const classNameCustom = className || 'grid grid-cols-1 gap-2';
  return (
    <li className={classNameCustom}>
      <h5 className='section-title left-none font-pacifico text-2xl font-normal text-primary'>
        {title}
      </h5>
      <p>
        <Icon name='envelope-open' className='icon md' />
        {content}
      </p>
    </li>
  );
}
