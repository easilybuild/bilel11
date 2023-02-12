import React, { useState } from 'react';
import './App.css';



function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const port = process.env.PORT || "http://localhost:3000" ;
 

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch( `${port}` , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };
  return (
    <div className="App">
      
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          placeholder= "enter your budget"
          onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        <button class="button" type="submit">Send</button>
      </form>
      <div>{response}</div>
    </div>
  );
}

export default App

