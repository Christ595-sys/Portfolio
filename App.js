import React from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

function App() {
    const navigate = useNavigate();

    return (
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

            <section id="home" className="hero">
                <div className="container">
                    <h1>Hi, I'm Chris Sabbak</h1>
                    <p>A passionate Frontend Developer focused on creating interactive and responsive web applications.</p>
                    <div className="hero-buttons">
                        <a onClick={() => navigate("/Projects")} className="btn btn-primary">View My Work</a>
                        <a onClick={() => navigate("/Contact")} className="btn btn-outline">Contact Me</a>
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

export default App;