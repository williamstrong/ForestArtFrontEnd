import React from 'react';
import HeaderCanvasContainer from './container/HeaderCanvasContainer';
import NavContainer from './container/NavContainer';
import Preview from './container/PreviewContainer';

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
      <div>
        <Preview />
      </div>
    </div>
  );
}

export default App;
