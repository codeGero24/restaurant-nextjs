import React from 'react';
import { clsx } from 'clsx';
import CardHeader from './CardHeader';
import CardTitle from './CardTitle';
import CardSubtitle from './CardSubtitle';
import CardContent from './CardContent';
import CardFooter from './CardFooter';
import './Card.scss';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

type part = 'wrapper';

export const getStyle = (part: part, className?: string | string[]) => {
  switch (part) {
    case 'wrapper':
      return clsx(
        'grid cursor-pointer grid-cols-1 gap-2 rounded-md bg-white p-4 shadow-sm md:p-6',
        className
      );

    default:
      return '';
  }
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, subtitle, ...props }, ref) => {
    const customClassName = React.useMemo(() => {
      return (
        className ||
        'grid cursor-pointer grid-cols-1 gap-2 rounded-md bg-white p-4 shadow-sm md:p-6'
      );
    }, [className]);

    return (
      <div ref={ref} className={clsx('bck-card', customClassName)} {...props}>
        {props.children}
        {title && <CardTitle title={title} />}
        {subtitle && <CardSubtitle subtitle={subtitle} />}
      </div>
    );
  }
);

Card.displayName = 'Card';

export default {
  Root: Card,
  Header: CardHeader,
  Title: CardTitle,
  Subtitle: CardSubtitle,
  Content: CardContent,
  Footer: CardFooter,
};
