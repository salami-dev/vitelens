"use client";
import { useState } from "react";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
  import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const Tanstack = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                    },
                },
            }),
    );
  
    
  return (       
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen />
        {children}
        </QueryClientProvider> 
  )
}

export default Tanstack