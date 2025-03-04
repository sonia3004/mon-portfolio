import { motion } from "framer-motion";
import "./Hero.css"; 

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center text-center"
    >

      <div className="video-container">
        <iframe
          className="video-bg"
          src="https://www.youtube.com/embed/fZmFY82cbA8?autoplay=1&loop=1&playlist=fZmFY82cbA8&mute=1&controls=0&showinfo=0&modestbranding=1"
          title="YouTube Video Background"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-overlay"></div>


      <div className="hero-content">
        <motion.h1
          className="text-white text-6xl font-extrabold drop-shadow-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Développeuse Full Stack
        </motion.h1>

        <motion.p
          className="text-white text-xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          En recherche d'une alternance pour septembre 2025
        </motion.p>

        {/* Boutons sociaux */}
        <motion.div
          className="flex justify-center space-x-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="https://www.root-me.org/sonia302?lang=fr#1c801246436949ee76a6cd8283bba35c"
            className="btn-custom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Root.Me
          </a>
          <a
            href="https://github.com/sonia3004"
            className="btn-custom"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/sonia-boutaleb-d%C3%A9veloppeur/"
            className="btn-custom"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
