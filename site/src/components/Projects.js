import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchPost from "../customhook/useFetchData";
import { fadeIn } from "../variants";

const Projects = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(4);

  const { data: categories, loading, error } = useFetchPost(`categories`);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/products`).then((response) => {
      setData(response.data);
    });
  }, []);

  const handleClick = (id) => {
    setActive(id);
    if (id != null) {
      axios
        .get(`http://127.0.0.1:8000/api/cat-with-product/${id}`)
        .then((response) => {
          setData(response.data);
        });
    } else {
    }
  };
  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h2>Somethig Error</h2>;

  return (
    <div>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="justify-center text-center  mb-12 lg:mb-0"
      >
        <h2 className="text-[35px] lg:text-[50px] leading-none mb-6">
          Select & Click Category
        </h2>

        <Link to="/portfolio" className="text-gradient">
          See All >>
        </Link>
      </motion.div>

      <nav className="mb-12 max-w-xl mx-auto">
        <motion.ul
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col md:flex-row justify-evenly items-center text-white"
        >
          {categories != null &&
            categories.map((item) => {
              return (
                <li
                  onClick={() => {
                    handleClick(item.id);
                  }}
                  className={`${
                    active === item.id ? "activemenu" : ""
                  } cursor-pointer capitalize m-4 py-1 px-2 outline outline-offset-2 outline-2 rounded-md`}
                  key={item.id}
                >
                  {item.category_name}
                </li>
              );
            })}
        </motion.ul>
      </nav>

      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {data.map((item) => {
          return (
            <div class="w-full p-4">
              <Link
                to={`/post/${item.id}`}
                class="c-card block bg-purple-800 shadow-3xl hover:shadow-xl rounded-lg overflow-hidden "
              >
                <div class="relative pb-48 overflow-hidden">
                  <img
                    class="absolute inset-0 h-full w-full object-cover"
                    src={`http://127.0.0.1:8000/uploads/products/${item.preview}`}
                    alt=""
                  />
                </div>

                <div class="p-4 text-white">
                  <span class="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-danger text-xs">
                    {item.rel_to_category.category_name}
                  </span>

                  <span className="px-1.5 ring-1 ml-2 rounded text-bold text-red-600 ring-sky-500">
                    {item.discount} % Off
                  </span>

                  <h2 class="font-bold text-xl text-white">
                    {item.product_name}
                  </h2>

                  <div class=" text-bold flex items-center">
                    <dd>
                      Price :
                      <span className="line-through text-red-600 mx-1">
                        $ {item.product_price}
                      </span>
                      / $ {item.after_discount}
                    </dd>
                  </div>
                </div>

                <div class="mx-4 text-xs ">
                  <div class="flex justify-between ">
                    <h3 class="far fa-clock text-lg fa-fw mr-2 0">
                      startOf, dsfa, df
                    </h3>
                    <div className="text-bold flex items-center space-x-1 mr-2">
                      <dt className="text-sky-500">
                        <span className="sr-only">Star rating</span>
                        <svg width="16" height="20" fill="currentColor">
                          <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                        </svg>
                      </dt>
                      <dd className="text-xl mt-1">5</dd>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
