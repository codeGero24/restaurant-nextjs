import { clsx } from 'clsx';
import Icon from '@/components/ui/Icon';

interface LoaderProps {
  color?: string;
  className?: string;
}

export default function Loader({ color = 'text-primary', className = '' }: LoaderProps) {
  const classNameCustom = clsx(
    'z-50 flex animate-fede-in items-center justify-center bg-white',
    className || 'h-screen'
  );
  return (
    <div role='status' className={classNameCustom}>
      <Icon name='spinner' className={clsx('icon md', color)} spin />
      <span className='sr-only'>Loading...</span>
    </div>
  );
}
