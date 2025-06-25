import React, { useState, useEffect } from 'react';
import { FaFilePdf } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

const content = {
  es: {
    name: "Juan Pérez Developer",
    title: "Desarrollador Full Stack | Innovador | Resolutivo",
    email: "juan.perez@example.com",
    github: "github.com/juanperez",
    linkedin: "linkedin.com/in/juanperez",
    location: "Córdoba, Argentina",
    skillsTitle: "Habilidades",
    skills: ["React", "JavaScript (ES6+)", "Node.js", "Python", "CSS", "MongoDB", "SQL", "Git", "Metodologías Ágiles", "Comunicación Efectiva"],
    achievementsTitle: "Logros Destacados",
    achievements: [
      "Optimización del rendimiento de aplicaciones web en un 25%, mejorando la experiencia del usuario.",
      "Liderazgo en el desarrollo de un módulo de e-commerce que incrementó las ventas en un 15%.",
      "Implementación exitosa de integración continua/despliegue continuo (CI/CD) para reducir los tiempos de lanzamiento."
    ],
    experienceTitle: "Experiencia Laboral",
    fullStackTitle: "Desarrollador Full Stack",
    fullStackCompany: "Tech Solutions S.A. | Enero 2022 - Presente",
    fullStackDetails: [
      "Desarrollo y mantenimiento de APIs RESTful utilizando Node.js y Express.",
      "Implementación de interfaces de usuario interactivas con React y CSS (estilos personalizados).",
      "Colaboración en equipos ágiles para la entrega de nuevas funcionalidades y mejoras.",
      "Gestión de bases de datos MongoDB y PostgreSQL."
    ],
    frontendTitle: "Desarrollador Frontend Jr.",
    frontendCompany: "Digital Innovations | Junio 2020 - Diciembre 2021",
    frontendDetails: [
      "Participación en el diseño y maquetación de componentes web con HTML, CSS y JavaScript.",
      "Soporte en la migración de proyectos a React.",
      "Optimización de la carga de páginas y la experiencia de usuario."
    ],
    certificationsTitle: "Certificaciones",
    certifications: [
      "Certificación en Desarrollo Web Full Stack - Plataforma Educativa (2021)",
      "Fundamentos de Bases de Datos con SQL - Coursera (2020)",
      "Scrum Master Certified (SMC) - Scrum.org (2023)"
    ],
    educationTitle: "Estudios",
    engineeringDegree: "Ingeniería en Sistemas de Información",
    engineeringUniversity: "Universidad Nacional de Córdoba | 2018 - 2023",
    highSchool: "Bachiller con Orientación en Informática",
    highSchoolInstitution: "Escuela Técnica Modelo | 2012 - 2017",
    exportButton: "Exportar a PDF"
  }
};

function App() {
  const [isFullStackOpen, setIsFullStackOpen] = useState(false);
  const [isFrontendOpen, setIsFrontendOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(localStorage.getItem('lang') || 'es');
  const displayContent = content[currentLang];
  const [showHeader, setShowHeader] = useState(true);
  const [triangleHidden, setTriangleHidden] = useState(false);
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    let lastScrollY = window.scrollY;
    document.body.classList.toggle("dark-mode", darkMode);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setTriangleHidden(false);
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        setTriangleHidden(true);
        setTimeout(() => setShowHeader(false), 150);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [darkMode]);


  const toggleFullStack = () => setIsFullStackOpen(!isFullStackOpen);
  const toggleFrontend = () => setIsFrontendOpen(!isFrontendOpen);
  const handleExport = () => window.print();

  return (
    <div className="app">
      <style>{`
        body { margin: 0; font-family: Arial, sans-serif; background: linear-gradient(#e8e8e7 0 285px, rgb(255, 113, 4) 250px); }
        body.dark-mode { background: linear-gradient(#333 0 285px, #555 250px); color: #e0e0e0; }
        .app { min-height: 100vh; display: flex; flex-direction: column; align-items: center; }
        .header { background: rgb(255, 113, 4); color: white; width: 1000px; height: 250px; position: fixed; top: 0; left: 50%; transform: translateX(-50%); z-index: 1; opacity: 1; transition: opacity 3.8s ease; pointer-events: none; }
        .header.hidden { opacity: 0; max-height: 0px; }
        .header-triangle { position: fixed; left: 50%; transform: translateX(-50%); width: 0; height: 0; border-left: 500px solid transparent; border-right: 500px solid transparent; border-bottom: 40px solid #e8e8e7; opacity: 1; background: rgb(255, 113, 4); transition: opacity 0.6s ease; pointer-events: none; }
        body.dark-mode .header-triangle { border-bottom: 40px solid #333; }
        .header-controls { position: absolute; top: 1rem; right: 1rem; display: flex; gap: 1rem; pointer-events: all; } /* Increased gap */
        @media print { .header-controls { display: none; } }
        .profile-container { text-align: center; padding: 1rem; transition: opacity 0.2s ease; }
        .profile-image { width: 6rem; height: 6rem; border-radius: 50%; object-fit: cover; box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1); }
        .name-title { font-size: 2rem; font-weight: 700; }
        .subtitle { color: #fefefe; }
        .main-panel { width: 990px; margin: 0 auto; margin-top: 280px; background: #e8e8e7; display: flex; flex-direction: column; border-left: 4px solid transparent; border-right: 4px solid transparent; border-bottom: 4px solid transparent; }
        body.dark-mode .main-panel { background: #444; border-color: transparent; }
        .row { display: flex; flex-wrap: wrap; gap: 1rem; }
        .panel-left, .panel-left-1, .panel-right, .panel-right-1 { flex: 1; min-width: 25%; background: white; border: 1px solid #eee; border-radius: 0.5rem; padding: 1.5rem; margin: 0 1rem; box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.03); }
        body.dark-mode .panel-left, body.dark-mode .panel-left-1, body.dark-mode .panel-right, body.dark-mode .panel-right-1 { background: #333; border-color: #555; color: #e0e0e0; }
        .panel-right, .panel-right-1 { flex: 2; min-width: 50%; }
        h2 { font-size: 1.2rem; margin-bottom: 0.5rem; border-bottom: 1px solid #eee; padding-bottom: 0.25rem; color: rgb(255, 113, 4); }
        body.dark-mode h2 { border-color: #777; }
        .skills-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .skill-tag { background: #FFDAB9; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.85rem; }
        body.dark-mode .skill-tag { background: #777; color: #fff; }
        .dropdown-item { margin-bottom: 1rem; }
        .dropdown-header { display: flex; justify-content: space-between; cursor: pointer; padding: 0.5rem; border: 1px solid #ddd; border-radius: 0.25rem; background: #fff5e6; }
        body.dark-mode .dropdown-header { background: #555; border-color: #777; color: #e0e0e0; }
        .dropdown-arrow { transition: 0.2s; }
        .rotate { transform: rotate(180deg); }
        .dropdown-details { padding-left: 1rem; margin-top: 0.5rem; }
        @media (max-width: 768px) { .panel-left, .panel-right, .panel-left-1, .panel-right-1 { flex: 1 1 100%; } }
        .icon-button { background: white; color: rgb(255, 113, 4); border: none; border-radius: 0.6rem; padding: 0.6rem; cursor: pointer; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem; position: relative; transition: background 0.3s ease, transform 0.2s ease; box-shadow: 0 2px 6px rgba(0,0,0,0.05); }
        .icon-button:hover { background: #ffe5d0; transform: translateY(-1px); }
        .icon-button .label { opacity: 0; max-width: 0; overflow: hidden; white-space: nowrap; transition: opacity 0.3s ease, max-width 0.3s ease; }
        .icon-button:hover .label { opacity: 1; max-width: 200px; }
        .icon { font-size: 1.2rem; }
        .theme-toggle { display: flex; background: white; border-radius: 0.6rem; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05); }
        .theme-half { background: white; color: #ccc; border: none; padding: 0.6rem; cursor: pointer; font-size: 1.1rem; transition: background 0.3s ease, color 0.3s ease; }
        .theme-half.active { background: rgb(255, 113, 4); color: white; }
        .language-toggle { background: white; border-radius: 0.6rem; overflow: hidden; box-shadow: 0 2px 6px rgba(0,0,0,0.05); display: flex; }
        .language-flag { background: white; border: none; padding: 0.6rem; cursor: pointer; font-size: 1.1rem; transition: background 0.3s ease; }
        .language-flag:hover { background: #ffe5d0; }
        .language-flag img { width: 1.5em; height: auto; display: block; }
      `}</style>

      <header className={`header ${!showHeader ? 'hidden' : ''}`}>
        <div className="header-controls">
          <div className="language-toggle">
            <button
              onClick={() => setCurrentLang('es')}
              className="language-flag"
              title="Cambiar a Español"
            >
              <img src="https://flagcdn.com/w2560/ar.png" alt="Argentina Flag" />
            </button>
            <button
              onClick={() => setCurrentLang('en')}
              className="language-flag"
              title="Switch to English"
            >
              <img src="https://flagcdn.com/w2560/us.png" alt="USA Flag" />
            </button>
          </div>

          <button
            onClick={handleExport}
            className="icon-button"
            title="Exportar a PDF"
          >
            <FaFilePdf className="icon" />
            <span className="label">PDF</span>
          </button>

          <div className="theme-toggle">
            <button
              className={`theme-half ${!darkMode ? 'active' : ''}`}
              onClick={() => setDarkMode(false)}
              title="Modo Claro"
            >
              <BsSun />
            </button>
            <button
              className={`theme-half ${darkMode ? 'active' : ''}`}
              onClick={() => setDarkMode(true)}
              title="Modo Oscuro"
            >
              <BsMoon />
            </button>
          </div>
        </div>

        <div className="profile-container">
          <img
            src="https://placehold.co/96x96/FFA500/fff?text=JP"
            alt="Foto"
            className="profile-image"
          />
          <h1 className="name-title">{displayContent.name}</h1>
          <p className="subtitle">{displayContent.title}</p>
        </div>

        <div className={`header-triangle ${triangleHidden ? 'hidden' : ''}`}></div>
      </header>

      <div className="main-panel">
        <br /><br />
        <div className="row">
          <div className="panel-left">
            <h2>{displayContent.certificationsTitle}</h2>
            <ul>
              {displayContent.certifications.map((cert, i) => (
                <li key={i}>{cert}</li>
              ))}
            </ul>

            <h2>{displayContent.skillsTitle}</h2>
            <div className="skills-list">
              {displayContent.skills.map((s, i) => (
                <span key={i} className="skill-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="panel-right">
            <h2>{displayContent.experienceTitle}</h2>

            <div className="dropdown-item">
              <div className="dropdown-header" onClick={toggleFullStack}>
                <div>
                  <b>{displayContent.fullStackTitle}</b>
                  <div>{displayContent.fullStackCompany}</div>
                </div>
                <span className={`dropdown-arrow ${isFullStackOpen ? 'rotate' : ''}`}>
                  ▼
                </span>
              </div>
              {isFullStackOpen && (
                <ul className="dropdown-details">
                  {displayContent.fullStackDetails.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="dropdown-item">
              <div className="dropdown-header" onClick={toggleFrontend}>
                <div>
                  <b>{displayContent.frontendTitle}</b>
                  <div>{displayContent.frontendCompany}</div>
                </div>
                <span className={`dropdown-arrow ${isFrontendOpen ? 'rotate' : ''}`}>
                  ▼
                </span>
              </div>
              {isFrontendOpen && (
                <ul className="dropdown-details">
                  {displayContent.frontendDetails.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              )}
            </div>

            <h2>{displayContent.educationTitle}</h2>
            <div>
              <b>{displayContent.engineeringDegree}</b>
              <br />
              {displayContent.engineeringUniversity}
            </div>
            <div>
              <b>{displayContent.highSchool}</b>
              <br />
              {displayContent.highSchoolInstitution}
            </div>

            <h2>{displayContent.achievementsTitle}</h2>
            <ul>
              {displayContent.achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="panel-left-1">
            <h2>Proyectos Personales</h2>
            <p>Este es un ejemplo de contenido adicional alineado con el panel izquierdo.</p>
          </div>

          <div className="panel-right-1">
            <h2>Contribuciones Open Source</h2>
            <ul>
              <li>Repositorio A - Mejora de rendimiento</li>
              <li>Repositorio B - Corrección de bugs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;