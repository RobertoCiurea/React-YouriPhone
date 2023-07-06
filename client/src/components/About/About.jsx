import React, { useRef } from "react";
import "./About.css";
import Banner from "../../assets/banners/iphone_12_banner.png";

export const About = ({ targetRef, contentRef }) => {
  const handleScrollToElement = () => {
    contentRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <section className="about-section" ref={targetRef} id="about">
      <div className="image">
        <img src={Banner} alt="Iphone 12 Banner" />
      </div>
      <div className="about-content">
        <h1 className="about-title">
          <span className="border-bottom">Despre</span>{" "}
          <span className="yellow-mark">noi</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          lacus tempor vestibulum rhoncus, neque velit tristique quam, eget
          iaculis risus elit porta libero. Suspendisse hendrerit tincidunt est,
          ut egestas dolor finibus eget. Nullam et urna gravida nunc blandit
          efficitur. Ut posuere facilisis massa, nec gravida nisi finibus vitae.
          Donec venenatis porttitor sem at ultrices.{" "}
        </p>
        <p>
          Etiam ut tincidunt dolor, ac tempus enim. Praesent convallis tincidunt
          odio, ut tristique tellus blandit non. Donec aliquet lorem sed commodo
          tristique. Praesent leo diam, dignissim quis pretium ac, pharetra in
          diam. Aenean at nisi fringilla, sagittis quam congue, molestie dolor.
        </p>
        <p>
          Sed libero ligula, aliquet scelerisque nisl eu, efficitur mollis
          massa. Sed id diam in leo euismod feugiat. Ut malesuada felis lectus,
          at vehicula est semper vel.
        </p>
        <button onClick={handleScrollToElement}>Descopera mai mult</button>
      </div>
    </section>
  );
};
