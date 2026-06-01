import './App.css'

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Himesh Siriwardana home">
          HS
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow">Hello, I'm</p>
        <h1>Himesh<br />Siriwardana.</h1>
        <p className="intro">
          I enjoy building thoughtful digital experiences and learning along
          the way.
        </p>
        <a className="button" href="#about">
          A little about me
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="about" id="about">
        <p className="section-number">01</p>
        <div>
          <p className="eyebrow">About me</p>
          <h2>Curious by nature.<br />Focused on the details.</h2>
          <p className="body-copy">
            This is my small corner of the internet. I am interested in making
            things that feel considered, useful, and easy to understand. There
            is more to come as this space grows.
          </p>
        </div>
      </section>

      <footer id="contact">
        <p className="eyebrow">Still taking shape</p>
        <p>More details and ways to get in touch will be here soon.</p>
        <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
      </footer>
    </main>
  )
}

export default App
