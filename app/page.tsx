import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'Restoran - Home',
  description: 'Benvenuti a Restoran, il miglior ristorante italiano in città',
};

export default function Home() {
  return <HomePage />;
}
