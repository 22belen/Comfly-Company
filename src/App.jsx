import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

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
