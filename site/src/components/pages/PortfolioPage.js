import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useFetchPost from "../../customhook/useFetchData";
import { fadeIn } from "../../variants";

const PortfolioPage = () => {
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(7);

  const { data: categories, loading, error } = useFetchPost(`categories`);
  const { data: products } = useFetchPost(`products`);

  const handleClick = (id) => {
    setActive(id);
    // if (id === 6) {
    //   setProjects(products);
    // } else {
    const filterProdut = products.filter((item) => item.category_id === id);
    setProjects(filterProdut);
    // }
  };
  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h2>Somethig Error</h2>;

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
                  Out Previous Project
                </h2>
                <h4 className="text-xl lg:text-3xl uppercase text-accent font-medium  mb-2 tracking-wide ">
                  total project :
                  <span className="lg:text-[40px] text-[35px] font-tertiary  text-gradient ">
                    K+
                  </span>
                </h4>
              </div>
            </motion.div>
          </div>
          {/* <div>
            <div className="flex justify-between items-center mt-8">
              <h4 className=" text-xl lg:text-3xl uppercase font-medium  mb-2 tracking-wide ">
                E-Commerce :
              </h4>
              <Link to="/categorysite" className="text-gradient">
                See All >>
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 lg:gap-y-8 gap-y-6 gap-x-4">
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={img1}
                  alt=""
                />
                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transtion-all duration-500 z-50">
                  <span className="text-gradient">
                    <Link to="#contact">UI/UX Design</Link>
                  </span>
                </div>

                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
                  <span className="text-white text-3xl">Project Title</span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-4 transtion-all duration-700 z-50">
                  <span className=" text-gradient text-sm">
                    <Link to="#contact">See Live..</Link>
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          <div>
            <nav className="mb-12 max-w-xl mx-auto">
              <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
                {categories != null &&
                  categories.map((item) => {
                    return (
                      <li
                        onClick={() => {
                          handleClick(item.id);
                        }}
                        className={`${
                          active === item.id ? "activemenu" : ""
                        } cursor-pointer capitalize m-4`}
                        key={item.id}
                      >
                        {item.category_name}
                      </li>
                    );
                  })}
              </ul>
            </nav>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 lg:gap-y-8 gap-y-6 gap-x-4">
              {projects.map((item) => {
                return (
                  <div>
                    <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
                      <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
                      <img
                        className="group-hover:scale-125 transition-all duration-500"
                        src={`http://127.0.0.1:8000/uploads/products/${item.preview}`}
                        alt=""
                      />

                      <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
                        <span className="text-white text-3xl">
                          {item.product_name}
                        </span>
                      </div>
                      <div className="absolute -bottom-full left-12 group-hover:bottom-4 transtion-all duration-700 z-50">
                        <span className=" text-gradient text-sm">
                          <Link to="#contact">See Live..</Link>
                        </span>
                      </div>
                    </div>
                    <p className="capitalize text-accent text-sm mb-3">
                      {item.category}
                    </p>
                    <h3 className="text-2xl font-semibold capitalize mb-3">
                      {item.product_name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mt-8">
              <h4 className=" text-xl lg:text-3xl uppercase font-medium  mb-2 tracking-wide ">
                All Project
              </h4>
              <Link to="" className="text-gradient">
                See All >>
              </Link>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 lg:gap-y-8 gap-y-6 gap-x-4">
              {products != null &&
                products.map((item) => {
                  return (
                    <div>
                      <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
                        <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
                        <img
                          className="group-hover:scale-125 transition-all duration-500"
                          src={`http://127.0.0.1:8000/uploads/products/${item.preview}`}
                          alt=""
                        />

                        <div className="absolute -bottom-full left-12 group-hover:bottom-14 transtion-all duration-700 z-50">
                          <span className="text-white text-3xl">
                            {item.product_name}
                          </span>
                        </div>
                        <div className="absolute -bottom-full left-12 group-hover:bottom-4 transtion-all duration-700 z-50">
                          <span className=" text-gradient text-sm">
                            <Link to="#contact">See Live..</Link>
                          </span>
                        </div>
                      </div>
                      <p className="capitalize text-accent text-sm mb-3">
                        {item.category}
                      </p>
                      <h3 className="text-2xl font-semibold capitalize mb-3">
                        {item.product_name}
                      </h3>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>

        <div className="container mb-20 mx-auto"></div>
      </section>
    </>
  );
};

export default PortfolioPage;
