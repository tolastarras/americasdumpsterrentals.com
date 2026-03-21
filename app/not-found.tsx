'use client';

import dynamic from 'next/dynamic';

const NotFoundComponent = dynamic(() => import('@/components/404/(content)'), { ssr: false });

export default function NotFound() {
  return (
    <div>
      <NotFoundComponent />
    </div>
  );
}
