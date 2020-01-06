import React, { useState } from 'react';
import './App.css';

function Button() {
  const [count, setCount] = useState('a');

  return <button onClick={()=>(setCount(String.fromCharCode(count.charCodeAt(0)+1)))}> {count} </button>;
}

export default Button;
