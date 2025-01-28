'use client';
import Link from 'next/link';

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <main
          id='l-main'
          className='flex h-screen flex-col items-center justify-center gap-2'
        >
          <h1 className='mb-2 text-center text-2xl font-bold uppercase'>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            {error.message && (
              <>
                <i>{error.message}</i>
                <br />
              </>
            )}
            <i>{error.digest || error.message}</i>
          </p>
          <Link className='text-cyan-50 underline underline-offset-4' href='/'>
            Go Home
          </Link>
          <button onClick={() => reset()}>Try again</button>
        </main>
      </body>
    </html>
  );
}
