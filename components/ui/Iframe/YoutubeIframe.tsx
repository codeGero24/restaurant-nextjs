'use client';

import React from 'react';
import Loader from '@/components/ui/Loader';

interface YouTubeIframeProps {
  videoId: string;
  title?: string;
  className?: string;
}

export default function YouTubeIframe({
  videoId,
  title = 'YouTube video',
  className,
}: YouTubeIframeProps) {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className={`aspect-w-16 aspect-h-9 relative ${className}`}>
      {loading && <Loader className='h-full' />}
      <iframe
        className='h-full w-full'
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        style={{ opacity: 0 }}
        onLoad={e => {
          setLoading(false);
          e.currentTarget.style.opacity = '1';
        }}
      />
    </div>
  );
}
