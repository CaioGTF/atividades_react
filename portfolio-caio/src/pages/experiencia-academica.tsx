
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const ExperienciaAcademica = () => {
  const educacao = [
    {
      titulo: "Mestrado em Bioinformática",
      instituicao: "Universidade Federal do Rio Grande do Norte (UFRN)",
      periodo: "2025 - Em andamento",
      status: "Cursando",
      descricao: "Programa de pós-graduação focado em análise computacional de dados biológicos, desenvolvimento de algoritmos para bioinformática e aplicações em genômica.",
      cor: "from-blue-500 to-blue-600"
    },
    {
      titulo: "Tecnólogo em Sistemas para Internet",
      instituicao: "Universidade Católica de Pernambuco (UNICAP)",
      periodo: "2024 - Em andamento",
      status: "Cursando",
      descricao: "Formação tecnológica em desenvolvimento web, programação, banco de dados e arquitetura de sistemas para internet.",
      cor: "from-green-500 to-green-600"
    },
    {
      titulo: "Bacharelado em Ciências Biológicas",
      instituicao: "Universidade Federal de Pernambuco (UFPE)",
      periodo: "2020 - 2025",
      status: "Concluído",
      descricao: "Formação completa em ciências biológicas com ênfase em biologia molecular, genética, evolução e bioinformática. Desenvolvimento de projeto de conclusão de curso na área de genética molecular.",
      cor: "from-purple-500 to-purple-600"
    }
  ];

  const competencias = [
    "Análise de Sequências de DNA",
    "Biologia Molecular",
    "Genética",
    "Bioinformática",
    "Filogenia",
    "Evolução Molecular",
    "Desenvolvimento Web",
    "Banco de Dados",
    "Programação",
    "Análise de Dados"
  ];

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Experiência Acadêmica</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Formação multidisciplinar combinando ciências biológicas, bioinformática e tecnologia da informação
          </p>
        </div>

        {/* Timeline de Educação */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Formação Acadêmica</h2>
          <div className="space-y-8">
            {educacao.map((edu, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${edu.cor} rounded-full flex items-center justify-center shadow-lg`}>
                      <GraduationCap className="text-white" size={24} />
                    </div>
                  </div>
                  
                  <div className="flex-grow bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{edu.titulo}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin size={16} className="mr-1" />
                          <span className="text-sm">{edu.instituicao}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center text-gray-500 mb-2">
                          <Calendar size={16} className="mr-1" />
                          <span className="text-sm">{edu.periodo}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          edu.status === 'Concluído' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {edu.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600">{edu.descricao}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Competências Desenvolvidas */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Competências Desenvolvidas</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-6">
              <BookOpen className="text-blue-600 mr-3" size={28} />
              <h3 className="text-xl font-semibold text-gray-900">Áreas de Conhecimento</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {competencias.map((competencia, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 text-center hover:shadow-md transition-shadow"
                >
                  <span className="text-sm font-medium text-gray-700">{competencia}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExperienciaAcademica;
