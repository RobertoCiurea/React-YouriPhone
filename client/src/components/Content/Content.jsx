import React from "react";
import "./Content.css";
import Banner from "../../assets/banners/iphone_11_banner.png";
export const Content = ({ contentRef, gridRef }) => {
  function handleScrollGrid() {
    gridRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  return (
    <section className="reason-section" ref={contentRef}>
      <div className="reason-content">
        <h1 className="reason-title">
          {" "}
          De ce sa cumperi de la <span className="purple-mark">noi?</span>
        </h1>

        <p>
          Nulla lorem quam, mattis sed molestie a, interdum eu lacus. Etiam
          accumsan erat et ante rhoncus tempor. Nulla ullamcorper orci sem, in
          luctus urna vehicula quis.
        </p>
        <p>
          Donec vitae sagittis est. Fusce rutrum at nisi aliquam blandit. Sed
          aliquet commodo mollis. Aliquam eu fringilla turpis. Etiam congue
          massa sapien, et tristique purus sagittis quis.
        </p>
        <p>
          Proin dapibus, velit ut facilisis molestie, ligula tortor pretium
          diam, dictum sodales dui augue eget nunc.
        </p>
        <button onClick={handleScrollGrid}>Cumpara</button>
      </div>
      <img src={Banner} alt="Iphone 11 banner" />
    </section>
  );
};
