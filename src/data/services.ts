import { Leaf, Scale, Users } from 'lucide-react'

export const services = [
  { number: '01', title: 'Gestión Ambiental', text: 'Evaluación ambiental, líneas de base, permisos ambientales sectoriales, RETC y cumplimiento.', items: ['EIA y DIA', 'Líneas de base', 'Auditorías de cumplimiento'], icon: Leaf, tone: 'green' },
  { number: '02', title: 'Gestión y Comunicación Social', text: 'Relacionamiento comunitario, gestión territorial y acompañamiento de proyectos.', items: ['Relacionamiento comunitario', 'Gestión territorial', 'Coordinación de actores'], icon: Users, tone: 'coral' },
  { number: '03', title: 'Asesoría Legal y Permisos', text: 'Estrategia regulatoria y tramitación de permisos para materializar proyectos complejos.', items: ['Consultas y RCA', 'Permisos sectoriales', 'Permisos sanitarios y municipales'], icon: Scale, tone: 'ochre' },
]
