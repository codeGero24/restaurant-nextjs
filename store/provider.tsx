'use client';

import type { AppStore } from '@/store';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>(null);
  if (!storeRef.current) {
    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
