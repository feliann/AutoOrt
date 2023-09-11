import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const UsuariosRegistrados = () => {
  const [usuarios, setUsuarios] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    // Obtener la lista de usuarios registrados
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuario autenticado, agregar su correo electrónico a la lista de usuarios
        setUsuarios((prevUsuarios) => [...prevUsuarios, user.email]);
      }
    });

    return () => {
      // Limpieza cuando el componente se desmonta
      unsubscribe();
    };
  }, [auth]);

  return (
    <div>
      <h2>Usuarios Registrados</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>Correo Electrónico: {usuario}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsuariosRegistrados;
