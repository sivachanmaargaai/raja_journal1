import { useEffect, useRef, useState } from 'react'
import SiteShell from './components/SiteShell'
import Overview from './pages/Overview'
import { AboutPage, BookPage, BusinessPage, ConnectPage, IdeasPage } from './pages/ReadingPages'

const pages = { home: Overview, book: BookPage, business: BusinessPage, about: AboutPage, connect: ConnectPage, ideas: IdeasPage }
const titles = {home:'The Journal',book:'The Book',business:'Businesses',about:'About Raja',connect:'Connect',ideas:'Perspectives'}
const getPage = () => window.location.hash.slice(1) || 'home'

export default function App() {
  const [page,setPage] = useState(getPage)
  const firstVisit = useRef(true)
  useEffect(() => { const update=()=>setPage(getPage()); window.addEventListener('hashchange',update); return ()=>window.removeEventListener('hashchange',update) },[])
  useEffect(() => { document.title = `${titles[page] || 'Page not found'} — Raja Narayanasamy`; window.scrollTo({top:0,behavior:'instant'}); if(!firstVisit.current) document.getElementById('main')?.focus({preventScroll:true}); firstVisit.current=false },[page])
  const Page = pages[page]
  return <SiteShell key={page} page={page}>{Page ? <Page /> : <div className="reading-page"><h1>Page not found.</h1><a className="button" href="#home">Return to the journal</a></div>}</SiteShell>
}
