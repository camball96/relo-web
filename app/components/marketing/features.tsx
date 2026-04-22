const features = [
  {
    title: 'Customer directory',
    desc:  'Everyone you work with, in one place. Search, filter, and pull up any client in a couple of keystrokes.',
  },
  {
    title: 'Product catalogue',
    desc:  'Build your service menu once. Monthly, annual, or one-off — billing cycles handled without a second spreadsheet.',
  },
  {
    title: 'Instant lookup',
    desc:  'Client on the line, wants to know what they\'re paying for. You\'re there in three seconds. Every time.',
  },
  {
    title: 'Product assignments',
    desc:  'Assign services to clients, override pricing for legacy deals, and keep a full history. Nothing gets deleted.',
  },
  {
    title: 'Workspace overview',
    desc:  'A dashboard that shows you what\'s growing, what\'s changed, and who just came on board — at a glance.',
  },
  {
    title: 'Your data, full stop',
    desc:  'No shared infrastructure, no upselling to a team plan. Your workspace is yours and no one else\'s.',
  },
]

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
          Features
        </div>
        <h2
          className="font-serif text-[40px] font-medium tracking-[-1px] mb-4"
          style={{ color: 'var(--relo-text)' }}
        >
          Less tool. More answer.
        </h2>
        <p
          className="text-[16px] leading-[1.65] max-w-[520px] mb-12"
          style={{ color: 'var(--relo-muted)' }}
        >
          Relo strips the CRM down to what actually matters for solo operators —
          your clients, your services, and who has what. That's it.
        </p>

        <div
          className="grid gap-[1px] rounded-[10px] overflow-hidden"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            background: 'var(--relo-border)',
            border: '0.5px solid var(--relo-border)',
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              className="p-7"
              style={{ background: 'var(--relo-bg)' }}
            >
              <div
                className="w-[38px] h-[38px] rounded-[8px] mb-4"
                style={{ background: 'var(--relo-gbg)' }}
              />
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
