import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "./Diplomas.css";

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

const diplomas = [
  {
    title: "Dublin, Irlande",
    institution: "Dublin City University",
    image:
      "https://i.postimg.cc/gkxXM1v4/photo-1476900543704-4312b78632f8.avif",
  },
  {
    title: "Barcelone, Espagne",
    institution: "Universitat Pompeu Fabra",
    image:
      "https://i.postimg.cc/gkxXM1v4/photo-1476900543704-4312b78632f8.avif",
  },
  {
    title: "Montréal, Canada",
    institution: "Voyage prévu en 3ème année",
    image:
      "https://i.postimg.cc/gkxXM1v4/photo-1476900543704-4312b78632f8.avif",
  },
];

const Diplomas = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current && !isMobile) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section id="diplomas">
      <h2 className="diplomas-title"> Mes apprentissages à l'étranger </h2>
      <div
        className={`relative mx-auto diplomas-glass ${
          isMobile ? "w-full h-auto px-4 diplomas-blur-active" : "w-[1000px] h-[500px] p-10"
        }`}
      >
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center diplomas-background"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1592480859808-9c93f6e8218e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        ></div>
        {/* Overlay semi-transparent */}
        <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl z-0"></div>
        <div className="relative z-10">
          {isMobile ? (
            <div className="w-full max-w-[90%] mx-auto flex flex-col items-start space-y-2 overflow-y-auto max-h-[400px] scrollbar-thin scrollbar-white">
              {diplomas.map((diploma, index) => (
                <div
                  key={index}
                  className={`cursor-pointer flex items-center w-full py-4 px-6 transition-all duration-300 relative group ${
                    activeIndex === index ? "diploma-selected blur-effect" : "bg-transparent"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {/*  Barre en dessous du diplôme sélectionné */}
                  <div className={`absolute bottom-0 left-0 w-full h-[3px] bg-white transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}></div>
                  
                  <img
                    src={diploma.image}
                    alt={diploma.title}
                    className="w-14 h-14 rounded-md object-cover -translate-x-3"
                  />
                  <div className="flex flex-col w-full ml-2">
                    <p className="text-lg font-semibold transition-all duration-300 text-white">
                      {diploma.title}
                    </p>
                    <p className="text-sm transition-all duration-300 text-white">
                      {diploma.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Version desktop : Swiper + Liste
            <div className="relative flex w-full h-full z-10">
              <div className="swiper-container -translate-x-10">
                <Swiper
                  initialSlide={activeIndex}
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards]}
                  className="swiper"
                  onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                  }}
                  onSlideChange={(swiper) => {
                    setActiveIndex(swiper.activeIndex);
                  }}
                >
                  {diplomas.map((diploma, index) => (
                    <SwiperSlide key={index} className="swiper-slide">
                      <img src={diploma.image} alt={diploma.title} />
                      <div className="text-center">
                        <h3 className="text-sm font-semibold text-black">
                          {diploma.title}
                        </h3>
                        <p className="text-white text-xs">
                          {diploma.institution}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Liste à côté du Swiper */}
              <div className="w-1/2 flex flex-col items-start space-y-2 overflow-y-auto max-h-72 scrollbar-thin scrollbar-white mt-20">
                {diplomas.map((diploma, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer flex items-center w-full py-4 px-6 transition-all duration-300 relative group ${
                      activeIndex === index ? "diploma-selected" : "bg-transparent"
                    }`}
                    onClick={() => handleClick(index)}
                  >
                    {/* Barre sous l'élément sélectionné */}
                    <div className={`absolute bottom-0 left-0 w-full h-[3px] bg-white transition-opacity duration-500 ${activeIndex === index ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}></div>
                    
                    <img
                      src={diploma.image}
                      alt={diploma.title}
                      className="w-14 h-14 rounded-md object-cover -translate-x-3"
                    />
                    <div className="flex flex-col w-full ml-2">
                      <p className="text-lg font-semibold text-white">
                        {diploma.title}
                      </p>
                      <p className="text-sm text-white">
                        {diploma.institution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Diplomas;
