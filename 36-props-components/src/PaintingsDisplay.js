import React from 'react';
import PaintingInfo from './PaintingInfo';
import paintings from './paintings'

export function PaintingsDisplay() {
    // debugger
    console.log(paintings)
  return (
    <div>
      {/* PaintingsDisplay component */}
      {paintings.map(painting =>   <PaintingInfo painting={painting} key={painting.id}/> )}
    
    </div>
  );
}

// export default PaintingsDisplay;