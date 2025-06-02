import { LucideIcon, Briefcase, Calendar, MapPin, Code, Microscope, Database } from 'lucide-react';

type Experiencia = {
  cargo: string;
  empresa: string;
  periodo: string;
  icone:  LucideIcon;
  cor: string;
  descricao: string;
  atividades: string[];
};

const experiencias: Experiencia[] = [
  {
    cargo: "Residente Tecnológico - Embarque Digital",
    empresa: "Ferreira Costa",
    periodo: "Período recente",
    icone: Database,
    cor: "from-indigo-500 to-indigo-600",
    descricao: "Desenvolvimento e manutenção de sistemas para controle de fluxo de funcionários novos e antigos na empresa.",
    atividades: [
      "Construção de pacotes em PL/SQL para automação de processos",
      "Desenvolvimento de procedures para gestão de dados de funcionários",
      "Criação de funções SQL para controle de fluxo organizacional",
      "Otimização de consultas e performance de banco de dados",
      "Integração de sistemas internos da empresa"
    ]
  },
  {
    cargo: "Técnico de Laboratório - Soroteca",
    empresa: "DB Diagnósticos",
    periodo: "Período anterior",
    icone: Microscope,
    cor: "from-green-500 to-green-600",
    descricao: "Trabalho especializado na soroteca, responsável pelo armazenamento, catalogação e controle de qualidade de amostras sorológicas.",
    atividades: [
      "Armazenamento adequado de soros e plasmas em condições controladas",
      "Catalogação e rastreabilidade de amostras sorológicas",
      "Controle de qualidade e integridade das amostras",
      "Manutenção de equipamentos de refrigeração e congelamento",
      "Preparação de alíquotas e distribuição de amostras para análise",
      "Registro e documentação de procedimentos conforme normas laboratoriais"
    ]
  },
  {
    cargo: "Biólogo Molecular",
    empresa: "Projeto de Pesquisa - UFPE",
    periodo: "Período de desenvolvimento",
    icone: Code,
    cor: "from-purple-500 to-purple-600",
    descricao: "Pesquisa em genética molecular focada na análise de divergências genéticas entre espécies de serpentes.",
    atividades: [
      "Análise de divergências genéticas em Philodryas nattereri",
      "Estudo evolutivo de Oxybelis aeneus",
      "Sequenciamento e análise de DNA mitocondrial",
      "Filogenia molecular e análise evolutiva",
      "Documentação científica dos resultados da pesquisa"
    ]
  },
  {
    cargo: "Iniciação Científica (IC)",
    empresa: "Laboratório de Bioinformática e Biologia Evolutiva - UFPE",
    periodo: "Primeiro projeto",
    icone: Code,
    cor: "from-blue-500 to-blue-600",
    descricao: "Desenvolvimento de software inovador para identificação de características fenotípicas através de análise genética.",
    atividades: [
      "Desenvolvimento de software para análise de DNA",
      "Implementação de algoritmos para identificação de cor em felinos selvagens",
      "Análise genética de jaguarundi (Herpailurus yagouaroundi)",
      "Estudo de genes relacionados à pigmentação em panteras",
      "Correlação entre sequências de DNA e características fenotípicas"
    ]
  }
];

const ExperienciaProfissional = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Experiência Profissional</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trajetória profissional diversificada combinando pesquisa científica, desenvolvimento de software e análises laboratoriais
          </p>
        </div>

        <div className="space-y-8">
          {experiencias.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                {/* Ícone e informações principais */}
                <div className={`md:w-1/3 bg-gradient-to-r ${exp.cor} p-6 text-white`}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{exp.cargo}</h3>
                      <div className="flex items-center mt-1">
                        <MapPin size={14} className="mr-1" />
                        <span className="text-sm opacity-90">{exp.empresa}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    <span className="text-sm opacity-90">{exp.periodo}</span>
                  </div>
                </div>

                {/* Descrição e atividades */}
                <div className="md:w-2/3 p-6">
                  <p className="text-gray-600 mb-4">{exp.descricao}</p>
                  
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Briefcase size={16} className="mr-2" />
                    Principais Atividades:
                  </h4>
                  <ul className="space-y-2">
                    {exp.atividades.map((atividade, atIndex) => (
                      <li key={atIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 text-sm">{atividade}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumo de habilidades */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Habilidades Desenvolvidas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Desenvolvimento</h3>
              <p className="text-gray-600 text-sm">PL/SQL, SQL, Python, desenvolvimento de software científico</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Laboratório</h3>
              <p className="text-gray-600 text-sm">Técnicas laboratoriais, controle de qualidade, gestão de amostras</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold mb-2">Pesquisa</h3>
              <p className="text-gray-600 text-sm">Bioinformática, análise genética, pesquisa científica</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienciaProfissional;




