import React, { useState, useRef, useEffect } from "react";
import "./HorizontalScroll.css";

const HorizontalScroll = ({ title, certifications, imageUrl, showTitle }) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [disabledNext, setDisabledNext] = useState(false);

  const updateArrows = () => {
    const container = containerRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    setDisabledPrev(scrollLeft <= 10);
    setDisabledNext(scrollLeft >= maxScrollLeft - 10);
  };

  const handleArrowClick = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth / 2;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeftStart(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateArrows);
    return () => {
      container.removeEventListener("scroll", updateArrows);
    };
  }, []);

  useEffect(() => {
    updateArrows();
  }, []);

  return (
    <section className="horizontal-scroll">
      {showTitle && <h1 className="certifications-title">Mes Certifications</h1>}
      
      <div className="hs__header">
        <h2 className="hs__headline">{title}</h2>
        <div className="hs__nav">
          <button
            className={`arrow arrow-prev ${disabledPrev ? "disabled" : ""}`}
            onClick={() => handleArrowClick("prev")}
            disabled={disabledPrev}
          >
            ❮
          </button>
          <button
            className={`arrow arrow-next ${disabledNext ? "disabled" : ""}`}
            onClick={() => handleArrowClick("next")}
            disabled={disabledNext}
          >
            ❯
          </button>
        </div>
      </div>

      <div className="hs__wrapper">
        <ul
          className="hs"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onMouseUp={handleMouseUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {certifications.map((certif, index) => (
            <li key={index} className="hs__item">
              <div className="hs__item__image__wrapper">
                <img className="hs__item__image" src={imageUrl} alt={certif} />
              </div>
              <div className="hs__item__description">
                <span className="hs__item__title">{certif}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HorizontalScroll;
