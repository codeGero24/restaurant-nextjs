import React from 'react';
import AnimationWrapper, { AnimationWrapperProps } from '../AnimationWrapper';

interface SectionHeaderProps extends AnimationWrapperProps {
  title?: string;
  subtitle?: string;
}

const SectionHeader = React.memo(({ title, subtitle, ...props }: SectionHeaderProps) => {
  const animation = props.animation || 'animate-slide-in-up';
  const duration = props.duration || 'duration-[500ms]';
  const className = props.className || 'pb-12 text-center';

  return (
    <AnimationWrapper
      animation={animation}
      duration={duration}
      className={className}
      {...props}
    >
      {title && (
        <p className='section-title font-pacifico text-xl text-primary'>{title}</p>
      )}
      {subtitle && <h1>{subtitle}</h1>}
      {props.children}
    </AnimationWrapper>
  );
});

export default SectionHeader;
