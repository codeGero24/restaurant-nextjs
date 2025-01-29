import type { Metadata } from 'next';

import AboutUs from '@/components/AboutUs';
import TeamMembers from '@/components/TeamMembers';

export const metadata: Metadata = {
  title: 'Restoran - About',
  description: 'Benvenuti a Restoran, il miglior ristorante italiano in città',
};

export default function AboutPage() {
  return (
    <>
      <AboutUs />
      <TeamMembers />
    </>
  );
}
