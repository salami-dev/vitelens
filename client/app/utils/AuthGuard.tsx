"use client";
import { useEffect, ReactElement, useLayoutEffect } from "react";
import { redirect, useRouter } from "next/navigation";
import { useAuth } from "../hooks/auth";

export type GuardProps = {
  children: ReactElement | null;
};

const AuthGuard = ({ children }: GuardProps) => {
  const { data, isError, isLoading, error, status } = useAuth();
  const router = useRouter();

  useLayoutEffect(() => {
    if (
      !isLoading &&
      !["/auth", "/forgotpassword"].includes(router.pathname) &&
      (!data || isError)
    ) {
      // !['/auth', '/forgotpassword'].includes(router.pathname) redundant but a nice to have fallback
      return router.push("auth");
    }
  }, [data, isError, isLoading]);

  if (isLoading) return <h1>loading...</h1>;

  return children;
};

export default AuthGuard;
