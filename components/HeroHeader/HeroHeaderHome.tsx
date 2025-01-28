import React from 'react';
import { clsx } from 'clsx';
import Link from 'next/link';
import Image from 'next/image';

import styled from './HeroHeader.module.scss';

const HeroHeaderHome = React.memo(() => {
  return (
    <div
      className={clsx(
        styled['hero-header'],
        'min-h-[500px] flex-col px-5 py-20 lg:flex-row'
      )}
    >
      <div className='text-center lg:w-[45%] lg:text-left'>
        <h1 className='h1-xl mb-4 animate-slide-in-left font-bold text-white'>
          Enjoy Our
          <br />
          Delicious Meal
        </h1>
        <p className='mb-8 animate-slide-in-left text-lg text-white md:text-lg'>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet
          diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo
          justo magna dolore erat amet
        </p>

        <Link
          href='/'
          className={clsx(
            'button',
            'w-1/2 animate-slide-in-left px-4 py-2 uppercase lg:w-1/3 lg:py-5 lg:text-xl'
          )}
        >
          Book A Table
        </Link>
      </div>
      <div className='w-4/5 lg:w-[45%]'>
        <Image
          src='/image/food.png'
          alt='grigliata'
          width={400}
          height={400}
          className='animate-spin-slow'
        />
      </div>
    </div>
  );
});

HeroHeaderHome.displayName = 'HeroHeaderHome';
export default HeroHeaderHome;
