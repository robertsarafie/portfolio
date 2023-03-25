import Link from 'next/link';
import About from '../components/homepage/About';
import Contact from '../components/homepage/Contact';
import Skills from '../components/homepage/Skills';
import Work from '../components/homepage/Work';

export default function Home() {
  return (
    <div>
      <div className="content">
        <div className="content-main">
          <section className="about" id="top">
            <header className="header">
              <Link href="/" title="Home">
                R.
              </Link>
            </header>

            <About></About>
          </section>

          <section className="work">
            <Work></Work>
          </section>

          <section className="last-section">
            <Skills></Skills>
          </section>

          <section>
            <Contact></Contact>
          </section>

          <footer className="footer container mb-3">
            <div className="footer-line mb-2"></div>
            <p>© Robert Sarafie 2023</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
