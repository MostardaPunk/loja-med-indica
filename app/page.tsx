"use client";

import React, { useState } from 'react';
import { Book, Stethoscope, Coffee, Laptop, Activity, ArrowRight, ArrowUpRight, Globe, Wifi } from 'lucide-react';

export default function MedIndicaPage() {
  const [abaAtiva, setAbaAtiva] = useState('calouro');
  const [idioma, setIdioma] = useState('pt');

  // ========================================================================
  // 🌍 DICIONÁRIO GERAL DO SITE
  // ========================================================================
  const textos = {
    pt: {
      menuVitrines: "Vitrines",
      menuProdutos: "Produtos",
      btnVerOfertas: "ver ofertas",
      tagHero: "A CURADORIA PARA ESTUDANTES DE MEDICINA",
      tituloHero1: "SEU ATALHO",
      tituloHero2: "PRA MED.",
      descHero: "Achados úteis para cada período da faculdade — da primeira aula ao primeiro plantão.",
      tagVitrine: "Encontre a sua fase",
      tituloVitrine: "3 VITRINES.",
      subVitrine: "1 SÓ FOCO: MED.",
      descVitrine: "Conteúdo organizado pela rotina real de quem estuda medicina. Encontre o que precisa e volte para a matéria.",
      aba1: "📦 Kit Calouro",
      aba2: "📚 Iniciantes (1º ao 3º)",
      aba3: "🩺 Avançados (4º+)",
      btnComprar: "Ver Oferta"
    },
    es: {
      menuVitrines: "Vitrinas",
      menuProdutos: "Productos",
      btnVerOfertas: "ver ofertas",
      tagHero: "LA SELECCIÓN PARA ESTUDIANTES DE MEDICINA",
      tituloHero1: "TU ATAJO",
      tituloHero2: "A MED.",
      descHero: "Hallazgos útiles para cada período de la facultad — desde la primera clase hasta la primera guardia.",
      tagVitrine: "Encuentra tu fase",
      tituloVitrine: "3 VITRINAS.",
      subVitrine: "1 SOLO ENFOQUE: MED.",
      descVitrine: "Contenido organizado por la rutina real del estudiante de medicina. Encuentra tu equipo y vuelve a estudiar.",
      aba1: "📦 Kit Ingresante",
      aba2: "📚 Iniciales (1º al 3º)",
      aba3: "🩺 Avanzados (4º+)",
      btnComprar: "Ver Oferta"
    }
  };

  const t = idioma === 'pt' ? textos.pt : textos.es;

  // ========================================================================
  // 🛒 1. SECÇÃO DAS VITRINES
  // ========================================================================
  const vitrines = [
    {
      id: 1,
      fase: "TEMPLATE 01",
      tituloPT: "Começando agora",
      tituloES: "Empezando ahora",
      descricaoPT: "Jaleco e materiais para o ciclo básico.",
      descricaoES: "Ambo y materiales para el ciclo básico.",
      corBg: "bg-[#19382B]",
      corTexto: "text-white",
    },
    {
      id: 2,
      fase: "TEMPLATE 02",
      tituloPT: "Ciclo clínico",
      tituloES: "Ciclo clínico",
      descricaoPT: "Semiologia, instrumentos e bolso do jaleco.",
      descricaoES: "Semiología, instrumentos y bolsillo del ambo.",
      corBg: "bg-[#F3DEB4]",
      corTexto: "text-[#19382B]",
    },
    {
      id: 3,
      fase: "TEMPLATE 03",
      tituloPT: "Internato & plantão",
      tituloES: "Práctica final y guardia",
      descricaoPT: "Conforto e os listados para a rotina hospitalar.",
      descricaoES: "Confort y los listados para la rutina hospitalaria.",
      corBg: "bg-[#AECED2]",
      corTexto: "text-[#19382B]",
    }
  ];

  // ========================================================================
  // 🛒 2. PRODUTOS DAS ABAS INTERATIVAS
  // ========================================================================
  const produtosCalouro = [
    {
      id: 1,
      tagPT: "SOBREVIVÊNCIA",
      tagES: "SUPERVIVENCIA",
      nomePT: "Garrafa Térmica (Stanley/Lumilagro)",
      nomeES: "Termo (Stanley/Lumilagro)",
      descricaoPT: "Essencial para o mate e café nas madrugadas de estudo.",
      descricaoES: "Esencial para el mate y café en las madrugadas de estudio.",
      link: "https://www.mercadolibre.com.ar", 
      icone: <Coffee className="w-8 h-8 text-[#E06D53]" />
    }
  ];

  const produtosIniciantes = [
    {
      id: 1,
      tagPT: "ESTUDO",
      tagES: "ESTUDIO",
      nomePT: "Suporte Ergonômico Notebook",
      nomeES: "Soporte Ergonómico Notebook",
      descricaoPT: "Salva o seu pescoço nas horas de leitura de Crecimiento y Desarrollo.",
      descricaoES: "Salva tu cuello en las horas de lectura de Crecimiento y Desarrollo.",
      link: "#",
      icone: <Laptop className="w-8 h-8 text-[#19382B]" />
    },
    {
      id: 2,
      tagPT: "LIVRO",
      tagES: "LIBRO",
      nomePT: "Atlas de Anatomia Humana",
      nomeES: "Atlas de Anatomía Humana",
      descricaoPT: "Obrigatório para as aulas práticas de laboratório.",
      descricaoES: "Obligatorio para las clases prácticas de laboratorio.",
      link: "#",
      icone: <Book className="w-8 h-8 text-[#19382B]" />
    },
    {
      id: 3,
      tagPT: "CONECTIVIDADE",
      tagES: "CONECTIVIDAD",
      nomePT: "Internet Satélite Starlink Mini X",
      nomeES: "Internet Vía Satélite Starlink Mini X",
      descricaoPT: "Internet rápida em qualquer lugar. Ideal para estudar e ver videoaulas sem interrupções.",
      descricaoES: "Internet rápida en cualquier lugar. Ideal para estudiar y ver clases sin interrupciones.",
      link: "https://meli.la/2o8SYCT", 
      imagem: "/images/starlink.webp",
      icone: <Wifi className="w-8 h-8 text-[#19382B]" />
    }
  ];

  const produtosAvancados = [
    {
      id: 1,
      tagPT: "OBRIGATÓRIO",
      tagES: "OBLIGATORIO",
      nomePT: "Pijama Cirúrgico (Ambo)",
      nomeES: "Ambo Médico",
      descricaoPT: "Tecido anti-amasso, perfeito para os plantões.",
      descricaoES: "Tela antimanchas y antiarrugas, perfecto para las guardias.",
      link: "#",
      icone: <Activity className="w-8 h-8 text-[#E06D53]" />
    },
    {
      id: 2,
      tagPT: "CLÍNICA",
      tagES: "CLÍNICA",
      nomePT: "Estetoscópio Littmann",
      nomeES: "Estetoscopio Littmann",
      descricaoPT: "A melhor acústica para Semiologia. Investimento para a vida.",
      descricaoES: "La mejor acústica para Semiología. Inversión para toda la vida.",
      link: "#",
      icone: <Stethoscope className="w-8 h-8 text-[#E06D53]" />
    }
  ];

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
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto mb-8">
        <div className="text-2xl font-black tracking-tighter">med.indica</div>
        
        <div className="hidden md:flex gap-8 text-sm font-semibold items-center">
          <a href="#vitrines" className="hover:text-[#E06D53] transition">{t.menuVitrines}</a>
          <a href="#loja" className="hover:text-[#E06D53] transition">{t.menuProdutos}</a>
          
          <div className="flex items-center gap-1 bg-white rounded-full p-1 border-2 border-[#19382B] shadow-[2px_2px_0px_#19382B] ml-4">
            <Globe className="w-4 h-4 text-[#19382B] ml-2" />
            <button onClick={() => setIdioma('pt')} className={`px-3 py-1 text-xs font-black rounded-full transition ${idioma === 'pt' ? 'bg-[#19382B] text-white' : 'text-[#19382B] hover:bg-gray-200'}`}>PT</button>
            <button onClick={() => setIdioma('es')} className={`px-3 py-1 text-xs font-black rounded-full transition ${idioma === 'es' ? 'bg-[#19382B] text-white' : 'text-[#19382B] hover:bg-gray-200'}`}>ES</button>
          </div>
        </div>

        <a href="#loja" className="bg-[#19382B] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-opacity-90 transition hidden md:block">
          {t.btnVerOfertas}
        </a>
      </nav>

      {/* MENU MOBILE IDIOMA */}
      <div className="flex justify-center md:hidden mb-8">
         <div className="flex items-center gap-1 bg-white rounded-full p-1 border-2 border-[#19382B] shadow-[2px_2px_0px_#19382B]">
            <Globe className="w-4 h-4 text-[#19382B] ml-2" />
            <button onClick={() => setIdioma('pt')} className={`px-3 py-1 text-xs font-black rounded-full transition ${idioma === 'pt' ? 'bg-[#19382B] text-white' : 'text-[#19382B] hover:bg-gray-200'}`}>PT</button>
            <button onClick={() => setIdioma('es')} className={`px-3 py-1 text-xs font-black rounded-full transition ${idioma === 'es' ? 'bg-[#19382B] text-white' : 'text-[#19382B] hover:bg-gray-200'}`}>ES</button>
          </div>
      </div>

      {/* HERO SECTION */}
      <header className="px-8 pb-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-block bg-[#E8D359] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#19382B] mb-6 shadow-[2px_2px_0px_#19382B]">
          {t.tagHero}
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-[0.9] tracking-tight mb-4 uppercase">
          {t.tituloHero1} <br/><span className="text-[#E06D53]">{t.tituloHero2}</span>
        </h1>
        <p className="text-lg font-medium max-w-xl opacity-80">
          {t.descHero}
        </p>
      </header>

      {/* SECÇÃO 3 VITRINES */}
      <section id="vitrines" className="px-8 py-16 max-w-7xl mx-auto border-t-2 border-[#19382B]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p className="text-[#E06D53] text-xs font-bold tracking-widest uppercase mb-2">{t.tagVitrine}</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase">{t.tituloVitrine}<br/>{t.subVitrine}</h2>
          </div>
          <p className="max-w-xs font-medium text-sm text-right hidden md:block">
            {t.descVitrine}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vitrines.map((vitrine) => (
            <div key={vitrine.id} className="group cursor-pointer">
              <div className={`${vitrine.corBg} ${vitrine.corTexto} p-8 rounded-3xl h-64 border-4 border-[#19382B] shadow-[6px_6px_0px_#19382B] flex flex-col justify-between mb-4 group-hover:-translate-y-2 transition-transform`}>
                <div className="flex justify-between items-center text-xs font-bold opacity-80 uppercase">
                  <span>med.indica</span>
                </div>
                <h3 className="text-4xl font-black leading-none uppercase">
                  {idioma === 'pt' ? vitrine.tituloPT : vitrine.tituloES}
                </h3>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <p className="text-[#E06D53] text-xs font-bold mb-1">{vitrine.fase}</p>
                  <h4 className="font-bold text-lg">{idioma === 'pt' ? vitrine.tituloPT : vitrine.tituloES}</h4>
                  <p className="text-sm font-medium opacity-80">{idioma === 'pt' ? vitrine.descricaoPT : vitrine.descricaoES}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LOJA E MENU DE ABAS INTERATIVAS */}
      <section id="loja" className="bg-[#19382B] py-16 mt-8 border-t-4 border-[#19382B]">
        
        <div className="px-8 max-w-3xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center bg-white p-2 rounded-3xl border-4 border-[#19382B] shadow-[8px_8px_0px_#19382B]">
            <button 
              onClick={() => setAbaAtiva('calouro')}
              className={`flex-1 py-3 px-6 rounded-2xl font-bold text-sm transition-all border-2 ${abaAtiva === 'calouro' ? 'bg-[#E06D53] text-white border-[#19382B]' : 'bg-transparent border-transparent text-[#19382B] hover:bg-gray-100'}`}
            >
              {t.aba1}
            </button>
            <button 
              onClick={() => setAbaAtiva('iniciantes')}
              className={`flex-1 py-3 px-6 rounded-2xl font-bold text-sm transition-all border-2 ${abaAtiva === 'iniciantes' ? 'bg-[#19382B] text-white border-[#19382B]' : 'bg-transparent border-transparent text-[#19382B] hover:bg-gray-100'}`}
            >
              {t.aba2}
            </button>
            <button 
              onClick={() => setAbaAtiva('avancados')}
              className={`flex-1 py-3 px-6 rounded-2xl font-bold text-sm transition-all border-2 ${abaAtiva === 'avancados' ? 'bg-[#E8D359] text-[#19382B] border-[#19382B]' : 'bg-transparent border-transparent text-[#19382B] hover:bg-gray-100'}`}
            >
              {t.aba3}
            </button>
          </div>
        </div>

        {/* LISTA DE PRODUTOS COM BOTÃO ÚNICO */}
        <div className="px-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            {produtosAtuais.map((produto) => (
              <div key={produto.id} className="border-4 border-[#19382B] bg-white rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-6 hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_#19382B]">
                
                <div className="w-24 h-24 bg-[#F3EFE7] rounded-2xl border-2 border-[#19382B] overflow-hidden flex items-center justify-center shrink-0">
                  {produto.imagem ? (
                    <img src={produto.imagem} alt={produto.nomePT} className="w-full h-full object-cover" />
                  ) : (
                    produto.icone
                  )}
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-[#E06D53] text-xs font-black tracking-widest mb-1 uppercase">
                    {idioma === 'pt' ? produto.tagPT : produto.tagES}
                  </p>
                  <h3 className="text-2xl font-black mb-2 text-[#19382B]">
                    {idioma === 'pt' ? produto.nomePT : produto.nomeES}
                  </h3>
                  <p className="text-sm font-medium opacity-80 text-[#19382B]">
                    {idioma === 'pt' ? produto.descricaoPT : produto.descricaoES}
                  </p>
                </div>

                {/* BOTÃO ÚNICO DE COMPRA */}
                <div className="w-full sm:w-auto">
                  <a href={produto.link} target="_blank" rel="noreferrer" className="bg-[#E06D53] text-white text-sm font-bold px-8 py-3 rounded-full border-2 border-[#19382B] shadow-[2px_2px_0px_#19382B] hover:translate-y-1 hover:shadow-none transition flex items-center justify-center gap-2">
                    {t.btnComprar} <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}