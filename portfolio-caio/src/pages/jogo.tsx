import { useState, useEffect, useCallback } from 'react';
import { RotateCcw, Eye } from 'lucide-react';

interface Tentativa {
  tentativa: string;
  resultado: string;
  numero: number;
}

// Função para calcular o resultado da tentativa
const calcularResultado = (tentativa: string, senha: string): string => {
  let touros = 0;
  let vacas = 0;

  for (let i = 0; i < 4; i++) {
    if (tentativa[i] === senha[i]) {
      touros++;
    }
  }

  for (let i = 0; i < 4; i++) {
    if (tentativa[i] !== senha[i] && senha.includes(tentativa[i])) {
      vacas++;
    }
  }

  return `${touros}T ${vacas}V`;
};

// Valida se a tentativa é válida
const validarTentativa = (valor: string): string | null => {
  if (valor.length !== 4) {
    return 'A senha deve ter exatamente 4 dígitos.';
  }

  if (!/^\d{4}$/.test(valor)) {
    return 'A senha deve conter apenas números.';
  }

  const digitos = new Set(valor);
  if (digitos.size !== 4) {
    return 'Todos os dígitos devem ser diferentes.';
  }

  return null;
};

// Componente principal do jogo
const Jogo = () => {
  const [senha, setSenha] = useState('');
  const [tentativa, setTentativa] = useState('');
  const [tentativas, setTentativas] = useState<Tentativa[]>([]);
  const [jogatinas, setJogatinas] = useState(0);
  const [jogoTerminado, setJogoTerminado] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  // Gera uma nova senha com 4 dígitos únicos
  const gerarSenha = useCallback(() => {
    let novaSenha = '';
    const digitos = '0123456789';

    while (novaSenha.length < 4) {
      const digito = digitos[Math.floor(Math.random() * digitos.length)];
      if (!novaSenha.includes(digito)) {
        novaSenha += digito;
      }
    }

    return novaSenha;
  }, []);

  // Reinicia o jogo
  const novoJogo = useCallback(() => {
    const novaSenha = gerarSenha();
    setSenha(novaSenha);
    setTentativa('');
    setTentativas([]);
    setJogatinas(0);
    setJogoTerminado(false);
    setMensagem('');
    setMostrarSenha(false);
    console.log('Nova senha gerada:', novaSenha);
  }, [gerarSenha]);

  // Inicializa o jogo ao carregar
  useEffect(() => {
    novoJogo();
  }, [novoJogo]);

  // Submete a tentativa do jogador
  const submeterTentativa = () => {
    if (jogoTerminado) return;

    const erro = validarTentativa(tentativa);
    if (erro) {
      alert(erro);
      return;
    }

    const novaJogatina = jogatinas + 1;
    const resultado = calcularResultado(tentativa, senha);

    const novaTentativa: Tentativa = {
      tentativa,
      resultado,
      numero: novaJogatina,
    };

    setTentativas(prev => [novaTentativa, ...prev]);
    setJogatinas(novaJogatina);

    if (tentativa === senha) {
      setJogoTerminado(true);
      setMensagem(
        `🎉 Parabéns! Você acertou a senha em ${novaJogatina} tentativa${novaJogatina > 1 ? 's' : ''}!`
      );
    } else if (novaJogatina >= 10) {
      setJogoTerminado(true);
      setMensagem(`😞 Suas tentativas acabaram! A senha era: ${senha}`);
    }

    setTentativa('');
  };

  // Revela a senha atual
  const revelarSenha = () => {
    alert(`A senha atual é: ${senha}`);
    setMostrarSenha(true);
  };

  // Permite enviar com Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submeterTentativa();
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-6">🎯 Jogo da Senha</h1>

        {mensagem && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6 rounded shadow-inner">
            <p className="font-medium">{mensagem}</p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <label htmlFor="tentativa" className="block text-sm font-medium text-gray-700 mb-2">
            Digite sua tentativa (4 dígitos diferentes):
          </label>
          <input
            id="tentativa"
            type="text"
            value={tentativa}
            onChange={(e) => setTentativa(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ex: 1234"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={jogoTerminado}
          />
          <button
            onClick={submeterTentativa}
            disabled={jogoTerminado}
            className={`mt-3 w-full py-2 px-4 rounded-md text-white font-medium ${
              jogoTerminado ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            Enviar Tentativa
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3">🔢 Tentativas Anteriores</h2>
          {tentativas.length === 0 ? (
            <p className="text-gray-500">Nenhuma tentativa realizada ainda.</p>
          ) : (
            <ul className="space-y-2">
              {tentativas.map((t) => (
                <li key={t.numero} className="flex justify-between border-b pb-1">
                  <span>Tentativa {t.numero}: <strong>{t.tentativa}</strong></span>
                  <span>Resultado: <strong>{t.resultado}</strong></span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={novoJogo}
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition"
          >
            <RotateCcw size={18} />
            <span>Novo Jogo</span>
          </button>

          <button
            onClick={revelarSenha}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <Eye size={18} />
            <span>Revelar senha</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jogo;