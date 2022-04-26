import projects from "../assets/Projects.json";
import { motion } from "framer-motion";
function Project() {
  return (
    <motion.div className="mt-14  " initial={{ y: -100 }} animate={{ y: 0 }}>
      <div className="px-4 mt-2 ">
        <h1 className="text-4xl text-center  md:text-6xl text-gray-700">
          Some of my work....🚀
        </h1>
        <p className="text-base pt-7 text-gray-500">
          Here are a few design projects I've worked on recently. Want to see
          more?
        </p>
      </div>
      {/* projects */}
      <div className="flex justify-around w-full flex-wrap shadow-xl my-5 cursor-pointer">
        {projects.map((project) => (
          <div className="flex flex-col max-w-sm shadow-xl cursor-pointer">
            <img src={project.image} alt="" className="w-full h-72" />
            <h1 className="px-4 mt-2 text-2xl mb-2">{project.title}</h1>
            <div>
              <h5>{project.description}</h5>
              {/* socials */}
              <div>
                <button className="bg-blue-600 ml-5 my-3 rounded-md py-1 px-3 text-white text-xl">
                  <a href={project.link}>Github</a>
                </button>
                <button className="bg-red-600 ml-5 my-3 rounded-md py-1 px-3 text-white text-xl">
                  <a href={project.live}>Live</a>
                </button>
              </div>
              {/* technologies */}
              <div className="flex  items-center text-center pb-2 mt-2">
                <h1 className="bg-gray-300 px-3 py-1 rounded-md text-lg  mt-4 ml-2">
                  {project.tech[0]}
                </h1>
                <h1 className="bg-gray-300 px-3 py-1 rounded-md text-lg  mt-4 ml-2">
                  {project.tech[1]}
                </h1>
                <h1 className="bg-gray-300 px-3 py-1 rounded-md text-lg  mt-4 ml-2">
                  {project.tech[2]}
                </h1>
                <h1 className="bg-gray-300 px-3 py-1 rounded-md text-lg  mt-4 ml-2">
                  {project.tech[3]}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default Project;
