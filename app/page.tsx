"use client";

import React, { useState } from 'react';
import { Book, Stethoscope, Coffee, Laptop, Activity, ArrowRight, ArrowUpRight, Package } from 'lucide-react';

export default function MedIndicaPage() {
  // Estado que controla qual aba está visível. Começa no 'calouro'.
  const [abaAtiva, setAbaAtiva] = useState('calouro');

  // ========================================================================
  // 🛒 1. PRODUTOS: KIT CALOURO
  // ========================================================================
  const produtosCalouro = [
    {
      id: 1,
      tag: "SOBREVIVÊNCIA",
      nome: "Garrafa Térmica (Stanley/Lumilagro)",
      descricao: "Essencial para o mate e café nas madrugadas de estudo.",
      precoBase: "250",
      linkAR: "#", // Cole o link do ML Argentina aqui
      linkBR: "#", // Cole o link do ML Brasil aqui
      icone: <Coffee className="w-8 h-8 text-[#E06D53]" />
    }
  ];

  // ========================================================================
  // 🛒 2. PRODUTOS: INICIANTES (1º ao 3º ano)
  // ========================================================================
  const produtosIniciantes = [
    {
      id: 1,
      tag: "ESTUDO",
      nome: "Suporte Ergonômico Notebook",
      descricao: "Salva o seu pescoço nas horas de leitura de Crecimiento y Desarrollo.",
      precoBase: "89",
      linkAR: "#",
      linkBR: "#",
      icone: <Laptop className="w-8 h-8 text-[#19382B]" />
    },
    {
      id: 2,
      tag: "LIVRO",
      nome: "Atlas de Anatomia Humana",
      descricao: "Obrigatório para as aulas práticas de laboratório.",
      precoBase: "450",
      linkAR: "#",
      linkBR: "#",
      icone: <Book className="w-8 h-8 text-[#19382B]" />
    }
  ];

  // ========================================================================
  // 🛒 3. PRODUTOS: AVANÇADOS (4º ano em diante)
  // ========================================================================
  const produtosAvancados = [
    {
      id: 1,
      tag: "OBRIGATÓRIO",
      nome: "Pijama Cirúrgico (Ambo)",
      descricao: "Tecido anti-amasso, perfeito para os plantões.",
      precoBase: "150",
      linkAR: "#",
      linkBR: "#",
      icone: <Activity className="w-8 h-8 text-[#E06D53]" />
    },
    {
      id: 2,
      tag: "CLÍNICA",
      nome: "Estetoscópio Littmann",
      descricao: "A melhor acústica para Semiologia. Investimento para a vida.",
      precoBase: "850",
      linkAR: "#",
      linkBR: "#",
      icone: <Stethoscope className="w-8 h-8 text-[#E06D53]" />
    }
  ];

  // Função para escolher qual lista mostrar baseada na aba ativa
  const obterProdutosDaAba = () => {
    if (abaAtiva === 'calouro') return produtosCalouro;
    if (abaAtiva === 'iniciantes') return produtosIniciantes;
    if (abaAtiva === 'avancados') return produtosAvancados;
    return [];
  };

  const produtosAtuais = obterProdutosDaAba();

  // ========================================================================
  // 🎨 DESIGN DA PÁGINA
  // ========================================================================
  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#19382B] font-sans selection:bg-[#E06D53] selection:text-white pb-24">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b-2 border-[#19382B] border-opacity-10 mb-8">
        <div className="text-2xl font-black tracking-tighter">med.indica</div>
        <div className="hidden md:flex gap-8 text-sm font-semibold">
          <button onClick={() => setAbaAtiva('calouro')} className="hover:text-[#E06D53] transition">Kit Calouro</button>
          <button onClick={() => setAbaAtiva('iniciantes')} className="hover:text-[#E06D53] transition">Iniciantes</button>
          <button onClick={() => setAbaAtiva('avancados')} className="hover:text-[#E06D53] transition">Avançados</button>
        </div>
        <button onClick={() => setAbaAtiva('calouro')} className="bg-[#19382B] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-opacity-90 transition">
          ver ofertas
        </button>
      </nav>

      {/* HERO SECTION COMPACTA (Para as abas aparecerem logo) */}
      <header className="px-8 pb-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-block bg-[#E8D359] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#19382B] mb-6 shadow-[2px_2px_0px_#19382B]">
          A CURADORIA PARA ESTUDANTES DE MEDICINA
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mb-4">
          SEU ATALHO <br/><span className="text-[#E06D53]">PRA MED.</span>
        </h1>
        <p className="text-lg font-medium max-w-xl opacity-80">
          Escolha a sua fase abaixo e encontre os materiais essenciais recomendados.
        </p>
      </header>

      {/* MENU DE ABAS */}
      <div className="px-8 max-w-3xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row gap-4 justify-center bg-white p-2 rounded-3xl border-4 border-[#19382B] shadow-[8px_8px_0px_#19382B]">
          <button 
            onClick={() => setAbaAtiva('calouro')}
            className={`flex-1 py-3 px-6 rounded-2xl font-bold text-sm transition-all border-2 ${abaAtiva === 'calouro' ? 'bg-[#E06D53] text-white border-[#19382B]' : 'bg-transparent border-transparent text-[#19382B] hover:bg-gray-100'}`}
          >
            📦 Kit Calouro
          </button>
          <button 
            onClick={() => setAbaAtiva('iniciantes')}
            className={`flex-1 py-3 px-6 rounded-2xl font-bold text-sm transition-all border-2 ${abaAtiva === 'iniciantes' ? 'bg-[#19382B] text-white border-[#19382B]' : 'bg-transparent border-transparent text-[#19382B] hover:bg-gray-100'}`}
          >
            📚 Iniciantes (1º ao 3º)
          </button>
          <button 
            onClick={() => setAbaAtiva('avancados')}
            className={`flex-1 py-3 px-6 rounded-2xl font-bold text-sm transition-all border-2 ${abaAtiva === 'avancados' ? 'bg-[#E8D359] text-[#19382B] border-[#19382B]' : 'bg-transparent border-transparent text-[#19382B] hover:bg-gray-100'}`}
          >
            🩺 Avançados (4º+)
          </button>
        </div>
      </div>

      {/* LISTA DE PRODUTOS DA ABA ATIVA */}
      <section className="px-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          {produtosAtuais.map((produto) => (
            <div key={produto.id} className="border-4 border-[#19382B] bg-white rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_#19382B]">
              <div className="bg-[#F3EFE7] rounded-2xl p-6 border-2 border-[#19382B]">
                {produto.icone}
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-[#E06D53] text-xs font-black tracking-widest mb-1 uppercase">{produto.tag}</p>
                <h3 className="text-2xl font-black mb-2">{produto.nome}</h3>
                <p className="text-sm font-medium opacity-80 mb-2">{produto.descricao}</p>
                <p className="font-bold text-lg text-[#19382B]">a partir de R$ {produto.precoBase}</p>
              </div>
              <div className="flex flex-col gap-3 w-full sm:w-auto">
                <a href={produto.linkBR} target="_blank" rel="noreferrer" className="bg-[#E06D53] text-white text-sm font-bold px-6 py-3 rounded-full border-2 border-[#19382B] shadow-[2px_2px_0px_#19382B] hover:translate-y-1 hover:shadow-none transition flex items-center justify-center gap-2">
                  Comprar BR <ArrowUpRight className="w-4 h-4" />
                </a>
                 <a href={produto.linkAR} target="_blank" rel="noreferrer" className="bg-white text-[#19382B] text-sm font-bold px-6 py-3 rounded-full border-2 border-[#19382B] shadow-[2px_2px_0px_#19382B] hover:translate-y-1 hover:shadow-none transition flex items-center justify-center gap-2">
                  Comprar AR <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}