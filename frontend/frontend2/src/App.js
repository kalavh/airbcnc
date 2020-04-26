import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (  
    <div className="container">

        <img src={logo}  />
        <div className="content">
          <p>
            Ofereça espaço para programadores e
            encontre talentos para sua empresa
          </p>
         
          <form>
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
