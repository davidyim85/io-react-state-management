import { useState } from "react";
import './App.css'
import Cats from './Cats';
import { Dog1, Dog2 } from "./Dogs";

const App = () => {
  const [mode, setMode] = useState('light');


  const handleMode = (hastoMatch) => {
    setMode(hastoMatch)
  }

  return (
    <div id='page' className={mode}>
      <button onClick={() => handleMode('light')}>Light Mode</button>
      <button onClick={() => handleMode('dark')}>Dark Mode</button>
      <button onClick={() => handleMode('medium')}>Chrome's inheritent Mode</button>
      <Cats/> {/*added this*/}
      <Dog1/>
      <Dog2/>
  
    </div>
  );
}

export default App;


 