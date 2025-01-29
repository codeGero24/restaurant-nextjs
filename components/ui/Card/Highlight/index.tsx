'use client';

import { useInView } from 'react-intersection-observer';
import Card from '@/components/ui/Card';
import useCounterUp from '@/hooks/useCounterUp';

interface CardHighlightProps {
  title: string;
  subtitle: string;
  rate?: string | number;
  duration?: number;
}

export default function CardHighlight({
  title,
  subtitle,
  rate = 10,
  duration = 2,
}: CardHighlightProps) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const { counter } = useCounterUp({ inView, duration, rate });

  return (
    <Card.Root
      ref={ref}
      className='mb-2 flex items-center gap-6 border-l-[6px] border-primary px-6 font-nunito'
    >
      <span className='min-w-[60px] text-[48px] font-bold text-primary'>{counter}</span>
      <div>
        <p className='font-heebo text-base'>{subtitle}</p>
        <p className='text-lg font-bold uppercase text-gray-900'>{title}</p>
      </div>
    </Card.Root>
  );
}
