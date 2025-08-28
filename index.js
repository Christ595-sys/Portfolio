import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="About" element={<About/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="Projects" element={<Projects/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();



