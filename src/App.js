import React from 'react';
import Introduccion from './components/Introduccion';
import Proyectos from './components/Proyecto';
import Noticias from './components/Noticias';

function App() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Mi Portafolio</span>
        </div>
      </nav>
      
      <Introduccion />
      <hr className="my-5 container" />
      <Proyectos />
      <hr className="my-5 container" />
      <Noticias />
    </div>
  );
}

export default App;