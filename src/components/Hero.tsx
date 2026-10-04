import { ARTIST } from '@/data/site'

const styles = ['Fineline', 'Blackwork', 'Old school', 'Flash autoral', 'Cobertura']

const navLink = 'py-3 font-mono text-[14px] font-bold no-underline'

export default function Hero() {
  return (
    <header className="gutter relative flex min-h-[780px] flex-col gap-10 bg-paper bg-[linear-gradient(rgba(18,18,18,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(18,18,18,.06)_1px,transparent_1px)] bg-size-[72px_72px] pt-10 pb-12">
      <RoomLines />

      {/* top meta bar */}
      <nav aria-label="Principal" className="relative flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
        <div className="flex flex-wrap items-center gap-7">
          <div className="inline-flex items-center overflow-hidden rounded-full border-[1.5px] border-ink font-mono text-[11px] font-bold tracking-[.04em]">
            <span className="border-r-[1.5px] border-ink bg-accent px-2.5 py-[5px]">01/07</span>
            <span className="px-3 py-[5px]">TATTOO ART</span>
          </div>
          <span className="text-[14px] font-extrabold tracking-[.02em] uppercase">{ARTIST} — Traço fino, tinta eterna</span>
        </div>
        <div className="flex flex-wrap items-center gap-7">
          <a href="#trabalhos" className={navLink}>{'{TRABALHOS/SELECIONADOS}'}</a>
          <a href="#agenda" className={navLink}>{'{AGENDA}'}</a>
          <div className="flex items-center gap-2.5">
            <span className="size-[18px] rounded-full border-[1.5px] border-ink bg-accent" />
            <span className="text-right text-[11px] leading-tight font-extrabold">
              PRÓXIMA VAGA: 28 OUT
              <br />
              SÃO PAULO — BR
            </span>
          </div>
        </div>
      </nav>

      {/* hero body */}
      <div className="relative flex flex-1 flex-wrap items-center gap-10">
        {/* left: headline */}
        <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-11">
          <h1 className="relative text-[clamp(32px,10vw,54px)] leading-[.9] sm:text-[clamp(54px,7.4vw,116px)]">
            <span className="block overflow-hidden">
              <span className="inline-flex animate-rise items-center gap-[.08em] [animation-delay:.05s]">
                2026
                <svg className="size-[.62em] flex-none animate-nudge" aria-hidden="true" viewBox="0 0 40 40">
                  <path d="M6 6 L32 32 M32 12 L32 32 L12 32" stroke="#121212" strokeWidth="5" fill="none" strokeLinecap="square" />
                </svg>
                FLASH
              </span>
            </span>
            <span className="flex flex-wrap items-center gap-x-[.35em] gap-y-2">
              <span className="block overflow-hidden">
                <span className="inline-flex animate-rise items-center [animation-delay:.17s]">TATTOO</span>
              </span>
              <a
                href="#agenda"
                className="flex-none animate-wiggle [transform:rotate(-9deg)] rounded-[50%] border-2 border-ink bg-paper px-[22px] py-2 font-hand text-[clamp(22px,2vw,30px)] leading-[1.1] font-bold tracking-normal whitespace-nowrap normal-case no-underline transition-colors hover:bg-ink hover:text-paper"
              >
                Agende já ✱
              </a>
            </span>
            <span className="relative block">
              <span className="block overflow-hidden">
                <span className="inline-flex animate-rise items-center [animation-delay:.29s]">PORTFÓLIO</span>
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 400 110"
                preserveAspectRatio="none"
                className="pointer-events-none absolute top-[.28em] left-[1.15em] h-[.82em] w-[3.3em]"
              >
                <path
                  className="animate-draw [stroke-dasharray:1200]"
                  pathLength="1200"
                  d="M18 62 C20 22 150 8 270 14 C360 19 398 40 388 64 C376 94 240 104 140 98 C50 92 8 82 30 54"
                  stroke="var(--color-accent)"
                  strokeWidth="3"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </span>
            <span className="flex items-center">
              <span className="block overflow-hidden">
                <span className="inline-flex animate-rise items-center [animation-delay:.41s]">INK WORK</span>
              </span>
              <span className="relative ml-[.22em] inline-block">
                <svg className="absolute top-[-.08em] left-[-.18em] size-[1.05em] animate-spin-slow" aria-hidden="true" viewBox="0 0 120 120">
                  <path d="M60 6 A54 54 0 0 1 112 52" stroke="#121212" strokeWidth="5" fill="none" />
                  <path d="M60 114 A54 54 0 0 1 8 68" stroke="#121212" strokeWidth="5" fill="none" />
                </svg>
                S
                <svg className="absolute top-[-.18em] right-[-.42em] size-[.34em] animate-spin-fast" aria-hidden="true" viewBox="0 0 40 40">
                  <path d="M20 2 L20 38 M4 11 L36 29 M36 11 L4 29" stroke="var(--color-accent)" strokeWidth="6" strokeLinecap="round" />
                </svg>
              </span>
            </span>

            {/* vertical tag + barcode */}
            <span aria-hidden="true" className="absolute bottom-[-.02em] left-[6.15em] hidden flex-col sm:flex items-center gap-1">
              <span className="border-[1.5px] border-ink bg-paper px-px py-1 font-mono text-[10px] font-bold tracking-[.12em] [writing-mode:vertical-rl]">
                AUTORAL
              </span>
              <span className="h-[22px] w-[18px] bg-[repeating-linear-gradient(90deg,#121212_0_2px,transparent_2px_3px,#121212_3px_4px,transparent_4px_6px)]" />
            </span>

            {/* flower doodle */}
            <svg className="absolute bottom-[-.62em] left-[5.2em] size-[.62em] animate-sway [transform:rotate(-14deg)]" aria-hidden="true" viewBox="0 0 80 80">
              <g fill="#FFFFFF" stroke="#121212" strokeWidth="3">
                <ellipse cx="40" cy="18" rx="12" ry="16" />
                <ellipse cx="62" cy="34" rx="12" ry="16" transform="rotate(72 62 34)" />
                <ellipse cx="54" cy="60" rx="12" ry="16" transform="rotate(144 54 60)" />
                <ellipse cx="26" cy="60" rx="12" ry="16" transform="rotate(216 26 60)" />
                <ellipse cx="18" cy="34" rx="12" ry="16" transform="rotate(288 18 34)" />
                <circle cx="40" cy="42" r="9" fill="var(--color-accent)" />
              </g>
            </svg>
          </h1>

          <div className="flex flex-col gap-9">
            <div className="inline-flex animate-fade-up items-stretch self-start overflow-hidden rounded-full border-2 border-ink text-[18px] font-extrabold [animation-delay:.6s]">
              <span className="rounded-full border-r-2 border-ink bg-white px-[26px] py-3.5">Estilos*</span>
              <span className="bg-accent py-3.5 pr-10 pl-7">
                Fineline / Blackwork<span className="animate-blink-text">_</span>
              </span>
            </div>
            <ul className="m-0 flex animate-fade-up list-none flex-wrap gap-x-10 gap-y-3 p-0 text-[15px] font-bold [animation-delay:.75s]">
              {styles.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* right: mascot */}
        <div className="relative flex min-h-[520px] min-w-0 flex-[1_1_380px] items-end justify-center self-stretch">
          <Sticker />
          <span
            aria-hidden="true"
            className="absolute -bottom-1.5 left-1/2 -ml-[150px] h-[26px] w-[300px] animate-shadow rounded-[50%] bg-ink blur-[6px]"
          />
          <Mascot />
          {/* vertical corner marks */}
          <span aria-hidden="true" className="absolute top-[40%] right-0 h-[90px] w-2.5 border-b-[1.5px] border-l-[1.5px] border-ink" />
        </div>
      </div>
    </header>
  )
}

