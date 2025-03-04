import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-300 bg-opacity-90 border-b border-gray-400 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        
        <span className="text-xl font-bold text-black">Sonia Boutaleb</span>

        <div className="flex space-x-6">
          <a href="#skills" className="text-black font-semibold hover:text-gray-700 transition" onClick={(e) => handleSmoothScroll(e, "skills")}>
            {isMobile ? "💡" : "Mes Compétences"}
          </a>
          <a href="#diplomas" className="text-black font-semibold hover:text-gray-700 transition" onClick={(e) => handleSmoothScroll(e, "diplomas")}>
            {isMobile ? "✈️" : "Mes Voyages"}
          </a>
          <a href="#projects" className="text-black font-semibold hover:text-gray-700 transition" onClick={(e) => handleSmoothScroll(e, "projects")}>
            {isMobile ? "💻" : "Mes Langages"}
          </a>
          <a href="#tabssection" className="text-black font-semibold hover:text-gray-700 transition" onClick={(e) => handleSmoothScroll(e, "tabssection")}>
            {isMobile ? "📂" : " Mes Projets"}
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
