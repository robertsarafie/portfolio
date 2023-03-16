export default function About() {
  return (
    <div className="about-inner container">
      <div className="about-inner-description">
        <h1>About</h1>

        <p>
          Aspiring junior <span>front-end developer</span> with a desire to
          learn and grow in a collaborative team environment. Recently, I
          pivoted my career from graphic design to front-end due to my passion
          for web space development and problem-solving abilities. I typically
          use HTML/CSS and JavaScript.
        </p>
      </div>

      <aside className="about-inner-image">
        <picture>
          <img src="/images/avatar.png" alt="Avatar" />
        </picture>
        <div className="about-inner-image-rectangle"></div>
      </aside>
    </div>
  );
}
