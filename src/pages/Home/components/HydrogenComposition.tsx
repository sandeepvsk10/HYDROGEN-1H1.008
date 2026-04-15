export function HydrogenComposition() {
  return (
    <section
      className="flex w-full min-h-[50vh] flex-col items-center justify-center gap-4 px-[10%] py-14"
      aria-label="Hydrogen Composition"
    >
      <h2 className="text-center text-pretty text-4xl font-medium tracking-tight text-neutral-900">
        Hydrogen Composition
      </h2>
      <ul className="list-disc space-y-2 pl-6 text-sm text-neutral-600">
        <li>Hydrogen in Water</li>
        <li>Hydrogen in Sun</li>
        <li>Hydrogen in Sugar</li>
      </ul>
    </section>
  )
}
