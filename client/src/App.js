import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
{/*         <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          This is where you can send a message to a license plate
        </p>
        <form >
        License: <input type="text" name="License"/><br/><br/>
        Message: <textarea type="text" name="Body"/><br/>
        <input type="submit" value="Submit"/>
      </form>
      </header>

    </div>
  );
}

export default App;
