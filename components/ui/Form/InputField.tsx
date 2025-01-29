import type { HTMLInputTypeAttribute } from 'react';

import Skeleton from '@/components/layout/Skeleton';

type field = {
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
};

interface InputFieldProps {
  field: field;
  className?: string;
}

export default function InputField({ field, className }: InputFieldProps) {
  const classNameCustom = className || 'relative w-full lg:w-[48.5%]';

  if (!field?.name) return <Skeleton name='input' />;

  return (
    <>
      <div className={classNameCustom}>
        <input
          id={field.name}
          type={field.type}
          name={field.name}
          placeholder={field.placeholder}
          className='input'
          min={0}
        />
        {field.placeholder && (
          <label htmlFor={field.name} className='label'>
            {field.placeholder}
          </label>
        )}
      </div>
    </>
  );
}
