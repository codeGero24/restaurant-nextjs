import React from 'react';
import clsx from 'clsx';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

function CardFooter({ className, children, ...props }: CardFooterProps) {
  const customClassName = React.useMemo(() => {
    return clsx('', className);
  }, [className]);

  return (
    <div className={customClassName} {...props}>
      {children}
    </div>
  );
}

CardFooter.displayName = 'CardFooter';

export default CardFooter;
