import React from 'react';
import HeaderCanvasContainer from './container/HeaderCanvasContainer';
import NavContainer from './container/NavContainer';

import '../styles/main.css';

const headerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginBottom: '10%',
};

function App() {
  return (
    <div>
      <div style={headerStyle}>
        <NavContainer />
        <HeaderCanvasContainer />
      </div>
    </div>
  );
}

export default App;
