import { useState } from 'react';
import { ChevronDown, Github, Briefcase, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [quote] = useState({
    text: 'A ciência é uma forma de pensar muito mais do que um corpo de conhecimento.',
    author: 'Carl Sagan',
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-white/20"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Caio Gabriel
              <span className="block text-blue-600">Tavares Ferreira</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">Analista de Bioinformática</p>

            {/* Citação estática */}
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 mb-8">
              {/* ✅ Usando &quot; ou <q> para evitar erro de lint */}
              <blockquote className="text-lg italic text-gray-700 mb-2">
                <q>{quote.text}</q>
              </blockquote>
              <cite className="text-sm text-gray-500">— {quote.author}</cite>
            </div>
          </div>

          {/* Botões */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link
              href="/projetos"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105"
            >
              <Briefcase className="mr-2" size={20} />
              Ver Projetos
            </Link>
            <Link
              href="/experiencia-academica"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <GraduationCap className="mr-2" size={20} />
              Formação
            </Link>
            <a
              href="https://github.com/CaioGTF" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-all duration-300 hover:scale-105"
            >
              <Github className="mr-2" size={20} />
              GitHub
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Áreas de Atuação</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Bioinformática</h3>
              <p className="text-gray-600">
                Análise de sequências de DNA, desenvolvimento de software para identificação de características genéticas
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Biologia Molecular</h3>
              <p className="text-gray-600">
                Pesquisa em divergências genéticas, análise evolutiva de espécies
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Desenvolvimento</h3>
              <p className="text-gray-600">
                SQL, PL/SQL, desenvolvimento web, automação de processos
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}