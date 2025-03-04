import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import HorizontalScroll from "./components/HorizontalScroll";
import Diplomas from "./components/Diplomas";
import About from "./components/About";
import Projects from "./components/Projects";
import TabsSection from "./components/TabsSection";
import Footer from "./components/Footer";
import "./index.css"; 

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />

      <HorizontalScroll 
  title="Mes certifications en Développement, systèmes et réseaux, et cybersécurité" 
  certifications={[
    "Implémentez vos bases de données relationnelles avec SQL",
    "Passez au Full Stack avec Node.js, Express et MongoDB",
    "Gérez votre application React avec Redux et Redux Toolkit",
    "Programmez en orienté objet en PHP",
    "Testez vos applications Front End avec JavaScript",
    "Utilisez des design patterns en JavaScript",
    "Introduction à jQuery",
    "Créez des animations CSS modernes",
    "Administrez un système Linux",
    "Initiez-vous à Linux",
    "Découvrez le monde des Systèmes d'Information",
    "Concevez votre réseau TCP/IP",
    "Découvrez l'univers de la cybersécurité",
  ]}
  imageUrl="https://i.postimg.cc/zv44KtNb/Capture-d-e-cran-2025-02-18-a-08-28-21.png"
  showTitle={true}  
/>
      <Diplomas />
      <Projects />
      <TabsSection />
      <Footer />
    </div>
  );
}

export default App;
