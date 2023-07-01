import './App.css';
import { sendEmail, signInWithEmail, signOutWithGoogle } from './firebase';
import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <h1>Aplicación de Firebase</h1>
      {localStorage.getItem("name") && (
        <div className="buttons">
          <button className="loginout-with-google-btn" onClick={signOutWithGoogle}>Cerrar sesión</button>
          <button className="auth-btn" onClick={sendEmail}>Enviar autorizaciones</button>
        </div>
      )}
      {localStorage.getItem("name") && (
        <div className="user-info">
          <h2>Información del usuario</h2>
          <p>Nombre: {localStorage.getItem("name")}</p>
          <p>Correo electrónico: {localStorage.getItem("email")}</p>
          <img src={localStorage.getItem("profilePic")} alt="Foto de perfil" />
        </div>
      )}
      {!localStorage.getItem("name") && (
        <div className="login-form">
          <h2>Iniciar sesión</h2>
          <input type="email" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => signInWithEmail(email, password)}>Iniciar sesión con correo electrónico y contraseña</button>

        </div>
      )}
    </div>
  );
}

export default App;