import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { useAppSelector } from '@/hooks/redux';
import { selectSettings } from '@/store/slices/settingsSlice';

export default function Logo() {
  const { settings } = useAppSelector(selectSettings);
  const appName = settings.appName || 'Reastaurant';
  return (
    <Link href='/'>
      <h1 className='flex items-center gap-4 text-primary'>
        <Icon name='utensils' className='icon mr-3' />
        {appName}
      </h1>
    </Link>
  );
}
