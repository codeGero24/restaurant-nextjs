import type { Metadata } from 'next';

import Section from '@/components/layout/Section';
import FormContact from '@/components/ui/Form/Contact';
import Map from '@/components/Map';
import Tabs from '@/components/Tabs';

import { tabsContact } from '@/constants/contact';

export const metadata: Metadata = {
  title: 'Restoran - Contact',
  description: 'Benvenuti a Restoran, il miglior ristorante italiano in città',
};

export default function ContactPage() {
  return (
    <>
      <Section.Root
        title='Contact Us'
        subtitle='Contact For Any Query'
        classNameContent='grid grid-cols-1 gap-6'
      >
        <Section.Header className='block' animation='animate-none'>
          <Tabs tabs={tabsContact} variant='info' />
        </Section.Header>
        <Section.Content className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
          <Map />

          <FormContact />
        </Section.Content>
      </Section.Root>
    </>
  );
}
