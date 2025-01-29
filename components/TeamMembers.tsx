import React from 'react';
import Section from '@/components/layout/Section';
import AnimationWrapper from '@/components/layout/AnimationWrapper';
import CardMember from '@/components/ui/Card/Member';

// - Types
import { member } from '@/types/render.data';
// - Mock
import { MEMBERS } from '@/mock/about';

interface TeamMembersProps {
  members?: member[];
}

const TeamMembers: React.FC<TeamMembersProps> = React.memo(({ members }) => {
  const teamMembers = members || MEMBERS;

  return (
    <Section.Root title='Team Members' subtitle='Our Team Members'>
      {teamMembers.map((member, index) => (
        <AnimationWrapper
          key={`member-${index}`}
          animation='animate-slide-in-up'
          delay={true}
        >
          <CardMember member={member} />
        </AnimationWrapper>
      ))}
    </Section.Root>
  );
});

TeamMembers.displayName = 'TeamMembers';

export default TeamMembers;
