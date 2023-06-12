import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { fadeIn } from "../variants";
import TestimonialSlider from "./TestimonialSlide";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("top", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="justify-center text-center  mb-12 lg:mb-0"
        >
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
          <Link to="/portfolio" className="text-gradient">
            See All >>
          </Link>
        </motion.div>

        <TestimonialSlider />
      </div>
    </section>
  );
};

export default About;
