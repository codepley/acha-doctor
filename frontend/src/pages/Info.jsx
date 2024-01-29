import { FaAirbnb } from "react-icons/fa6";

const Info = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[1440px] flex justify-center items-center">
        <div className="w-[90%] flex flex-col justify-center gap-10 py-5 items-center">
          <h2 className="text-5xl font-bold">
            Popular searches on acha doctor
          </h2>
          <div className="flex gap-10 text-xl">
            <p>Specialties</p>
            <p>Conditions</p>
            <p>Procedures</p>
          </div>
          <div className="grid grid-cols-5 w-full">
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="bg-[#00006e] rounded-full p-4">
                <FaAirbnb className="text-7xl text-white" />
              </div>
              <p className="text-lg">Airbnb</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="bg-[#00006e] rounded-full p-4">
                <FaAirbnb className="text-7xl text-white" />
              </div>
              <p className="text-lg">Airbnb</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="bg-[#00006e] rounded-full p-4">
                <FaAirbnb className="text-7xl text-white" />
              </div>
              <p className="text-lg">Airbnb</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="bg-[#00006e] rounded-full p-4">
                <FaAirbnb className="text-7xl text-white" />
              </div>
              <p className="text-lg">Airbnb</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <div className="bg-[#00006e] rounded-full p-4">
                <FaAirbnb className="text-7xl text-white" />
              </div>
              <p className="text-lg">Airbnb</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
