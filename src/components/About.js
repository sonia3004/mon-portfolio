import { useState } from "react";
import "./About.css"; 
import "./SlantedGallery.css";

const images = [
  "https://i.postimg.cc/D0Y6zt99/IMG-6194.jpg",
  "https://i.postimg.cc/VkLpDBZ0/Pink-Black-Photocentric-Neon-Tech-Talk-Podcast-Instagram-Post.png",
  "https://i.postimg.cc/d3jN9L89/Pink-Black-Photocentric-Neon-Tech-Talk-Podcast-Instagram-Post-1.png",
  "https://i.postimg.cc/wjv4hx3h/Pink-Black-Photocentric-Neon-Tech-Talk-Podcast-Instagram-Post-2.png",
  "https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.postimg.cc/bw4cs50f/IMG-0879.jpg",
  "https://i.postimg.cc/t4Q8b699/EBCD79-BA-8388-474-F-A6-CB-9588-B8-C1-D864.jpg",
  "https://i.postimg.cc/FsPDstG1/Pink-Black-Photocentric-Neon-Tech-Talk-Podcast-Instagram-Post-5.png",
  "https://i.postimg.cc/X7NsbNfT/Pink-Black-Photocentric-Neon-Tech-Talk-Podcast-Instagram-Post-3.png",
];

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="about">
      {/* Quadrillage en arrière-plan */}
      <div className="gallery-grid-overlay"></div>
      <div className="about-content">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Bonjour, je suis actuellement en fin de 2ème année d'études au sein de Webtech Insitute ou je prépare un bachelor : Développeur Concepteur d'Application. <br></br> 
          Je recherche une alternance pour entamer ma 3 ème année en septembre 2025.<br></br>
          Je suis passionnée par le développement et la cybersécurité. Je souhaite par la suite continuer mes études en vue d'obtenir un master.  <br></br>
        </p>
        {/* Slanted Gallery */}
        <div className="gallery-section">
          <div className="wrapper">
            {images.map((src, index) => (
              <div
                key={index}
                className={`gallery-item ${hoveredIndex === index ? "hovered" : ""}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  className="gallery-img"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
