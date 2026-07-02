export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E9E0D1] bg-[#FBF8F1]/90 backdrop-blur">
      <div className="mx-auto flex min-h-[86px] w-[min(1160px,92vw)] items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-4 text-sm font-light uppercase tracking-[0.16em] text-[#244C45] no-underline">
          <img src="/logo-te-abrazo.svg" alt="Te Abrazo Venezuela" className="h-20 w-auto" />
        </a>
        <nav className="hidden items-center gap-5 text-sm font-light text-[#244C45] md:flex">
          <a href="#campanas">Campañas</a>
          <a href="#quiero-ayudar">Quiero ayudar</a>
          <a href="#ayuda-venezuela">Ayuda en Venezuela</a>
          <a href="#centros">Centros</a>
          <a href="#voluntariado">Voluntariado</a>
          <a className="rounded-full bg-[#004AAD] px-4 py-2 font-semibold text-white" href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
