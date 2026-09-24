import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

function Contact() {
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.target);

    // Replace this with your actual Web3Forms Access Key
    formData.append(
                      "access_key",
                      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
                    );

    // Optional email subject
    formData.append("subject", "New Portfolio Contact Message");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setMessage("Message sent successfully. Thanks for reaching out.");
        e.target.reset();
      } else {
        setStatus("error");
        setMessage(
          "Something went wrong. Please try emailing me directly."
        );
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        "Unable to send the message right now. Please try again later."
      );
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <p className="section-label">GET IN TOUCH</p>
        <h2>Let's Connect</h2>
        <span></span>
      </div>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <div className="contact-icon">
            <FiMail />
          </div>

          <h3>Have a project or opportunity?</h3>

          <p>
            I'm open to Data Analyst, BI Analyst and Process Analyst
            opportunities. Feel free to reach out if you'd like to
            connect or discuss a role.
          </p>

          <a
            href="mailto:visheshgaur276@gmail.com"
            className="contact-email"
          >
            visheshgaur276@gmail.com
          </a>

          <div className="contact-social-row">

            <a
              href="https://github.com/visheshgaur17"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/vishesh-gaur-ba2935226/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
              <span>LinkedIn</span>
            </a>

          </div>
        </div>


        {/* RIGHT SIDE - CONTACT FORM */}
        <div className="contact-form-wrapper">

          <form
            onSubmit={handleSubmit}
            className="contact-form"
          >

            <div className="form-group">
              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="email">
                Your Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
              />
            </div>


            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Hi Vishesh, I'd like to discuss an opportunity..."
                required
              ></textarea>
            </div>


            <button
              type="submit"
              className="contact-submit-btn"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "Sending..."
                : "Send Message"}

              <FiSend />
            </button>


            {message && (
              <p
                className={`form-status-msg ${
                  status === "success"
                    ? "success"
                    : "error"
                }`}
              >
                {message}
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;