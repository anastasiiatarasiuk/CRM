import React from 'react';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${(await params).id})`}</p>
    </div>
  );
}
