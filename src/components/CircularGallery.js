import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IMAGES = [
  { id: 1, src: "https://i.postimg.cc/pyMphH1t/docker-removebg-preview.png", title: "Docker" },
  { id: 2, src: "https://www.ovhcloud.com/sites/default/files/styles/text_media_horizontal/public/2021-04/K8S-logo.png", title: "Kubernetes" },
  { id: 3, src: "https://i.postimg.cc/PJHxz8wF/react-javascript-removebg-preview.png", title: "React" },
  { id: 4, src: "https://i.postimg.cc/m22d8pBB/channels4-profile-removebg-preview.png", title: "Angular" },
  { id: 5, src: "https://zonetuto.fr/wp-content/uploads/2023/01/framework-php-laravel-logo.png", title: "Laravel" },
  { id: 6, src: "https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png", title: "Vue.js" },
  { id: 7, src: "https://i.postimg.cc/y6f2FZHC/65193c6298e001696152674-python-django-Training-and-certification-removebg-preview.png", title: "Django" },
  { id: 8, src: "https://i.postimg.cc/3NdydvgF/flutter-igmguru-1527424732-l-removebg-preview.png", title: "Flutter" },
  { id: 9, src: "https://i.postimg.cc/0NSzg8BF/asp-net-core-removebg-preview.png", title: "Microsoft .NET" },
  { id: 10, src: "https://i.postimg.cc/Qx0BrYxg/flask-removebg-preview.png", title: "Flask" },
  { id: 11, src: "https://www.sunzinet.com/hs-fs/hubfs/Elastic%20Search%20Agentur%20-%20SUNZINET.png?width=860&height=663&name=Elastic%20Search%20Agentur%20-%20SUNZINET.png", title: "ElasticSearch" },
  { id: 12, src: "https://i.postimg.cc/WzRJyd8d/Symfony1200x628-removebg-preview.png", title: "Symfony" },
  { id: 13, src: "https://logo-marque.com/wp-content/uploads/2020/09/Linux-Logo.png", title: "Linux" },
  { id: 14, src: "https://openbyte-training.co.za/wp-content/uploads/2024/04/power-bi-microsoft-logo-E4FC8DE4A9-seeklogo.com_.png", title: "PowerBI" },
  { id: 15, src: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp", title: "Node.JS" },
  { id: 16, src: "https://www.lemagit.fr/visuals/LeMagIT/hero_article/Splunk.jpg", title: "Splunk" },
  { id: 17, src: "https://humancoders-formations.s3.amazonaws.com/uploads/course/logo/10/formation-git.png", title: "Git" },
  { id: 18, src: "https://i.postimg.cc/3RW6KC6b/code-examples-Mongo-DB-removebg-preview.png", title: "MongoDB" },
  { id: 19, src: "https://saviynt.com/hubfs/aws.png", title: "AWS" },
  { id: 20, src: "https://upload.wikimedia.org/wikipedia/fr/6/62/MySQL.svg", title: "MySQL" },
];


const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event) => setMatches(event.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

const CircularGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleClick = (index) => {
    setActiveIndex(index);
    setSelectedIndex(index === selectedIndex ? null : index);
  };

  return (
    <div
      className={`relative flex justify-center items-center w-full overflow-visible bg-transparent ${
        isMobile ? "h-[500px]" : "h-[700px]"
      }`}
    >
      {/*  Image principale */}
      <div
        className={`absolute ${isMobile ? "w-[180px] h-[180px]" : "w-[300px] h-[300px]"} rounded-full overflow-hidden shadow-lg`}
        style={{ clipPath: "circle(50%)", zIndex: 10 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={IMAGES[activeIndex].id}
            src={IMAGES[activeIndex].src}
            className="absolute w-full h-full object-contain p-4"
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>
      </div>

      {/* Remise en place des images floues uniquement sur PC */}
      {!isMobile && activeIndex > 0 && (
        <motion.img
          key={`left-${IMAGES[activeIndex - 1].id}`}
          src={IMAGES[activeIndex - 1].src}
          className="absolute w-[260px] h-[260px] object-contain rounded-full blur-[5px] opacity-70"
          style={{
            left: "-120px",
            top: "50%",
            transform: "translateY(-50%)"
          }}
        />
      )}
      {!isMobile && activeIndex < IMAGES.length - 1 && (
        <motion.img
          key={`right-${IMAGES[activeIndex + 1].id}`}
          src={IMAGES[activeIndex + 1].src}
          className="absolute w-[260px] h-[260px] object-contain rounded-full blur-[5px] opacity-70"
          style={{
            right: "-120px",
            top: "50%",
            transform: "translateY(-50%)"
          }}
        />
      )}

      {/*  Miniatures en cercle */}
      <div className="absolute inset-0 flex justify-center items-center">
        {IMAGES.map((image, index) => {
          const angle = (index / IMAGES.length) * (2 * Math.PI);
          const radius = isMobile ? 150 : 230;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <motion.div
              key={image.id}
              className="absolute flex flex-col items-center"
              style={{ transform: `translate(${x}px, ${y}px)`, zIndex: 5 }}
            >
              {/*  Bouton avec image */}
              <motion.button
                onClick={() => handleClick(index)}
                className="relative w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full border-2 border-white shadow-lg overflow-hidden transition duration-300 bg-transparent"
              >
                {/*  Effet blur au clic */}
                <motion.div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    selectedIndex === index ? "backdrop-blur-md bg-white/20" : "bg-transparent"
                  }`}
                />

                <img src={image.src} alt={image.title} className="w-full h-full rounded-full object-contain" />
              </motion.button>

              {/* Texte affiché SEULEMENT AU CLIC */}
              {selectedIndex === index && (
                <motion.div
                  className="absolute text-white font-bold text-xs bg-black px-2 py-1 rounded-lg shadow-lg"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                >
                  {image.title}
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default CircularGallery;
