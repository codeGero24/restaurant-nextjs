import TeamMembers from '@/components/TeamMembers';

// - Mock
import { MEMBERS } from '@/mock/about';

export default function OurTeamPage() {
  return (
    <>
      <TeamMembers members={MEMBERS.concat(MEMBERS)} />
    </>
  );
}
