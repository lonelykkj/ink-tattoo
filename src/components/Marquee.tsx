const words = ['Flash day', 'Fineline', 'Blackwork', 'Old school', 'Cobertura', 'Projeto autoral']

export default function Marquee() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y-2 border-ink bg-ink py-[18px] text-[26px] font-black tracking-[-.01em] whitespace-nowrap text-paper uppercase font-stretch-[112%]"
    >
      {/* duplicated so the -50% loop is seamless */}
      <span className="inline-flex animate-marquee hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <span key={copy} className="inline-flex items-center gap-7 pr-7">
            {words.map((w) => (
              <span key={w} className="inline-flex items-center gap-7">
                {w} <span className="text-accent">✱</span>
              </span>
            ))}
          </span>
        ))}
      </span>
    </div>
  )
}
