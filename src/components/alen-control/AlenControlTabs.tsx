import { useState } from 'react'
import type { KeyboardEvent } from 'react'
import { modules } from '../../data/alenControl'
import { DashboardDemo } from './DashboardDemo'

export function AlenControlTabs() {
  const [active,setActive]=useState('portafolio')
  const select = (id:string, button:HTMLButtonElement) => { setActive(id); button.scrollIntoView({ behavior:'smooth', block:'nearest', inline:'center' }) }
  const onKeys = (event:KeyboardEvent<HTMLButtonElement>, index:number) => {
    if (!['ArrowRight','ArrowLeft','ArrowDown','ArrowUp'].includes(event.key)) return
    event.preventDefault()
    const direction = ['ArrowRight','ArrowDown'].includes(event.key) ? 1 : -1
    const next = (index + direction + modules.length) % modules.length
    const button = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next]
    if (button) { select(modules[next].id, button); button.focus() }
  }
  return <div className="control-product"><div className="control-tabs" role="tablist" aria-label="Módulos ALEN Control">{modules.map((module,index)=><button id={`tab-${module.id}`} key={module.id} role="tab" aria-selected={active===module.id} aria-controls="alen-control-panel" tabIndex={active===module.id?0:-1} className={active===module.id?'is-active':''} onKeyDown={event=>onKeys(event,index)} onClick={event=>select(module.id,event.currentTarget)}><span>{String(index+1).padStart(2,'0')}</span>{module.label}</button>)}</div><div id="alen-control-panel" className="control-stage" role="tabpanel" aria-live="polite" aria-labelledby={`tab-${active}`}><DashboardDemo active={active}/></div></div>
}
