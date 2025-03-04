import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./TabsSection.css";

const TabsSection = () => {
  const tabs = [
    {
      title: "Pizza Gino",
      content: "Un projet réalisé avec Django / React / Django RestFramework / PostGre SQL / Apache Kafka et Websockets.",
      video: "https://player.vimeo.com/video/1056835704",
      repo: "https://github.com/sonia3004/pizza-gino-frontend"
    },
    {
      title: "Iberic X",
      content: "Un projet de site e-commerce mené en voyage scolaire à Barcelone, Technos utilisées : React x Vite, Tailwind CSS,  Stripe API, Mongo DB, Mongo Atlas, Express, Node JS et Heroku.",
      video: "https://player.vimeo.com/video/1057291687",
      repo: "https://github.com/YounessFTN/FcBarcelona-X-Nike"
    },
    {
      title: "FitFull Box",
      content: "Un site de e-commerce réalisé en voyage scolaire de 1ère année à Dublin. Technos utilisées : Html/CSS, JS et Spline pour les éléments 3D.",
      video: "https://player.vimeo.com/video/1057293823",
      repo: "https://github.com/YounessFTN/FitFull-Box"
    }
  ];

  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      ".tab-content-item.active",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }
    );
  }, [activeTab]);

  return (
    <section id="tabssection" className="cloneable">
      <div className="tab-layout">
        

        <div className="tab-layout-text">
          <h1 className="tab-layout-heading">Mes Projets</h1>


          <div className="filter-bar">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className={`filter-button ${activeTab === index ? "active" : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>


          <div className="tab-content-wrap">
            {tabs.map((tab, index) => (
              <div key={index} className={`tab-content-item ${activeTab === index ? "active" : ""}`}>
                <h2 className="tab-content__heading">{tab.title}</h2>
                <p className="content-p opacity--80">{tab.content}</p>
              </div>
            ))}
          </div>

          <a 
            href={tabs[activeTab].repo} 
            className="tab-content__button" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <p className="content-p">Voir le repo GitHub</p>
            <div className="content-button__bg"></div>
          </a>
        </div>

        <div className="tab-layout-video">
          {tabs.map((tab, index) => (
            <div key={index} className={`tab-visual-item ${activeTab === index ? "active" : ""}`}>
              <iframe
                src={tab.video}
                width="100%"
                height="500px"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={tab.title}
              ></iframe>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TabsSection;
