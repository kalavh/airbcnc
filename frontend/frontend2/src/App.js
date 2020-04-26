import React, { useState } from 'react';
import api from './services/api';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  const [email,setEmail] = useState('');
    async function handleSubmit(event) {
      // state start with null
    event.preventDefault();
    
    const response = await api.post('/user',{email})
    const {_id} = response.data
    
    localStorage.setItem('user',_id)
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
            placeholder="Seu E-mail"
            value={email}
            onChange={event => setEmail(event.target.value)}
            /> 
      
          <button className="btn" type="submit">Entrar</button>
          </form>
        </div>
        <h1> Hh</h1>
    </div>
  );
}
export default App;