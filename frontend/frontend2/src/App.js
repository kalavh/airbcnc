import React from 'react';
import api from './services/api';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  function handleSubmit(event) {
    event.preventDefault()
    console.log("hello world")
  }

  return (  
    <div className="container">

        <img src={logo}  />
        <div className="content">
          <p className="oneP">
          Rent your spot and
          </p>
          <p className="twoP">
         discovery a developers
          </p>
        
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-Mail </label>
            <input 
            id="email" 
            type="email" 
            placeholder="Seu E-mail"/> 
      
          <button className="btn" type="submit">Entrar</button>
          </form>
        </div>
        <h1> Hh</h1>
    </div>
  );
}
export default App;