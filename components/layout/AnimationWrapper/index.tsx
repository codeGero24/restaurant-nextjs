'use client';

import React from 'react';
import { clsx } from 'clsx';
import { useInView } from 'react-intersection-observer';

// - Types
import type { animation, duration } from '@/types/animation';

export interface AnimationWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  className?: string;
  animation?: animation;
  duration?: duration;
  delay?: boolean;
  threshold?: number;
  triggerOnce?: boolean;
}

export default function AnimationWrapper({
  className,
  as: TagHtml = 'div',
  animation = 'animate-fede-in-slow',
  delay = false,
  duration = 'duration-[1000ms]',
  threshold = 0.1,
  triggerOnce = true,
  ...props
}: AnimationWrapperProps) {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  const animationClass = React.useMemo(() => {
    return clsx(inView && animation, duration, delay && 'custom-delay');
  }, [animation, duration, delay, inView]);

  return (
    <TagHtml ref={ref} className={clsx(animationClass, className)} {...props}>
      {props.children}
    </TagHtml>
  );
}
