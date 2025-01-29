import type { Metadata } from 'next';

import TeamMembers from '@/components/TeamMembers';

// - Mock
import { MEMBERS } from '@/mock/about';

export const metadata: Metadata = {
  title: 'Restoran - Out Team',
  description: 'Benvenuti a Restoran, il miglior ristorante italiano in città',
};

export default function OurTeamPage() {
  return (
    <>
      <TeamMembers members={MEMBERS.concat(MEMBERS)} />
    </>
  );
}
