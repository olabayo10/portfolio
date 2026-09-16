import myimage from '../images/corp.png'
function About() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  return (
      <section className="about-section" id="about">

        <div className="about-content">
          <div className="about-image">
            <img src={myimage} alt="Adebayo"/>
          </div>

          <div className="about-info">
            <div className="about-text">
              <h4 className="about-h4">About Me </h4>
              <h3>
                I'm a Frontend Developer 
              </h3>

              <h2>Building clean, functional interfaces</h2>

              <div className="about-boxes">
                <div className="about-box">
                  <strong>2+ Years</strong>
                  <span>Experience</span>
                </div>
                <div className="about-box">
                  <strong>Responsive</strong>
                  <span>Design</span>
                </div>
                <div className="about-box">
                  <strong>Clean Code</strong>
                  <span>&amp; Best Practices</span>
                </div>
              </div>
            </div>
            

            <div className='about-sec'>
              <div className="about-skills">
                {skills.map((skill) => (
                  <span className="about-skill" key={skill}>{skill}</span>
                ))}
              </div>

              <div className='about-button'>
                <a href="/cv.pdf" download>
                  Download CV
                </a>
              </div>
            </div>
          </div>

        </div>

      </section>
  );
}

export default About;


