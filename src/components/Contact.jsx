import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
function Contact() {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>

            <p className="contact-text">
                Feel free to reach out! I'm always happy to connect, collaborate, or learn something new.
            </p>

            <div className="contact-links">

                <a
                    href="https://www.linkedin.com/in/arthika-a-t-2a72a9250/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                >
                    <FaLinkedin />
                    <span>LinkedIn</span>
                </a>

                <a
                    href="https://github.com/atarthika"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-icon"
                >
                    <FaGithub />
                    <span>GitHub</span>
                </a>

                <a href="mailto:arthikaat@gmail.com" className="contact-icon">
                    <FaEnvelope />
                    <span>Email</span>
                </a>

            </div>
        </section>
    );
}

export default Contact;
