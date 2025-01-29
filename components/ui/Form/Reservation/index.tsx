import React from 'react';
import { clsx } from 'clsx';
import AnimationWrapper from '@/components/layout/AnimationWrapper';
import InputField from '@/components/ui/Form/InputField';
import Button from '@/components/ui/Button';
import SelectField from '@/components/ui/Form/SelectField';
import TextAreaField from '@/components/ui/Form/TextAreaField';

// - import useSettingsStore from '@stores/settings.store';

// - Types
import type { animation } from '@/types/animation';

interface FormReservationProps {
  className?: string;
  animation?: animation;
}
export default function FormReservation({
  className,
  animation = 'animate-slide-in-up',
}: FormReservationProps) {
  const classNameCustom = className || 'flex flex-wrap gap-4 lg:grid-cols-2';
  // - const { settings } = useSettingsStore();

  /* - 
  const formFields = React.useMemo(() => {
    return settings?.bookingFormFields?.map(field => {
      switch (field.type) {
        case 'textarea':
          return <TextAreaField key={field.type} field={field} />;
        case 'select':
          return <SelectField key={field.type} field={field} />;
        default:
          return <InputField key={field.type} field={field} />;
      }
    });
  }, [settings]);
  */

  return (
    <AnimationWrapper as='form' animation={animation} className={classNameCustom}>
      <>
        <InputField field={{ name: 'name', type: 'text', placeholder: 'Your Name' }} />
        <InputField field={{ name: 'email', type: 'text', placeholder: 'Your Email' }} />
        <InputField
          field={{ name: 'date', type: 'datetime-local', placeholder: 'Data & Time' }}
        />
        <SelectField
          field={{
            name: 'people',
            placeholder: 'No Of People',
            defaultValue: 'people-1',
            options: [
              { value: 'people-1', label: 'People 1' },
              { value: 'people-2', label: 'People 2' },
              { value: 'people-3', label: 'People 3' },
            ],
          }}
        />
        <TextAreaField field={{ name: 'notes', placeholder: 'Special Request' }} />

        {/* formFields */}
        <Button
          type='submit'
          className={clsx('button', 'w-full px-4 py-3 uppercase lg:py-4')}
        >
          Book Now
        </Button>
      </>
    </AnimationWrapper>
  );
}
