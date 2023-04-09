import React from "react";
import heroImg from "../assets/ebook-cover.png";

export default function Hero() {
  return (
    <section id="hero" className="my-5">
      <div className="container">
        <div className="row g-4 justify-content-center align-items-center">
          <div className="col-md-5 text-center text-md-start">
            <h1>
              <div className="display-2">Black Belt</div>
              <div className="display-5 text-muted">Your Coding Skills</div>
            </h1>
            <p className="lead my-4 text-muted">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
          </div>
          <div className="col-md-5 text-center d-none d-md-block">
            <img src={heroImg} class="img-fluid" alt="ebook" />
          </div>
        </div>
      </div>
    </section>
  );
}
