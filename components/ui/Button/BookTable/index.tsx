import clsx from 'clsx';
import Link from 'next/link';

interface BookTableProps {
  className?: string;
  children?: React.ReactNode;
}
export default function BookTable({ className, children, ...props }: BookTableProps) {
  const text = 'Book A Table';
  const customClass = className || 'w-1/2 px-6 py-3 font-[500] uppercase lg:w-full';
  return (
    <li className='py-2'>
      <Link href='/' className={clsx('button', customClass)} {...props}>
        {children || text}
      </Link>
    </li>
  );
}
