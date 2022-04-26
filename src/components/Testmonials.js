import Testmnials from "../assets/testimonial.json";

function Testmonials() {
  return (
    <div>
      <div className="text-center text-3xl mt-16 text-gray-500 font-medium">
        <h1>My happy clients..</h1>
      </div>
      {/* testomonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-10 w-full bg-white  ">
        {Testmnials.map((client) => (
          <div key={client.id} className="rounded-3xl shadow-md p-10 ">
            {/* top */}
            <div className="flex items-center ">
              <img
                src={client.img}
                className="w-12 h-12 rounded-full object-cover "
                alt=""
              />
              <p className="ml-5 space-y-0 font-bold text-base">
                <a href={client.link}>{client.name}</a>
                <p className="text-gray-400 font-normal text-sm -mt-4">
                  {client.nickname}
                </p>
              </p>
            </div>
            {/* bottom */}
            <div>
              <h1>{client.desc}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testmonials;
