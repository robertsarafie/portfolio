export default function Contact() {
  return (
    <div className="contact container mb-1">
      <h1 className="contact-title">Contact</h1>

      <div className="contact-connect">
        <ul>
          <li>
            <a href="tel:+40751299259" title="+40751299259">
              <i class="fa-solid fa-square-phone"></i>
            </a>
          </li>

          <li>
            <a
              href="mailto:sarafierobert@gmail.com"
              title="sarafierobert@gmail.com"
            >
              <i class="fa-solid fa-square-envelope"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/sarafierobertsb/"
              target="_blank"
              rel="noopener noreferrer"
              title="instagram"
            >
              <i class="fa-brands fa-square-instagram"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/robert-sarafie/"
              target="_blank"
              rel="noopener noreferrer"
              title="linkedin"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/robertsarafie"
              target="_blank"
              rel="noopener noreferrer"
              title="github"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
          </li>
        </ul>

        <div className="contact-connect-dog">
          <div className="contact-connect-dog-description">
            <p>Hire my owner!</p>
            <p>Woof!</p>
          </div>

          <picture>
            <img src="/images/bruno.svg" alt="Bruno" title="Bruno" />
          </picture>
        </div>
      </div>
    </div>
  );
}
