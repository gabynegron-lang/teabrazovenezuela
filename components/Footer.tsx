export function Footer() {
  return (
    <footer id="contacto" className="bg-[#244C45] py-12 text-white">
      <div className="mx-auto grid w-[min(1160px,92vw)] gap-8 md:grid-cols-2">
        <div>
          <img src="/logo-te-abrazo.svg" alt="Te Abrazo Venezuela" className="mb-5 w-72 rounded-2xl bg-white p-3" />
          <p className="mt-3 text-white/75">Nos mueve el amor, nos une Venezuela.</p>
          <div className="tricolor mt-6 w-72"><span /><span /><span /></div>
        </div>
        <div>
          <h3 className="mb-3 text-xl font-light">Contacto</h3>
          <p><a href="mailto:info@teabrazovenezuela.com">info@teabrazovenezuela.com</a></p>
          <p><a href="tel:+18327232205">+1 832 723 2205</a></p>
          <p className="mt-4 text-white/75">@teabrazovenezuela</p>
          <p className="text-white/75">www.teabrazovenezuela.org</p>
        </div>
      </div>
    </footer>
  )
}
