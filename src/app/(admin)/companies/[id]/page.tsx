import React from 'react';
import Header from '@/app/components/header';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <>
      <Header>Company ({(await params).id})</Header>
    </>
  );
}
