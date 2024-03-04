import { useEffect, ReactElement } from 'react';
import { redirect } from 'next/navigation'

// project import
import {useAuth} from '../hooks/useAuth';

export type GuardProps = {
    children: ReactElement | null;
  };

// ==============================|| AUTH GUARD ||============================== //

const AuthGuard = ({ children }: GuardProps) => {
  const { data, isError, isLoading, error } = useAuth();

  console.log("DATA in guard", data, "isError", isError, "isLoading", isLoading, "error", error )


  useEffect(() => {
    if (!data|| isError) {
       return  redirect('auth');
    }
  }, [data, isLoading, isError]);

  if(isLoading) return <h1>loading...</h1>

  return children;
};

export default AuthGuard;
