'use client';

import React from 'react';
import { clsx } from 'clsx';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import NavPages from './NavPages';

import useDevice from '@/hooks/useDevice';

import { sortedAndGrouped } from '@/lib/pages.fc';
import { PAGES } from '@/constants/pages';

// - Types
import { page } from '@/types/constants';

interface NavbarProps {
  pages?: page[];
}

const Navbar = ({ pages }: NavbarProps) => {
  const [isOpenMenu, setIsOpenMenu] = React.useState<boolean>(false);
  const { isDesktop, isMobile } = useDevice();

  const toggleMenu = React.useCallback(() => setIsOpenMenu(!isOpenMenu), [isOpenMenu]);

  const pagesGrouped = React.useMemo(() => {
    const navPages = pages || PAGES;
    return sortedAndGrouped(navPages);
  }, [pages]);

  const pagesElements = React.useMemo(
    () =>
      pagesGrouped.map(([nameGroup, pagesGroup]) => (
        <NavPages key={nameGroup} nameGroup={nameGroup} pagesGroup={pagesGroup} />
      )),
    [pagesGrouped]
  );

  const classNamePageWrapper = React.useMemo(() => {
    const defaultClass = isDesktop
      ? 'flex items-center justify-between gap-6'
      : 'w-full overflow-hidden border-t-[1.5px] border-gray-600 transition-all duration-500';

    const activeClass = isOpenMenu
      ? 'mt-4 max-h-screen translate-y-0 pt-4 opacity-100'
      : 'max-h-0 translate-y-5 opacity-0';
    return isDesktop ? defaultClass : clsx(defaultClass, activeClass);
  }, [isDesktop, isOpenMenu]);

  return (
    <>
      <nav className='flex justify-end lg:w-2/3'>
        {/* NavPages - Desktop */}
        {isDesktop && (
          <ul className={classNamePageWrapper}>
            {pagesElements}
            <Button variant='book-a-table' />
          </ul>
        )}

        {/* Burget Menu - Mobile*/}
        {isMobile && (
          <Button
            type='button'
            className={clsx(
              'rounded-lg border-[1px] border-gray-600 px-3 py-1',
              'focus:ring-4 focus:ring-white focus:ring-opacity-10'
            )}
            onClick={toggleMenu}
          >
            {isOpenMenu ? (
              <Icon name='x' className='icon' />
            ) : (
              <Icon name='bars' className='icon' />
            )}
          </Button>
        )}
      </nav>
      {/* NavPages - Mobile */}
      {isMobile && (
        <div className={classNamePageWrapper}>
          <ul className='grid-col-1 grid gap-4'>
            {pagesElements}
            <Button variant='book-a-table' />
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