function RoomLines() {
  const lines = [
    [0, 0, 70, 60],
    [1000, 0, 930, 60],
    [0, 600, 70, 540],
    [1000, 600, 930, 540],
    [250, 540, 200, 600],
    [430, 540, 410, 600],
    [570, 540, 590, 600],
    [750, 540, 800, 600],
    [250, 60, 200, 0],
    [750, 60, 800, 0],
    [35, 570, 965, 570],
    [35, 30, 965, 30],
  ]
  return (
    <svg aria-hidden="true" viewBox="0 0 1000 600" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 size-full">
      <g stroke="#C8C8C3" strokeWidth="1.2" fill="none">
        <rect x="70" y="60" width="860" height="480" vectorEffect="non-scaling-stroke" />
        {lines.map(([x1, y1, x2, y2]) => (
          <line key={`${x1}-${y1}-${x2}`} x1={x1} y1={y1} x2={x2} y2={y2} vectorEffect="non-scaling-stroke" />
        ))}
      </g>
    </svg>
  )
}

function Sticker() {
  return (
    <svg className="absolute top-[2%] left-[4%] z-2 size-32 animate-pop" aria-hidden="true" viewBox="0 0 160 160">
      <circle cx="80" cy="80" r="78" fill="#121212" />
      <circle cx="80" cy="80" r="30" fill="var(--color-accent)" stroke="#ECECEA" strokeWidth="2" />
      <path d="M80 62 L84 76 L98 80 L84 84 L80 98 L76 84 L62 80 L76 76Z" fill="#121212" />
      <g className="origin-center animate-spin-slow">
        <defs>
          <path id="ring" d="M80 80 m-56 0 a56 56 0 1 1 112 0 a56 56 0 1 1 -112 0" />
        </defs>
        <text fill="#ECECEA" fontFamily="JetBrains Mono, monospace" fontSize="13" fontWeight="700" letterSpacing="3.2">
          <textPath href="#ring">AGENDA ABERTA ✱ 2026 ✱ FLASH DAY ✱ </textPath>
        </text>
      </g>
    </svg>
  )
}

