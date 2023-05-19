import axios from "axios";
import React, { useState } from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../Button";
import Input from "../Input";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    //validation
    if (password !== confirmPassword) {
      return setError("password is not match");
    }

    try {
      setError("");
      setLoading(true);
      await axios
        .post("http://127.0.0.1:8000/api/client_register", {
          name,
          email,
          password,
        })
        .then(({ data }) => {
          Swal.fire({
            text: data.message,
            title: "Success",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/login");
        });
    } catch (err) {
      Swal.fire("Failed to create an account!", err.message, "question");
      setLoading(false);
      setError("Failed to create an account!");
    }
  }

  return (
    <section className="py-20 lg:py-[20px]">
      <div class="max-w-screen-xl m-0 sm:m-20 shadow sm:rounded-lg flex justify-center flex-1">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12  lg:flex hidden">
          <div class="h-full">
            {/* <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image"
            /> */}
          </div>
        </div>
        <div class="flex-1 text-center ">
          <div class=" xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <div class="flex flex-row items-center justify-center lg:justify-start">
              <p class="mb-0 mr-4 text-lg">Sign up with</p>
              <Button>
                <span className="">
                  <FcGoogle className="mx-auto h-5 w-5" />
                  Google
                </span>
              </Button>
              <Button>
                <span className="">
                  <FaFacebookSquare className="mx-auto  h-5 w-5 " />
                  Facebook
                </span>
              </Button>
              {/* <Button>
                  <FaYoutube className="mx-auto h-3.5 w-3.5" />
                </Button> */}
            </div>

            <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                Or
              </p>
            </div>
            <form onSubmit={handleRegister}>
              <Input
                required
                placeholder="Your Full Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Input
                required
                placeholder="Your Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                required
                placeholder="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                placeholder="confirm password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              {error && (
                <p class="text-red-500 dark:text-gray-400  italic text-md ">
                  {error}
                </p>
              )}
              <button disabled={loading} className="btn btn-sm">
                Register
              </button>
            </form>
            <div class="text-center lg:text-left">
              <p class="mb-0 mt-2 pt-1 text-sm font-semibold">
                Don have an account?
                <Link
                  to="/login"
                  class="text-red-500 transition duration-150 ease-in-out hover:text-red-700 focus:text-red-600 active:text-red-700"
                >
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
