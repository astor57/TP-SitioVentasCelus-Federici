import { marcas } from '../data/data';
import { Link } from 'react-router-dom';

const MarcasDestacadas = () => {
  return (
    <section className="marcas-destacadas my-5 py-4 bg-light">
      <div className="container">
        <h3 className="text-center mb-4">Nuestras Marcas</h3>
        <div className="row justify-content-center g-3">
          {marcas.map(marca => (
            <div className="col-6 col-md-3 col-lg-2" key={marca.id}>
              <Link to={`/productos/marca/${marca.id}`} className="d-flex flex-column align-items-center text-decoration-none">
                <div className="card bg-white rounded-3 p-3 "
                  style={{ width: '120px', height: '120px' }}>
                  <img src={marca.logo} className="fotosMarcas"/>
                </div>
                <span className="small text-muted text-center">Ver modelos</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarcasDestacadas;