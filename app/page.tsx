"use client";

import React, { useState } from 'react';
import { Search, User, ShoppingBag, Heart, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function MedIndicaPage() {
  const [filtroCategoria, setFiltroCategoria] = useState('todos');

  // ========================================================================
  // 🛒 PRODUTOS DO CATÁLOGO COM IMAGEM ESTÁVEL
  // ========================================================================
  const produtos = [
    {
      id: 1,
      categoria: 'tecnologias',
      tag: "Tecnologías",
      nome: "Kit De Internet Vía Satélite Starlink Mini X",
      descricao: "Conectividad de alta velocidad en cualquier lugar de estudio.",
      preco: "$ 219.000",
      link: "https://meli.la/2o8SYCT",
      imagem: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 2,
      categoria: 'tecnologias',
      tag: "Tecnologías",
      nome: "Soporte Notebook Laptop Stand Elevador Ergonómico Shoply Gris",
      descricao: "Evita dolores cervicales durante las largas horas de lectura.",
      preco: "$ 10.199",
      link: "https://meli.la/2eQLC4N",
      imagem: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 3,
      categoria: 'diversos',
      tag: "Diversos",
      nome: "Termo Clasico 1.4 Lts. Asa Plegable Negro 2.0",
      descricao: "Mantiene el agua caliente durante toda la jornada de cursada o biblioteca.",
      preco: "$ 156.000",
      link: "https://meli.la/26EHLpY",
      imagem: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 4,
      categoria: 'libros',
      tag: "Libros",
      nome: "Mini Netter Atlas de Anatomía Humana",
      descricao: "De Frank H. Netter, Md. Editorial Elsevier, Tapa Blanda En Español.",
      preco: "$ 65.000",
      link: "https://meli.la/2hFFZs3",
      imagem: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 5,
      categoria: 'tecnologias',
      tag: "Tecnologías",
      nome: "Cargador iphone Apple 20W USB-C a Lightning Carga Rápida",
      descricao: "Carga rápida esencial para mantener el celular activo en guardias.",
      preco: "$ 20.669",
      link: "https://meli.la/1Bprs57",
      imagem: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 6,
      categoria: 'vestuario',
      tag: "Vestuario",
      nome: "Ambo Médico Unisex Talle M",
      descricao: "Tela antimanchas y antiarrugas, perfecto para prácticas y guardias.",
      preco: "$ 54.900 ARS",
      link: "https://www.mercadolibre.com.ar",
      imagem: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 7,
      categoria: 'diversos',
      tag: "Diversos",
      nome: "Mochila Universitaria Resistente",
      descricao: "Espaciosa, compartimiento para notebook y libros pesados.",
      preco: "$ 42.990 ARS",
      link: "https://www.mercadolibre.com.ar",
      imagem: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60"
    },
    {
      id: 8,
      categoria: 'tecnologias',
      tag: "Tecnologías",
      nome: "Auriculares Inalámbricos AirPods Pro",
      descricao: "Cancelación activa de ruido y audio espacial para pausas de estudio.",
      preco: "$ 149.990 ARS",
      link: "https://www.mercadolibre.com.ar",
      imagem: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=500&auto=format&fit=crop&q=60"
    }
  ];

  const produtosFiltrados = filtroCategoria === 'todos' 
    ? produtos 
    : produtos.filter(p => p.categoria === filtroCategoria);

  return (
    <div className="min-h-screen bg-[#0a1e14] text-white font-sans selection:bg-[#c9e832] selection:text-[#0a1e14] pb-20">
      
      {/* 1. NAVBAR SUPERIOR */}
      <nav className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="bg-[#c9e832] text-[#0a1e14] w-8 h-8 rounded-lg flex items-center justify-center font-black text-xl shadow-md">+</div>
          <div>
            <span className="text-xl font-black tracking-tight">medíndica.</span>
            <span className="block text-[8px] font-bold tracking-widest opacity-70 uppercase">EL KIT EXTRAOFICIAL DE LA FACU</span>
          </div>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium items-center text-gray-200">
          <a href="#" className="text-white font-semibold underline underline-offset-8 decoration-[#c9e832]">Inicio</a>
          <a href="#categorias" onClick={() => setFiltroCategoria('tecnologias')} className="hover:text-white transition">Tecnologías</a>
          <a href="#categorias" onClick={() => setFiltroCategoria('vestuario')} className="hover:text-white transition">Vestuario</a>
          <a href="#categorias" onClick={() => setFiltroCategoria('diversos')} className="hover:text-white transition">Diversos</a>
          <a href="#categorias" onClick={() => setFiltroCategoria('libros')} className="hover:text-white transition">Libros</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-white/5 border border-white/20 rounded-full px-4 py-2 text-xs text-white">
            <Search className="w-3.5 h-3.5 opacity-60 mr-2" />
            <input type="text" placeholder="Buscar productos..." className="bg-transparent outline-none w-36 placeholder-white/40 text-white" />
          </div>
          <User className="w-5 h-5 cursor-pointer hover:text-[#c9e832] transition" />
          <div className="relative">
            <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-[#c9e832] transition" />
            <span className="absolute -top-2 -right-2 bg-[#c9e832] text-[#0a1e14] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </div>
        </div>
      </nav>

      {/* 2. HERO BANNER PRINCIPAL */}
      <header className="px-8 py-8 max-w-7xl mx-auto">
        <div className="bg-[#0f2d1f] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
          
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-40 hidden md:block">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80" alt="Medicina" className="w-full h-full object-cover rounded-r-3xl" />
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="inline-block bg-[#c9e832] text-[#0a1e14] text-xs font-black px-3.5 py-1 rounded-full mb-6 tracking-wide shadow-sm">
              01 / CURSADA MODE: ACTIVADO
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[0.95] tracking-tight mb-4 uppercase">
              ESTUDIÁ CON OTRA <span className="text-[#e26d48]">ENERGÍA.</span>
            </h1>
            <p className="text-sm md:text-base font-medium opacity-90 mb-8 text-gray-200">
              Tecnología, libros, vestuario y hallazgos para hacer más fácil la vida universitaria.
            </p>

            {/* BOTÕES DE CATEGORIAS NO HERO */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <a href="#productos" onClick={() => setFiltroCategoria('tecnologias')} className="bg-[#c9e832] hover:bg-[#b8d625] text-[#0a1e14] rounded-2xl p-3 text-xs font-extrabold flex items-center justify-between transition shadow-md">
                TECNOLOGÍAS <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="#productos" onClick={() => setFiltroCategoria('vestuario')} className="bg-[#e26d48] hover:bg-[#cf5e3b] text-white rounded-2xl p-3 text-xs font-extrabold flex items-center justify-between transition shadow-md">
                VESTUARIO <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="#productos" onClick={() => setFiltroCategoria('diversos')} className="bg-[#78b3af] hover:bg-[#689f9b] text-[#0a1e14] rounded-2xl p-3 text-xs font-extrabold flex items-center justify-between transition shadow-md">
                DIVERSOS <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a href="#productos" onClick={() => setFiltroCategoria('libros')} className="bg-[#e6d0a7] hover:bg-[#d6bf96] text-[#0a1e14] rounded-2xl p-3 text-xs font-extrabold flex items-center justify-between transition shadow-md">
                LIBROS <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* 3. EXPLORÁ POR CATEGORÍA */}
      <section id="categorias" className="px-8 py-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase">Explorá por categoría</h2>
            <p className="text-xs font-medium text-gray-300">Todo lo que necesitás, en un solo lugar.</p>
          </div>
          <span className="text-xs font-bold text-[#c9e832] cursor-pointer hover:underline">Ver todas →</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div onClick={() => setFiltroCategoria('tecnologias')} className="bg-[#0f2d1f] text-white p-5 rounded-3xl border border-white/10 cursor-pointer hover:-translate-y-1 transition group relative overflow-hidden shadow-lg">
            <span className="absolute top-4 right-4 text-xs font-bold opacity-30">01</span>
            <div className="h-36 rounded-2xl mb-4 overflow-hidden bg-black/20">
              <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" alt="Tecnología" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <h3 className="text-lg font-black uppercase mb-1">Tecnologías</h3>
            <p className="text-[11px] text-gray-300 opacity-90 mb-4">Celulares, cargadores, auriculares, soportes y más.</p>
            <div className="flex justify-end"><ArrowRight className="w-5 h-5 bg-[#c9e832] p-1 rounded-full text-[#0a1e14]" /></div>
          </div>

          <div onClick={() => setFiltroCategoria('vestuario')} className="bg-[#e26d48] text-white p-5 rounded-3xl border border-white/10 cursor-pointer hover:-translate-y-1 transition group relative overflow-hidden shadow-lg">
            <span className="absolute top-4 right-4 text-xs font-bold opacity-30">02</span>
            <div className="h-36 rounded-2xl mb-4 overflow-hidden bg-black/20">
              <img src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=500&auto=format&fit=crop&q=60" alt="Vestuario" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <h3 className="text-lg font-black uppercase mb-1">Vestuario</h3>
            <p className="text-[11px] text-white/90 opacity-90 mb-4">Ambo, calzado, ropa cómoda y accesorios.</p>
            <div className="flex justify-end"><ArrowRight className="w-5 h-5 bg-[#0a1e14] p-1 rounded-full text-white" /></div>
          </div>

          <div onClick={() => setFiltroCategoria('diversos')} className="bg-[#78b3af] text-[#0a1e14] p-5 rounded-3xl border border-white/10 cursor-pointer hover:-translate-y-1 transition group relative overflow-hidden shadow-lg">
            <span className="absolute top-4 right-4 text-xs font-bold opacity-30">03</span>
            <div className="h-36 rounded-2xl mb-4 overflow-hidden bg-black/10">
              <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60" alt="Diversos" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <h3 className="text-lg font-black uppercase mb-1">Diversos</h3>
            <p className="text-[11px] text-[#0a1e14]/90 opacity-90 mb-4">Mochilas, termos, organizadores, libretas y más.</p>
            <div className="flex justify-end"><ArrowRight className="w-5 h-5 bg-[#0a1e14] p-1 rounded-full text-white" /></div>
          </div>

          <div onClick={() => setFiltroCategoria('libros')} className="bg-[#e6d0a7] text-[#0a1e14] p-5 rounded-3xl border border-white/10 cursor-pointer hover:-translate-y-1 transition group relative overflow-hidden shadow-lg">
            <span className="absolute top-4 right-4 text-xs font-bold opacity-30">04</span>
            <div className="h-36 rounded-2xl mb-4 overflow-hidden bg-black/10">
              <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60" alt="Libros" className="w-full h-full object-cover group-hover:scale-105 transition" />
            </div>
            <h3 className="text-lg font-black uppercase mb-1">Libros</h3>
            <p className="text-[11px] text-[#0a1e14]/90 opacity-90 mb-4">Anatomía, fisiología, patología y mucho más.</p>
            <div className="flex justify-end"><ArrowRight className="w-5 h-5 bg-[#0a1e14] p-1 rounded-full text-white" /></div>
          </div>

        </div>
      </section>

      {/* 4. PRODUCTOS DESTACADOS & FILTROS */}
      <section id="productos" className="px-8 py-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xl">🔥</span>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight uppercase">Productos destacados</h2>
            </div>
            <p className="text-xs font-medium text-gray-300">Los más elegidos por estudiantes de medicina.</p>
          </div>

          <div className="flex flex-wrap gap-1 bg-[#0f2d1f] p-1.5 rounded-2xl border border-white/10">
            <button onClick={() => setFiltroCategoria('todos')} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${filtroCategoria === 'todos' ? 'bg-[#c9e832] text-[#0a1e14]' : 'text-gray-300 hover:text-white'}`}>Todos</button>
            <button onClick={() => setFiltroCategoria('tecnologias')} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${filtroCategoria === 'tecnologias' ? 'bg-[#c9e832] text-[#0a1e14]' : 'text-gray-300 hover:text-white'}`}>Tecnologías</button>
            <button onClick={() => setFiltroCategoria('vestuario')} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${filtroCategoria === 'vestuario' ? 'bg-[#c9e832] text-[#0a1e14]' : 'text-gray-300 hover:text-white'}`}>Vestuario</button>
            <button onClick={() => setFiltroCategoria('diversos')} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${filtroCategoria === 'diversos' ? 'bg-[#c9e832] text-[#0a1e14]' : 'text-gray-300 hover:text-white'}`}>Diversos</button>
            <button onClick={() => setFiltroCategoria('libros')} className={`px-4 py-1.5 rounded-xl text-xs font-bold transition ${filtroCategoria === 'libros' ? 'bg-[#c9e832] text-[#0a1e14]' : 'text-gray-300 hover:text-white'}`}>Libros</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {produtosFiltrados.map((produto) => (
            <div key={produto.id} className="bg-[#0f2d1f] border border-white/10 rounded-3xl p-4 flex flex-col justify-between shadow-lg hover:-translate-y-1 transition group">
              <div>
                <div className="relative h-44 bg-black/20 rounded-2xl border border-white/5 mb-3 overflow-hidden flex items-center justify-center">
                  <img src={produto.imagem} alt={produto.nome} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  <button className="absolute top-2.5 right-2.5 bg-[#0a1e14]/80 p-1.5 rounded-full border border-white/10 hover:bg-[#0a1e14] transition">
                    <Heart className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>

                <p className="text-[#c9e832] text-[10px] font-black uppercase mb-1">{produto.tag}</p>
                <h3 className="text-sm font-bold text-white mb-1.5 leading-tight line-clamp-2">{produto.nome}</h3>
                <p className="text-[11px] text-gray-300 opacity-80 mb-3 line-clamp-2">{produto.descricao}</p>
              </div>

              <div>
                <div className="text-base font-black text-white mb-3">{produto.preco}</div>
                <a 
                  href={produto.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="w-full bg-[#c9e832] hover:bg-[#b8d625] text-[#0a1e14] text-xs font-black py-2.5 rounded-xl transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                  Ver en Mercado Libre <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BANNER DE CONFIANÇA */}
      <section className="px-8 max-w-7xl mx-auto mt-12">
        <div className="bg-[#0f2d1f] border border-white/10 text-white rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-black uppercase">Tu futuro también se prepara acá ♡</h3>
            <p className="text-xs text-gray-300 mt-1">Envíos seguros e integrados con Mercado Libre Argentina.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-gray-200">
            <span className="flex items-center gap-1.5">📦 Envíos a toda Argentina</span>
            <span className="flex items-center gap-1.5">🔒 Compra segura en Mercado Libre</span>
            <span className="flex items-center gap-1.5">💳 Pagos en cuotas</span>
          </div>
        </div>
      </section>

      {/* 6. RODAPÉ */}
      <footer className="mt-16 border-t border-white/10 pt-8 px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <div className="bg-[#c9e832] text-[#0a1e14] p-1 rounded font-black text-xs">+</div>
          <span className="font-bold text-white">medíndica.</span>
          <span className="opacity-70">— El kit extraoficial de la facu</span>
        </div>

        <div className="opacity-80 text-right">
          Estudiantes de hoy, médicos del mañana ♡
          <div className="text-[10px] text-gray-500 mt-0.5">© 2026 Medindica. Todos los derechos reservados.</div>
        </div>
      </footer>

    </div>
  );
}