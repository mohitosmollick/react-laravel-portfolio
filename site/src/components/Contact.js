import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import React, { useRef } from "react";
import { BsChevronDoubleRight, BsMessenger, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import { fadeIn } from "../variants";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sohvewe",
        "template_h6gq30e",
        form.current,
        "PM6pjy6Vcjq9PBUq2"
      )
      .then(
        (result) => {
          alert("Email Send Successfuly");
        },
        (error) => {
          alert("Failed to send eamil!");
        }
      );
    e.target.reset();
  };

  return (
    <section className="lg:section py-16" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row mb-12 lg:mb-0">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex items-center text-center mb-12 lg:mb-0"
          >
            <div>
              <h4 className="text-xl lg:text-3xl uppercase text-accent font-medium  mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[70px] leading-none mb-6">
                Let's work
                <br /> together!
              </h2>
              <div className="mb-8">
                <div class="flex border border-2 border-white/50 text-center  items-center rounded-lg gap-x-8   p-6">
                  <Link to=" " className="active">
                    <BsMessenger className="text-2xl " />
                  </Link>

                  <h5 class=" text-3xl font-medium ">Online</h5>
                  <div className="flex">
                    <Link to="" className="text-base text-gradient">
                      <button className="btn btn-sm">Live Chatting</button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="flex  gap-x-8 max-w-max mx-auto lg:mx-0 ">
                <div class="flex border border-2 border-white/50  flex-col items-center rounded-lg  gap-y-2  p-6">
                  <BsWhatsapp className="text-2xl" />
                  <h5 class=" text-3xl font-medium ">Whatsapp Now</h5>
                  <span class="text-sm mb-1">mohitosmollick</span>
                  <div className="flex">
                    <Link
                      target="_blank"
                      to="https://api.whatsapp.com/send?phone+001980365654"
                      className="text-base text-gradient"
                    >
                      Messeges
                    </Link>
                    <BsChevronDoubleRight className="text-base mt-1 " />
                  </div>
                </div>
                <div class="flex border border-2 border-white/50  flex-col items-center rounded-lg  gap-y-2  p-6">
                  <BsMessenger className="text-2xl" />
                  <h5 class=" text-3xl font-medium ">FB Messenger</h5>
                  <span class="text-sm mb-1">mohitosmollick</span>
                  <div className="flex">
                    <Link
                      target="_blank"
                      to="https://m.me/ernest.achiever"
                      className="text-base text-gradient"
                    >
                      Messeges
                    </Link>
                    <BsChevronDoubleRight className="text-base mt-1 " />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-4 outline-none w-full placeholder:text-white focus:border-accent transition-all focus:placeholder:text-white/50"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="bg-transparent border-b py-4 outline-none w-full placeholder:text-white focus:border-accent transition-all focus:placeholder:text-white/50"
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all focus:placeholder:text-white/50 resize-none mb-12"
              name="messege"
              placeholder="Your Messege"
            ></textarea>
            <button type="submit" className="btn btn-sm">
              Send Email
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
