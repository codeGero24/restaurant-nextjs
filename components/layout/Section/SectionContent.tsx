import type { HTMLAttributes } from 'react';

interface SectionContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export default function SectionContent({ className, ...props }: SectionContentProps) {
  return <div className={className}>{props.children}</div>;
}
