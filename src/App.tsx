import React, { useState } from 'react';
import ToolBar from './components/ToolBar';
import CreateArea from './components/CreateArea';
import './App.css';

function App() {
  const [newElement, setNewElement] = useState<string[]>([]);

  // set new element to pass to CreateArea component
  const createElement = (name: string) => setNewElement(prev => [...prev, name]);

  return (
    <div className="body_wrapper">
      <ToolBar emitCreateElement={createElement}/>
      <CreateArea element={newElement[newElement.length-1]}/>
    </div>
  );
}

export default App;
