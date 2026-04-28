export function About() {
  return (
    <section
      id="about"
      className="px-10 py-20"
      style={{ background: 'var(--relo-dark)' }}
    >
      <div className="max-w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <div
              className="text-[12px] font-medium tracking-[1px] uppercase mb-4"
              style={{ color: 'var(--relo-accent)' }}
            >
              About
            </div>
            <h2
              className="font-serif text-[40px] font-medium tracking-[-1px] mb-4 text-white"
            >
              Built out of frustration
            </h2>
            <p
              className="text-[15px] leading-[1.8] mb-4"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Relo started in 2021 because a spreadsheet wasn't cutting it. A
              client calls, you're scrolling through rows, squinting at columns
              — and the whole thing just feels embarrassing for something you
              built a business around.
            </p>
            <p
              className="text-[15px] leading-[1.8] mb-4"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              Most CRMs are built for sales pipelines and enterprise teams. Relo
              is built for one person running a tight operation who just wants to
              look competent on a phone call.
            </p>
            <p
              className="text-[15px] leading-[1.8]"
              style={{ color: 'rgba(255,255,255,0.55)' }}
            >
              This is a ground-up rebuild of that original tool. Faster, cleaner,
              and actually worth showing people.
            </p>
          </div>

          <div>
            <blockquote
              className="font-serif text-[23px] font-normal italic leading-[1.6]"
              style={{
                color: 'rgba(255,255,255,0.75)',
                paddingLeft: '1.5rem',
                borderLeft: '2px solid var(--relo-accent)',
              }}
            >
              "Built for one person running a tight operation who just wants to
              look competent on a phone call."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
