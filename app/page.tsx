"use client";

import React, { useState } from 'react';
import { Book, Stethoscope, Coffee, Laptop, Activity, ArrowRight, ArrowUpRight, Globe, Wifi, Zap } from 'lucide-react';

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
      imagem: "",
      preco: "Ver Oferta",
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
      imagem: "",
      preco: "Ver Oferta",
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
      imagem: "",
      preco: "Ver Oferta",
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
      imagem: "", // Mantém o símbolo de internet (ícone Wifi)
      preco: "219,000 $",
      icone: <Wifi className="w-8 h-8 text-[#19382B]" />
    },
    {
      id: 4,
      tagPT: "TECNOLOGIA",
      tagES: "TECNOLOGÍA",
      nomePT: "Carregador Rápido para iPhone",
      nomeES: "Cargador Rápido para iPhone",
      descricaoPT: "Essencial para manter o telemóvel carregado durante os plantões e longas horas de estudo.",
      descricaoES: "Esencial para mantener el teléfono cargado durante las guardias y largas horas de estudio.",
      link: "#",
      imagem: "",
      preco: "20,669 $",
      icone: <Zap className="w-8 h-8 text-[#E06D53]" />
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
      imagem: "",
      preco: "Ver Oferta",
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
      imagem: "",
      preco: "Ver Oferta",
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
            <h2 className