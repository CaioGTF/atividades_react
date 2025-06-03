import { GetStaticProps } from 'next';
import { Github, ExternalLink, Code, Dna, Database, Globe } from 'lucide-react';

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
};

type Projeto = {
  titulo: string;
  categoria: string;
  icone: React.ReactNode;
  cor: string;
  descricao: string;
  tecnologias: string[];
  caracteristicas: string[];
};

type Props = {
  repositories: Repo[];
};

// Função que fornece os dados para a página
export const getStaticProps: GetStaticProps<Props> = async () => {
  // Repositórios simulados - substitua por uma API real se quiser
  const repositories: Repo[] = [
    {
      id: 1,
      name: "cat-color-predictor",
      description: "Software de identificação de cor de gatos usando machine learning.",
      html_url: "https://github.com/CaioGTF/cat-color-predictor", 
      language: "Python",
      stargazers_count: 10,
    },
    {
      id: 2,
      name: "mtsearch",
      description: "Ferramenta para extração de genes mitocondriais de arquivos GenBank.",
      html_url: "https://github.com/CaioGTF/mtsearch", 
      language: "Python",
      stargazers_count: 8,
    },
    {
      id: 3,
      name: "delfinder",
      description: "Pipeline para detecção de deleções em sequências genéticas.",
      html_url: "https://github.com/CaioGTF/delfinder", 
      language: "Python",
      stargazers_count: 15,
    },
  ];

  return {
    props: {
      repositories,
    },
  };
};

const Projetos = ({ repositories }: Props) => {
  const projetos = [
    {
      titulo: "Software de Identificação de Cor em Felinos",
      categoria: "Bioinformática",
      icone: <Dna className="text-white" size={24} />,
      cor: "from-blue-500 to-blue-600",
      descricao:
        "Desenvolvimento de software inovador capaz de predizer a cor de felinos selvagens (jaguarundi e panteras) baseado exclusivamente na análise de sequências de DNA.",
      tecnologias: ["Python", "Biopython", "Machine Learning", "Análise de Sequências"],
      caracteristicas: [
        "Análise de genes relacionados à pigmentação",
        "Algoritmos de predição baseados em padrões genéticos",
        "Interface amigável para inserção de sequências",
        "Banco de dados de referência genética",
        "Relatórios detalhados de análise",
      ],
    },
    {
      titulo: "Análise de Divergências Genéticas em Serpentes",
      categoria: "Pesquisa Molecular",
      icone: <Code className="text-white" size={24} />,
      cor: "from-green-500 to-green-600",
      descricao:
        "Estudo detalhado das divergências genéticas entre as espécies Philodryas nattereri e Oxybelis aeneus, contribuindo para o entendimento da evolução molecular desses ofídios.",
      tecnologias: ["R", "MEGA", "BLAST", "Filogenia Molecular"],
      caracteristicas: [
        "Sequenciamento de DNA mitocondrial",
        "Análise filogenética comparativa",
        "Cálculo de divergência evolutiva",
        "Construção de árvores filogenéticas",
        "Documentação científica completa",
      ],
    },
    {
      titulo: "Sistema de Controle de Funcionários",
      categoria: "Desenvolvimento Empresarial",
      icone: <Database className="text-white" size={24} />,
      cor: "from-purple-500 to-purple-600",
      descricao:
        "Sistema robusto desenvolvido para a Ferreira Costa para automatizar e controlar o fluxo de funcionários novos e antigos, melhorando a eficiência dos processos de RH.",
      tecnologias: ["PL/SQL", "Oracle Database", "SQL", "Stored Procedures"],
      caracteristicas: [
        "Pacotes PL/SQL para automação",
        "Procedures para gestão de dados",
        "Funções de controle de fluxo",
        "Relatórios automatizados",
        "Interface de administração",
      ],
    },
    {
      titulo: "Portfólio Interativo",
      categoria: "Desenvolvimento Web",
      icone: <Globe className="text-white" size={24} />,
      cor: "from-orange-500 to-orange-600",
      descricao:
        "Portfólio pessoal desenvolvido em React com design moderno, integração de APIs externas e funcionalidades interativas incluindo um jogo da senha.",
      tecnologias: ["React", "TypeScript", "Tailwind CSS", "APIs REST"],
      caracteristicas: [
        "Design responsivo e moderno",
        "Integração com APIs externas",
        "Jogo da senha interativo",
        "Navegação SPA fluida",
        "Animações e transições",
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projetos Desenvolvidos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Portfólio de projetos multidisciplinares combinando bioinformática, desenvolvimento de software e pesquisa científica
          </p>
        </div>

        {/* Projetos Principais */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Projetos Destacados</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projetos.map((projeto, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`bg-gradient-to-r ${projeto.cor} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">{projeto.icone}</div>
                    <div>
                      <h3 className="text-xl font-bold">{projeto.titulo}</h3>
                      <span className="text-sm opacity-90">{projeto.categoria}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-4">{projeto.descricao}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {projeto.tecnologias.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Características:</h4>
                    <ul className="space-y-1">
                      {projeto.caracteristicas.slice(0, 3).map((caracteristica, carIndex) => (
                        <li key={carIndex} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span className="text-gray-600 text-sm">{caracteristica}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Repositórios GitHub */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Repositórios GitHub</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {repositories.map((repo) => (
              <div
                key={repo.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{repo.name}</h3>
                  <div className="flex items-center text-gray-500">
                    <Github size={16} className="mr-1" />
                    <span className="text-sm">{repo.stargazers_count}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{repo.description}</p>

                <div className="flex items-center justify-between">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
                    {repo.language}
                  </span>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-700"
                  >
                    <ExternalLink size={14} className="mr-1" />
                    <span className="text-sm">Ver no GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projetos;