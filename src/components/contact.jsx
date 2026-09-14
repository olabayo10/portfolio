import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isChecked) {
      alert("Please accept the terms and privacy policy.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mblqjlee", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setIsChecked(false);
      } else {
        alert("Message failed to send.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contacts">
      <div className="contact-div">
        <div className="contact-card">
          <h2>Reach Me</h2>

          <p className="contact-p">
            Have a project in mind? Feel free to get in touch with me.
          </p>

          <div className="info">
            <div className="info-icon">
              <FaPhoneAlt />
            </div>
            <div className="info-text">
              <h4>Call</h4>
              <p>08133823348</p>
            </div>
          </div>

          <div className="info">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-text">
              <h4>Email</h4>
              <p>olabayo10@gmail.com</p>
            </div>
          </div>

          <div className="info">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-text">
              <h4>Address</h4>
              <p>Lagos, Nigeria.</p>
            </div>
          </div>

          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/bayo-dada/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>

            <a
              href="https://wa.me/2348133823348"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="social-icon" />
            </a>

            <a href="mailto:olabayo10@gmail.com">
              <FaEnvelope className="social-icon" />
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>

          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              required
            />

            <label htmlFor="terms">I accept the privacy policy</label>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;