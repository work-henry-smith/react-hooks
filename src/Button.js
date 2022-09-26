import './App.css';
import {useState} from 'react';


function Button() {
  const [status, setStatus] = useState('not delivered!');
  
  return (
    <div>
      <h1>the package is: {status}</h1>
      <button onClick={() => setStatus('delivered already :D')}>Do it now</button>
    </div>
  )
}

export default Button;
