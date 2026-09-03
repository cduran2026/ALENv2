import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './Button'

export const nav = [['Inicio', 'inicio'], ['Servicios', 'servicios'], ['ALEN Control', 'control'], ['Experiencia', 'experiencia'], ['Nosotros', 'nosotros'], ['Contacto', 'contacto']]

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('inicio')
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const close = () => setOpen(false)
    const updateScroll = () => {
      setScrolled(window.scrollY > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      document.documentElement.style.setProperty('--page-progress', `${max > 0 ? (window.scrollY / max) * 100 : 0}%`)
    }
    const sections = nav.map(([,id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target.id) setActive(visible.target.id)
    }, { rootMargin: '-18% 0px -62% 0px', threshold: [0,.15,.35] })
    sections.forEach(section => observer.observe(section))
    window.addEventListener('resize', close)
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()
    return () => { observer.disconnect(); window.removeEventListener('resize', close); window.removeEventListener('scroll', updateScroll) }
  }, [])
  const closeMenu = () => setOpen(false)
  return <header className={`site-header${scrolled?' is-scrolled':''}`}><a className="brand" href="#inicio" onClick={closeMenu}><span>ALEN</span><small>Energía y Sustentabilidad</small></a><button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X /> : <Menu />}</button><nav id="main-nav" className={`main-nav${open?' is-open':''}`} aria-label="Navegación principal">{nav.map(([label,id])=><a className={`${active===id?'is-active ':''}${id==='control'?'product-nav-link':''}`.trim()} aria-current={active===id?'page':undefined} href={`#${id}`} key={id} onClick={closeMenu}>{label}</a>)}<Button href="#contacto" small onClick={closeMenu}>Conversemos</Button></nav><div className="scroll-progress" aria-hidden="true" /></header>
}
