import coverPic from '../images/Pic.png';
function Hero({menuOpen}) {
  return (
    <section id="hero" className={`hero-section ${menuOpen ? "pushed" : ""}`}>
      
      <div className="hero-blob" />
      <div className="hero-ring hero-ring--top" />
      <div className="hero-ring hero-ring--bottom" />
      <div className="hero-dots hero-dots--top-right">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <div className="hero-dots hero-dots--mid-left">
        {Array.from({ length: 9 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <div className='hero-main'>
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm <span className="hero-line"></span></p>

          <h1 className="hero-name">Adebayo <span className="hero-accent">Dada</span></h1>
          <h4 className="hero-role">Frontend Developer</h4>

          <p className="hero-description">
            I'm a frontend developer equiped to solve digital problems.
          </p>     
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Hire Me <span className="btn-icon">&rarr;</span>
            </a>
            <a href="/cv.pdf" download className="btn btn-sec">
              Download CV <span className="btn-icon">&darr;</span>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-image">
        <div className='img-div'>
            <img src={coverPic} alt="a pic"  />
        </div>
      </div>
    </section>
  )
}

export default Hero