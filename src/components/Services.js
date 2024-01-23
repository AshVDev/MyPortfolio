import React from "react";
//icons
import { BsArrowUpRight } from "react-icons/bs";
//motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "../variants";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Creates user-centric digital interfaces, balancing aesthetics and functionality for an intuitive, engaging, and seamless user experience across applications.",
    link: "Learn more",
  },
  {
    name: "ReactJs Developer",
    description:
      "Expert in React.js development, building dynamic and responsive user interfaces with reusable components for modern, efficient web applications.",
    link: "Learn more",
  },
  {
    name: "Frontend Developer",
    description:
      "Crafts responsive user interfaces with React.js, ensuring seamless interaction and engaging experiences for web applications.",
    link: "Learn more",
  },
  {
    name: "Full Stack Developer",
    description:
      "Codes end-to-end features using React.js for dynamic frontends and integrates server-side logic, delivering robust full-stack applications.",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text & Img */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0 "
          >
            <h2 className="h2 text-accent mb-6 ">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-16 ">
              I'm a Freelance Front-end Developer with over 1 year of experience
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {services.map((service, index) => {
              //services object destuctring
              const { name, description, link } = service;
              return (
                <div
                  className="border-b border-white/20 h-[146px] mb-[38px] flex"
                  key={index}
                >
                  <div className="max-w-[476px]">
                    <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6 ">
                      {name}
                    </h4>
                    <p className="font-secondary leading-tight">
                      {description}
                    </p>
                  </div>
                  <div className="flex flex-col flex-1 items-end">
                    <a
                      href="#"
                      className="btn w-9 h-9 mb-[42px] flex justify-center items-center "
                    >
                      <BsArrowUpRight />
                    </a>
                    <a className="text-gradient text-sm" href="#">
                      {link}
                    </a>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
