import React, { useRef } from "react";
import {
  Navbar,
  Intro,
  About,
  Newsletter,
  Content,
  Grid,
  Footer,
  Modal,
  ShoppingCart,
} from "../../components/index";

export const Home = () => {
  const targetRef = useRef(null);
  const contentRef = useRef(null);
  const gridRef = useRef(null);

  const modalRef = useRef(null);
  const dialogRef = useRef(null);

  return (
    <div className="container">
      <Navbar targetRef={targetRef} modalRef={modalRef} dialogRef={dialogRef} />
      <main className="main-content">
        <ShoppingCart dialogRef={dialogRef} />
        <Modal modalRef={modalRef} />
        <Intro />
        <About targetRef={targetRef} contentRef={contentRef} />
        <Newsletter />
        <Content contentRef={contentRef} gridRef={gridRef} />
        <Grid gridRef={gridRef} />
      </main>
      <Footer />
    </div>
  );
};
