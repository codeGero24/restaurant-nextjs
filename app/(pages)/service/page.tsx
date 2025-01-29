import type { Metadata } from 'next';
import type { service } from '@/types/render.data';

import Section from '@/components/layout/Section';
import CardService from '@/components/ui/Card/Service';
import AnimationWrapper from '@/components/layout/AnimationWrapper';

// - MOCK
import { SERVICES } from '@/mock/services';

export const metadata: Metadata = {
  title: 'Restoran - Service',
  description: 'Benvenuti a Restoran, il miglior ristorante italiano in città',
};

export default function ServicePage() {
  return (
    <>
      <Section.Root title='Services' subtitle='Our Services'>
        {SERVICES.concat(SERVICES).map((service: service, index: number) => (
          <AnimationWrapper
            key={`service-${index}`}
            animation='animate-slide-in-up'
            delay={true}
          >
            <CardService service={service} />
          </AnimationWrapper>
        ))}
      </Section.Root>
    </>
  );
}
