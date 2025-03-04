import React, { useEffect } from "react";
import "./Projects.css"; 

const projectItems = [
  "Java",
  "JavaScript",
  "Python",
  "PHP",
  "C#",
  "C++",
  "Ruby",
  "R",
  "Bash",
  "SQL",
];

export default function Projects() {
  useEffect(() => {
    document.querySelectorAll(".shop").forEach((el) => (el.innerHTML = "Languages de programmation"));
  }, []);

  return (
    <section id="projects">
      <h2 className="projects-title">Mes Langages de Programmation </h2> 
      <div className="grid">
        {projectItems.map((item, index) => (
          <div key={index} className={`item-${index % 2 === 0 ? "1" : "alt"}`}>
            <span>{item}</span>
            <span className="shop"></span>
            <div className="overlay"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
