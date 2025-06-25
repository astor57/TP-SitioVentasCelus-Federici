import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [marca, setMarca] = useState(null);
  const [imagenPrincipal, setImagenPrincipal] = useState(0);

  useEffect(() => {
    const productoId = parseInt(id);
    const productoEncontrado = celulares.find(p => p.id === productoId);
    if (productoEncontrado) {
      setProducto(productoEncontrado);
      const marcaEncontrada = marcas.find(m => m.id === productoEncontrado.marcaId);
      setMarca(marcaEncontrada);
    }
  }, [id]);

  if (!producto) {
    return (
      <div className="container py-4">
        <div className="alert alert-warning">Producto no encontrado</div>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <img 
              src={producto.fotos[imagenPrincipal]} 
              alt={producto.nombre} 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '500px', objectFit: 'contain' }}
            />
          </div>
          <div className="d-flex gap-2">
            {producto.fotos.map((foto, index) => (
              <button 
                key={index}
                className={`btn btn-outline-secondary ${imagenPrincipal === index ? 'active' : ''}`}
                onClick={() => setImagenPrincipal(index)}
              >
                <img 
                  src={foto} 
                  alt={`Miniatura ${index + 1}`} 
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="col-md-6">
          <h1>{producto.nombre}</h1>
          {marca && (
            <p className="text-muted">
              Marca: <span className="badge bg-primary">{marca.nombre}</span>
            </p>
          )}
          <h3 className="text-primary my-3">${producto.precio.toLocaleString()}</h3>
          
          <div className="mb-4">
            <h5>Descripción</h5>
            <p>{producto.descripcion}</p>
          </div>
          
          <div className="d-flex gap-2 mb-4">
            <button className="btn btn-primary btn-lg">
              Comprar ahora
            </button>
            <button className="btn btn-outline-secondary btn-lg">
              Agregar al carrito
            </button>
          </div>
          
          <div className="card bg-light">
            <div className="card-body">
              <h6 className="card-title">Garantía y envíos</h6>
              <ul className="small">
                <li>12 meses de garantía</li>
                <li>Envío gratis a todo el país</li>
                <li>Devolución gratuita en 30 días</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-12">
          <h4>Características principales</h4>
          <ul className="list-group">
            <li className="list-group-item">Pantalla de alta resolución</li>
            <li className="list-group-item">Cámara profesional</li>
            <li className="list-group-item">Batería de larga duración</li>
            <li className="list-group-item">Procesador de última generación</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetalle;