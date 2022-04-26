import { BsGithub, BsTwitter, BsInstagram } from "react-icons/bs";
import image from "../assets/cover.png";
import { Link } from "react-router-dom";
import Testmonials from "./Testmonials";
import { motion } from "framer-motion";
function Showcase() {
  return (
    <>
      <motion.div
        className="flex flex-col-reverse sm:flex-row mt-24 items-center justify-between"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      >
        {/* left */}
        <div className="space-y-6 text-center sm:text-left">
          <h1 className="font-bold text-gray-800 text-3xl ">AbdishakuurAlly</h1>
          <p className="text-gray-400 text-xl ">
            i am front-end developer with couple of experiance <br /> i design
            websites convert into funtion web page
          </p>
          {/* social links */}
          <div className="flex  space-x-4 text-center justify-center sm:justify-start">
            <h1 className="cursor-pointer text-2xl transition-all hover:text-blue-600">
              <Link to="//github.com/Shakuurally">
                <BsGithub />
              </Link>
            </h1>
            <h1 className="cursor-pointer text-2xl transition-all hover:text-blue-600">
              <Link to="//instagram.com/abdiShakuurally">
                <BsInstagram />
              </Link>
            </h1>
            <h1 className="cursor-pointer text-2xl transition-all hover:text-blue-600">
              <Link to="//twitter.com/Shakuurally">
                <BsTwitter />
              </Link>
            </h1>
          </div>
          {/* download button */}
          <button className="bg-blue-600 text-white p-2 hover:-translate-y-1 duration-100 rounded-lg ">
            <a href="resume.pdf" download={true}>
              Download Resume
            </a>
          </button>
        </div>
        {/* right */}
        <div className="w-80 mb-10 sm:m-0">
          <img src={image} alt="" className="rounded-full object-cover " />
        </div>
      </motion.div>
      <Testmonials />{" "}
    </>
  );
}

export default Showcase;
