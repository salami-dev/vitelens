import { useEffect, ReactElement, useLayoutEffect } from 'react';
import { redirect, useRouter } from 'next/navigation'
import {useAuth} from '../hooks/auth';

export type GuardProps = {
    children: ReactElement | null;
  };

const AuthGuard = ({ children }: GuardProps) => {
  const { data, isError, isLoading, error } = useAuth();
  const router = useRouter()


  useLayoutEffect(() => {
    if (!data|| isError) {
       return  router.push('auth');
    }
  }, [data, isError]);

  if(isLoading) return <h1>loading...</h1>

  return children;
};

export default AuthGuard;
