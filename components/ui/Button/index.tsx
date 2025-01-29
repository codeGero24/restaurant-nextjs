import type { ReactNode, ComponentProps } from 'react';
import dynamic from 'next/dynamic';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'scroll-up' | 'book-a-table';
  className?: string;
  children?: ReactNode;
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
