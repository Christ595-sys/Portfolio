import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

function About () {
    const navigate = useNavigate();

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
            <section id="about" className="about">
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                        <h3>Curious about me?</h3>
                        <p>I'm a frontend developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, HTML, CSS, and more.</p>
                        <p>I enjoy turning complex problems into simple, beautiful and intuitive designs. My goal is to build web applications that are both visually appealing and highly functional.</p>
                    <div className="skills">
                        <span className="skill">Javascript</span>
                        <span className="skill">React</span>
                        <span className="skill">HTML</span>
                        <span className="skill">CSS</span>
                        <span className="skill">Git</span>
                        <span className="skill">Responsive Design</span>
                    </div>
                </div>
                <div className="about-image">
                    <div >
                        <img className="image-placeholer" src="./Images/Profile pic.jpg"></img>
                        <i className="fas fa-user"></i>
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
export default About;