import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

const destinos = [
  {
    img: "/Barcelona-ciudad.jpg",
    titulo: "Barcelona",
    texto: "La ciudad de Gaudí y la Sagrada Familia.",
    precio: 1200,
  },
  {
    img: "/Abisko, Suecia.jfif",
    titulo: "Abisko, Suecia",
    texto: "Paisajes árticos y auroras boreales al norte de Suecia.",
    precio: 1800,
  },
  {
    img: "/Jasna, Eslovakia.jfif",
    titulo: "Jasna, Eslovakia",
    texto: "Joya de los Alpes eslovacos, perfecta para el esquí.",
    precio: 1500,
  },
  {
    img: "/Moscú, Rusia.webp",
    titulo: "Moscú, Rusia",
    texto: "La capital rusa cargada de historia y arquitectura.",
    precio: 1600,
  },
  {
    img: "/Cancún.jpg",
    titulo: "Cancún",
    texto: "Playas de arena blanca en el Caribe mexicano.",
    precio: 990,
  },
  {
    img: "/Machu_Picchu.jpg",
    titulo: "Machu Picchu",
    texto: "La ciudad perdida de los Incas en Perú.",
    precio: 890,
  },
  {
    img: "/Miami.jpg",
    titulo: "Miami",
    texto: "Sol, playa y vida nocturna en Florida.",
    precio: 1100,
  },
  {
    img: "/París.webp",
    titulo: "París",
    texto: "La ciudad del amor y la Torre Eiffel.",
    precio: 1350,
  },
  {
    img: "/rio-de-janeiro.webp",
    titulo: "Río de Janeiro",
    texto: "El carnaval más famoso del mundo.",
    precio: 750,
  },
  {
    img: "/Roma.jpg",
    titulo: "Roma",
    texto: "Historia y cultura en la Ciudad Eterna.",
    precio: 1280,
  },
  {
    img: "/Ushuaia.jfif",
    titulo: "Ushuaia",
    texto: "El fin del mundo en la Patagonia argentina.",
    precio: 720,
  },
  {
    img: "/Venecia.jpg",
    titulo: "Venecia",
    texto: "La ciudad flotante más romántica de Italia.",
    precio: 1280,
  },
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {destinos.map((destino, i) => (
            <Card key={i} destino={destino} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
