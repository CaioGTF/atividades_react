import { useState } from "react";
import "../src/App.css";

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

export default function App() {
  const [valorJogador1, setValorJogador1] = useState(1);
  const [valorJogador2, setValorJogador2] = useState(1);
  const [resultado, setResultado] = useState("");

  const rolarDados = () => {
    const novoValor1 = Math.floor(Math.random() * 6) + 1;
    const novoValor2 = Math.floor(Math.random() * 6) + 1;
    
    setValorJogador1(novoValor1);
    setValorJogador2(novoValor2);

    if (novoValor1 > novoValor2) {
      setResultado("🎉 Jogador 1 venceu!");
    } else if (novoValor2 > novoValor1) {
      setResultado("🎉 Jogador 2 venceu!");
    } else {
      setResultado("🤝 Empate!");
    }
  };

  return (
    <div className="container">
      <h1>🎲 Jogo de Dados - Dois Jogadores 🎲</h1>
      <div className="jogadores">
        <div>
          <h2>Jogador 1</h2>
          <Dado valor={valorJogador1} />
        </div>
        <div>
          <h2>Jogador 2</h2>
          <Dado valor={valorJogador2} />
        </div>
      </div>
      <button onClick={rolarDados} className="botao">Rolar Dados</button>
      <h2>{resultado}</h2>
    </div>
  );
}


