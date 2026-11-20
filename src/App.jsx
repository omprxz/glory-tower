import { useEffect, useState } from 'react'
import { Link, NavLink, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'

const project = {
  name: 'The Glory Towers',
  phone: '+91 7888593861',
  email: 'info@glorytowers.com',
  address: 'Zirakpur, Punjab',
  rera: 'RERA Approved with All Legal Clearances',
}
const locations = [
  ['7 Minutes from Chandigarh', '7 min'], ['5 Minutes from International Airport', '5 min'],
  ['1 Minute from Gurudwara Shri Nabha Sahib', '1 min'], ['3 Minutes from Zirakpur Bus Stand', '3 min'],
  ['3 Minutes from Chhatbir Zoo', '3 min'], ['4 States Direct Connectivity', ''],
  ['Adjoining Sports Authority of India Stadium', ''], ['Within the Radius of Various Commercial Projects', ''],
]
const highlights = [
  '3 Towers on 3 Acres - All Sides Open', 'Premium 3BHK Apartments - 1950 Sq Ft',
  'Only 4 Flats Per Floor - Each Flat Has Its Own Corner', 'Mivan Construction by Suryacon',
  'Architect Designed by Tript', '3 High-Speed Lifts & 2 Staircases', 'Fully Equipped Clubhouse with Gym',
  'Swimming Pool & Kids Play Area', 'Multi-Level Covered Parking', '24/7 Security with Advanced CCTV & Access Control',
  '100% Power Backup for All Apartments', 'Designer Modular Kitchen & Premium Bathrooms',
  'Landscaped Terrace Garden & Outdoor Seating', 'Rainwater Harvesting & Eco-Friendly Features', project.rera,
]
const plans = ['fp1.webp', 'fp2.webp', 'fp3.webp', 'fp4.webp']
const gallery = [
  ['gt1.png', 'The Glory Towers'], ['architecture.png', 'Architecture'], ['bedroom.png', 'Bedroom'],
  ['lobby.png', 'Lobby Area'], ['clubhouse.png', 'Clubhouse'], ['gym.png', 'Gym & Fitness'],
  ['swimming-pool.png', 'Swimming Pool'], ['kidsplay.png', 'Kids Play Area'], ['park.png', 'Landscaped Park'],
]
const amenities = [
  ['clubhouse.png', 'Modern Clubhouse'], ['gym.png', 'Fitness Center'], ['swimming-pool.png', 'Swimming Pool'],
  ['kidsplay.png', 'Kids Play Area'], ['tennis.png', 'Tennis Court'], ['park.png', 'Landscaped Gardens'],
]
const why = [
  ['Prime Location', 'Situated in the heart of the city with excellent connectivity to all major landmarks and business districts.'],
  ['Luxury Living', 'Experience unparalleled luxury with premium finishes, spacious layouts, and world-class amenities.'],
  ['Premium Amenities', 'State-of-the-art gym, infinity pool, kids play area, party hall, and 24/7 security with CCTV surveillance.'],
  ['Green Spaces', 'Beautifully landscaped gardens, terrace gardens, and eco-friendly environment for a healthy lifestyle.'],
  ['Modern Infrastructure', 'High-speed elevators, power backup, covered parking, rainwater harvesting, and smart home features.'],
  ['Investment Value', 'Excellent appreciation potential in a rapidly developing area with guaranteed returns on investment.'],
]
const faqs = [
  ['What are the apartment configurations available at The Glory Towers?', 'The Glory Towers offers luxury 3 BHK apartments with configuration 1,950 sq.ft. Each unit features spacious layouts, premium finishes, and modern amenities designed for comfortable living.'],
  ['What amenities are included in the The Glory Towers project?', 'The Glory Towers features world-class amenities including a state-of-the-art gymnasium, infinity swimming pool, dedicated kids play area, landscaped gardens, party hall, 24/7 security with CCTV surveillance, high-speed elevators, power backup, covered parking, and smart home automation.'],
  ['What is the expected possession date?', 'The project is currently under construction with an expected completion and possession date scheduled for Q4 2026.'],
]

function useSeo(title, description = 'Discover premium 3 BHK living at The Glory Towers.') {
  useEffect(() => {
    document.title = `${title} | ${project.name}`
    const set = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`)
      if (!tag) { tag = document.createElement('meta'); tag.name = name; document.head.appendChild(tag) }
      tag.content = content
    }
    set('description', description)
    set('theme-color', getComputedStyle(document.documentElement).getPropertyValue('--primary').trim())
  }, [title, description])
}

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

function Header({ onOpen }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn); return () => window.removeEventListener('scroll', fn)
  }, [])
  const links = [['Home', '/'], ['About Us', '/about-us'], ['Floor Plan', '/floor-plan'], ['Amenities', '/amenities'], ['Location Map', '/location-map'], ['Blogs', '/blogs'], ['Contact', '/contact-us']]
  return <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
    <div className="container nav-row">
      <Link to="/" className="brand"><img src="/logo.png" alt={project.name} /><span>{project.name}</span></Link>
      <nav className="desktop-nav">{links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>)} </nav>
      <button className="button nav-cta" onClick={onOpen}>Book Appointment</button>
      <button className="menu-toggle" aria-label="Open menu" onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button>
    </div>
    {open && <div className="mobile-nav">{links.map(([label, path]) => <NavLink key={path} to={path} onClick={() => setOpen(false)}>{label}</NavLink>)}<button className="button" onClick={() => { setOpen(false); onOpen() }}>Book Appointment</button></div>}
  </header>
}

function TopBar() {
  const colors = [['Burgundy', '#6e0e34'], ['Gold', '#B08D57'], ['Navy', '#1F3A5F'], ['Emerald', '#1E7B5C'], ['Teal', '#0F766E'], ['Purple', '#5B3A8C'], ['Charcoal', '#2B2B2B']]
  const [active, setActive] = useState(() => localStorage.getItem('glory-theme') || colors[0][1])
  const choose = (color) => { setActive(color); localStorage.setItem('glory-theme', color); window.applyTheme?.(color) }
  if (import.meta.env.VITE_COLOR_BAR === 'false' || import.meta.env.VITE_COLOR_BAR === 'off' || import.meta.env.VITE_COLOR_BAR === '0') return null
  return <div className="theme-bar"><div className="container theme-inner"><span>Choose Theme</span><div className="swatches">{colors.map(([name, color]) => <button key={color} aria-label={name} aria-pressed={active === color} className="swatch" style={{ background: color }} onClick={() => choose(color)} />)}</div><button className="reset-theme" onClick={() => choose(colors[0][1])}>Reset</button></div></div>
}

function Footer() {
  return <footer><div className="container footer-grid"><div><div className="brand footer-brand"><img src="/logo.png" alt={project.name} /><span>{project.name}</span></div><p>Experience luxury living at its finest with The Glory Towers. Your dream home awaits in the heart of the city with world-class amenities and sophisticated design.</p></div><div><h3>Page Links</h3><Link to="/about-us">About Us</Link><Link to="/floor-plan">Floor Plan</Link><Link to="/amenities">Amenities</Link><Link to="/contact-us">Contact Us</Link></div><div><h3>Address</h3><a href="tel:+917888593861">{project.phone}</a><a href={`mailto:${project.email}`}>{project.email}</a><p>{project.address}</p></div></div><div className="footer-bottom">© {new Date().getFullYear()} {project.name}. All rights reserved.</div></footer>
}

function Layout({ children, onOpen, title }) {
  useSeo(title)
  return <><TopBar /><Header onOpen={onOpen} />{children}<Footer /></>
}

function Banner({ title, image = 'hero.png' }) { return <section className="page-banner" style={{ backgroundImage: `linear-gradient(90deg, rgba(20,12,16,.82), rgba(20,12,16,.25)), url('/project/${image}')` }}><div className="container"><p className="eyebrow">The Glory Towers</p><h1>{title}</h1></div></section> }
function Heading({ eyebrow, title, text, light = false }) { return <div className={`section-heading ${light ? 'light' : ''}`}><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p>{text}</p>}</div> }
function Button({ to, children, onClick }) { return to ? <Link className="button" to={to}>{children}</Link> : <button className="button" onClick={onClick}>{children}</button> }

function Hero({ onOpen }) {
  return <section className="hero"><video autoPlay muted loop playsInline poster="/project/hero.png"><source src="/project/teaser.mp4" type="video/mp4" /></video><div className="hero-shade" /><div className="container hero-content"><p className="eyebrow">A landmark in luxury living</p><h1>Live elevated.<br /><em>Live glorious.</em></h1><p>Premium 3 BHK residences crafted for a life of comfort, connection and distinction.</p><div className="hero-actions"><Button onClick={onOpen}>Book an Appointment</Button><a className="button outline light-button" href="#about">Explore the project ↓</a></div></div></section>
}

function AboutIntro() { return <section id="about" className="section"><div className="container split"><div><Heading eyebrow="The Glory Towers" title="A new address for the extraordinary" text="The Glory Towers represents a new era of luxury living, where architectural excellence meets modern lifestyle demands. Our vision is to create homes that are not just spaces to live in, but sanctuaries that inspire, comfort, and elevate everyday experiences." /><Button to="/about-us">Discover our story</Button></div><img className="feature-image" src="/project/showcase.png" alt="The Glory Towers showcase" /></div></section> }
function Locations() { return <section className="section tinted"><div className="container"><Heading eyebrow="The neighbourhood" title="Everything, beautifully connected" text="Strategically located with unmatched connectivity to all key landmarks." light /><div className="location-grid">{locations.map(([text, time]) => <article className="location-card" key={text}><span>◉</span><div><strong>{time || 'Nearby'}</strong><p>{text}</p></div></article>)}</div></div></section> }
function Plans() { return <section className="section"><div className="container"><Heading eyebrow="Designed around you" title="Floor plans with room to live" text="Premium 3 BHK apartments with thoughtful layouts and generous proportions." /><div className="plan-grid">{plans.map((image, i) => <article className="plan-card" key={image}><img src={`/project/plan/${image}`} alt={`3 BHK floor plan ${i + 1}`} /><div><h3>Type {String.fromCharCode(65 + i)} - 3 BHK</h3><p>1,950 Sq.ft</p></div></article>)}</div></div></section> }
function AmenityGrid() { return <section className="section soft"><div className="container"><Heading eyebrow="Life, enriched" title="Amenities that make every day special" /><div className="amenity-grid">{amenities.map(([image, name]) => <article className="image-card" key={name}><img src={`/project/${image}`} alt={name} /><div><h3>{name}</h3><span>Discover more →</span></div></article>)}</div></div></section> }
function Stats() { return <section className="stats"><div className="container stats-grid">{[['03', 'Towers'], ['03', 'Acres'], ['1950', 'Sq. Ft. residences'], ['24/7', 'Security']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></section> }
function Gallery() { return <section className="section"><div className="container"><Heading eyebrow="A glimpse within" title="Spaces that tell a story" /><div className="gallery-grid">{gallery.map(([image, label]) => <figure key={image}><img src={`/project/${image}`} alt={label} /><figcaption>{label}</figcaption></figure>)}</div></div></section> }
function Why() { return <section className="section tinted"><div className="container"><Heading light eyebrow="The Glory difference" title="Made for more" text="Discover the perfect blend of luxury, comfort, and convenience that makes The Glory Towers the ideal choice for your dream home." /><div className="why-grid">{why.map(([title, text]) => <article className="why-card" key={title}><span>✦</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section> }
function FAQ() { const [open, setOpen] = useState(0); return <section className="section"><div className="container narrow"><Heading eyebrow="Questions, answered" title="Frequently asked questions" /><div className="faq">{faqs.map(([q, a], i) => <div key={q}><button onClick={() => setOpen(open === i ? -1 : i)}>{q}<span>{open === i ? '−' : '+'}</span></button>{open === i && <p>{a}</p>}</div>)}</div></div></section> }

function Home({ onOpen }) { useSeo('Luxury residences in Zirakpur'); return <><Hero onOpen={onOpen} /><AboutIntro /><Locations /><Plans /><AmenityGrid /><Stats /><Gallery /><Why /><FAQ /><section className="map"><div className="container"><Heading light eyebrow="Find your way home" title="A location with a future" /><img src="/project/hero.png" alt="Project location" /></div></section></> }
function About() { return <><Banner title="About Us" /><section className="section"><div className="container split"><div><Heading eyebrow="Our story" title="Where vision meets living" /><p>We are committed to delivering exceptional quality, innovative design, and sustainable development practices. Every aspect of The Glory Towers has been meticulously planned to ensure that our residents enjoy the finest amenities, superior construction quality, and a lifestyle that exceeds expectations.</p><p>Conceived as a landmark project in the heart of the city, The Glory Towers stands as a testament to our commitment to excellence, with premium 3 BHK apartments designed by award-winning architects.</p></div><img className="feature-image" src="/project/kitchen.png" alt="Premium interior" /></div></section><Why /><section className="section tinted"><div className="container split"><img className="feature-image" src="/project/bedroom.png" alt="Premium bedroom" /><div><Heading light eyebrow="Message from Chairman" title="A home that elevates everyday living" /><p>“Welcome to The Glory Towers, where luxury meets lifestyle. Our vision is to create not just apartments, but homes that inspire and elevate your everyday living experience.”</p><p>“With meticulous attention to detail and unwavering commitment to quality, we have crafted spaces that reflect sophistication and comfort.”</p><p className="signature">Chairman & Managing Director</p></div></div></section></> }
function GenericCollection({ type }) { const isPlans = type === 'Floor Plan'; const items = isPlans ? plans.map((x, i) => [`plan/${x}`, `Type ${String.fromCharCode(65 + i)} - 3 BHK`]) : amenities; return <><Banner title={type} /><section className="section"><div className="container"><Heading eyebrow="The Glory Towers" title={type === 'Amenities' ? 'A complete lifestyle, considered' : 'Thoughtful spaces for modern families'} text="Explore the details that make The Glory Towers an exceptional address." /><div className={isPlans ? 'plan-grid' : 'amenity-grid'}>{items.map(([image, name]) => <article className={isPlans ? 'plan-card' : 'image-card'} key={name}><img src={`/project/${image}`} alt={name} />{isPlans ? <div><h3>{name}</h3><p>1,950 Sq.ft</p></div> : <div><h3>{name}</h3></div>}</article>)}</div></div></section><Highlights /></> }
function Highlights() { return <section className="section soft"><div className="container"><Heading eyebrow="Built with intention" title="Project highlights" /><div className="highlight-grid">{highlights.map((item) => <div className="highlight" key={item}><span>✓</span>{item}</div>)}</div></div></section> }
function ContactForm() { const [status, setStatus] = useState(''); const submit = async (e) => { e.preventDefault(); const data = Object.fromEntries(new FormData(e.currentTarget)); setStatus('Sending…'); try { const response = await fetch(import.meta.env.VITE_FORM_ENDPOINT || `${import.meta.env.BASE_URL}api/form-submit.php`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...data, type: 'contact' }) }); const result = await response.json(); setStatus(result.message || (response.ok ? 'Thank you. We will be in touch.' : 'Unable to send. Please try again.')); if (response.ok) e.currentTarget.reset() } catch { setStatus('Unable to send. Please call us directly.') } }; return <form className="contact-form" onSubmit={submit}><label>Name<input name="name" required /></label><label>Phone<input name="phone" required pattern="[6-9][0-9]{9}" /></label><label>Email<input name="email" type="email" /></label><label>Message<textarea name="message" rows="4" /></label><input name="website" tabIndex="-1" autoComplete="off" className="honeypot" /><button className="button" type="submit">Send enquiry</button>{status && <p className="form-status">{status}</p>}</form> }
function Contact() { return <><Banner title="Contact Us" /><section className="section"><div className="container contact-grid"><div><Heading eyebrow="Let's connect" title="Your new home is closer than you think" text="Register your interest and our team will get back to you shortly." /><div className="contact-details"><a href={`tel:${project.phone}`}>☎ {project.phone}</a><a href={`mailto:${project.email}`}>✉ {project.email}</a><p>⌖ {project.address}</p></div></div><ContactForm /></div></section><section className="section soft"><div className="container"><Heading eyebrow="Visit us" title="Find The Glory Towers" /><img className="map-image" src="/project/hero.png" alt="The Glory Towers location" /></div></section></> }
function Blog({ detail = false }) { const { slug } = useParams(); if (detail) return <><Banner title={slug || 'Project journal'} /><section className="section"><div className="container article"><img src="/project/showcase.png" alt="The Glory Towers showcase" /><Heading eyebrow="The Glory journal" title={slug || 'The Glory Towers showcase'} /><p>The Glory Towers stands as a beacon of luxury and innovation in the heart of Zirakpur. Every detail has been crafted to offer residents an unparalleled living experience, blending comfort, style and convenience.</p><h3>Designed for the way you live</h3><p>Residents enjoy spacious interiors flooded with natural light, premium materials and access to exclusive facilities such as the clubhouse, gym and swimming pool.</p></div></section></>; return <><Banner title="Blogs" /><section className="section"><div className="container"><Heading eyebrow="The Glory journal" title="Ideas for elevated living" /><div className="blog-grid">{[['showcase.png', 'The Glory Towers showcase'], ['clubhouse.png', 'Inside the clubhouse'], ['bedroom.png', 'The art of restful living']].map(([image, title]) => <Link className="blog-card" to={`/blogs/${title.toLowerCase().replaceAll(' ', '-')}`} key={title}><img src={`/project/${image}`} alt={title} /><div><small>THE GLORY JOURNAL</small><h3>{title}</h3><span>Read more →</span></div></Link>)}</div></div></section></> }
function Modal({ close }) { return <div className="modal-backdrop" onClick={close}><div className="modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={close}>×</button><Heading eyebrow="The Glory Towers" title="Request a callback" text="We are here to help you." /><ContactForm /></div></div> }
function App() { const [modal, setModal] = useState(false); return <><ScrollReset /><Layout onOpen={() => setModal(true)} title="Home"><Routes><Route path="/" element={<Home onOpen={() => setModal(true)} />} /><Route path="/about" element={<Navigate to="/about-us" replace />} /><Route path="/contact" element={<Navigate to="/contact-us" replace />} /><Route path="/about-us" element={<About />} /><Route path="/contact-us" element={<Contact onOpen={() => setModal(true)} />} /><Route path="/floor-plan" element={<GenericCollection type="Floor Plan" />} /><Route path="/master-plan" element={<GenericCollection type="Master Plan" />} /><Route path="/amenities" element={<GenericCollection type="Amenities" />} /><Route path="/location-map" element={<Contact />} /><Route path="/download-brochure" element={<Contact />} /><Route path="/blogs" element={<Blog />} /><Route path="/blogs/category/:category" element={<Blog />} /><Route path="/blogs/:slug" element={<Blog detail />} /><Route path="/construction-updates/*" element={<GenericCollection type="Construction Updates" />} /><Route path="/construction-quality" element={<About />} /><Route path="/construction-updates/gallery" element={<Gallery />} /><Route path="/testimonials/:slug" element={<Blog detail />} /><Route path="/post-showcase" element={<Blog detail />} /><Route path="/post-clubhouse" element={<Blog detail />} /><Route path="/post-bedroom" element={<Blog detail />} /><Route path="*" element={<><Banner title="Page not found" /><section className="section center"><Heading title="We couldn't find that page." /><Button to="/">Return home</Button></section></>} /></Routes></Layout>{modal && <Modal close={() => setModal(false)} />}<a className="floating-phone" href={`tel:${project.phone}`} aria-label="Call The Glory Towers">☎</a></> }

export default App
