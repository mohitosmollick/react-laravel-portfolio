import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { fadeIn } from "../../variants";

const Packages = () => {
  return (
    <>
      <section className="">
        <div className="container mx-auto ">
          <div className="flex justify-center gap-y-8 lg:gap-x-12 ">
            <motion.div
              variants={fadeIn("top", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className=" flex items-center text-center  mb-12 lg:mb-0"
            >
              <div>
                <h2 className="text-[35px] lg:text-[50px] leading-none mb-6">
                  Our Popular Packages
                </h2>
              </div>
            </motion.div>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 lg:gap-y-8 gap-y-6 gap-x-4">
            <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>

            <div class="flex border border-2 border-white/50  flex-col items-center rounded-lg  gap-y-2  p-6">
              <h5 class=" text-3xl font-medium ">FB Messenger</h5>
              <span class="text-sm mb-1">mohitosmollick</span>
              <div className="flex">
                <Link
                  target="_blank"
                  to="https://m.me/ernest.achiever"
                  className="text-base text-gradient"
                >
                  Messeges
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
            </div>
            <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
            </div>
          </div>
        </div>

        <div className="container mb-20 mx-auto"></div>
      </section>
    </>
  );
};

export default Packages;
