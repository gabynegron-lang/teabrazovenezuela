export function Section({
  id,
  title,
  subtitle,
  children,
  soft = false,
}: {
  id?: string
  title: string
  subtitle?: string
  children: React.ReactNode
  soft?: boolean
}) {
  return (
    <section id={id} className={soft ? "bg-[#F4EFE4] py-16" : "py-16"}>
      <div className="mx-auto w-[min(1160px,92vw)]">
        <div className="section-title mb-8">
          <h2 className="text-4xl tracking-tight text-[#244C45] md:text-5xl">{title}</h2>
          {subtitle && <p className="mt-4 max-w-3xl text-[#62736F]">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}
