import React, { useState } from 'react'
import './App.css';
import ColorInput from './ColorInput';
import ColorScreen from './ColorScreen';

function App() {
  const [color, setColor] = useState('')
  const [hexValue, setHexValue] = useState('')
  const[isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <ColorScreen 
        color={color} 
        hexValue={hexValue} 
        isDarkText={isDarkText}
      />
      <ColorInput 
        color={color} 
        setColor={setColor} 
        setHexValue={setHexValue} 
        isDarkText={isDarkText} 
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;