import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

const Header = ({ open, setOpen }) => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {sessionStorage.getItem("name") ? (
            <>
              <Link to="/">

                <img src={sessionStorage.getItem('photo')} width="100" alt=" " />
              </Link>
              <div
                className="flex tems-center"
                id="my_id"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <div className="mr-3 mt-3">
                  {sessionStorage.getItem("name")}
                </div>
                <img
                    src={sessionStorage.getItem('photo')}
                  class="w-10 h-10 rounded-full ring-2 ring-gray-500"
                  alt=""
                />
              </div>
            </>
          ) : (
            <>
              <Link to="/">
                <img src={Logo} alt=" " />
              </Link>
              <Link to="/register">
                <button className="btn btn-sm">Register/Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
