import type { Metadata } from 'next';
import type { service } from '@/types/render.data';

import Section from '@/components/layout/Section';
import AnimationWrapper from '@/components/layout/AnimationWrapper';
import CardService from '@/components/ui/Card/Service';
import AboutUs from '@/components/AboutUs';
import TeamMembers from '@/components/TeamMembers';
import MenuHighlight from '@/components/MenuHighlight';
import Testimonial from '@/components/Testimonial';
import Reservation from '@/components/Reservation';

import envVariables from '@/constants/';

// - Mock
import { SERVICES } from '@/mock/services';

export const metadata: Metadata = {
  title: 'Restoran - Home',
  description: 'Benvenuti a Restoran, il miglior ristorante italiano in città',
};

export default function HomePage() {
  console.log(envVariables);
  return (
    <>
      {/* SERVICES */}
      <Section.Root>
        {SERVICES.map((service: service, index: number) => (
          <AnimationWrapper
            key={`service-${index}`}
            animation='animate-slide-in-up'
            delay={true}
          >
            <CardService service={service} />
          </AnimationWrapper>
        ))}
      </Section.Root>
      {/* ABOUT US */}
      <AboutUs />
      {/* MENU */}
      <MenuHighlight />
      {/* RESERVATION */}
      <Reservation />
      {/* TEAM MEMBER */}
      <TeamMembers />
      {/* TESTIMONIAL */}
      <Testimonial />
    </>
  );
}
