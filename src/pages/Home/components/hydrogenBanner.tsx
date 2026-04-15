import { HYDROGEN_ELEMENT_PROPERTIES } from '../constants'
import '../../../Styles/hydrogenBanner/appear.css'

export function HydrogenBanner() {
  return (
    <div className="hydrogen-banner-appear box-border flex min-h-0 w-full max-w-full flex-1 flex-col items-center justify-center px-[10%] min-w-0 lg:min-w-[18rem] lg:max-w-xl lg:basis-0 lg:flex-1 lg:items-stretch">
      <h1 className="min-w-0 w-full max-w-full text-center font-['Inter'] text-5xl font-normal tracking-tight text-neutral-900 sm:text-6xl md:text-7xl lg:text-left lg:text-8xl">
        Hydrogen
      </h1>
      <dl className="mt-9 min-w-0 w-fit max-w-full space-y-2 text-left font-['Inter'] text-xs text-neutral-500 max-lg:mx-auto max-lg:max-w-md lg:mx-0 lg:w-full lg:max-w-md">
        {HYDROGEN_ELEMENT_PROPERTIES.map(({ label, value }) => (
          <div
            key={label}
            className="grid min-w-0 grid-cols-[minmax(0,11rem)_1fr] gap-x-4 gap-y-0.5 sm:grid-cols-[minmax(0,13rem)_1fr]"
          >
            <dt className="min-w-0 font-medium text-neutral-400">{label}</dt>
            <dd className="min-w-0 break-words text-neutral-600">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
