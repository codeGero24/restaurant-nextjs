import React from 'react';
import dynamic from 'next/dynamic';

interface ButtonProps extends React.ComponentProps<'button'> {
  variant?: 'scroll-up' | 'book-a-table';
  className?: string;
  children?: React.ReactNode;
}

const ScrollUp = dynamic(() => import('@/components/ui/Button/ScrollUp'));
const BookTable = dynamic(() => import('@/components/ui/Button/BookTable'));

export default function Button({
  variant,
  className,
  children,
  ...primitive
}: ButtonProps) {
  switch (variant) {
    case 'scroll-up':
      return <ScrollUp />;
    case 'book-a-table':
      return <BookTable className={className}>{children}</BookTable>;
    default:
      return (
        <button className={className} {...primitive}>
          {children}
        </button>
      );
  }
}
