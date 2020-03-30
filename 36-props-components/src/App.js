import React from 'react';
// import Nav from './NavBar'
import 'semantic-ui-css/semantic.min.css';

import NavBar from './NavBar'
import {PaintingsDisplay} from './PaintingsDisplay'

function App() {
  return (
    <div>
      {/* App component */}
      <NavBar/>
      <PaintingsDisplay />
    </div>
  );
}

export default App;
