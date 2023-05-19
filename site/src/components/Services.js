import React from "react";
import { FiPenTool } from "react-icons/fi";
import useFetchPost from "../customhook/useFetchData";

const Services = () => {
  const { data: services } = useFetchPost(`services`);
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <h2 className="flex items-center text-center justify-center h2 text-accent mb-12">
          See Our Service
        </h2>
        <div className="grid lg:grid-cols-4 gap-8">
          {services != null &&
            services.map((item, index) => {
              return (
                <div
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
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Services;
