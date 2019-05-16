import React from 'react';
import ErrBoundary from './ErrBoundary';
import Bad from './Bad';
import Good from './Good';

export default function App() {
  return (
    <>
      <Good />
      
      <ErrBoundary>
        <Bad />
      </ErrBoundary>
    </>
  );
}
