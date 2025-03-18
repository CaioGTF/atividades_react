import { useState } from "react";
import "./App.css";

const Dado = ({ valor }) => {
  const imagens = {
    1: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Dice-1-b.svg",
    2: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Dice-2-b.svg",
    3: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Dice-3-b.svg",
    4: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Dice-4-b.svg",
    5: "https://upload.wikimedia.org/wikipedia/commons/0/08/Dice-5-b.svg",
    6: "https://upload.wikimedia.org/wikipedia/commons/2/26/Dice-6-b.svg",
  };

  return <img src={imagens[valor]} alt={`Dado ${valor}`} className="dado" />;
};

function App() {
  const [valorDado, setValorDado] = useState(1);

  const rolarDado = () => {
    const novoValor = Math.floor(Math.random() * 6) + 1;
    setValorDado(novoValor);
  };

  return (
    <div className="container">
      <h1>Jogue o Dado!</h1>
      <Dado valor={valorDado} />
      <button onClick={rolarDado} className="botao">Rolar Dado</button>
    </div>
  );
}

export default App;
