import React from 'react';
import { clsx } from 'clsx';
import SectionHeader from './SectionHeader';
import SectionContent from './SectionContent';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  className?: string;
  classNameContent?: string;
}

const Section = React.memo(
  ({ title, subtitle, className, classNameContent, ...props }: SectionProps) => {
    const classContent =
      classNameContent || 'grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4';
    return (
      <section className={clsx('px-5 py-5 md:py-12 lg:gap-12 lg:py-20', className)}>
        {(title || subtitle) && <SectionHeader title={title} subtitle={subtitle} />}
        <SectionContent className={classContent}>{props.children}</SectionContent>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default {
  Root: Section,
  Header: SectionHeader,
  Content: SectionContent,
};
