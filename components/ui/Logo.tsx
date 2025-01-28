import Link from 'next/link';
import Icon from '@/components/ui/Icon';

export default function Logo() {
  return (
    <Link href='/'>
      <h1 className='flex items-center gap-4 text-primary'>
        <Icon name='utensils' className='icon mr-3' />
        {'Reastaurant'}
      </h1>
    </Link>
  );
}
