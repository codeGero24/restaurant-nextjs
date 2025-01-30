'use client';

import type { animation } from '@/types/animation';

import React from 'react';
import Image from 'next/image';
import { clsx } from 'clsx';
import Icon from '@/components/ui/Icon';
import FormReservation from '@/components/ui/Form/Reservation';
import Section from '@/components/layout/Section';
import AnimationWrapper from '@/components/layout/AnimationWrapper';
import Button from './ui/Button';
import Modal from './ui/Modal';

interface ReservationProps {
  animation?: animation;
  className?: string;
}

export default function Reservation({
  className,
  animation = 'animate-slide-in-up',
}: ReservationProps) {
  const [openModal, setOpenModal] = React.useState(false);

  const classNameCustom = React.useMemo(() => {
    return clsx('grid grid-cols-1 items-center py-20 lg:grid-cols-2', className);
  }, [className]);

  return (
    <>
      <AnimationWrapper as='section' className={classNameCustom} animation={animation}>
        <Section.Content className='relative h-[550px]'>
          <Image
            alt='video'
            src='/image/video.jpg'
            width={0}
            height={0}
            sizes='100vw'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div className='absolute left-[50%] top-[50%] h-[100px] w-[100px] animate-pulse-border rounded-full border border-primary bg-primary'></div>

          <div className='absolute left-[50%] top-[50%] z-10 flex h-[100px] w-[100px] translate-x-[-50%] translate-y-[-50%] items-center justify-center rounded-full border border-primary bg-primary'>
            <Button type='button' className='lg:ml-2' onClick={() => setOpenModal(true)}>
              <Icon name='play' className='text-dark' size='3x' />
            </Button>
          </div>
        </Section.Content>
        <Section.Content className='bg-dark p-12 lg:h-[550px]'>
          <Section.Header
            className='mb-6 grid grid-cols-1 gap-2'
            animation='animate-none'
          >
            <p className='section-title left-none font-pacifico text-2xl text-primary'>
              Reservetion
            </p>
            <h1 className='text-white'>Book A Table Online</h1>
          </Section.Header>

          <FormReservation />
        </Section.Content>
      </AnimationWrapper>

      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
}
