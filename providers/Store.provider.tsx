'use client';

import type { AppStore } from '@/store';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '@/store';

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
    // -  storeRef.current.dispatch(fetchUsers())
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
