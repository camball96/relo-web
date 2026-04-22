import { siteConfig } from '../../config/site'

export function Footer() {
  return (
    <footer
      style={{ background: 'var(--relo-dark)' }}
      className="px-10 py-8 flex justify-between items-center"
    >
      <span className="text-[15px] font-medium text-white">
        {siteConfig.name.toLowerCase()}
      </span>
      <span className="text-[12px] text-white/35">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </span>
    </footer>
  )
}
