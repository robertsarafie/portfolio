import Link from 'next/link';
import About from '../components/homepage/About';
import Contact from '../components/homepage/Contact';
import Skills from '../components/homepage/Skills';
import Work from '../components/homepage/Work';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Robert Sarafie Portfolio</title>
        <link rel="canonical" href="https://robert-sarafie.netlify.app/" />
        <meta name="description" content="Robert Sarafie Portfolio" />
      </Helmet>

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
