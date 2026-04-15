import { useEffect, useRef, useState } from 'react'

function clamp01(value: number) {
  return Math.max(0, Math.min(1, value))
}

export function HydrogenSpectrum() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [progress, setProgress] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')

  useEffect(() => {
    let lastProgress = 0

    function handleScroll() {
      const section = sectionRef.current
      if (!section) return

      const rect = section.getBoundingClientRect()
      const scrollable = rect.height - window.innerHeight
      if (scrollable <= 0) {
        setProgress(0)
        return
      }

      const nextProgress = clamp01(-rect.top / scrollable)
      setScrollDirection(nextProgress >= lastProgress ? 'down' : 'up')
      lastProgress = nextProgress
      setProgress(nextProgress)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const startLevel = 5
  const endLevel = 1
  const levelSpan = startLevel - endLevel
  const currentLevel = Math.max(
    endLevel,
    Math.min(startLevel, startLevel - Math.round(progress * levelSpan)),
  )

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[260vh]"
      aria-label="Hydrogen Spectrum"
    >
      <div className="sticky top-0 flex h-screen w-full items-center">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 px-[10%] py-14 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-4">
            <h2 className="text-pretty text-4xl font-medium tracking-tight text-neutral-900 lg:text-left">
              Hydrogen Spectrum
            </h2>
            <p className="max-w-prose text-pretty text-sm leading-6 text-neutral-600">
              Scroll while you’re on this section: the electron “falls” from a higher energy level
              to a lower one and emits radiation. Scroll up to absorb energy and jump to a higher
              state. You move to the next section only after finishing this scroll.
            </p>
            <div className="text-xs text-neutral-500">
              Progress: <span className="font-mono">{Math.round(progress * 100)}%</span>
            </div>
          </div>

          <div className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
            <div className="mb-2 text-xs font-medium text-neutral-500">Widget (scroll-controlled placeholder)</div>
            <div className="flex items-center justify-between gap-6">
              <div className="flex flex-col gap-2 text-sm text-neutral-700">
                <div>
                  Current level: <span className="font-mono">n={currentLevel}</span>
                </div>
                <div>
                  Action:{' '}
                  <span className="font-medium">
                    {scrollDirection === 'down' ? 'Emission (down)' : 'Absorption (up)'}
                  </span>
                </div>
                <div className="text-xs text-neutral-500">
                  Down: emit photon • Up: absorb energy
                </div>
              </div>

              <div className="flex w-32 flex-col items-center justify-center">
                <div className="relative h-44 w-1 rounded-full bg-neutral-200">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const level = 5 - index
                    const active = level === currentLevel
                    return (
                      <div
                        key={level}
                        className={[
                          'absolute left-1/2 -translate-x-1/2 rounded-full border transition-all',
                          active
                            ? 'h-4 w-4 border-blue-400 bg-blue-400'
                            : 'h-3 w-3 border-neutral-300 bg-white',
                        ].join(' ')}
                        style={{ top: `${(index / 4) * 100}%` }}
                        aria-label={`Energy level n=${level}`}
                      />
                    )
                  })}
                </div>
                <div className="mt-3 text-xs text-neutral-500">Energy Levels</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
