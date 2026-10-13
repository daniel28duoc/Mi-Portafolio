import React from 'react';

const Proyectos = () => {
  const misProyectos = [
    { id: 1, nombre: "Calculadora Interactiva", tecs: "React, CSS", desc: "Calculadora web con operaciones básicas." },
    { id: 2, nombre: "App del Clima", tecs: "JavaScript, API REST", desc: "Aplicación que muestra el clima en tiempo real." },
    { id: 3, nombre: "Gestor de Tareas", tecs: "React, Bootstrap", desc: "Lista de tareas con opciones para agregar y eliminar." }
  ];

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">Mis Proyectos</h2>
      <div className="row">
        {misProyectos.map((proy) => (
          <div className="col-md-4 mb-4" key={proy.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{proy.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{proy.tecs}</h6>
                <p className="card-text">{proy.desc}</p>
                <button className="btn btn-dark btn-sm">Ver repositorio</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Proyectos;