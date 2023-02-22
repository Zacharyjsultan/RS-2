import { useState, useEffect } from "react";
import "./Parallax.css";

function Parallax() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const parallaxStyle = {
    backgroundPositionY: `${scrollPosition * 0.7}px`,
  };

  return (
    <section className="parallax" style={parallaxStyle}>
      <div className="parallax-content">
        <img src="/RS.png" alt="image" />
        {/* REPLACE IMAGE WITH A REMOVED BACKGROUND */}
      </div>
    </section>
  );
}

export default Parallax;
