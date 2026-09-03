import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

export function Button({ href, children, secondary = false, small = false, onClick }: { href: string; children: ReactNode; secondary?: boolean; small?: boolean; onClick?: () => void }) {
  return <a className={`${secondary ? 'text-link' : 'button'}${small ? ' button-small' : ''}`} href={href} onClick={onClick}>{children}<ArrowRight aria-hidden="true" /></a>
}
