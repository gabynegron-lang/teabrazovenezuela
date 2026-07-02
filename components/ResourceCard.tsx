export type Resource = {
  name: string
  category?: string
  description: string
  url?: string
  cta?: string
  details?: string[]
}

export function ResourceCard({ item }: { item: Resource }) {
  return (
    <article className="card-shadow rounded-3xl border border-[#E9E0D1] bg-white p-6 transition hover:-translate-y-1">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#004AAD]">{item.category}</p>
      <h3 className="mb-3 text-xl text-[#244C45]">{item.name}</h3>
      <p className="mb-5 text-sm leading-6 text-[#48645F]">{item.description}</p>
      {item.details && item.details.length > 0 && (
        <ul className="mb-5 space-y-2 text-sm text-[#48645F]">
          {item.details.map((detail) => <li key={detail}>• {detail}</li>)}
        </ul>
      )}
      {item.url ? (
        <a className="inline-flex rounded-full bg-[#004AAD] px-4 py-2 text-sm font-semibold text-white" href={item.url} target="_blank" rel="noreferrer">
          {item.cta || "Abrir"}
        </a>
      ) : (
        <span className="inline-flex rounded-full border border-[#E9E0D1] bg-[#FBF8F1] px-4 py-2 text-sm font-semibold text-[#62736F]">
          No disponible
        </span>
      )}
    </article>
  )
}
