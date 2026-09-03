import { useState } from 'react'
import { SectionIntro } from '../components/SectionIntro'
import { team } from '../data/team'
import { publicAsset } from '../lib/publicAsset'

export function About() {
  const [expanded,setExpanded]=useState(false)
  return <section id="nosotros" className="section about"><div className="section-shell">
    <div className="leadership-grid"><figure className="portrait"><img src={publicAsset('images/mauricio-retamal.jpg')} alt="Mauricio Retamal, Fundador y Director de ALEN" /></figure><div className="leadership-copy"><p className="section-kicker">06 · Nosotros</p><h2>La experiencia detrás de ALEN.</h2><div className="person-title"><h3>Mauricio Retamal</h3><p>Fundador & Director · Ingeniero Ambiental Senior</p></div><p>Más de 15 años de experiencia vinculada al desarrollo y gestión de proyectos, evaluación ambiental y permisos sectoriales para iniciativas de energía, industria y residuos.</p>{expanded&&<p className="bio-detail">Su experiencia articula conocimiento técnico, gestión regulatoria y una lectura ejecutiva de los proyectos.</p>}<button className="bio-toggle" type="button" aria-expanded={expanded} onClick={()=>setExpanded(!expanded)}>{expanded?'Ver menos':'Ampliar perfil'}</button><div className="leadership-facts"><strong>+15 años<br/><span>Experiencia</span></strong><strong>Energía · Industria · Residuos<br/><span>Sectores</span></strong></div></div></div>
    <div className="team-heading"><SectionIntro number="" kicker="Equipo multidisciplinario" title="Distintas disciplinas, una visión compartida." /></div><div className="team-grid">{team.map(({name,role,image})=><article key={name}><div className={`team-photo${image?' has-image':''}`}>{image?<img src={publicAsset(image)} alt={`Retrato de ${name}`}/>:<span className="team-initials" aria-label={`Fotografía pendiente de ${name}`}>{name.split(' ').map(x=>x[0]).join('').slice(0,2)}</span>}</div><h3>{name}</h3><p>{role}</p></article>)}</div>
  </div></section>
}
