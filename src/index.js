import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  const result = useState();
  return (
    <div>
      <h1>the package is:</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);