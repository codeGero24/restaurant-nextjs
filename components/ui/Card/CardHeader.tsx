import React from 'react';
import clsx from 'clsx';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

const CardHeader = React.memo(({ className, children, ...props }: CardHeaderProps) => {
  const customClassName = React.useMemo(() => {
    return clsx('', className);
  }, [className]);

  return (
    <div className={customClassName} {...props}>
      {children}
    </div>
  );
});

CardHeader.displayName = 'CardHeader';

export default CardHeader;
