import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./hero.css";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const Hero = () => {
  const [showWorship, setShowWorship] = useState(false);

  const toggleWorship = () => {
    setShowWorship(!showWorship);
  };

  // const worshipRef = useRef(null);

  // useEffect(() => {
  //   const handleBodyInteraction = (e) => {
  //     if (!worshipRef.current) return;

  //     if (worshipRef.current.contains(e.target)) {
  //       return;
  //     }
  //   };

  //   document.body.addEventListener("click", handleBodyInteraction);

  //   return () => {
  //     document.body.removeEventListener("click", handleBodyInteraction);
  //   };
  // }, []);

  return (
    <section className="hero">
      {/* <div className="hero-overlay"> */}
      <div className="hero-content">
        <h1 className="hero-title">The Apostolic Church Nigeria</h1>
        <h2 className="hero-subtitle">Yaba District</h2>
        <p className="hero-motto">
          “Help us o God of our salvation for the glory of your name and deliver
          us.”
        </p>

        <div className="hero-divider"></div>

        {/* <p className="hero-text">
          Welcome to a family of believers devoted to prayer, worship, and the
          word. Our mission is to raise a generation rooted in Christ and
          equipped to transform the world.
        </p> */}

        <div className="hero-buttons">
          <a href="#about" className="hero-btn primary">
            Learn More
          </a>
          <button onClick={toggleWorship} className="hero-btn secondary">
            Worship With Us
          </button>
          {showWorship && (
            <div className="worship" >
              <div>
                <a
                  target="_blank"
                  and
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/TACNYABADISTRICT"
                >
                  <FaFacebookF />
                  <br />
                  Join us on Facebook
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  and
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@TACNYabaAssembly"
                >
                  <FaYoutube /> <br />
                  Join us on YouTube
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="hero-info">
          <p>
            📍 22 Adebisi Street, Alagomeji, Yaba, Lagos |{<br />} 🕒 Sundays:
            8AM | Wednesdays: 6PM
          </p>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
