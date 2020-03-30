import React from 'react';
import PaintingInfo from './PaintingInfo';
import paintings from './paintings'

export function PaintingsDisplay() {
    // debugger
    console.log(paintings)
  return (
    <div>
      PaintingsDisplay component
      <PaintingInfo/>
    </div>
  );
}

// export default PaintingsDisplay;