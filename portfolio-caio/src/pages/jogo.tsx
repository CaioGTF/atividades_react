import { useState, useEffect, useCallback } from 'react';
import { RotateCcw, Eye, Trophy, AlertCircle } from 'lucide-react';

interface Tentativa {
  tentativa: string;
  resultado: string;
  numero: number;
}

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

const Jogo = () => {
  const [senha, setSenha] = useState('');
  const [tentativa, setTentativa] = useState('');
  const [tentativas, setTentativas] = useState<Tentativa[]>([]);
  const [jogatinas, setJogatinas] = useState(0);
  const [jogoTerminado, setJogoTerminado] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

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

  useEffect(() => {
    novoJogo();
  }, [novoJogo]);

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

  const revelarSenha = () => {
    alert(`A senha atual é: ${senha}`);
    setMostrarSenha(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submeterTentativa();
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* ... o resto do JSX igual ao seu código original */}
      </div>
    </div>
  );
};

export default Jogo;
