export const modules = [
  { id: 'portafolio', label: 'Control de Portafolio' },
  { id: 'alertas', label: 'Alertas' },
  { id: 'permisos', label: 'Gestión de Permisos' },
  { id: 'hitos', label: 'Hitos' },
  { id: 'pendientes', label: 'Pendientes' },
  { id: 'responsables', label: 'Responsables' },
  { id: 'reporteria', label: 'Reportería Ejecutiva' },
  { id: 'ia', label: 'IA asistencial' },
] as const
export const process = [
  ['01', 'Centralizamos', 'Proyectos, planillas, hitos y permisos.'],
  ['02', 'Analizamos', 'Fechas, estados, riesgos y reglas validadas.'],
  ['03', 'Priorizamos', 'Alertas y acciones que requieren atención.'],
  ['04', 'Informamos', 'Dashboard, informe y comunicación ejecutiva.'],
  ['05', 'Mejoramos', 'Histórico y aprendizaje continuo.'],
]
