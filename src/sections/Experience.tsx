import { Building2 } from 'lucide-react'
import { SectionIntro } from '../components/SectionIntro'
import { projects } from '../data/projects'

export function Experience() { return <section id="experiencia" className="section experience"><div className="section-shell"><SectionIntro number="05" kicker="Proyectos y experiencia" title="Experiencia en el mundo real de los proyectos." text="Referencias institucionales sujetas a validación antes de publicación." /><div className="project-grid">{projects.map((title, i) => <article key={title}><div className="project-image"><Building2 /></div><div className="project-copy"><span>{String(i + 1).padStart(2, '0')}</span><h3>{title}</h3><p>Proyecto real mencionado · Servicio por validar</p></div></article>)}</div></div></section> }
