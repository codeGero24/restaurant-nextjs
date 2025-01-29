import { clsx } from 'clsx';
import React from 'react';

interface CardSubtitleProps extends React.HTMLAttributes<HTMLDivElement> {
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

function CardSubtitle({ subtitle, className, children, ...props }: CardSubtitleProps) {
  const customClassName = React.useMemo(() => {
    return clsx('', className);
  }, [className]);

  return (
    <p className={customClassName} {...props}>
      {subtitle}
      {children}
    </p>
  );
}

CardSubtitle.displayName = 'CardSubtitle';

export default CardSubtitle;
