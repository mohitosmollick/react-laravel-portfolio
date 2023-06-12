import { motion } from "framer-motion";
import React from "react";
import { FiPenTool } from "react-icons/fi";
import useFetchPost from "../customhook/useFetchData";
import { fadeIn } from "../variants";

const Services = () => {
  const { data: services } = useFetchPost(`services`);
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("top", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="justify-center text-center  mb-12 lg:mb-6"
        >
          <h2 className="text-[35px] lg:text-[50px] leading-none mb-6">
            Select & Click Category
          </h2>

          <h3 className="h3 text-accent ">See Our Service</h3>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8 ">
          {services != null &&
            services.map((item, index) => {
              if (index < 2 && index >= 0) {
                return (
                  <motion.div
                    variants={fadeIn("right", 0.7)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border border-2 border-white/50 rounded-lg gap-x-8 p-6"
                    key={index}
                  >
                    <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-16 text-[28px]">
                      <FiPenTool />
                    </div>
                    <h4 className="text-xl font-medium mb-2">
                      {item.service_name}
                    </h4>
                    <p>{item.desc}</p>
                    <button type="submit" className="btn mt-6 btn-sm">
                      See Details
                    </button>
                  </motion.div>
                );
              }
            })}
          {services != null &&
            services.map((item, index) => {
              if (index < 4 && index > 1) {
                return (
                  <motion.div
                    variants={fadeIn("left", 0.7)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className="border border-2 border-white/50 rounded-lg gap-x-8 p-6"
                    key={index}
                  >
                    <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-16 text-[28px]">
                      <FiPenTool />
                    </div>
                    <h4 className="text-xl font-medium mb-2">
                      {item.service_name}
                    </h4>
                    <p>{item.desc}</p>
                    <button type="submit" className="btn mt-6 btn-sm">
                      See Details
                    </button>
                  </motion.div>
                );
              }
            })}
        </div>
      </div>
    </section>
  );
};

export default Services;
