import React from 'react';
import ToolBar from './components/ToolBar';
import CreateArea from './components/CreateArea';
import './App.css';

function App() {
  return (
    <div className="body_wrapper">
      <ToolBar />
      <CreateArea />
    </div>
  );
}

export default App;
