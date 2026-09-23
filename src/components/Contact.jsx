function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <p>GET IN TOUCH</p>
        <h2>Let's Connect</h2>
        <span></span>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Have a project or opportunity?</h3>

          <p>
            I'm open to Data Analyst, BI Analyst and Process Analyst
            opportunities. Feel free to reach out if you'd like to
            connect or discuss a role.
          </p>

          <a href="mailto:visheshgaur276@gmail.com" className="contact-email">
           visheshgaur276@gmail.com
          </a>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/visheshgaur17"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/vishesh-gaur-ba2935226/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:visheshgaur276@gmail.com">
            Email
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;