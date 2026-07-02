import { ResourceCard, type Resource } from "./ResourceCard"

export function ResourceGrid({ items }: { items: Resource[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => <ResourceCard key={item.name} item={item} />)}
    </div>
  )
}
