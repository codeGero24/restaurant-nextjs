import React from 'react';

interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const SectionContent = React.memo(({ className, ...props }: SectionContentProps) => {
  return <div className={className}>{props.children}</div>;
});

export default SectionContent;
