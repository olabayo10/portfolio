import {
  FaLinkedin,
  FaGithub,
  FaGoogle
} from "react-icons/fa";


function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()}. All rights reserved.</p>

      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/bayo-dada/" target="_blank" rel="noreferrer">
            <FaLinkedin className="socials-icon" />
        </a>

        <a href="https://github.com/olabayo10" target="_blank" rel="noreferrer">
            <FaGithub className="socials-icon"/>
        </a>

        <a href="mailto:olabayo10@gmail.com">
            <FaGoogle className="socials-icon" />
        </a>
      </div>
    </footer>
  )
}

export default Footer