import React from 'react';
import { clsx } from 'clsx';
import AnimationWrapper from '@/components/layout/AnimationWrapper';
import InputField from '@/components/ui/Form/InputField';
import TextAreaField from '@/components/ui/Form/TextAreaField';

// - Types
import type { animation } from '@/types/animation';

interface FormContactProps {
  className?: string;
  animation?: animation;
}
export default function FormContact({
  className,
  animation = 'animate-slide-in-up',
}: FormContactProps) {
  const classNameCustom = className || 'flex flex-wrap gap-3 lg:grid-cols-2';

  return (
    <AnimationWrapper as='form' animation={animation} className={classNameCustom}>
      <>
        <InputField field={{ name: 'name', type: 'text', placeholder: 'Your Name' }} />
        <InputField field={{ name: 'email', type: 'text', placeholder: 'Your Email' }} />
        <InputField
          field={{ name: 'subject', type: 'text', placeholder: 'Subject' }}
          className='relative w-full'
        />
        <TextAreaField field={{ name: 'notes', placeholder: 'Message' }} />
        <button
          type='submit'
          className={clsx('button', 'w-full px-4 py-3 uppercase lg:py-4')}
        >
          Send Message
        </button>
      </>
    </AnimationWrapper>
  );
}
