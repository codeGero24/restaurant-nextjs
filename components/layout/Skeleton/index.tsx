import React from 'react';
import dynamic from 'next/dynamic';

const SkeletonCard = dynamic(() => import('@/components/layout/Skeleton/Card'));
const SkeletonInput = dynamic(() => import('@/components/layout/Skeleton/Input'));
const SkeletonTextArea = dynamic(() => import('@/components/layout/Skeleton/TextArea'));

export interface SkeletonProps {
  name: 'card' | 'input' | 'textarea';
}

const Skeleton = React.memo<SkeletonProps>(({ name }) => {
  const SkeletonComponent = React.useMemo(() => {
    switch (name) {
      case 'card':
        return SkeletonCard;
      case 'input':
        return SkeletonInput;
      case 'textarea':
        return SkeletonTextArea;
      default:
        return;
    }
  }, [name]);

  return <>{SkeletonComponent && <SkeletonComponent />}</>;
});

Skeleton.displayName = 'Skeleton';

export default Skeleton;
