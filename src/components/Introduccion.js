import React from 'react';

const Introduccion = () => {
  return (
    <div className="container mt-5 text-center">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Foto de perfil" 
            className="rounded-circle mb-4 shadow"
          />
          <h2>¡Hola! Soy Daniel Gonzalez</h2>
          <p className="lead mt-3">
            Soy estudiante de desarrollo web. Me encanta crear aplicaciones funcionales y atractivas. 
            Este es mi portafolio donde comparto mis avances y proyectos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduccion;