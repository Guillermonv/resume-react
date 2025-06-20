import React, { useState } from 'react';

const content = {
  es: {
    name: "Juan Pérez Developer",
    title: "Desarrollador Full Stack | Innovador | Resolutivo",
    contactTitle: "Datos de Contacto",
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
  const toggleFullStack = () => setIsFullStackOpen(!isFullStackOpen);
  const toggleFrontend = () => setIsFrontendOpen(!isFrontendOpen);
  const handleLanguageChange = () => setCurrentLang(currentLang === 'es' ? 'en' : 'es');
  const handleExport = () => window.print();

  return (
    <div className="app">
      <style>{`
        body {
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(to bottom, white 20%, rgb(255, 113, 4) 20%);
        }

        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        header {
          background: rgb(255, 113, 4);
          color: white;
          border: none;
          padding: 1rem 5vw;
          width: 80%;
          max-width: 80%;
          max-height: 20%;
          height: 20%;
          margin: 0 auto;
          box-shadow: 0 0 1em rgba(0, 0, 0, 0.05);
          position: relative;
          overflow: visible;
        }

        .header-triangle {
          position: absolute;
          bottom: -20px; /* lo movemos fuera del borde inferior */
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 40vw solid transparent;
          border-right: 40vw solid transparent;
          border-bottom: 60px solid white; /* apunta hacia arriba */
          z-index: 1;
        }

        .header-controls {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: flex;
          gap: 0.5rem;
        }
        @media print {
          .header-controls {
            display: none;
          }
        }
        .header-button {
          background: white;
          color: rgb(255, 113, 4);
          padding: 0.4rem 0.8rem;
          border-radius: 0.4rem;
          border: none;
          cursor: pointer;
          font-weight: 600;
        }
        .header-button:hover {
          background: #ffe5d0;
        }
        .profile-container {
          text-align: center;
          padding: 1rem;
        }
        .profile-image {
          width: 6rem;
          height: 6rem;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1);
        }
        .name-title {
          font-size: 2rem;
          font-weight: 700;
        }
        .subtitle {
          color: #fefefe;
        }
        .contact-section {
          background: #FFE4B5;
          padding: 1rem 5vw;
          margin: 1rem auto;
          border-radius: 0.5rem;
          width: 80%;
          max-width: 80%;
          box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.04);
        }
        .contact-info-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #333;
        }
        main {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          padding: 2rem 5vw;
          width: 100%;
          box-sizing: border-box;
        }
        .panel, .panel-left, .panel-right, .panel-left-1, .panel-right-1 {
          background: white;
          border: 1px solid #eee;
          border-radius: 0.5rem;
          padding: 1.5rem;
          box-shadow: 0 0.2rem 0.6rem rgba(0, 0, 0, 0.03);
        }
        .panel-left, .panel-left-1 {
          flex: 1;
          min-width: 30%;
        }
        .panel-right, .panel-right-1 {
          flex: 2;
          min-width: 60%;
        }
        h2 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          border-bottom: 1px solid #eee;
          padding-bottom: 0.25rem;
          color: rgb(255, 113, 4);
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }
        .skill-tag {
          background: #FFDAB9;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.85rem;
        }
        .dropdown-item {
          margin-bottom: 1rem;
        }
        .dropdown-header {
          display: flex;
          justify-content: space-between;
          cursor: pointer;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 0.25rem;
          background: #fff5e6;
        }
        .dropdown-arrow {
          transition: 0.2s;
        }
        .rotate {
          transform: rotate(180deg);
        }
        .dropdown-details {
          padding-left: 1rem;
          margin-top: 0.5rem;
        }
        @media (max-width: 768px) {
          .panel-left, .panel-right, .panel-left-1, .panel-right-1 {
            flex: 1 1 100%;
          }
          .header-controls {
            position: static;
            justify-content: flex-end;
            margin-top: 1rem;
          }
        }
      `}</style>

      <header>
        <div className="header-controls">
          <button onClick={handleLanguageChange} className="header-button">{currentLang === 'es' ? 'English' : 'Español'}</button>
          <button onClick={handleExport} className="header-button">{displayContent.exportButton}</button>
        </div>
        <div className="profile-container">
          <img src="https://placehold.co/96x96/FFA500/fff?text=JP" alt="Foto" className="profile-image" />
          <h1 className="name-title">{displayContent.name}</h1>
          <p className="subtitle">{displayContent.title}</p>
        </div>
        <div className="header-triangle"></div>
      </header>

      <section className="contact-section">
        <div className="contact-info-wrapper">
          <p className="contact-item">📧 {displayContent.email}</p>
          <p className="contact-item">🐱 {displayContent.github}</p>
          <p className="contact-item">💼 {displayContent.linkedin}</p>
          <p className="contact-item">📍 {displayContent.location}</p>
        </div>
      </section>

      <main>
        <div className="panel panel-left">
          <h2>{displayContent.certificationsTitle}</h2>
          <ul>{displayContent.certifications.map((cert, i) => (<li key={i}>{cert}</li>))}</ul>
          <h2>{displayContent.skillsTitle}</h2>
          <div className="skills-list">{displayContent.skills.map((s, i) => (<span key={i} className="skill-tag">{s}</span>))}</div>
        </div>

        <div className="panel panel-right">
          <h2>{displayContent.experienceTitle}</h2>
          <div className="dropdown-item">
            <div className="dropdown-header" onClick={toggleFullStack}>
              <div>
                <b>{displayContent.fullStackTitle}</b>
                <div>{displayContent.fullStackCompany}</div>
              </div>
              <span className={`dropdown-arrow ${isFullStackOpen ? 'rotate' : ''}`}>▼</span>
            </div>
            {isFullStackOpen && (<ul className="dropdown-details">{displayContent.fullStackDetails.map((d, i) => (<li key={i}>{d}</li>))}</ul>)}
          </div>

          <div className="dropdown-item">
            <div className="dropdown-header" onClick={toggleFrontend}>
              <div>
                <b>{displayContent.frontendTitle}</b>
                <div>{displayContent.frontendCompany}</div>
              </div>
              <span className={`dropdown-arrow ${isFrontendOpen ? 'rotate' : ''}`}>▼</span>
            </div>
            {isFrontendOpen && (<ul className="dropdown-details">{displayContent.frontendDetails.map((d, i) => (<li key={i}>{d}</li>))}</ul>)}
          </div>

          <h2>{displayContent.educationTitle}</h2>
          <div><b>{displayContent.engineeringDegree}</b><br/>{displayContent.engineeringUniversity}</div>
          <div><b>{displayContent.highSchool}</b><br/>{displayContent.highSchoolInstitution}</div>

          <h2>{displayContent.achievementsTitle}</h2>
          <ul>{displayContent.achievements.map((a, i) => (<li key={i}>{a}</li>))}</ul>
        </div>

        <div className="panel panel-left-1">
          <h2>Proyectos Personales</h2>
          <p>Este es un ejemplo de contenido adicional alineado con el panel izquierdo.</p>
        </div>

        <div className="panel panel-right-1">
          <h2>Contribuciones Open Source</h2>
          <ul>
            <li>Repositorio A - Mejora de rendimiento</li>
            <li>Repositorio B - Corrección de bugs</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
