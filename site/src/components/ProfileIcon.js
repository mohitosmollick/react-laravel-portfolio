import React, {useEffect} from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const ProfileIcon = ({ open, setOpen }) => {
  // const logout = sessionStorage.setItem("logout");
  // const { data: clientLogout } = useFetchPost(`clientLogout`);

    const navigate = useNavigate();
 const logout=()=>{
    // alert("HELLO")


     axios.get('http://127.0.0.1:8000/api/clientLogout').then((res)=>{
         if (res.data===1){
             sessionStorage.setItem("name", '');
             navigate("/");
             window.location.reload(true);
         }
     }).catch((e)=>{
         console.log(e)
     })
 }

  return (
    <>
      <div className={open ? "visible" : "invisible"}>
        <div
          class="fixed -top-0 right-0  w-64 h-full bg-site overflow-hidden  dark:bg-gray-900 shadow-lg z-10 flex flex-col transition-all duration-200"
          id="myid"
        >
          <AiOutlineClose
            className="ml-4 mt-4 h-7 w-7 "
            onClick={() => {
              setOpen(!open);
            }}
          />
          {/* <!-- category --> */}
          <div class="">
            {sessionStorage.getItem("name") ? (
              <>
                <div class="flex items-center justify-center mt-6">
                  <a href="user.html" class="">
                    <img
                       src={sessionStorage.getItem('photo')}
                      class="w-14 h-14 ring-4 ring-slate-500 rounded-full"
                      alt=""
                    />


                  </a>
                </div>
                <h3 class="font-roboto text-xl font-semibold  dark:text-gray-300 mt-2 mb-1 flex items-center justify-center">
                  {sessionStorage.getItem("name")}
                </h3>

                <h4 class="flex items-center justify-center dark:text-gray-400 font-semibold text-xs mb-3">
                  Student of ANFT,IU
                </h4>
                <Link to="/clientinfo">
                  <h3 class="flex items-center justify-center dark:text-gray-400 font-semibold text-s mb-3">
                    <BiEdit /> <span className="ml-1">Profile</span>
                  </h3>
                </Link>

                <div class=" mt-8">
                  <Link
                    to=""
                    class="flex items-center font-semibold text-base dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-600 px-3 py-2 transition"
                  >
                    <span class="mr-4 ml-4">
                      <i class="fa-solid fa-signs-post"></i>
                    </span>
                    <span>Posts</span>
                  </Link>
                  <a
                    href=" "
                    class="flex items-center font-semibold text-base hover:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 px-3 py-2 transition"
                  >
                    <span class="mr-4 ml-4">
                      <i class="fa-solid fa-chart-line"></i>
                    </span>
                    <span>Dashboard</span>
                  </a>
                  <a
                    href=" "
                    class="flex items-center font-semibold text-base hover:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 px-3 py-2 transition"
                  >
                    <span className="mr-4 ml-4">
                      <i className="fa-solid fa-gear"></i>
                    </span>
                    <span>Setting</span>
                  </a>

                  <a onClick={logout}
                     className="flex items-center font-semibold text-base hover:bg-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 px-3 py-2 transition"
                  >
                    <span class="mr-4 ml-4">
                      <i class="fa-solid fa-right-from-bracket"></i>
                    </span>
                    <span>Logout Now</span>
                  </a>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileIcon;
