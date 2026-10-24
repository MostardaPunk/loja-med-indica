import React from 'react';
import { Book, Stethoscope, Coffee, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function MedIndicaPage() {
  // ========================================================================
  // 🛒 SUAS "ABAS EM BRANCO" - COLOQUE SEUS LINKS DO MERCADO LIVRE AQUI
  // ========================================================================
  
  const vitrines = [
    {
      id: 1,
      fase: "TEMPLATE 01",
      titulo: "Começando agora",
      descricao: "Jaleco e materiais para o ciclo básico.",
      linkGeral: "#", // Cole o link da sua lista do Mercado Livre aqui
      corBg: "bg-[#19382B]",
      corTexto: "text-white",
    },
    {
      id: 2,
      fase: "TEMPLATE 02",
      titulo: "Ciclo clínico",
      descricao: "Semiologia, instrumentos e bolso do jaleco.",
      linkGeral: "#",
      corBg: "bg-[#F3DEB4]",
      corTexto: "text-[#19382B]",
    },
    {
      id: 3,
      fase: "TEMPLATE 03",
      titulo: "Internato & plantão",
      descricao: "Conforto e os listados para a rotina hospitalar.",
      linkGeral: "#",
      corBg: "bg-[#AECED2]",
      corTexto: "text-[#19382B]",
    }
  ];

  const produtosKitCalouro = [
    {
      id: 1,
      tag: "ESSENCIAL",
      nome: "Kit Anatomia",
      descricao: "Jaleco e cadernos de desenhos e marcadores",
      precoBase: "189",
      linkAR: "#", // Link Mercado Libre Argentina
      linkBR: "#", // Link Mercado Livre Brasil
      icone: <Book className="w-8 h-8 text-[#E06D53]" />
    },
    {
      id: 2,
      tag: "MAIS VENDIDO",
      nome: "Plantão Ready",
      descricao: "Esfigmo + oxímetro + lanterna clínica",
      precoBase: "329",
      linkAR: "#",
      linkBR: "#",
      icone: <Stethoscope className="w-8 h-8 text-[#19382B]" />
    },
    {
      id: 3,
      tag: "VIDA REAL",
      nome: "Sobrevive Aí",
      descricao: "Garrafa térmica e café de emergência",
      precoBase: "119",
      linkAR: "#",
      linkBR: "#",
      icone: <Coffee className="w-8 h-8 text-[#E06D53]" />
    }
  ];

  // ========================================================================
  // 🎨 DESIGN DA PÁGINA (NÃO PRECISA MEXER AQUI SE NÃO QUISER)
  // ========================================================================

  return (
    <div className="min-h-screen bg-[#F3EFE7] text-[#19382B] font-sans selection:bg-[#E06D53] selection:text-white">
      
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter">med.indica</div>
        <div className="hidden md:flex gap-8 text-sm font-semibold">
          <a href="#vitrines" className="hover:text-[#E06D53] transition">Por período</a>
          <a href="#kit" className="hover:text-[#E06D53] transition">Kit calouro</a>
          <a href="#" className="hover:text-[#E06D53] transition">Como funciona</a>
        </div>
        <a href="#kit" className="bg-[#19382B] text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-opacity-90 transition">
          ver ofertas
        </a>
      </nav>

      {/* HERO SECTION */}
      <header className="px-8 pt-12 pb-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-block bg-[#E8D359] text-xs font-bold px-3 py-1 rounded-full border-2 border-[#19382B] mb-6 shadow-[2px_2px_0px_#19382B]">
            A CURADORIA PARA ESTUDANTES DE MEDICINA
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tight mb-6">
            SEU <br/>ATALHO <br/><span className="text-[#E06D53]">PRA MED.</span>
          </h1>
          <p className="text-lg font-medium max-w-md mb-8">
            Achados úteis para cada período da faculdade — da primeira aula ao primeiro plantão. 
            Pesquisados, organizados e sem enrolação.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#kit" className="bg-[#E06D53] text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-opacity-90 transition shadow-[4px_4px_0px_#19382B] border-2 border-[#19382B]">
              Ver kit de calouro <ArrowRight className="w-5 h-5" />
            </a>
            <span className="text-xs font-bold uppercase tracking-widest max-w-[120px] leading-tight">
              Tudo para quem vive de aula, lida e café
            </span>
          </div>
        </div>
        
        {/* Ilustrações do Hero */}
        <div className="relative h-[400px] hidden md:block">
          <div className="absolute top-10 right-10 bg-white border-4 border-[#19382B] rounded-2xl p-6 w-64 shadow-[8px_8px_0px_#19382B] rotate-3 z-10">
             <Stethoscope className="w-24 h-24 text-[#19382B] mx-auto mb-4" />
             <div className="bg-[#E8D359] text-center font-bold text-xs py-1 rounded border-2 border-[#19382B]">Sobrevivência</div>
          </div>
          <div className="absolute top-32 left-10 bg-white border-4 border-[#19382B] rounded-2xl p-6 w-56 shadow-[8px_8px_0px_#19382B] -rotate-6">
             <Book className="w-20 h-20 text-[#E06D53] mx-auto mb-4" />
             <div className="bg-gray-200 text-center font-bold text-xs py-1 rounded border-2 border-[#19382B]">Ross & Latarjet</div>
          </div>
        </div>
      </header>

      {/* VITRINES SECTION */}
      <section id="vitrines" className="px-8 py-20 max-w-7xl mx-auto border-t-2 border-[#19382B]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <p className="text-[#E06D53] text-xs font-bold tracking-widest uppercase mb-2">Encontre a sua fase</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">3 VITRINES.<br/>1 SÓ FOCO: MED.</h2>
          </div>
          <p className="max-w-xs font-medium text-sm text-right hidden md:block">
            Conteúdo organizado pela rotina real de quem estuda medicina. 
            Encontre o que precisa e volte para a matéria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vitrines.map((vitrine) => (
            <div key={vitrine.id} className="group cursor-pointer">
              <div className={`${vitrine.corBg} ${vitrine.corTexto} p-8 rounded-3xl h-64 border-4 border-[#19382B] shadow-[6px_6px_0px_#19382B] flex flex-col justify-between mb-4 group-hover:-translate-y-2 transition-transform`}>
                <div className="flex justify-between items-center text-xs font-bold opacity-80 uppercase">
                  <span>med.indica</span>
                  <span>Mental · Físico · Sobrevivência</span>
                </div>
                <h3 className="text-4xl font-black leading-none uppercase">{vitrine.titulo}</h3>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <p className="text-[#E06D53] text-xs font-bold mb-1">{vitrine.fase}</p>
                  <h4 className="font-bold text-lg">{vitrine.titulo}</h4>
                  <p className="text-sm font-medium opacity-80">{vitrine.descricao}</p>
                </div>
                <a href={vitrine.linkGeral} className="bg-white border-2 border-[#19382B] rounded-full p-1 hover:bg-[#E06D53] hover:text-white transition">
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KIT CALOURO SECTION */}
      <section id="kit" className="bg-[#19382B] text-[#F3EFE7] px-8 py-24 mt-12 border-y-4 border-[#19382B]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="inline-block bg-[#E8D359] text-[#19382B] text-xs font-bold px-3 py-1 rounded-full mb-6">
              CHECKLIST APROVADA
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-8">
              KIT <br/>SOBREVIVÊNCIA <br/><span className="text-[#E06D53]">DO CALOURO.</span>
            </h2>
            <p className="text-lg font-medium max-w-sm opacity-90">
              O que você realmente precisa para começar — sem comprar metade da papelaria e se arrepender depois.
            </p>
          </div>

          <div className="space-y-6">
            {produtosKitCalouro.map((produto) => (
              <div key={produto.id} className="border-2 border-[#416252] bg-[#224434] rounded-2xl p-4 flex items-center gap-6 hover:border-[#E06D53] transition">
                <div className="text-4xl font-black text-[#416252] w-12 text-center">0{produto.id}</div>
                <div className="bg-[#F3EFE7] rounded-xl p-4 border-2 border-[#19382B] hidden sm:block">
                  {produto.icone}
                </div>
                <div className="flex-1">
                  <p className="text-[#E8D359] text-xs font-bold tracking-widest mb-1">{produto.tag}</p>
                  <h3 className="text-xl font-bold text-white mb-1">{produto.nome}</h3>
                  <p className="text-sm opacity-80 mb-2">{produto.descricao}</p>
                  <p className="font-bold text-lg text-white">a partir de R$ {produto.precoBase}</p>
                </div>
                <div className="flex flex-col gap-2">
                   {/* Botão Brasil */}
                  <a href={produto.linkBR} className="bg-[#E06D53] text-white text-xs font-bold px-4 py-2 rounded-full border-2 border-[#19382B] shadow-[2px_2px_0px_#19382B] hover:translate-y-1 hover:shadow-none transition flex items-center justify-center gap-1">
                    BR <ArrowUpRight className="w-3 h-3" />
                  </a>
                  {/* Botão Argentina */}
                   <a href={produto.linkAR} className="bg-white text-[#19382B] text-xs font-bold px-4 py-2 rounded-full border-2 border-[#19382B] shadow-[2px_2px_0px_#19382B] hover:translate-y-1 hover:shadow-none transition flex items-center justify-center gap-1">
                    AR <ArrowUpRight className="w-3 h-3" />
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