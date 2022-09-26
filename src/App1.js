import './App.css';
import {useState} from 'react';


function App1() {
  const [status, setStatus] = useState('not delivered!');
  
  return (
    <div>
      <h1>the package is: {status}</h1>
      <button onClick={() => setStatus('delivered already :D')}>Do it now</button>
    </div>
  )
}

export default App1;
