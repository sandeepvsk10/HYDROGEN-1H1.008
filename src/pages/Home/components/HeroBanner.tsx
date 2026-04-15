import { HydrogenBanner } from './hydrogenBanner'
import { HydrogenBohrModel } from './hydrogenBohrModel'

export function HeroBanner() {
  return (
    <section className="box-border w-full min-w-0" aria-label="Hero">
      <div className="mx-auto flex w-full min-w-0 max-w-7xl flex-col gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-6">
        <HydrogenBanner />
        <HydrogenBohrModel />
      </div>
    </section>
  )
}
