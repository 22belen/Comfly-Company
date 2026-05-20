function Card({ destino }) {
  return (
    <div className="col-3 mb-4">
      <div className="card-destino h-100">
        <div className="card-img-box">
          <img src={destino.img} className="card-imagen" alt={destino.titulo} />
          <span className="card-precio">✈ desde USD {destino.precio}</span>
        </div>
        <div className="card-body d-flex flex-column text-center">
          <h5 className="card-titulo mt-2 ">{destino.titulo}</h5>
          <p className="card-texto ">{destino.texto}</p>
          <button className="card-boton mt-auto">Ver paquete →</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
