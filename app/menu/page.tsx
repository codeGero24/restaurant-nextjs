import type { Metadata } from 'next';

import MenuHighlight from '@/components/MenuHighlight';

export const metadata: Metadata = {
  title: 'Restoran - Menu',
  description: 'Benvenuti a Restoran, il miglior ristorante italiano in città',
};

export default function MenuPage() {
  return (
    <>
      <MenuHighlight />
    </>
  );
}
