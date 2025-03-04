import "./Skills.css";
import CircularGallery from "./CircularGallery";

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="max-w-screen-lg mx-auto px-6">
        
       
        <h2 className="skills-title">Mes Compétences</h2>

        
        <div className="flex justify-center">
          <CircularGallery />
        </div>

      </div>
    </section>
  );
};

export default Skills;
