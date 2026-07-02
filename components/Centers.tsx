type Center = {
  name: string
  county: string
  address: string
  hours: string
  phone?: string
  url?: string
}

export function Centers({ centers }: { centers: Center[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {centers.map((c) => (
        <article key={c.name} className="card-shadow rounded-3xl border border-[#E9E0D1] bg-white p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#004AAD]">{c.county}</p>
          <h3 className="text-xl text-[#244C45]">{c.name}</h3>
          <dl className="mt-4 grid gap-2 text-sm text-[#48645F]">
            <div><strong>Dirección:</strong> {c.address || "No disponible"}</div>
            <div><strong>Horario:</strong> {c.hours || "No disponible"}</div>
            <div><strong>Teléfono:</strong> {c.phone ? <a href={`tel:${c.phone}`}>{c.phone}</a> : "No disponible"}</div>
          </dl>
          <div className="mt-5 flex flex-wrap gap-3">
            {c.address && <a className="rounded-full bg-[#004AAD] px-4 py-2 text-sm font-semibold text-white" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.address)}`} target="_blank" rel="noreferrer">Google Maps</a>}
            {c.url && <a className="rounded-full border border-[#E9E0D1] bg-[#FBF8F1] px-4 py-2 text-sm font-semibold text-[#244C45]" href={c.url} target="_blank" rel="noreferrer">Sitio web</a>}
          </div>
        </article>
      ))}
    </div>
  )
}
