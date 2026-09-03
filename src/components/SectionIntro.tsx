export function SectionIntro({ number, kicker, title, text, large = false }: { number: string; kicker: string; title: string; text?: string; large?: boolean }) {
  return <header className={`section-intro${large ? ' is-large' : ''}`}><span className="section-index">{number}</span><div><p className="section-kicker">{kicker}</p><h2>{title}</h2>{text && <p className="section-lead">{text}</p>}</div></header>
}
