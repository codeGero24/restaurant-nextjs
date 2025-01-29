import Section from '@/components/layout/Section';
import AnimationWrapper from '@/components/layout/AnimationWrapper';
import CardService from '@/components/ui/Card/Service';

// - Types
import { service } from '@/types/render.data';
// - Mock
import { SERVICES } from '@/mock/services';

export default function HomePage() {
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
    </>
  );
}
