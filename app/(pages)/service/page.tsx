import Section from '@/components/layout/Section';
import CardService from '@/components/ui/Card/Service';
import AnimationWrapper from '@/components/layout/AnimationWrapper';

// - Types
import type { service } from '@/types/render.data';
// - MOCK
import { SERVICES } from '@/mock/services';

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
