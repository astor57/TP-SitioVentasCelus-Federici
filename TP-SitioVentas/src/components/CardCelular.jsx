const CardCelular = ({ celular }) => (
  <div>
    <img src={celular.fotos[0]} alt={celular.nombre} width={150} />
    <h3>{celular.nombre}</h3>
    <p>{celular.descripcion}</p>
    <p>${celular.precio}</p>
  </div>
);

export default CardCelular;
