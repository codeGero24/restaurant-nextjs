import Skeleton from '@/components/layout/Skeleton';

interface TextAreaFieldProps {
  field: {
    name: string;
    placeholder?: string;
  };
  className?: string;
}
export default function TextAreaField({ field, className }: TextAreaFieldProps) {
  const classNameCustom = className || 'relative w-[99.5%]';

  if (!field?.name) return <Skeleton name='textarea' />;

  return (
    <>
      <div className={classNameCustom}>
        <textarea
          id={field.name}
          name={field.name}
          className='textarea'
          placeholder={field.placeholder}
          maxLength={256}
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
