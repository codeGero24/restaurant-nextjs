/* import Section from '@components/layout/Section';
import CardService from '@components/ui/Card/Service';
import AnimationWrapper from '@components/layout/AnimationWrapper';

// - Types
import { Service } from '@types.app/index';
// - MOCK
import { SERVICES } from '@mock/index';
 */

export default function ServicePage() {
  return (
    <>
      <h1>Service</h1>
      {/*       
    <Section.Root title='Services' subtitle='Our Services'>
        {SERVICES.concat(SERVICES).map((service: Service, index: number) => (
          <AnimationWrapper
            key={`service-${index}`}
            animation='animate-slide-in-up'
            delay={true}
          >
            <CardService service={service} />
          </AnimationWrapper>
        ))}
      </Section.Root> 
      */}
    </>
  );
}
