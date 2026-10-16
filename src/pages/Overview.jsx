import { profile } from '../data'

export default function Overview() {
  return <div className="overview">
    <div className="issue-line"><span className="eyebrow">A journal of ideas & enterprise</span><span className="edition">By Raja Narayanasamy</span></div>
    <section className="opening" aria-labelledby="opening-title"><h1 id="opening-title">Experience.<br /><span>In motion.</span></h1><div className="opening-note"><span className="tiny-rule" /><p>Engineering ideas. <br />Building businesses. <br />Exploring intelligent products.</p><a className="text-link" href="#about">Meet Raja <span>↗</span></a></div></section>
    <section className="cover-grid" aria-label="Featured work">
      <a className="cover-book" href="#book"><div className="cover-caption"><span className="eyebrow">On the bookshelf</span><span aria-hidden="true">↗</span></div><div className="book-stage"><img src={profile.bookCover} alt="Engineering Intelligent Products book cover" fetchPriority="high" /></div><div><p className="eyebrow">A book by Raja Narayanasamy</p><h2>Engineering<br />Intelligent Products</h2><p>Practical Guide to AI, Edge, and Data Integration</p></div></a>
      <div className="cover-right"><a href="#business" className="feature-note"><p className="eyebrow">The current focus</p><h2>When AI<br />leaves the screen.</h2><p>Machines that see. Devices that understand. Products that act.</p><div className="sense-line" aria-label="Sense, understand, decide, act"><span>Sense</span><i>→</i><span>Understand</span><i>→</i><span>Act</span></div><span className="text-link">Explore intelligent products ↗</span></a><a href="#about" className="portrait-note"><img src={profile.portrait} alt="Raja Narayanasamy" /><div><p className="eyebrow">The person behind the work</p><h3>Engineer at heart.<br />Builder by nature.</h3><span className="text-link">My story ↗</span></div></a></div>
    </section>
    <section className="index-strip" aria-label="Explore the website"><a href="#business"><span className="eyebrow">01 / Enterprise</span><h3>Ideas into businesses.</h3><span>Explore the initiatives ↗</span></a><a href="#ideas"><span className="eyebrow">02 / Perspectives</span><h3>Thinking out loud.</h3><span>Explore the themes ↗</span></a><a href="#connect"><span className="eyebrow">03 / Conversations</span><h3>What comes next?</h3><span>Let’s build a connection ↗</span></a></section>
    <section className="editor-note"><p className="eyebrow">A note from Raja</p><p>For more than 28 years, I have worked at the intersection of engineering, technology and business — building products, engineering organisations, technology businesses and new capabilities across industries and geographies.</p><a href="#about" className="text-link">Read the story ↗</a></section>
  </div>
}
