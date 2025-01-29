import { clsx } from 'clsx';
import React from 'react';

interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

function CardTitle({ title, className, children, ...props }: CardTitleProps) {
  const customClassName = React.useMemo(() => {
    return clsx('', className);
  }, [className]);

  return (
    <h5 className={customClassName} {...props}>
      {title}
      {children}
    </h5>
  );
}

CardTitle.displayName = 'CardTitle';

export default CardTitle;
