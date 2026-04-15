import { HeroBanner } from './components/HeroBanner'
import { HydrogenSchrodingerModel } from './components/hydrogenSchrodingerModel'
import { HydrogenSpectrum } from './components/HydrogenSpectrum'
import { HydrogenPeriodicTable } from './components/HydrogenPeriodicTable'
import { HydrogenDiscoveryMap } from './components/HydrogenDiscoveryMap'
import { HydrogenLanguages } from './components/HydrogenLanguages'
import { HydrogenComposition } from './components/HydrogenComposition'
import { HydrogenVoyager } from './components/HydrogenVoyager'
import { HydrogenOrigin } from './components/HydrogenOrigin'
import { AntiHydrogenCern } from './components/AntiHydrogenCern'
import { HydrogenChat } from './components/HydrogenChat'

export function HomePage() {
  return (
    <main className="flex w-full min-h-0 min-w-0 flex-1 flex-col bg-white">
      <HeroBanner />
      <HydrogenSchrodingerModel />
      <HydrogenSpectrum />
      <HydrogenPeriodicTable />
      <HydrogenDiscoveryMap />
      <HydrogenLanguages />
      <HydrogenComposition />
      <HydrogenVoyager />
      <HydrogenOrigin />
      <AntiHydrogenCern />
      <HydrogenChat />
    </main>
  )
}
