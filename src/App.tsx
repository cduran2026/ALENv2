import { Header } from './components/Header'
import { About } from './sections/About'
import { AlenControl } from './sections/AlenControl'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'

export default function App() {
  return <><a className="skip-link" href="#contenido">Saltar al contenido</a><Header /><main id="contenido"><Hero /><Services /><AlenControl /><Experience /><About /><Contact /></main><Footer /></>
}
