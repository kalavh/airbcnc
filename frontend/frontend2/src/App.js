import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (  
    <div className="Container">

        <img src={logo}  />
        <div className="content">
          <p>
            Ofereça Spots para programadores e
            encontre talentos para sua empresa
          </p>
          <from>
            <label htmlFor="email">E-Mail </label>
            <input 
            id="email" 
            type="email" 
            placeholder="Seu E-mail"/> 
      
          <button type="submit">Entrar</button>
          </from>
        </div>
        <h1> Hh</h1>
    </div>
  );
}

export default App;
