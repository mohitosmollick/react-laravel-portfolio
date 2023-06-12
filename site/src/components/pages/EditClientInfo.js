import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useFetchPost from "../../customhook/useFetchData";
import Input from "../Input";

const Register = () => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  let id = sessionStorage.getItem("id");

  const { data: clientInfos } = useFetchPost(`client_info/${id}`);
  console.log(clientInfos);

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };

  const onChangeImageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    console.log(`
      Na: ${name}
      Ig: ${image}

    `);

    let FileData = new FormData();
    FileData.append("id", sessionStorage.getItem("id"));
    FileData.append("name", name);
    FileData.append("image", image);

    let config = {
      headers: { "content-type": "multipart/form-data" },
    };

    let URL = "http://127.0.0.1:8000/api/updateProfileImage";
    axios
      .post(URL, FileData, config)
      .then((res) => {
        Swal.fire({
          text: res.message,
          title: "Success",
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((e) => {
        console.log(e);
      });

    event.preventDefault();
  };

  return (
    <section className="py-20 lg:py-[20px]">
      <div className="max-w-screen-xl m-0 sm:m-20 shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12  lg:flex ">
          <div className="h-full">
            <img src={clientInfos?.preview} alt="" />
            <h2>Dip Mollick</h2>
          </div>
        </div>
        <div className="flex-1 text-center ">
          <div className=" xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <h3 className="mx-4 mb-0 text-center font-semibold text-2xl dark:text-white">
                Edit profile Information
              </h3>
            </div>
            <form onSubmit={handleSubmit}>
              <Input
                required
                placeholder="Your Full Name"
                type="text"
                onChange={onChangeNameHandler}
              />
              {/*//  ref={(input)=>titleRef=input}*/}
              <Input
                placeholder="Image"
                type="file"
                onChange={onChangeImageHandler}
              />

              {/* {error && (
                <p className="text-red-500 dark:text-gray-400  italic text-md ">
                  {error}
                </p>
              )} */}
              <button className="btn btn-sm">Update</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Register;
