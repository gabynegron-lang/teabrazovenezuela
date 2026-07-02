export function Hero() {
  return (
    <section id="top" className="overflow-hidden py-16">
      <div className="mx-auto grid w-[min(1160px,92vw)] gap-12 md:grid-cols-[1.05fr_.95fr] md:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#004AAD]">
            <span className="inline-flex gap-1">
              <i className="h-2 w-2 rounded-full bg-[#FFD23F]" />
              <i className="h-2 w-2 rounded-full bg-[#004AAD]" />
              <i className="h-2 w-2 rounded-full bg-[#D92828]" />
            </span>
            Red de ayuda y recursos
          </div>
          <h1 className="text-5xl font-light leading-none tracking-tight text-[#244C45] md:text-7xl">
            te abrazo<br /><span className="tracking-[0.12em]">VENEZUELA</span>
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-light leading-8 text-[#355B55]">
            Conectamos <strong className="highlight-yellow">colaboradores</strong>, organizaciones y recursos para canalizar <strong className="highlight-blue">ayuda humanitaria</strong> de forma <strong className="highlight-red">confiable</strong>.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a className="rounded-full bg-[#004AAD] px-5 py-3 font-semibold text-white" href="#campanas">Ver campañas</a>
            <a className="rounded-full border border-[#E9E0D1] bg-white px-5 py-3 font-semibold text-[#244C45]" href="#ayuda-venezuela">Estoy en Venezuela</a>
            <a className="rounded-full bg-[#D92828] px-5 py-3 font-semibold text-white" href="#centros">Centros de acopio</a>
          </div>
        </div>
        <div className="card-shadow rounded-[36px] border border-[#E9E0D1] bg-white p-8 text-center">
          <img src="/logo-te-abrazo.svg" alt="Te Abrazo Venezuela" className="mx-auto w-full max-w-[430px]" />
          <div className="tricolor mx-auto mt-6 w-72"><span /><span /><span /></div>
        </div>
      </div>
    </section>
  )
}
