import { useState } from "react";

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const imagenes = [
    { src: "/Cancún.jpg", alt: "Cancún" },
    { src: "/París.webp", alt: "París" },
    { src: "/Barcelona-ciudad.jpg", alt: "Barcelona" },
  ];

  const anterior = () => {
    setActiveIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  const siguiente = () => {
    setActiveIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="carrusel" className="carousel slide">
      <div className="carousel-inner">
        {imagenes.map((imagen, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={imagen.src}
              className="d-block w-100"
              alt={imagen.alt}
              style={{ height: "850px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        onClick={anterior}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        onClick={siguiente}
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Banner;
