'use client';

import React from 'react';
import Icon from '@/components/ui/Icon';
import Button from '@/components/ui/Button';
import YouTubeIframe from '../Iframe/YoutubeIframe';

interface ModalProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ setOpenModal }: ModalProps) {
  React.useEffect(() => {
    const html = document.querySelector('html');
    html?.classList.add('overflow-hidden');

    return () => {
      html?.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className='fixed left-0 top-0 z-50 h-screen w-full'>
      <div className='h-full bg-black opacity-40'></div>
      <div className='absolute top-[90px] flex w-full items-center justify-center'>
        <div className='w-[90%] bg-white p-4 lg:min-h-[460px] lg:w-[50%]'>
          <div className='flex items-center justify-between border-b py-2'>
            <h5>Youtube Video</h5>
            <Button onClick={() => setOpenModal(false)}>
              <Icon
                name='x'
                className='icon xs opacity-80 transition-all hover:opacity-100'
              />
            </Button>
          </div>
          <YouTubeIframe videoId='E7ZShQ4uyKg' className='pt-4 lg:h-[380px]' />
        </div>
      </div>
    </div>
  );
}
