"use client";

import React, { useState } from 'react';
import { Search, ShoppingBag, User, Heart, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function MedIndicaPage() {
  const [filtroCategoria, setFiltroCategoria] = useState('todos');

  // ========================================================================
  // 🛒 CATÁLOGO DE PRODUTOS ALinhado COM O DESIGN
  // ========================================================================
  const produtos = [
    {
      id: 1,
      categoria: 'tecnologias',
      tag: "Tecnologías",
      nome: "Auriculares Inalámbricos AirPods Pro",
      descricao: "Cancelación activa de ruido y audio espacial para pausas de estudio.",
      preco: "$ 149.990 ARS",
      link: "https://www.mercadolibre.com.ar",
      imagem: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      categoria: 'tecnologias',
      tag: "Tecnologías",
      nome: "Cargador iPhone 20W + Cable",
      descricao: "Carga rápida esencial para mantener el celular activo en guardias.",
      preco: "$ 39.990 ARS",
      link: "https://meli.la/1Bprs57",
      imagem: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      categoria: 'vestuario',
      tag: "Vestuario",
      nome: "Ambo Médico Unisex Talle M",
      descricao: "Tela antimanchas y antiarrugas, perfecto para prácticas y guardias.",
      preco: "$ 54.900 ARS",
      link: "https://www.mercadolibre.com.ar",
      imagem: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      categoria: 'diversos',
      tag: "Diversos",
      nome: "Mochila Universitaria Resistente",
      descricao: "Espaciosa, compartimiento para notebook y libros pesados.",
      preco: "$ 42.990 ARS",
      link: "https://www.mercadolibre.com.ar",
      imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      categoria: 'libros',
      tag: "Libros",
      nome: "Gray's Anatomy (Edición en Español)",
      descricao: "El clásico fundamental para el estudio profundo de anatomía humana.",
      preco: "$ 89.990 ARS",
      link: "https://meli.la/2hFFZs3",
      imagem: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 6,
      categoria: 'tecnologias',
      tag: "Tecnologías",
      nome: "Internet Satelital Starlink Mini",
      descricao: "Conectividad de alta velocidad en cualquier lugar de estudio.",
      preco: "219.000 $",
      link: "https://meli.la/2o8SYCT",
      imagem: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 7,
      categoria: 'diversos',
      tag: "Diversos",
      nome: "Termo Stanley / Lumilagro",
      descricao: "Mantiene el agua caliente durante toda la jornada de cursada o biblioteca.",
      preco: "156.000 $",
      link: "https://meli.la/26EHLpY",
      imagem: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 8,
      categoria: 'tecnologias',
      tag: "Tecnologías",
      nome: "Soporte Ergonómico Notebook",
      descricao: "Evita dolores cervicales durante las largas horas de lectura.",
      preco: "10.199 $",
      link: "https://meli.la/2eQLC4N",
      imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60"
    }
  ];

  const produtosFiltrados = filtroCategoria === 'todos' 
    ? produtos 
    : produtos.filter(p => p.categoria === filtroCategoria);

  return (
    <div className="min-h-screen bg-[#19382B] text-white font-sans selection:bg-[#E06D53] selection:text-white pb-24">
      
      {/* HEADER / NAVBAR SUPERIOR */}
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="bg-[#E8D359] text-[#19382B] p-1.5 rounded-lg font-black text-lg">+</div>
          <div>
            <span className="text-xl font-black tracking-tighter">med.indica.</span>
            <span className="block text-[9px] font-bold tracking-wider opacity-70 uppercase">EL KIT EXTRAOFICIAL DE LA FACU</span>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-semibold items-center">
          <a href="#" className="hover:text-[#E8D359] transition">Inicio</a>
          <a href="#categorias" onClick={() => setFiltroCategoria('tecnologias')} className="hover:text-[#E8D359] transition">Tecnologías</a>
          <a href="#categorias" onClick={() => setFiltroCategoria('vestuario')} className="hover:text-[#E8D359] transition">Vestuario</a>
          <a href="#categorias" onClick={() => setFiltroCategoria('diversos')} className="hover:text-[#E8D359] transition">Diversos</a>
          <a href="#categorias" onClick={() => setFiltroCategoria('libros')} className="hover:text-[#E8D359] transition">Libros</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs text-white">
            <Search className="w-3.5 h-3.5 opacity-50 mr-2" />
            <input type="text" placeholder="Buscar productos..." className="bg-transparent outline-none w-32 placeholder-white/50 text-white" />
          </div>
          <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-[#E8D359] transition" />
          <User className="w-5 h-5 cursor-pointer hover:text-[#E8D359] transition" />
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="px-8 py-10 max-w-7xl mx-auto">
        <div className="bg-[#142d22] border-2 border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-xl">
          
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-40 hidden md:block">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80" alt="Medicina" className="w-full h-full object-cover rounded-r-3xl" />
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="inline-block bg-[#E8D359] text-[#19382B] text-xs font-black px-3 py-1 rounded-full mb-6">
              01 / CURSADA MODE: ACTIVADO
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight mb-4 uppercase">
              ESTUDIÁ CON OTRA <span className="text-[#E06D53]">ENERGÍA.</span>
            </h1>
            <p className="text-base md:text-lg font-medium opacity-90 mb-8 text-gray-200">
              Tecnología, libros, vestuario y hallazgos para hacer más fácil la vida universitaria.
            </p>

            {/* BOTÕES DE ATALHO RÁPIDO */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a href="#productos" onClick={() => setFiltroCategoria('tecnologias')} className="bg-[#E06D53] hover:bg-[#d05c44] text-white rounded-2xl p-3 text-xs font-bold flex items-center justify-between transition">
                TECNOLOGÍAS <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="#productos" onClick={() => setFiltroCategoria('vestuario')} className="bg-[#E8D359] hover:bg-[#d5bf4e] text-[#19382B] rounded-2xl p-3 text-xs font-bold flex items-center justify-between transition">
                VESTUARIO <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="#productos" onClick={() => setFiltroCategoria('diversos')} className="bg-[#AECED2] hover:bg-[#96b8bd] text-[#19382B] rounded-2xl p-3 text-xs font-bold flex items-center justify-between transition">
                DIVERSOS <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="#productos" onClick={() => setFiltroCategoria('libros')} className="bg-[#F3DEB4] hover:bg-[#e0cc9f] text-[#19382B] rounded-2xl p-3 text-xs font-bold flex items-center justify-between transition">
                LIBROS <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* EXPLORÁ POR CATEGORÍA */}
      <section id="categorias" className="px-8 py-10 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">Explorá por categoría</h2>
            <p className="text-sm font-medium opacity-80">Todo lo que necesitás, en un solo lugar.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div onClick={() => setFiltroCategoria('tecnologias')} className="bg-[#142d22] text-white p-6 rounded-3xl border-2 border-white/10 cursor-pointer hover:-translate-y-1 transition group">
            <div className="h-40 rounded-2xl mb-4 overflow-hidden bg-white/10">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" alt="Tecnología" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <h3 className="text-xl font-black uppercase mb-1">Tecnologías</h3>
            <p className="text-xs opacity-80 mb-4">Auriculares, cargadores, soportes y más.</p>
            <div className="flex justify-end"><ArrowRight className="w-5 h-5 bg-[#E06D53] p-1 rounded-full text-white" /></div>
          </div>

          {/* Card 2 */}
          <div onClick={() => setFiltroCategoria('vestuario')} className="bg-[#E06D53] text-white p-6 rounded-3xl border-2 border-white/10 cursor-pointer hover:-translate-y-1 transition group">
            <div className="h-40 rounded-2xl mb-4 overflow-hidden bg-white/10">
              <img src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60" alt="Vestuario" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <h3 className="text-xl font-black uppercase mb-1">Vestuario</h3>
            <p className="text-xs opacity-80 mb-4">Ambos, calzado, ropa cómoda y accesorios.</p>
            <div className="flex justify-end"><ArrowRight className="w-5 h-5 bg-[#19382B] p-1 rounded-full text-white" /></div>
          </div>

          {/* Card 3 */}
          <div onClick={() => setFiltroCategoria('diversos')} className="bg-[#AECED2] text-[#19382B] p-6 rounded-3xl border-2 border-white/10 cursor-pointer hover:-translate-y-1 transition group">
            <div className="h-40 rounded-2xl mb-4 overflow-hidden bg-white/10">
              <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60" alt="Diversos" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <h3 className="text-xl font-black uppercase mb-1">Diversos</h3>
            <p className="text-xs opacity-80 mb-4">Mochilas, termos, organizadores y más.</p>
            <div className="flex justify-end"><ArrowRight className="w-5 h-5 bg-[#19382B] p-1 rounded-full text-white" /></div>
          </div>

          {/* Card 4 */}
          <div onClick={() => setFiltroCategoria('libros')} className="bg-[#F3DEB4] text-[#19382B] p-6 rounded-3xl border-2 border-white/10 cursor-pointer hover:-translate-y-1 transition group">
            <div className="h-40 rounded-2xl mb-4 overflow-hidden bg-white/10">
              <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60" alt="Libros" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <h3 className="text-xl font-black uppercase mb-1">Libros</h3>
            <p className="text-xs opacity-80 mb-4">Anatomía, fisiología, patología y mucho más.</p>
            <div className="flex justify-end"><ArrowRight className="w-5 h-5 bg-[#19382B] p-1 rounded-full text-white" /></div>
          </div>

        </div>
      </section>

      {/* PRODUCTOS DESTACADOS & FILTROS */}
      <section id="productos" className="px-8 py-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight uppercase">Productos destacados</h2>
            <p className="text-sm font-medium opacity-80">Los más elegidos por estudiantes de medicina.</p>
          </div>

          {/* FILTROS TIPO PILULA */}
          <div className="flex flex-wrap gap-2 bg-[#142d22] p-2 rounded-2xl border border-white/10">
            <button onClick={() => setFiltroCategoria('todos')} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${filtroCategoria === 'todos' ? 'bg-[#E8D359] text-[#19382B]' : 'text-white hover:bg-white/10'}`}>Todos</button>
            <button onClick={() => setFiltroCategoria('tecnologias')} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${filtroCategoria === 'tecnologias' ? 'bg-[#E8D359] text-[#19382B]' : 'text-white hover:bg-white/10'}`}>Tecnologías</button>
            <button onClick={() => setFiltroCategoria('vestuario')} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${filtroCategoria === 'vestuario' ? 'bg-[#E8D359] text-[#19382B]' : 'text-white hover:bg-white/10'}`}>Vestuario</button>
            <button onClick={() => setFiltroCategoria('diversos')} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${filtroCategoria === 'diversos' ? 'bg-[#E8D359] text-[#19382B]' : 'text-white hover:bg-white/10'}`}>Diversos</button>
            <button onClick={() => setFiltroCategoria('libros')} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${filtroCategoria === 'libros' ? 'bg-[#E8D359] text-[#19382B]' : 'text-white hover:bg-white/10'}`}>Libros</button>
          </div>
        </div>

        {/* GRADE DE PRODUTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {produtosFiltrados.map((produto) => (
            <div key={produto.id} className="bg-[#142d22] border-2 border-white/10 rounded-3xl p-5 flex flex-col justify-between shadow-lg hover:-translate-y-1 transition group">
              <div>
                <div className="relative h-48 bg-white/5 rounded-2xl border border-white/10 mb-4 overflow-hidden flex items-center justify-center">
                  <img src={produto.imagem} alt={produto.nome} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  <button className="absolute top-3 right-3 bg-[#19382B] p-2 rounded-full border border-white/20 hover:bg-white/20 transition">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                </div>

                <p className="text-[#E8D359] text-xs font-black uppercase mb-1">{produto.tag}</p>
                <h3 className="text-lg font-black text-white mb-2 leading-tight">{produto.nome}</h3>
                <p className="text-xs font-medium text-gray-300 opacity-90 mb-4">{produto.descricao}</p>
              </div>

              <div>
                <div className="text-xl font-black text-white mb-4">{produto.preco}</div>
                <a 
                  href={produto.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full bg-[#E8D359] hover:bg-[#d5bf4e] text-[#19382B] text-xs font-bold py-3 rounded-xl transition flex items-center justify-center gap-2"
                >
                  Ver en Mercado Libre <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER / BANNER DE CONFIANÇA */}
      <section className="px-8 max-w-7xl mx-auto mt-16">
        <div className="bg-[#142d22] border-2 border-white/10 text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-black uppercase">Tu futuro también se prepara acá</h3>
            <p className="text-xs text-gray-300">Envíos seguros e integrados con Mercado Libre.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold opacity-90">
            <span>📦 Envíos a toda Argentina</span>
            <span>🔒 Compra segura en Mercado Libre</span>
            <span>💳 Pagos en cuotas</span>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="mt-16 border-t border-white/10 py-8 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-gray-300">
        <div className="flex items-center gap-2">
          <div className="bg-[#E8D359] text-[#19382B] p-1 rounded font-black">+</div>
          <span>med.indica — El kit extraoficial de la facu</span>
        </div>
        <div className="opacity-90">
          Estudiantes de hoy, médicos del mañana ♡
        </div>
      </footer>

    </div>
  );
}