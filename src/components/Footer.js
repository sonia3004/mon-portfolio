import React from "react";
import "./Footer.css"; 

const Footer = () => {
  const bubbles = Array.from({ length: 128 }, (_, i) => ({
    size: `${2 + Math.random() * 4}rem`,
    distance: `${6 + Math.random() * 4}rem`,
    position: `${-5 + Math.random() * 110}%`,
    time: `${2 + Math.random() * 2}s`,
    delay: `${-1 * (2 + Math.random() * 2)}s`,
  }));

  return (
    <footer className="footer">
      <div className="bubbles">
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className="bubble"
            style={{
              "--size": bubble.size,
              "--distance": bubble.distance,
              "--position": bubble.position,
              "--time": bubble.time,
              "--delay": bubble.delay,
            }}
          ></div>
        ))}
      </div>

      <div className="content">
        <div>
          <div>
            
          </div>
        </div>

        <div>
          <a
            className="image"
            href="https://codepen.io/z-"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundImage:
                'url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/199011/happy.svg")',
            }}
          ></a>
          <p>Merci</p>
        </div>
      </div>

      <svg style={{ position: "fixed", top: "100vh" }}>
        <defs>
          <filter id="blob">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="blob"
            />
          </filter>
        </defs>
      </svg>
    </footer>
  );
};

export default Footer;
