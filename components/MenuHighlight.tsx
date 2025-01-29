import Section from '@/components/layout/Section';
import AnimationWrapper from '@/components/layout/AnimationWrapper';
import CardPlate from '@/components/ui/Card/Plate';
import Tabs from '@/components/Tabs';

// - import useMenuStore from '@stores/menu.store';

// - Mock
import { MENU } from '@/mock/menu';

export default function MenuHighlight() {
  // - const { menu } = useMenuStore();
  const menu = MENU;

  return (
    <Section.Root
      title='Food Menu'
      subtitle='Most Popilar Items'
      classNameContent='grid grid-cols-1'
    >
      <AnimationWrapper animation='animate-slide-in-up'>
        <Tabs
          tabs={menu.tabs}
          variant='menu'
          className='mx-auto mb-12 flex max-w-fit items-center justify-center border-b-[1px]'
        />
        <div className='grid min-h-[500px] grid-cols-1 place-content-start lg:grid-cols-2'>
          {menu.plates.map(plate => (
            <CardPlate key={`plate-${plate.id}`} plate={plate} />
          ))}
        </div>
      </AnimationWrapper>
    </Section.Root>
  );
}
