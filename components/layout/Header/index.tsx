'use client';

import React from 'react';
import { clsx } from 'clsx';
import Logo from '@/components/ui/Logo';
import HeroHeader from '@/components/HeroHeader';
//- import Navbar from '@/components/layout/Navbar';

import useScroll from '@/hooks/useScroll';

const Header: React.FC = () => {
  const { isScrolled } = useScroll({ threshold: 50 });

  return (
    <>
      <header id='l-header' className='lg:relative'>
        <div
          className={clsx(
            'left-0 top-0 z-10 flex w-full flex-wrap items-center justify-between bg-dark px-5 py-3',
            isScrolled
              ? 'fixed animate-slide-in-down lg:shadow-lg'
              : 'lg:absolute lg:bg-transparent'
          )}
        >
          <Logo />
        </div>
        <HeroHeader />
      </header>
    </>
  );
};

Header.displayName = 'Header';

export default Header;
