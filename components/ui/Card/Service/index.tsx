import Card, { getStyle } from '@/components/ui/Card';
import Icon from '@/components/ui/Icon';

// - Types
import { service } from '@/types/render.data';

interface CardServiceProps {
  service: service;
}

export default function CardService({ service }: CardServiceProps) {
  return (
    <>
      <Card.Root
        {...service}
        className={getStyle(
          'wrapper',
          'hover:bg-primary hover:text-white hover:transition-colors hover:duration-500 hover:ease-linear'
        )}
      >
        <Card.Header className='mb-4'>
          <Icon {...service.icon} />
        </Card.Header>
      </Card.Root>
    </>
  );
}
