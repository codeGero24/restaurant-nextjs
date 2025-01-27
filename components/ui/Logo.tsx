import Link from 'next/link';
import Icon from './Icon';

export default function Logo() {
  return (
    <Link href='/'>
      <h1 className='flex items-center gap-4 text-primary'>
        <Icon name='Utensils' className='icon' type='solid' />
        {'Reastaurant'}
      </h1>
    </Link>
  );
}
