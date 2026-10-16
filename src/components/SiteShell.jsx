import { useRef, useState } from 'react'
import { profile } from '../data'

const links = [['home','Overview'],['book','The book'],['ideas','Perspectives'],['business','Businesses'],['about','About Raja'],['connect','Connect']]

export function External({ href, children, className = '' }) {
  return <a className={className} href={href} target="_blank" rel="noopener noreferrer">{children}<span aria-hidden="true"> ↗</span></a>
}

export default function SiteShell({ page, children }) {
  const [open, setOpen] = useState(false)
  const toggle = useRef(null)
  return <>
    <a className="skip" href="#main" onClick={event => { event.preventDefault(); document.getElementById('main')?.focus() }}>Skip to content</a>
    <aside className="rail" onKeyDown={event => { if(event.key === 'Escape'){ setOpen(false); toggle.current?.focus() } }}>
      <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Raja Narayanasamy home">rn<span>•</span></a>
      <p className="rail-name">Raja<br/>Narayanasamy</p>
      <button ref={toggle} className="menu-toggle" aria-controls="navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Explore +'}</button>
      <nav id="navigation" aria-label="Main navigation" className={open ? 'navigation open' : 'navigation'}>
        {links.map(([id,label], index) => <a key={id} href={`#${id}`} aria-current={page === id ? 'page' : undefined} onClick={() => setOpen(false)}><span className="nav-number">0{index+1}</span>{label}<span className="nav-arrow" aria-hidden="true">↗</span></a>)}
      </nav>
      <div className="rail-bottom"><p>Engineering.<br/>Enterprise.<br/>What comes next.</p><External href={profile.linkedin}>LinkedIn</External></div>
    </aside>
    <div className="workspace">
      <header className="masthead"><a href="#home">RAJA NARAYANASAMY</a><span>Technology · Business · Ideas</span><a href="#connect">Let’s talk ↗</a></header>
      <main id="main" tabIndex={-1}>{children}</main>
      <footer><p>© {new Date().getFullYear()} Raja Narayanasamy</p><a href={`mailto:${profile.email}`}>Start a conversation ↗</a><button onClick={() => { window.scrollTo({top:0, behavior:matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}); document.getElementById('main')?.focus({preventScroll:true}) }}>Back to top ↑</button></footer>
    </div>
  </>
}
