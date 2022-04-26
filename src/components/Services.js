import services from "../assets/services.json";
import { BiDesktop } from "react-icons/bi";
function Services() {
  return (
    <div>
      <h1 className="text-center text-3xl mt-16 text-gray-500 font-semibold">
        What i Offer you..🚀
      </h1>
      <div className="grid h-max grid-cols-1 md:grid-cols-2 gap-10 mt-10 bg-white">
        {services.map((service) => (
          <div key={service.id} className="m-5 rounded-3xl shadow-md p-10">
            <div className="flex spa-y-5 items-center flex-col">
              <BiDesktop className="rounded-full w-12 h-12 object-cover" />
              <h1 className="text-md ml-5 space-y-0">{service.name}</h1>
            </div>
            <div className="text-gray-600 p-4 text-lg">
              <p>{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
