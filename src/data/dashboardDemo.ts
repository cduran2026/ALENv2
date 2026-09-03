export const demoKpis = [
  { label: 'Proyectos', value: 20, detail: 'Portafolio demo', tone: 'default' }, { label: 'Requieren atención', value: 6, detail: '30% del portafolio', tone: 'warning' },
  { label: 'Críticos', value: 3, detail: 'Intervención prioritaria', tone: 'critical' }, { label: 'Próximos hitos', value: 4, detail: 'Durante esta semana', tone: 'success' },
  { label: 'Atrasados', value: 5, detail: 'Con plazo superado', tone: 'critical' }, { label: 'En observación', value: 8, detail: 'Revisión o seguimiento', tone: 'warning' },
  { label: 'Pend. cliente', value: 6, detail: 'Acciones por gestionar', tone: 'ochre' }, { label: 'Pend. ALEN', value: 4, detail: 'Seguimiento consultivo', tone: 'success' },
] as const
export const statusDistribution = [
  { label: 'En curso', value: 8, percent: 40, color: '#26be8b' }, { label: 'En observación', value: 5, percent: 25, color: '#b87916' },
  { label: 'Crítico', value: 3, percent: 15, color: '#d93a2b' }, { label: 'Próximo inicio', value: 4, percent: 20, color: '#8ba3b5' },
]
export const riskDistribution = [
  { label: 'Controlado', value: 9, percent: 45, color: '#26be8b' }, { label: 'Seguimiento', value: 8, percent: 40, color: '#b87916' },
  { label: 'Crítico', value: 3, percent: 15, color: '#d93a2b' },
]
export const responsibilityLoad = [
  { label: 'Cliente', value: 6, overdue: 2, critical: 1, width: 100 }, { label: 'ALEN', value: 4, overdue: 1, critical: 1, width: 67 },
  { label: 'Equipo', value: 3, overdue: 1, critical: 1, width: 50 }, { label: 'Terceros', value: 2, overdue: 1, critical: 0, width: 33 },
]
export const demoAlerts = [
  { title: 'Permiso Sectorial A', project: 'Proyecto Demo Norte', situation: 'Expediente observado', pending: 'Firma del expediente', owner: 'Cliente', risk: 'Crítico', days: '+116' },
  { title: 'Hito Ambiental B', project: 'Proyecto Demo Centro', situation: 'Documentación incompleta', pending: 'Completar documento', owner: 'Equipo', risk: 'Alto', days: '+38' },
  { title: 'Permiso Municipal C', project: 'Proyecto Demo Sur', situation: 'Antecedentes en validación', pending: 'Validar antecedentes', owner: 'ALEN', risk: 'Seguimiento', days: '+12' },
]
export const demoActions = [
  { rank: '01', level: 'Prioridad alta', project: 'Proyecto Demo Norte', summary: 'Completar antecedentes y preparar reingreso.', owner: 'Cliente', due: 'Esta semana', state: 'Bloqueado' },
  { rank: '02', level: 'Seguimiento', project: 'Proyecto Demo Centro', summary: 'Validar documentación para el próximo hito.', owner: 'Equipo', due: '5 días', state: 'En curso' },
  { rank: '03', level: 'Control', project: 'Proyecto Demo Sur', summary: 'Confirmar respuesta de organismo sectorial.', owner: 'ALEN', due: '7 días', state: 'Planificado' },
]
export const permitRows = [
  ['Demo Norte','Permiso A','Observaciones','75%','▲ Crítico','+116','Firma expediente','Cliente'], ['Demo Centro','Permiso B','Preparación','40%','◆ Alto','+38','Completar documento','Equipo'],
  ['Demo Sur','Permiso C','Ingresado','50%','● Seguimiento','+12','Validar antecedentes','ALEN'], ['Demo Costa','Permiso D','En curso','65%','● Controlado','4','Revisión técnica','Terceros'],
]
export const milestones = [
  { date: '03 SEP', project: 'Proyecto Demo Norte', milestone: 'Entrega de antecedentes', days: 'Vencido +4', status: 'Vencido', owner: 'Cliente', dependency: 'Firma de expediente' },
  { date: '05 SEP', project: 'Proyecto Demo Centro', milestone: 'Revisión técnica', days: 'En 2 días', status: 'Próximo', owner: 'Equipo', dependency: 'Informe consolidado' },
  { date: '08 SEP', project: 'Proyecto Demo Sur', milestone: 'Ingreso sectorial', days: 'En 5 días', status: 'Programado', owner: 'ALEN', dependency: 'Validación documental' },
  { date: '10 SEP', project: 'Proyecto Demo Costa', milestone: 'Mesa de coordinación', days: 'En 7 días', status: 'Programado', owner: 'Terceros', dependency: 'Confirmación de agenda' },
]
export const assistantQuestions = [
  { question: '¿Qué proyectos requieren atención esta semana?', answer: '6 proyectos requieren atención. De ellos, 3 presentan riesgo crítico y deben priorizarse en la revisión ejecutiva.' },
  { question: '¿Qué permisos presentan mayor atraso?', answer: 'El Permiso Sectorial A registra el mayor atraso del escenario demo: 116 días y una firma pendiente del cliente.' },
  { question: '¿Qué acciones dependen del cliente?', answer: 'Hay 6 acciones asignadas al cliente. La firma del expediente es la más urgente porque bloquea un reingreso.' },
  { question: '¿Cuáles son los próximos hitos críticos?', answer: 'Hay 4 hitos próximos. Uno está vencido y otro requiere validación documental dentro de los próximos 2 días.' },
]
