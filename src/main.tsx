import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  ArrowUpRight,
  Menu,
  X
} from 'lucide-react';

import {
  FaInstagram,
  FaYoutube,
  FaFacebookF
} from 'react-icons/fa';

import './styles.css';

const projects = [
  { category: 'Live Show', title: 'The Darmian Experience', description: 'A high-energy live entertainment experience built around comedy, conversation and culture.' },
  { category: 'Podcast', title: 'The Kingston Sessions', description: 'Unfiltered conversations with creators, innovators and extraordinary personalities.' },
  { category: 'Documentary', title: 'Behind the Laughs', description: 'A closer look at the stories, people and moments behind the public persona.' },
];

const stats = [
  ['10+', 'Years in entertainment'],
  ['500+', 'Shows performed'],
  ['1M+', 'Audience across platforms'],
  ['Global', 'Audience and growing'],
];

function App() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#home" onClick={close}>
          <span className="brand-mark">D</span>
          <span><strong>DARMIAN</strong><strong>KINGSTON</strong></span>
        </a>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'nav open' : 'nav'}>
          {['About', 'Shows', 'Media', 'Projects', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>)}
          <a className="button button-small" href="#contact" onClick={close}>Book Darmian <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <p className="eyebrow">Entertainer · Creator · Entrepreneur</p>
            <h1>More than<br />entertainment.<br /><em>It's a movement.</em></h1>
            <p className="hero-text">
              The official digital home of Darmian Kingston. Built on passion, driven by purpose, and dedicated to inspiring impact.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">Book Darmian <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#projects">Explore projects <ArrowUpRight size={16} /></a>
            </div>
          </div>
          <div className="hero-portrait" aria-label="Portrait placeholder for Darmian Kingston">
          <div className="portrait-glow" />
            <div className="portrait-card">
              <span>DK</span>
              <p>Portrait<br />coming soon</p>
            </div>
          </div>
        </section>

        <section className="stats section-pad">{stats.map(([number, label]) => 
          <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}
        </section>

        <section id="about" className="split-section section-pad">
          <div>
            <p className="eyebrow">The person. The purpose.</p>
            <h2>A personal brand with something to say.</h2>
          </div>
          <div>
            <p className="body-copy">
              Darmian Kingston is an entertainer, creator and entrepreneur building experiences that connect people, challenge perspectives and leave a lasting impression.
            </p>
            <p className="body-copy">
              From the stage to the screen, every project is an opportunity to turn attention into meaningful impact.
            </p>
            <a className="text-link" href="#contact">Discover the story <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section id="shows" className="dark-section section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">On stage</p>
              <h2>Shows & appearances</h2>
            </div>
            <a className="text-link" href="#contact">Request booking <ArrowUpRight size={16} /></a>
          </div>
          <div className="feature-grid">
            <article>
              <span>01 / Live entertainment</span>
              <h3>Comedy, connection<br />and unforgettable nights.</h3>
              <p>Built for audiences, brands, festivals and private experiences.</p>
            </article>
            <article>
              <span>02 / Hosting</span>
              <h3>Confident energy.<br />Sharp delivery.</h3>
              <p>Professional hosting for launches, events and conversations.</p>
            </article>
          </div>
        </section>

        <section id="media" className="section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Latest media</h2>
            </div>
            <a className="text-link" href="#contact">View all media <ArrowUpRight size={16} /></a>
          </div>
          <div className="media-grid">
            <div className="media-card large">
              <span>Featured video</span>
              <h3>The story behind the laughter.</h3>
            </div>
            <div className="media-card">
              <span>Podcast</span><h3>Conversations that matter.</h3>
            </div>
            <div className="media-card">
              <span>Documentary</span><h3>Beyond the spotlight.</h3>
            </div>
          </div>
        </section>

        <section id="projects" className="section-pad projects-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Beyond the stage</p>
              <h2>Featured projects</h2>
            </div>
          </div>
          <div className="project-list">
            {projects.map((project, index) => 
            <article className="project-row" key={project.title}>
              <span className="project-number">0{index + 1}</span>
              <div>
                <span className="eyebrow">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <ArrowUpRight />
            </article>)}
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <p className="eyebrow">Let's work together</p>
          <h2>Bring the next idea<br /><em>to life.</em></h2>
          <p>For bookings, collaborations, appearances and business inquiries.</p>
          <a className="button" href="mailto:hello@example.com">Start a conversation <ArrowUpRight size={16} /></a>
        </section>
      </main>

      <footer className="footer section-pad">
        <div className="brand">
          <span className="brand-mark">D</span>
          <span><strong>DARMIAN</strong><strong>KINGSTON</strong></span>
        </div>
        <div className="socials">
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>

          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Darmian Kingston. All rights reserved.</p>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
