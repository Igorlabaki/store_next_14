"use client"

import { queryClient } from '@/services/reactQueryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ReactNode } from 'react';

interface ReactQueryProviderProps{
  children: ReactNode;
}

export default function ReactQueryProvider({children}: ReactQueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true}/>
    </QueryClientProvider>
  )
}
