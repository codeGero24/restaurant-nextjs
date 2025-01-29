'use client';

import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { delay } from '@/lib/utils';

import styled from './HeroHeader.module.scss';

interface HeroHeaderProps {
  title?: string;
  name?: string;
}

export default function HeroHeaderOther({ title, name }: HeroHeaderProps) {
  const titleRef = React.useRef(null);

  React.useEffect(() => {
    if (titleRef.current) {
      const titleElement = titleRef.current as HTMLElement;
      titleElement.classList?.add('animate-slide-in-down');
      delay(500, () => titleElement.classList?.remove('animate-slide-in-down'));
    }
  }, [title]);

  return (
    <div
      className={clsx(
        styled['hero-header'],
        'mx-auto min-h-[400px] max-w-screen-xl flex-col px-5 py-20 lg:flex-row'
      )}
    >
      <div className='text-center lg:text-left'>
        <h1 className='h1-xl mb-4 font-bold text-white' ref={titleRef}>
          {title}
        </h1>
        <ul className='flex justify-center gap-2 text-lg text-white'>
          <li className='uppercase'>
            <Link href='/' className='text-primary'>
              Home
            </Link>
          </li>
          <li className='font-semibold text-gray-500'>/</li>
          <li className='cursor-pointer uppercase text-primary'>Pages</li>
          <li className='font-semibold text-gray-500'>/</li>
          <li className='uppercase'>{name}</li>
        </ul>
      </div>
    </div>
  );
}
