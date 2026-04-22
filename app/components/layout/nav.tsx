'use client'

import Link from 'next/link'
import { navItems, siteConfig } from '../../config/site'

export function Nav() {
  return (
    <nav
      style={{ background: 'var(--relo-dark)', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}
      className="sticky top-0 z-50 h-[58px] flex items-center justify-between px-10"
    >
      <span className="text-[17px] font-medium text-white tracking-tight">
        {siteConfig.name.toLowerCase()}
      </span>

      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-[13px] text-white/50 hover:text-white transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="#waitlist"
          className="bg-white text-[13px] font-medium px-[18px] py-[7px] rounded-md hover:bg-relo-gbg transition-colors"
          style={{ color: 'var(--relo-dark)' }}
        >
          Join waitlist
        </Link>
      </div>
    </nav>
  )
}
