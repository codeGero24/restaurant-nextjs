import React from 'react';
import { clsx } from 'clsx';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

function CardContent({ className, children, ...props }: CardContentProps) {
  const customClassName = React.useMemo(() => {
    return clsx('', className);
  }, [className]);

  return (
    <div className={customClassName} {...props}>
      {children}
    </div>
  );
}

CardContent.displayName = 'CardContent';

export default CardContent;
