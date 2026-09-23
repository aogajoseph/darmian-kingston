import React from 'react';
import ReactDOM from 'react-dom/client';
import { ArrowUpRight, Menu, X, Play } from 'lucide-react';
import { FaInstagram, FaYoutube, FaFacebookF, FaTiktok } from 'react-icons/fa';
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

        <button 
          className="menu-button" 
          aria-label="Toggle navigation" 
          onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}
        </button>

        <nav className={open ? 'nav open' : 'nav'}>
          {['About', 'Shows', 'Media', 'Projects', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={close}>{item}</a>)}
          
          <a 
            className="button button-small" 
            href="#contact" onClick={close}>
            Book Darmian 
            <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-background-text" aria-hidden="true">
            DK
          </div>

          <div className="hero-copy">
            <div className="hero-intro">
              <span className="hero-line" />
              <p className="eyebrow">
                Entertainer · Creator · Entrepreneur
              </p>
            </div>

            <h1>
              More than
              <br />
              entertainment.
              <br />
              <em>It's a movement.</em>
            </h1>

            <p className="hero-text">
              The official digital home of Darmian Kingston.
              A storyteller, entertainer and creative force
              building experiences that connect, inspire and
              leave a lasting impression.
            </p>

            <div className="hero-actions">
              <a className="button" href="#contact">
                Book Darmian
                <ArrowUpRight size={16} />
              </a>

              <a className="text-link" href="#projects">
                Explore projects
                <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="hero-signature">
              <span>DK</span>
              <p>Creating impact<br />beyond the spotlight.</p>
            </div>
          </div>

          <div
            className="hero-portrait"
            aria-label="Portrait of Darmian Kingston"
          >
            <div className="portrait-grid" />

            <div className="portrait-glow" />

            <div className="portrait-card">
              <img
                src="/images/dk.png"
                alt="Darmian Kingston portrait"
              />
            </div>

            <div className="portrait-label">
              <span>01</span>
              <span>Personal brand</span>
            </div>

            <div className="portrait-side-text">
              EST. 2026
            </div>
          </div>

          <div className="hero-scroll">
            <span />
            <p>Scroll to explore</p>
          </div>
        </section>

        <section className="stats section-pad">{stats.map(([number, label]) => <div className="stat" key={label}><strong>{number}</strong><span>{label}</span></div>)}</section>

        <section id="about" className="split-section section-pad about-section">
          <div className="about-heading">
            <p className="eyebrow">01 / About</p>

            <h2>
              A personal brand
              <br />
              with something
              <br />
              to say.
            </h2>

            <span className="about-accent-line" />
          </div>

          <div className="about-content">
            <div className="about-copy">
              <p className="body-copy">
                Darmian Kingston is an entertainer, creator and entrepreneur
                building experiences that connect people, challenge perspectives
                and leave a lasting impression.
              </p>

              <p className="body-copy">
                From the stage to the screen, every project is an opportunity
                to turn attention into meaningful impact.
              </p>

              <a className="text-link" href="#contact">
                Discover the story <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="about-visuals">
              <div className="about-image about-image-main">
                <img
                  src="/images/about.png"
                  alt="Darmian Kingston performing on stage"
                />
                <span className="about-image-label">Live performance</span>
                <span className="about-image-number">01</span>
              </div>

              <div className="about-image about-image-secondary">
                <img
                  src="/images/about2.png"
                  alt="Darmian Kingston during a podcast conversation"
                />
                <span className="about-image-label">The conversation</span>
                <span className="about-image-number">02</span>
              </div>
            </div>
          </div>
        </section>

        <section id="shows" className="dark-section section-pad">
          <div className="section-heading">
            <div>
              <p className="eyebrow">On stage</p>
              <h2>Shows & appearances</h2>
            </div>

            <a className="text-link" href="#contact">
              Request booking <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="feature-grid">
            <article className="show-card show-card-main">
              <div className="show-card-background" />

              <div className="show-card-overlay" />

              <div className="show-card-number">01</div>

              <div className="show-card-content">
                <span>entertainment</span>

                <h3>
                  Comedy, connection
                  <br />
                  and unforgettable nights.
                </h3>

                <p>
                  Built for audiences, brands, festivals and private experiences.
                </p>

                <a className="text-link" href="#contact">
                  Explore live entertainment <ArrowUpRight size={16} />
                </a>
              </div>
            </article>

            <article className="show-card show-card-secondary">
              <div className="show-card-background" />

              <div className="show-card-overlay" />

              <div className="show-card-number">02</div>

              <div className="show-card-content">
                <span>Hosting</span>

                <h3>
                  Confident energy.
                  <br />
                  Sharp delivery.
                </h3>

                <p>
                  Professional hosting for launches, events and conversations.
                </p>

                <a className="text-link" href="#contact">
                  Explore hosting <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          </div>
        </section>

        <section id="media" className="section-pad media-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">From the archive</p>
              <h2>Moments that<br /><em>move people.</em></h2>
            </div>

            <p>
              Explore selected moments, conversations and creative projects from Darmian Kingston's journey.
            </p>
          </div>

          <div className="media-showcase">
            <article className="media-feature">
              <div className="media-image media-image-main"
                style={{
                  backgroundImage: 'url("/images/media-feature.png")',
                }}
              >
                <div className="media-image-overlay" />

                <span className="media-number">01</span>

                <button
                  className="media-play"
                  aria-label="Play featured video"
                >
                  <Play size={22} fill="currentColor" />
                </button>

                <div className="media-caption">
                  <span>Featured film</span>
                  <h3>The Kingston Sessions</h3>
                </div>
              </div>
            </article>

            <div className="media-list">
              <article className="media-item">
                <div
                  className="media-image media-image-small"
                  style={{
                    backgroundImage: 'url("/images/media-behind.png")',
                  }}
                >
                  <span className="media-number">02</span>

                  <button
                    className="media-play"
                    aria-label="Play behind the scenes video"
                  >
                    <Play size={16} fill="currentColor" />
                  </button>
                </div>

                <div className="media-item-copy">
                  <span>Behind the scenes</span>
                  <h3>Behind the Laughs</h3>
                  <a href="#contact" className="text-link">
                    Explore story <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>

              <article className="media-item">
                <div
                  className="media-image media-image-small"
                  style={{
                    backgroundImage: 'url("/images/media-live.png")',
                  }}
                >
                  <span className="media-number">03</span>

                  <button
                    className="media-play"
                    aria-label="Play live performance video"
                  >
                    <Play size={16} fill="currentColor" />
                  </button>
                </div>

                <div className="media-item-copy">
                  <span>Live performance</span>
                  <h3>The Darmian Experience</h3>
                  <a href="#contact" className="text-link">
                    View performance <ArrowUpRight size={15} />
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="projects" className="section-pad projects-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Beyond the stage</p>
              <h2>Featured projects</h2>
            </div>

            <p>
              Creative work, original formats and experiences built to connect
              with audiences beyond the spotlight.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className="project-row"
                key={project.title}
              >
                <span className="project-number">
                  0{index + 1}
                </span>

                <div className="project-content">
                  <span className="eyebrow">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>
                </div>

                <a
                  href="#contact"
                  className="project-link"
                  aria-label={`Explore ${project.title}`}
                >
                  <ArrowUpRight size={22} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="contact-layout">
            <div className="contact-intro">
              <p className="eyebrow">Let's work together</p>

              <h2>
                Bring the<br />
                <em>vision to life.</em>
              </h2>

              <p className="contact-description">
                From live performances and brand partnerships to media
                collaborations, let's create something meaningful.
              </p>

              <div className="contact-details">
                <div>
                  <span>Email</span>
                  <a href="mailto:hello@darmiankingston.com">
                    hello@darmiankingston.com
                  </a>
                </div>

                <div>
                  <span>Availability</span>
                  <p>Bookings · Partnerships · Collaborations</p>
                </div>
              </div>
            </div>

            <form className="booking-form">
              <div className="form-heading">
                <span>01 / Enquiry</span>
                <h3>Start a conversation.</h3>
              </div>

              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  required
                />
              </label>

              <label>
                Email address
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Enquiry type
                <select name="enquiryType" defaultValue="" required>
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="booking">Event booking</option>
                  <option value="brand">Brand partnership</option>
                  <option value="media">Media appearance</option>
                  <option value="collaboration">Creative collaboration</option>
                  <option value="other">Other</option>
                </select>
              </label>

              <label>
                Tell us more
                <textarea
                  name="message"
                  placeholder="Share the details of your enquiry..."
                  rows={5}
                  required
                />
              </label>

              <button type="submit" className="button">
                Send enquiry <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer section-pad"><div className="brand"><span className="brand-mark">D</span><span><strong>DARMIAN</strong><strong>KINGSTON</strong></span></div><div className="socials"><a href="#" aria-label="Instagram"><FaInstagram /></a><a href="#" aria-label="YouTube"><FaYoutube /></a><a href="#" aria-label="Facebook"><FaFacebookF /></a><a href="#" aria-label="TikTok"><FaTiktok /></a></div><p>© {new Date().getFullYear()} Darmian Kingston. All rights reserved.</p></footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
