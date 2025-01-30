'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

import useDevice from '@/hooks/useDevice';

// - Types
import type { page } from '@/types/constants';

interface NavPagesProps {
  nameGroup: string;
  pagesGroup: page[];
}

export default function NavPages({ nameGroup, pagesGroup }: NavPagesProps) {
  const [isOpenPages, setIsOpenPages] = React.useState<boolean>(false);
  const currentPath = usePathname();
  const { isDesktop } = useDevice();

  const togglePages = React.useCallback(
    () => setIsOpenPages(!isOpenPages),
    [isOpenPages]
  );

  const checkActivePage = React.useCallback(
    (currentPath: string, path?: string) => currentPath === path,
    []
  );

  const checkActiveGroup = React.useCallback(
    (currentPath: string): boolean =>
      Boolean(pagesGroup.find(page => currentPath === page.path)),
    [pagesGroup]
  );

  React.useEffect(() => {
    setIsOpenPages(false);
  }, [currentPath]);

  if (nameGroup === 'ungrouped' || pagesGroup.length === 1) {
    return (
      <>
        {pagesGroup.map(page => (
          <li key={page.path}>
            <Link
              href={page.path}
              className={clsx(
                'font-[500] uppercase transition-all duration-700 hover:text-primary',
                checkActivePage(currentPath, page.path) && 'text-primary'
              )}
            >
              {page.name}
            </Link>
          </li>
        ))}
      </>
    );
  }

  return (
    <>
      <li key={nameGroup} className='relative'>
        <Button
          type='button'
          className={clsx(
            'font-[500] uppercase hover:text-primary',
            checkActiveGroup(currentPath) ? 'text-primary' : 'text-white'
          )}
          onClick={togglePages}
          {...(isDesktop && {
            onMouseEnter: togglePages,
          })}
        >
          {nameGroup}
          <Icon
            name='caret-down'
            className={clsx(
              'icon xs ml-1 transition-all duration-500 ease-in-out',
              isOpenPages ? 'rotate-180' : ''
            )}
          />
        </Button>
        <ul
          className={clsx(
            'relative flex w-4/5 flex-col overflow-hidden bg-white shadow-md transition-all duration-700',
            'lg:absolute lg:left-[-2rem] lg:top-[52px] lg:min-w-[10rem]',
            isOpenPages ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          {pagesGroup.map(page => (
            <li
              key={page.path}
              className={clsx(
                'mt-2 px-4 py-2',
                checkActivePage(currentPath, page.path)
                  ? 'bg-primary text-white'
                  : 'lg:hover:bg-gray-200'
              )}
            >
              <Link
                href={page.path}
                className={clsx(
                  'block',
                  checkActivePage(currentPath, page.path) ? 'text-white' : 'text-black'
                )}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </>
  );
}
