import './App.css';
import {useState} from 'react';


function App2() {
  const [checked, setChecked] = useState(false);
  
  return (
    <div>
      <input type='checkbox' value={checked} onChange={() => setChecked((checked) => !checked)} />
      <p>{checked  ? 'checked' : 'not checked'}</p>
    </div>
  )
}

export default App2;
