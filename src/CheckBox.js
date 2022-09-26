import './App.css';
import {useState} from 'react';


function CheckBox() {
  const [checked, setChecked] = useState(false);
  
  return (
    <div>
      <h3>{checked ? 'yes, I am ready' : 'no, I am not'}</h3>
      <input type='checkbox' value={checked} onChange={() => setChecked((checked) => !checked)} />
      <p>{checked  ? 'checked' : 'not checked'}</p>
    </div>
  )
}

export default CheckBox;
