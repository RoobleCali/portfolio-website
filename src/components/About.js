import me from "../assets/me.png";
import { SiTailwindcss, SiRedux } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { DiJavascript, DiGitMerge } from "react-icons/di";
import { FiCode } from "react-icons/fi";
import { MdLocalAirport, MdNature } from "react-icons/md";
import { BsFillBookFill } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";
import Services from "./Services";
import { motion } from "framer-motion";
function About() {
  return (
    <>
      <motion.div
        className="grid  grid-col-1 md:grid-cols-2 mt-24"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
      >
        {/* left */}
        <div className="flex items-center flex-wrap relative justify-center h-max ">
          <div className="w-3/4 h-3/4 rounded-3xl relative shadow-slate-400">
            <img src={me} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* right */}
        <div className="p-5 md:p-0 md:text-left text-center ">
          <h1 className="font-semibold text-3xl ">About me</h1>
          <p className="text-lg pt-4">
            i am student bootcarmp, freelancer, i have 3+ years of work
            experiance i am your next web developer
          </p>
          {/* tools */}
          <div className="mt-5 ">
            <h2 className="text-2xl ">Tools</h2>
            <div className="flex items-center flex-wrap w-full">
              <div
                className="m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center
            h-7 text-lg "
              >
                <DiJavascript /> Javascript
              </div>
              <div
                className="m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center
            h-7 text-lg "
              >
                <DiJavascript /> Javascript
              </div>
              <div
                className="m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center
            h-7 text-lg "
              >
                <FaNode /> Nodejs
              </div>
              <div
                className="m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center
            h-7 text-lg "
              >
                <SiTailwindcss /> tailwind css
              </div>
              <div
                className="m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center
            h-7 text-lg "
              >
                <SiRedux /> redux
              </div>
              <div
                className="m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center
            h-7 text-lg "
              >
                <DiGitMerge /> Git
              </div>
            </div>
          </div>
          {/* interest */}
          <div className="mt-2 ">
            <h2 className="text-2xl ">Interests</h2>
            <div className="flex items-center flex-wrap w-full">
              <div
                className="m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center
            h-7 text-lg "
              >
                <FiCode /> Coding
              </div>
              <div
                className="m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center
            h-7 text-lg "
              >
                <MdLocalAirport /> travelling
              </div>
              <div
                className="m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center
            h-7 text-lg "
              >
                <MdNature /> Natural
              </div>
              <div
                className="m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center
            h-7 text-lg "
              >
                <GiSelfLove /> Decipline
              </div>
              <div
                className="m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center
            h-7 text-lg "
              >
                <BsFillBookFill /> Learning
              </div>
              <div
                className="m-3 flex items-center text-center rounded-xl bg-gray-300 w-28 justify-center
            h-7 text-lg "
              >
                <BsFillBookFill /> Learning
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Services />
    </>
  );
}

export default About;
