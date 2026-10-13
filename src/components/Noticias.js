import React, { useState, useEffect } from 'react';
import noticiasData from '../data/noticias.json';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    setNoticias(noticiasData);
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Últimas Noticias</h2>
      <div className="row">
        {noticias.map((noticia) => (
          <div className="col-md-6 mb-3" key={noticia.id}>
            <div className="card shadow-sm border-primary h-100">
              <div className="card-body">
                <h5 className="card-title text-primary">{noticia.titulo}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{noticia.fecha}</h6>
                <p className="card-text">{noticia.contenido}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticias;