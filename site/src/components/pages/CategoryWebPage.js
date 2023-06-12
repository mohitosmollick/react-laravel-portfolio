import { motion } from "framer-motion";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import useFetchPost from "../../customhook/useFetchData";
import { fadeIn } from "../../variants";

const CategoryWebPage = () => {
  let location = useParams();
  let id = location.id;
  const { data: singlePost, loading, error } = useFetchPost(`/post/${id}`);
  const { data: relatedPost } = useFetchPost(`/get-related-post/${id}`);

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
                  {singlePost?.rel_to_category.category_name}
                </h2>
              </div>
            </motion.div>
          </div>
          <div className="mt-4 sm:mx-8 md:mx-36 sm:mb-6 md:mb-20">
            <div className="flex flex-col items-center text-center">
              <Link to="">
                <div className="mb-8">
                  <img
                    src={`http://127.0.0.1:8000/uploads/products/${singlePost?.preview}`}
                    alt=""
                    width="500"
                    height="380"
                    className="flex-none rounded-xl bg-slate-100"
                  />
                </div>
              </Link>

              <p className="capitalize text-accent text-sm mb-3">
                {/* {item.relToCategory.category_name} */}
                {singlePost?.rel_to_category.category_name}
              </p>
              <Link to="">
                <h3 className="text-2xl font-semibold capitalize mb-3">
                  {singlePost?.product_name}
                </h3>
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 lg:gap-y-8 gap-y-6 gap-x-4">
              <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>

              <div class="flex border border-2 border-white/50  flex-col rounded-lg  gap-y-2  p-6">
                <h5 class="flex justify-center text-2xl font-medium text-gradient">
                  {singlePost?.rel_to_category.category_name}
                </h5>
                <div className="flex justify-center ">
                  <h2 className="text-gradient text-md">
                    <span className="text-white">Silver Package</span>
                  </h2>
                </div>
                <div className="flex">
                  <ol className="ml-3">
                    <li>This is one Services</li>
                    <li>This is one Services</li>
                    <li>This is one Services</li>
                    <li>This is one Services</li>
                    <li>This is one Services</li>
                    <li>This is one Services</li>
                  </ol>
                </div>
                <div className="flex justify-center text-gradient mt-4">
                  <button className="">
                    <Link to="/portfolio">Order Now >></Link>
                  </button>
                </div>
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
                <div class="flex border border-2 border-white/50  flex-col rounded-lg  gap-y-2  p-6">
                  <h5 class="flex justify-center text-2xl font-medium text-gradient">
                    {singlePost?.rel_to_category.category_name}
                  </h5>
                  <div className="flex justify-center ">
                    <h2 className="text-gradient text-md">
                      <span className="text-white">Gold Package</span>
                    </h2>
                  </div>
                  <div className="flex">
                    <ol className="ml-3">
                      <li>This is one Services</li>
                      <li>This is one Services</li>
                      <li>This is one Services</li>
                      <li>This is one Services</li>
                      <li>This is one Services</li>
                      <li>This is one Services</li>
                    </ol>
                  </div>
                  <div className="flex justify-center text-gradient mt-4">
                    <button className="">
                      <Link to="/portfolio">Order Now >></Link>
                    </button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
                <div className="group-hover:bg-black/70 w-full  absolute z-40 transition-all duration-300"></div>
                <div class="flex border border-2 border-white/50  flex-col rounded-lg  gap-y-2  p-6">
                  <h5 class="flex justify-center text-2xl font-medium text-gradient">
                    {singlePost?.rel_to_category.category_name}
                  </h5>
                  <div className="flex justify-center ">
                    <h2 className="text-gradient text-md">
                      <span className="text-white">Platinum Package</span>
                    </h2>
                  </div>
                  <div className="flex">
                    <ol className="ml-3">
                      <li>This is one Services</li>
                      <li>This is one Services</li>
                      <li>This is one Services</li>
                      <li>This is one Services</li>
                      <li>This is one Services</li>
                      <li>This is one Services</li>
                    </ol>
                  </div>
                  <div className="flex justify-center text-gradient mt-4">
                    <button className="">
                      <Link to="/portfolio">Order Now >></Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h4 className=" text-xl lg:text-3xl uppercase font-medium  mb-2 tracking-wide ">
            Related Post :
          </h4>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 lg:gap-y-8 gap-y-6 gap-x-4">
            {relatedPost != null &&
              relatedPost.map((item) => {
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
          </div>
        </div>

        <div className="container-fluid mb-20 mx-auto"></div>
      </section>
    </>
  );
};

export default CategoryWebPage;
