import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import TestimonialSlider from "./TestimonialSlide";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="justify-center text-center  mb-12 lg:mb-0">
          <h2 className="text-[35px] lg:text-[50px] leading-none mb-6">
            Out Happy Client
          </h2>
          <h4 className="text-xl lg:text-3xl uppercase text-accent font-medium  mb-2 tracking-wide ">
            total client :
            <span className="lg:text-[40px] text-[35px] font-tertiary  text-gradient ">
              {inView ? <CountUp start={0} end={1} duration={3} /> : null}
              K+
            </span>
          </h4>
          <button className="btn btn-sm">
            <Link to="/client">View all Client</Link>
          </button>
        </div>

        <TestimonialSlider />
      </div>
    </section>
  );
};

export default About;
