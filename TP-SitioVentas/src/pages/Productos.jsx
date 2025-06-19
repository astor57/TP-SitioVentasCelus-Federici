import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../data/data';
import CardCelular from '../components/CardCelular';

const Productos = () => {
  const { idMarca } = useParams();
  const [productos, setProductos] = useState([]);
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(null);

  useEffect(() => {
    let productosFiltrados = [...celulares];
    
    if (idMarca) {
      const marcaId = parseInt(idMarca);
      productosFiltrados = productosFiltrados.filter(p => p.marcaId === marcaId);
      const marca = marcas.find(m => m.id === marcaId);
      setMarcaSeleccionada(marca);
    } else {
      setMarcaSeleccionada(null);
    }
    
    setProductos(productosFiltrados);
  }, [idMarca]);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>
          {marcaSeleccionada 
            ? `Productos de ${marcaSeleccionada.nombre}` 
            : 'Todos nuestros productos'}
        </h1>
        <small className="text-muted">
          {productos.length} {productos.length === 1 ? 'producto' : 'productos'}
        </small>
      </div>
      
      {productos.length === 0 ? (
        <div className="alert alert-info">
          No hay productos disponibles en esta categoría.
        </div>
      ) : (
        <div className="row">
          {productos.map(celular => (
            <CardCelular key={celular.id} celular={celular} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Productos;