function Mascot() {
  return (
    <svg
      className="relative block h-auto w-[min(100%,500px)] animate-float"
      role="img"
      aria-label="Mascote: tatuador sorridente de bandana e camiseta preta"
      viewBox="0 0 460 520"
    >
      <defs>
        <radialGradient id="skin" cx="42%" cy="34%" r="70%">
          <stop offset="0" stopColor="#FADCC2" />
          <stop offset=".55" stopColor="#EDB894" />
          <stop offset="1" stopColor="#CF8F6B" />
        </radialGradient>
        <radialGradient id="neck" cx="50%" cy="10%" r="90%">
          <stop offset="0" stopColor="#B8765A" />
          <stop offset="1" stopColor="#E2A784" />
        </radialGradient>
        <linearGradient id="shirt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2E2E2E" />
          <stop offset="1" stopColor="#0E0E0E" />
        </linearGradient>
        <radialGradient id="shade" cx="40%" cy="20%" r="80%">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity=".28" />
          <stop offset=".6" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="1" stopColor="#000000" stopOpacity=".28" />
        </radialGradient>
        <radialGradient id="eye" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#3A3A3A" />
          <stop offset="1" stopColor="#050505" />
        </radialGradient>
      </defs>

      {/* body */}
      <path d="M44 520 C44 432 112 396 230 390 C348 396 416 432 416 520Z" fill="url(#shirt)" />
      <path d="M70 470 C80 450 96 438 112 432" stroke="#3C3C3C" strokeWidth="3" fill="none" />
      <path d="M390 470 C380 450 364 438 348 432" stroke="#3C3C3C" strokeWidth="3" fill="none" />
      {/* neck + collar */}
      <path d="M186 318 L186 398 Q230 428 274 398 L274 318Z" fill="url(#neck)" />
      <path d="M176 396 Q230 440 284 396 L292 410 Q230 462 168 410Z" fill="#1C1C1C" />
      {/* neck tattoos */}
      <g transform="translate(246 372) rotate(-12)" stroke="#2A2220" strokeWidth="2.4" fill="none" strokeLinejoin="round">
        <path d="M0 -12 L3.5 -3.5 L12 -3 L5.5 3 L7.5 12 L0 7 L-7.5 12 L-5.5 3 L-12 -3 L-3.5 -3.5Z" />
      </g>
      <path d="M200 360 q6 -8 12 0 q6 8 12 0" stroke="#2A2220" strokeWidth="2.4" fill="none" />
      {/* chest patch */}
      <rect x="282" y="448" width="58" height="26" rx="5" fill="var(--color-accent)" transform="rotate(-6 311 461)" />
      <text x="311" y="467" textAnchor="middle" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="15" fill="#121212" transform="rotate(-6 311 461)">
        INK
      </text>

      {/* ears + earrings */}
      <ellipse cx="114" cy="250" rx="26" ry="36" fill="#EDB894" />
      <path d="M110 232 Q100 250 112 268" stroke="#C9855F" strokeWidth="5" fill="none" strokeLinecap="round" />
      <ellipse cx="346" cy="250" rx="26" ry="36" fill="#E2A784" />
      <path d="M350 232 Q360 250 348 268" stroke="#C07A56" strokeWidth="5" fill="none" strokeLinecap="round" />
      <circle cx="112" cy="294" r="10" fill="none" stroke="#C9A24A" strokeWidth="4" />
      <circle cx="352" cy="288" r="5" fill="#C9A24A" />

      {/* head */}
      <ellipse cx="230" cy="238" rx="120" ry="132" fill="url(#skin)" />

      {/* bandana */}
      <path d="M106 214 C104 116 166 84 230 84 C294 84 356 116 354 214 C322 182 282 168 230 168 C178 168 138 182 106 214Z" fill="var(--color-accent)" />
      <path d="M106 214 C104 116 166 84 230 84 C294 84 356 116 354 214 C322 182 282 168 230 168 C178 168 138 182 106 214Z" fill="url(#shade)" />
      <path d="M110 206 C140 178 182 166 230 166 C278 166 320 178 350 206" stroke="#121212" strokeOpacity=".35" strokeWidth="3" fill="none" />
      <g fill="#FFFFFF" fillOpacity=".9">
        <circle cx="170" cy="126" r="5" />
        <circle cx="206" cy="108" r="4" />
        <circle cx="250" cy="106" r="5" />
        <circle cx="292" cy="122" r="4" />
        <circle cx="322" cy="150" r="5" />
        <circle cx="140" cy="156" r="4" />
        <circle cx="190" cy="146" r="3" />
        <circle cx="232" cy="136" r="4" />
        <circle cx="276" cy="150" r="3" />
      </g>
      {/* knot */}
      <g className="origin-[0%_20%] animate-knot [transform-box:fill-box]">
        <path d="M344 178 C376 176 404 196 410 226 C392 214 370 206 350 204Z" fill="var(--color-accent)" />
        <path d="M346 196 C370 214 384 244 376 270 C364 248 350 232 340 220Z" fill="var(--color-accent)" />
        <path
          d="M344 178 C376 176 404 196 410 226 C392 214 370 206 350 204Z M346 196 C370 214 384 244 376 270 C364 248 350 232 340 220Z"
          fill="#000000"
          fillOpacity=".18"
        />
      </g>
      <circle cx="346" cy="194" r="13" fill="var(--color-accent)" stroke="#121212" strokeOpacity=".3" strokeWidth="2" />

      {/* brows */}
      <g className="animate-brow">
        <path d="M158 206 Q184 190 210 202" stroke="#2A1E18" strokeWidth="13" fill="none" strokeLinecap="round" />
        <path d="M250 202 Q276 190 302 206" stroke="#2A1E18" strokeWidth="13" fill="none" strokeLinecap="round" />
      </g>
      {/* eyes */}
      <g className="origin-center animate-blink [transform-box:fill-box]">
        <ellipse cx="186" cy="242" rx="22" ry="26" fill="url(#eye)" />
        <circle cx="178" cy="232" r="7.5" fill="#FFFFFF" />
        <circle cx="194" cy="252" r="3" fill="#FFFFFF" />
        <ellipse cx="274" cy="242" rx="22" ry="26" fill="url(#eye)" />
        <circle cx="266" cy="232" r="7.5" fill="#FFFFFF" />
        <circle cx="282" cy="252" r="3" fill="#FFFFFF" />
      </g>
      {/* face tattoo */}
      <g fill="#2A2220">
        <circle cx="300" cy="278" r="2.6" />
        <circle cx="308" cy="270" r="2.6" />
        <circle cx="310" cy="282" r="2.6" />
      </g>
      {/* cheeks */}
      <ellipse cx="156" cy="290" rx="24" ry="14" fill="#F07F7A" fillOpacity=".42" />
      <ellipse cx="304" cy="294" rx="20" ry="12" fill="#F07F7A" fillOpacity=".32" />
      {/* nose */}
      <ellipse cx="230" cy="276" rx="17" ry="14" fill="#E39E7B" />
      <ellipse cx="224" cy="270" rx="6" ry="4" fill="#FFFFFF" fillOpacity=".5" />
      {/* mouth */}
      <path d="M176 304 Q230 300 284 304 Q280 366 230 368 Q180 366 176 304Z" fill="#3A1414" />
      <path d="M182 306 Q230 302 278 306 L274 324 Q230 330 186 324Z" fill="#FFFFFF" />
      <ellipse cx="230" cy="350" rx="28" ry="12" fill="#E06C66" />
      {/* septum ring */}
      <path d="M222 288 Q230 300 238 288" stroke="#C9A24A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}
