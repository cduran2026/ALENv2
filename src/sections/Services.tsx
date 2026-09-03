import { SectionIntro } from '../components/SectionIntro'
import { services } from '../data/services'

export function Services() { return <section id="servicios" className="section section-shell"><SectionIntro number="03" kicker="Servicios de consultoría" title="Experiencia especializada para materializar proyectos." text="La capacidad digital se construye sobre el conocimiento ambiental, regulatorio y territorial de ALEN." /><div className="service-grid">{services.map(({ number, title, text, items, icon: Icon, tone }) => <article className={`service-card tone-${tone}`} key={title}><div className="card-top"><span>{number}</span><Icon /></div><h3>{title}</h3><p>{text}</p><ul>{items.map(x => <li key={x}>{x}</li>)}</ul></article>)}</div></section> }
