import React from 'react';
import { clsx } from 'clsx';
import Icon from './ui/Icon';

interface LoaderProps {
  color?: string;
  className?: string;
}

export default function Loader({ color = 'text-primary', className = '' }: LoaderProps) {
  return (
    <div
      role='status'
      className={clsx(
        'flex z-50 h-screen animate-fede-in items-center justify-center bg-white',
        className
      )}
    >
      <Icon name='spinner' className={clsx('icon md', color)} spin />
      <span className='sr-only'>Loading...</span>
    </div>
  );
}
