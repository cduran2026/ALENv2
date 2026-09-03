import { AlenControlTabs } from '../components/alen-control/AlenControlTabs'
import { process } from '../data/alenControl'

export function AlenControl() {
  return <section id="control" className="control-chapter"><div className="section-shell"><header className="control-heading"><div><p className="section-kicker light">04 · Control e Inteligencia para Proyectos</p><h2>Convierte el estado de tus proyectos en información ejecutiva para decidir mejor.</h2></div><p>Conocimiento experto, información estructurada y tecnología discreta para una lectura clara del portafolio.</p></header><AlenControlTabs/><div id="como-funciona" className="process-bar"><span>Cómo funciona</span>{process.map(([n,title])=><div key={title}><small>{n}</small><strong>{title}</strong></div>)}</div></div></section>
}
