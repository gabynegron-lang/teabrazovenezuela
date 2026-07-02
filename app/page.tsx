import data from "@/data/resources.json"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Section } from "@/components/Section"
import { ResourceGrid } from "@/components/ResourceGrid"
import { Centers } from "@/components/Centers"
import { Footer } from "@/components/Footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Section
          id="campanas"
          title="Campañas"
          subtitle="Iniciativas activas para llevar alegría, esperanza y consuelo a niños y comunidades afectadas."
          soft
        >
          <ResourceGrid items={data.campaigns} />
        </Section>

        <Section id="quiero-ayudar" title="Quiero ayudar" subtitle="Recursos para colaboradores, donantes, aliados logísticos y voluntarios.">
          <h3 className="mb-4 mt-2 text-2xl font-light text-[#244C45]">Donaciones</h3>
          <ResourceGrid items={data.donations} />

          <h3 className="mb-4 mt-10 text-2xl font-light text-[#244C45]">Donar logística y transporte</h3>
          <ResourceGrid items={data.transportDonations} />

          <h3 className="mb-4 mt-10 text-2xl font-light text-[#244C45]">Niños y adolescentes</h3>
          <ResourceGrid items={data.children} />

          <h3 className="mb-4 mt-10 text-2xl font-light text-[#244C45]">ONG y ayuda médica</h3>
          <ResourceGrid items={data.medical} />
        </Section>

        <Section id="ayuda-venezuela" title="Ayuda en Venezuela" subtitle="Recursos para personas, familias y comunidades dentro del país." soft>
          <h3 className="mb-4 mt-2 text-2xl font-light text-[#244C45]">Directorios y plataformas</h3>
          <ResourceGrid items={data.venezuela} />

          <h3 className="mb-4 mt-10 text-2xl font-light text-[#244C45]">Logística y transporte</h3>
          <ResourceGrid items={data.venezuelaLogistics} />

          <h3 className="mb-4 mt-10 text-2xl font-light text-[#244C45]">Apoyo psicológico</h3>
          <ResourceGrid items={data.psychological} />
        </Section>

        <Section id="centros" title="Centros de acopio" subtitle="Puntos de recepción y coordinación logística. Verifica horarios antes de trasladarte.">
          <Centers centers={data.dropOffCenters} />
        </Section>

        <Section id="voluntariado" title="Voluntariado" subtitle="Registra tu disponibilidad y encuentra oportunidades de servicio.">
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-[32px] bg-[#244C45] p-8 text-white shadow-xl">
              <h3 className="mb-3 text-2xl font-light text-white">POINT</h3>
              <p className="mb-5 text-white/80">Plataforma recomendada para registro y gestión de voluntarios.</p>
              <a className="rounded-full bg-[#FFD23F] px-5 py-3 font-semibold text-[#244C45]" href="https://pointapp.org/" target="_blank" rel="noreferrer">
                Registrarme en POINT
              </a>
            </article>
            <article className="rounded-[32px] border border-[#E9E0D1] bg-white p-8 shadow-sm">
              <h3 className="mb-3 text-2xl font-light text-[#244C45]">Perfiles requeridos</h3>
              <p className="text-[#62736F]">Médicos, psicólogos, ingenieros, arquitectos, conductores, traductores, tecnología, logística, comunicaciones y bienestar animal.</p>
            </article>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
