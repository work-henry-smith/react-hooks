import './App.css';
import {useState} from 'react';


function Button() {
  const [status, setStatus] = useState('not delivered!');
  
  return (
    <div>
      <h3>the package is: {status}</h3>
      <button onClick={() => setStatus('delivered already')}>Do it now</button>
    </div>
  )
}

export default Button;
