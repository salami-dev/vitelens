import { useEffect, ReactElement, useLayoutEffect } from 'react';
import { redirect } from 'next/navigation'

// project import
import {useAuth} from '../hooks/auth';

export type GuardProps = {
    children: ReactElement | null;
  };

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }: GuardProps) => {
  const { data, isError, isLoading, error } = useAuth();

  console.log("AUTH GUARD is actually")

  console.log("DATA in guard", data, "isError", isError, "isLoading", isLoading, "error", error )


  useLayoutEffect(() => {
    if (!data|| isError) {
       return  redirect('auth');
    }
  }, [data, isError]);

  if(isLoading) return <h1>loading...</h1>

  return children;
};

export default AuthGuard;
