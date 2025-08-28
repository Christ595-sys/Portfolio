import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import './App.css';

function Contact () {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({name: '', email: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);


    const EMAILJS_SERVICE_ID = 'service_jhgnaur';
    const EMAILJS_TEMPLATE_ID = 'template_wn67cfo';
    const EMAILJS_USER_ID = 'iVMZ_lICizK7lMQsa';

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                    to_email: 'sabbakchrist9@gmail.com' 
                },
                EMAILJS_USER_ID
            );

            alert('Thank you for your message! I will get back to you soon.');
            setFormData({name: '', email: '', message: ''});
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Sorry, there was an error sending your message. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return(
        <div>
            <header>
      <div className="container">
        <div className="header-content">
          <div className="logo">Portfolio</div>
          <nav>
            <ul className="nav-links">
              <li><a onClick={() => navigate("/")}>Home</a></li>
              <li><a onClick={() => navigate("/About")}>About</a></li>
              <li><a onClick={() => navigate("/Projects")}>Projects</a></li>
              <li><a onClick={() => navigate("/Contact")}>Contact</a></li>
            </ul>
            
          </nav>
        </div>
      </div>
    </header>

             <section id="contact" className="contact">
                <div className="container">
                    <h2 className="section-title">Get In Touch</h2>
                    <div className="contact-content">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={(e) =>
                                    setFormData({ ...formData, [e.target.name]: e.target.value})
                                }
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({...formData, [e.target.name]: e.target.value})
                                }
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label>Your Message</label>
                                <textarea
                                name="message"
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData({...formData, [e.target.name]: e.target.value})
                                }
                                required
                                ></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">{isLoading ? 'Sending...' : 'Send Message'}</button>
                        </form>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Zahle, Lebanon</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>sabbakchrist9@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+961 71505994</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </section>  


              <footer>
      <div className="container">
        <div className="logo">Portfolio</div>
        <div className="social-links">
          <a href="#"><i className="fab fa-github"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
        </div>
    );
}
export default Contact;