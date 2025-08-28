import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

function Projects () {
    const navigate = useNavigate();

    const projects =
    [
        {id: 1, title: 'E-commerce Website', decription: 'A fully responsive e-commerce platform with product filtering and cart functionality.', image: '/images/ecommerce.jpeg'},
        {id: 2, title: 'Task Management App', description: 'A drag-and-drop task management application with user authentication.', image:'images/taskmanager.jpeg'},
        {id: 3, title: 'Weather Dashboard', description: 'Real-time weather application with 5-day forecast and location search.', image:'images/weather.jpeg'},
        {id: 4, title: 'Social Media Dashboard', description: 'Analytics dashboard for social media metrics with interactive charts.', image:'images/socialmedia.jpeg'},
        {id: 5, title: 'Recipe Finder App', description: 'Application for finding recipes based on ingredients with dietary filters.', image:'images/recipe.jpeg'},
        {id: 6, title: 'Fitness Tracker', description: 'Workout tracking application with progress charts and exercise library.', image:'images/fitness.jpeg'},
    ];

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

      <section id="project" className="projects">
        <div className="container">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                {projects.map(project => (
                    <div key={project.id} className="project-card">
                        <div className="project-image">
                            <img src={project.image}
                            alt={project.title}
                            />
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </div>
                ))}
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
export default Projects;