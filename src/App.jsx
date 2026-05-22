import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Footer from "./components/Footer";

const destinos = [
  {
    img: "/Barcelona-ciudad.jpg",
    titulo: "Barcelona, España",
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
    titulo: "Cancún, México",
    texto: "Playas de arena blanca en el Caribe mexicano.",
    precio: 990,
  },
  {
    img: "/Machu_Picchu.jpg",
    titulo: "Machu Picchu, Perú",
    texto: "La ciudad perdida de los Incas en Perú.",
    precio: 890,
  },
  {
    img: "/Miami.jpg",
    titulo: "Miami, Estados Unidos",
    texto: "Sol, playa y vida nocturna en Florida.",
    precio: 1100,
  },
  {
    img: "/París.webp",
    titulo: "París, Francia",
    texto: "La ciudad del amor y la Torre Eiffel.",
    precio: 1350,
  },
  {
    img: "/rio-de-janeiro.webp",
    titulo: "Río de Janeiro, Brasil",
    texto: "El carnaval más famoso del mundo.",
    precio: 750,
  },
  {
    img: "/Roma.jpg",
    titulo: "Roma, Italia",
    texto: "Historia y cultura en la Ciudad Eterna.",
    precio: 1280,
  },
  {
    img: "/Ushuaia.jfif",
    titulo: "Ushuaia, Argentina",
    texto: "El fin del mundo en la Patagonia argentina.",
    precio: 720,
  },
  {
    img: "/Venecia.jpg",
    titulo: "Venecia, Italia",
    texto: "La ciudad flotante más romántica de Italia.",
    precio: 1280,
  },
];

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="container mt-4">
        <div className="row">
          {destinos.map((destino, i) => (
            <Card key={i} destino={destino} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
