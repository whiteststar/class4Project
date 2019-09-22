import React from 'react';
import logo from './logo.svg';
import './App.css';
import MessageForm from './MessageForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
{/*         <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          This is where you can send a message to a license plate
        </p>
      </header>
      <MessageForm />

    </div>
  );
}

export default App;
