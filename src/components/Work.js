import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/reIMg.png";
import Img2 from "../assets/Utube.png";
import Img3 from "../assets/Todo.png";

const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-8 mb-10 lg:mb-0 "
          >
            {/* text */}
            <div>
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-12">
                Crafting diverse projects: Todo app for productivity, YouTube
                clone for videos, Netflix clone for entertainment, and
                E-commerce platform for shopping.{" "}
              </p>
              <button className="btn btn-sm">View all projects</button>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/5 rounded-xl ">
              {/* overlay */}
              <a href="https://netfligpt-ae73c.web.app/" target="_blank">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              </a>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img1}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">NetFlix Clone</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-11"
          >
            {/*Image  */}
            <div className="group relative overflow-hidden border-2 border-white/5 rounded-xl ">
              <a href="https://utubecloneavi.netlify.app/" target="_blank">
                {/* overlay */}
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              </a>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img2}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Youtube Clone</span>
              </div>
            </div>
            {/*Image  */}
            <div className="group relative overflow-hidden border-2 border-white/5 rounded-xl ">
              {/* overlay */}
              <a href={`https://todotaskappavi.netlify.app/`} target="_blank">
                <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              </a>
              {/* img */}
              <img
                className="group-hover:scale-125 transition-all duration-500 "
                src={Img3}
                alt=""
              />
              {/* pretitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className="text-gradient">UI/UX Design</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Todo App</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
