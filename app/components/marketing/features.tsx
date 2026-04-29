
import { features } from "../../config/content";


export function Features() {
  return (
    <section
      id="features"
      className="px-10 py-20"
      style={{ background: 'var(--relo-white)' }}
    >
      <div className="max-w-[900px] mx-auto">
        <div
          className="text-[12px] font-medium tracking-[1px] uppercase mb-4"
          style={{ color: 'var(--relo-bright)' }}
        >
          {features.subTitle}
        </div>
        <h2
          className="font-serif text-[40px] font-medium tracking-[-1px] mb-4"
          style={{ color: 'var(--relo-text)' }}
        >
          {features.title}
        </h2>
        <p
          className="text-[16px] leading-[1.65] max-w-[520px] mb-12"
          style={{ color: 'var(--relo-muted)' }}
        >
          {features.blurb}
        </p>

        <div
          className="grid gap-[1px] rounded-[10px] overflow-hidden"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            background: 'var(--relo-border)',
            border: '0.5px solid var(--relo-border)',
          }}
        >
          {features.data.map((f) => (
            <div
              key={f.title}
              className="p-7"
              style={{ background: 'var(--relo-bg)' }}
            >
              <div
                className="w-[38px] h-[38px] rounded-[8px] mb-4 flex items-center justify-center"
                style={{ background: 'var(--relo-gbg)' }}
              >
                {f.icon}
              </div>
              <div
                className="text-[15px] font-medium mb-2"
                style={{ color: 'var(--relo-text)' }}
              >
                {f.title}
              </div>
              <div
                className="text-[13px] leading-[1.6]"
                style={{ color: 'var(--relo-muted)' }}
              >
                {f.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
