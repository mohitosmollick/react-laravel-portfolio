import axios from "axios";
import React, {useState} from "react";
import Swal from "sweetalert2";
import Input from "../Input";

const Register = () => {

    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const [name, setName] = useState();
    const [image, setImage] = useState();


  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }

  const onChangeImageHandler = (e) => {
   setImage(e.target.files[0])
  }

    const handleSubmit = (event) => {
        console.log(`
      Na: ${name}
      Ig: ${image}

    `);



      let FileData = new FormData();
      FileData.append('id', sessionStorage.getItem('id'))
      FileData.append('name', name)
      FileData.append('image', image)

      let config={
        headers:{'content-type':'multipart/form-data'},
      };



      let URL = 'http://127.0.0.1:8000/api/updateProfileImage'
        axios.post(URL, FileData,config).then((res) => {
            if (res.data) {
                console.log(res.data)
            }
        }).catch((e) => {
            console.log(e)
        })

        event.preventDefault();
    }


    async function handleRegister(e) {
        e.preventDefault();


        // try {
        //   setError("");
        //   setLoading(true);
        //   await axios
        //     .post("http://127.0.0.1:8000/api/client_register", {
        //       name,
        //     })
        //     .then(({ data }) => {
        //       Swal.fire({
        //         text: data.message,
        //       });
        //     });
        // } catch (err) {
        //   Swal.fire("Failed to create an account!", err.message, "question");
        //   setLoading(false);
        //   setError("Failed to create an account!");
        // }
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
                        <div
                            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <h3 class="mx-4 mb-0 text-center font-semibold text-2xl dark:text-white">
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

                            {error && (
                                <p class="text-red-500 dark:text-gray-400  italic text-md ">
                                    {error}
                                </p>
                            )}
                            <button disabled={loading} className="btn btn-sm">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Register;
