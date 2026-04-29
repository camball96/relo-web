import { about } from "../../config/content";

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
              {about.subTitle}
            </div>
            <h2
              className="font-serif text-[40px] font-medium tracking-[-1px] mb-4 text-white"
            >
              {about.title}
            </h2>
            {[about.blurb1, about.blurb2, about.blurb3, about.blurb4].map((blurb, index) => (
              <p
                key={index}
                className={`text-[15px] leading-[1.8] ${index === 3 ? 'mb-0' : 'mb-4'}`}
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {blurb}
              </p>
            ))}
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
              {about.quote}
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
