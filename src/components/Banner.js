import React from "react";
import Image from "../assets/profile.jpg";
import {
  FaGithub,
  FaYoutube,
  FaDribbble,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      id="home"
      className="min-h-[65vh] lg:min-h-[68vh] flex items-center mb-4"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left lg:items-center">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] "
            >
              AVINASH <span>KUMAR</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-60px font-secondary font-semibold uppercase leading-[1] "
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Reactjs Developer",
                  2000,
                  "Freelancer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 "
            >
              Passionate ReactJS developer crafting dynamic web experiences 🚀.
              Expert in building scalable and responsive applications. Let's
              bring your ideas to life!
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0 lg:flex-row lg:justify-center"
            >
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link lg:ml-4">
                My Portfolio
              </a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-xl gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/avinash-kumar-b53b0728a"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/AshVDev" target="_blank">
                <FaGithub />
              </a>
              <a href="#">
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] justify-center"
          >
            <img
              className="rounded-full aspect-auto max-w-full "
              src={Image}
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
