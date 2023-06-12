import axios from "axios";
import { motion } from "framer-motion";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useFetchPost from "../../customhook/useFetchData";
import { fadeIn } from "../../variants";

const PortfolioPage = () => {
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
                <h2 className="text-[25px] lg:text-[30px] leading-none my-6">
                  Select your Category
                </h2>
              </div>
            </motion.div>
          </div>
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
                        } cursor-pointer capitalize m-4 py-1 px-2 outline outline-offset-2 outline-2 rounded-md`}
                        key={item.id}
                      >
                        {item.category_name}
                      </li>
                    );
                  })}
              </ul>
            </nav>

            <div className="divide-y divide-slate-100">
              {data.map((item) => {
                return (
                  <article className="flex items-start space-x-6 p-6">
                    <Link to={`/post/${item.id}`}>
                      <img
                        src={`http://127.0.0.1:8000/uploads/products/${item.preview}`}
                        alt=""
                        width="150"
                        height="100"
                        className="flex-none rounded-md bg-slate-100"
                      />
                    </Link>
                    <div className="min-w-0 relative flex-auto">
                      <Link to={`/post/${item.id}`}>
                        <h2 className="font-semibold text-2xl  truncate pr-20">
                          {item.product_name}
                        </h2>
                      </Link>
                      <dl className="mt-2 flex flex-wrap text-md leading-6 font-medium">
                        <div className="absolute top-8 right-0 flex text-xl items-center space-x-1">
                          <dd>
                            Price:{" "}
                            <span className="line-through">
                              $ {item.product_price}
                            </span>
                            / $ {item.after_discount}
                            <span className="px-1.5 ring-1 ml-2 ring-slate-200 rounded">
                              {item.discount} % Off
                            </span>
                          </dd>
                        </div>
                        <div className="absolute top-0 right-0 flex items-center space-x-1">
                          <dt className="text-sky-500">
                            <span className="sr-only">Star rating</span>
                            <svg width="16" height="20" fill="currentColor">
                              <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                            </svg>
                          </dt>
                          <dd>5</dd>
                        </div>
                        <div>
                          <dt className="sr-only">Rating</dt>
                          <dd className="px-1.5 ring-1 ring-slate-200 rounded">
                            write one
                          </dd>
                        </div>
                        <div className="ml-2">
                          <dt className="sr-only">Year</dt>
                          <dd>{moment(item.updated_at).format("YYYY")}</dd>
                        </div>
                        <div>
                          <dt className="sr-only">Genre</dt>
                          <dd className="flex items-center">
                            <svg
                              width="2"
                              height="2"
                              fill="currentColor"
                              className="mx-2 text-slate-300"
                              aria-hidden="true"
                            >
                              <circle cx="1" cy="1" r="1" />
                            </svg>
                            {item.rel_to_category.category_name}
                          </dd>
                        </div>
                        <div>
                          <dt className="sr-only">Runtime</dt>
                          <dd className="flex items-center">
                            <svg
                              width="2"
                              height="2"
                              fill="currentColor"
                              className="mx-2 text-slate-300"
                              aria-hidden="true"
                            >
                              <circle cx="1" cy="1" r="1" />
                            </svg>
                            {moment(item.updated_at).startOf("hour").fromNow()}
                          </dd>
                        </div>
                        <div className="flex-none w-full mt-2 font-normal">
                          <dd className="after_discount">write foru</dd>
                        </div>
                      </dl>
                    </div>
                  </article>
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
