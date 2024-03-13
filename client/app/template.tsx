import React from 'react';
import AuthGuard from '@/utils/AuthGuard';

const template = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (<AuthGuard> {children} </AuthGuard>)
}

export default template