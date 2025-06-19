import { Link } from 'react-router-dom';

const CardCelular = ({ celular }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img 
          src={celular.fotos[0]} 
          className="card-img-top p-3" 
          alt={celular.nombre} 
          style={{ height: '200px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{celular.nombre}</h5>
          <p className="card-text text-muted mb-3">
            {celular.descripcion.substring(0, 60)}...
          </p>
          <div className="mt-auto">
            <h6 className="text-primary">${celular.precio.toLocaleString()}</h6>
            <Link 
              to={`/producto/${celular.id}`} 
              className="btn btn-outline-primary mt-2 w-100"
            >
              Ver detalles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCelular;