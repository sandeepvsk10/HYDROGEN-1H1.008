import '../../../Styles/hydrogenBohrModel/bohr-model.css'

export function HydrogenBohrModel() {
  return (
    <div className="hydrogen-bohr-root box-border flex min-h-[50vh] w-full max-w-full flex-1 flex-col items-center justify-center p-4 min-w-0 lg:min-w-[18rem] lg:max-w-[600px] lg:basis-0 lg:flex-1">
      <div className="relative box-border flex aspect-square w-full min-w-0 max-w-[600px] items-center justify-center p-6 sm:p-8">
        <svg
          className="box-border h-full max-h-full w-full max-w-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.05)]"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden={true}
        >
          <defs>
            <linearGradient
              id="hydrogen-bohr-tailGradient"
              x1="0%"
              y1="100%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#aaaaaa" stopOpacity={0} />
              <stop offset="100%" stopColor="#aaaaaa" stopOpacity={0.3} />
            </linearGradient>

            <radialGradient id="hydrogen-bohr-protonGrad" cx="30%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#dddddd" />
              <stop offset="15%" stopColor="#aaaaaa" />
              <stop offset="40%" stopColor="#777777" />
              <stop offset="70%" stopColor="#444444" />
              <stop offset="100%" stopColor="#222222" />
            </radialGradient>

            <radialGradient id="hydrogen-bohr-electronGrad" cx="35%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#cccccc" />
              <stop offset="50%" stopColor="#666666" />
              <stop offset="100%" stopColor="#222222" />
            </radialGradient>
          </defs>

          <circle
            cx={250}
            cy={250}
            r={160}
            fill="none"
            stroke="var(--hydrogen-bohr-orbit)"
            strokeWidth={1.5}
          />

          <circle
            className="hydrogen-bohr-proton"
            cx={250}
            cy={250}
            r={16}
            fill="url(#hydrogen-bohr-protonGrad)"
          />

          <g className="hydrogen-bohr-electron-group">
            <path
              d="M 228,91.6 A 160,160 0 0 1 250,90"
              fill="none"
              stroke="url(#hydrogen-bohr-tailGradient)"
              strokeWidth={2.5}
              strokeLinecap="round"
            />
            <circle
              cx={250}
              cy={90}
              r={8}
              fill="url(#hydrogen-bohr-electronGrad)"
            />
          </g>
        </svg>
      </div>
    </div>
  )
}
