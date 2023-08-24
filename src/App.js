import './App.css';

import React, { useState } from 'react';

function App() {

  const [validAccess, setValidAccess] = useState("");

  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === 'puc@puc.com' && password === '123') {
      setValidAccess("Acessado com sucesso!");
    } else {
      setValidAccess("Usuário ou senha incorretos!");
    }
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <input type="text" placeholder="email" id="email" /> 
      <br />
      <input type="password" placeholder="senha" id="password" />
      <br />
      <button type="button" onClick={login}>Acessar</button>
      <br />
      <label>{validAccess}</label>
    </div>
  );
}

export default App;
