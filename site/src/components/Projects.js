import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetchPost from "../customhook/useFetchData";

const Projects = () => {
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
    <div>
      <div className="justify-center text-center  mb-12 lg:mb-0">
        <h2 className="text-[35px] lg:text-[50px] leading-none mb-6">
          See Our Projects
        </h2>

        <button className="btn btn-sm">
          <Link to="/portfolio">View all Projects</Link>
        </button>
      </div>
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

      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item) => {
          return (
            <div className="flex flex-col items-center text-center">
              <Link to={`/post/${item.id}`}>
                <div className="mb-8">
                  <img
                    className="rounded-2xl"
                    src={`http://127.0.0.1:8000/uploads/products/${item.preview}`}
                    alt=""
                  />
                </div>
              </Link>

              <p className="capitalize text-accent text-sm mb-3">
                {item.category}
              </p>
              <Link to="">
                <h3 className="text-2xl font-semibold capitalize mb-3">
                  {item.product_name}
                </h3>
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Projects;
