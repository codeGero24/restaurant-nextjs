export default function SkeletonCard() {
  return (
    <div className='mx-auto w-full rounded-sm border p-4 shadow-sm'>
      <div className='animate-gradient-shift flex space-x-4'>
        <div className='bg-gradient-shimmer animate-gradient-shimmer h-[64px] w-[64px] bg-gray-300'></div>
        <div className='flex-1 space-y-6 py-1'>
          <div className='bg-gradient-shimmer animate-gradient-shimmer h-2 rounded bg-gray-300'></div>
          <div className='bg-gradient-shimmer animate-gradient-shimmer h-[1px] bg-gray-300'></div>
          <div className='space-y-3'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='bg-gradient-shimmer animate-gradient-shimmer col-span-2 h-2 rounded bg-gray-300'></div>
              <div className='bg-gradient-shimmer animate-gradient-shimmer col-span-1 h-2 rounded bg-gray-300'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
