import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';
import { FaStar, FaChevronLeft, FaChevronRight, FaShoppingCart, FaArrowLeft } from 'react-icons/fa';

function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [marca, setMarca] = useState(null);
  const [imagenMostrada, setImagenMostrada] = useState(0);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const numId = Number(id);
    const productoBuscado = celulares.find(cel => cel.id === numId);
    
    if (productoBuscado) {
      setProducto(productoBuscado);
      const marcaBuscada = marcas.find(m => m.id === productoBuscado.marcaId);
      setMarca(marcaBuscada);
    }
  }, [id]);

  function cambiarImagen(sentido) {
    if (sentido === 'siguiente') {
      setImagenMostrada(prev => (prev === producto.fotos.length - 1 ? 0 : prev + 1));
    } else {
      setImagenMostrada(prev => (prev === 0 ? producto.fotos.length - 1 : prev - 1));
    }
  }

  if (!producto) {
    return (
      <div className="producto-no-encontrado">
        <div className="alerta-producto">
          <h4>Producto no encontrado</h4>
          <button className="btn-volver">
            <FaArrowLeft /> Volver
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pagina-producto">
      <div className="contenedor-producto">
        <div className="fila-producto">
          <div className="columna-fotos">
            <div className="contenedor-imagen-principal">
              <img 
                src={producto.fotos[imagenMostrada]} 
                alt={producto.nombre}
                className="imagen-principal"
              />
              
              <button 
                onClick={() => cambiarImagen('anterior')}
                className="boton-navegacion anterior"
              >
                <FaChevronLeft />
              </button>
              
              <button 
                onClick={() => cambiarImagen('siguiente')}
                className="boton-navegacion siguiente"
              >
                <FaChevronRight />
              </button>
            </div>
            
            <div className="contenedor-miniaturas">
              {producto.fotos.map((foto, index) => (
                <img
                  key={index}
                  src={foto}
                  alt={`Miniatura ${index + 1}`}
                  onClick={() => setImagenMostrada(index)}
                  className={`miniatura ${imagenMostrada === index ? 'activa' : ''}`}
                />
              ))}
            </div>
          </div>

          <div className="columna-info">
            <div className="contenedor-info">
              <h1 className="nombre-producto">{producto.nombre}</h1>
              
              {marca && (
                <span className="marca-producto">
                  {marca.nombre}
                </span>
              )}
              
              <div className="rating-producto">
                <FaStar className="estrella-llena" />
                <FaStar className="estrella-llena" />
                <FaStar className="estrella-llena" />
                <FaStar className="estrella-llena" />
                <FaStar className="estrella-vacia" />
                <span className="texto-rating">(24 opiniones)</span>
              </div>
              
              <h2 className="precio-producto">
                ${producto.precio.toLocaleString()}
              </h2>
              
              <p className="envio-gratis">
                <strong>Envío gratis</strong> a todo el país
              </p>
              
              <div className="seccion-descripcion">
                <h3>Descripción</h3>
                <p>{producto.descripcion}</p>
              </div>
              
              <div className="seccion-caracteristicas">
                <h3>Características</h3>
                <ul className="lista-caracteristicas">
                  <li>Pantalla grande de 6.5"</li>
                  <li>Cámara profesional</li>
                  <li>Batería de larga duración</li>
                  <li>Procesador rápido</li>
                </ul>
              </div>
              
              <div className="selector-cantidad">
                <label>Cantidad:</label>
                <div className="controles-cantidad">
                  <button 
                    onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}
                    className="boton-cantidad"
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={cantidad}
                    onChange={(e) => setCantidad(Number(e.target.value) || 1)}
                    min="1"
                    className="input-cantidad"
                  />
                  <button 
                    onClick={() => setCantidad(cantidad + 1)}
                    className="boton-cantidad"
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="botones-compra">
                <button className="boton-primario">
                  <FaShoppingCart className="icono-carrito" />
                  Agregar al carrito
                </button>
                
                <button className="boton-secundario">
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="productos-similares">
          <h3>Productos similares</h3>
          <div className="fila-productos">
            {celulares
              .filter(c => c.marcaId === producto.marcaId && c.id !== producto.id)
              .map(celular => (
                <div className="columna-producto" key={celular.id}>
                  <div className="card">
                    <img 
                      src={celular.fotos} 
                      className="imagen-producto"
                    />
                    <div className="info-producto">
                      <h5>{celular.nombre}</h5>
                      <p className="precio-producto-similar">
                        ${celular.precio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoDetalle;