import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center gap-2 bg-dark text-cyan-50 opacity-90'>
      <h1 className='mb-2 text-center text-2xl font-bold uppercase text-cyan-50'>
        Oops!
      </h1>
      <p className='text-lg'>404 | page not found</p>
      <Link className='underline underline-offset-4' href='/'>
        Go Home
      </Link>
    </div>
  );
}
