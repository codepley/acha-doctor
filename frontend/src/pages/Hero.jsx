import { FaUserDoctor } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative w-full bg-[#00006e] flex justify-center mb-[250px]">
      <div className="w-[1440px]  flex flex-col justify-center items-center">
        <div id="top" className="w-[90%] flex text-white">
          <div
            id="tl"
            className="w-[50%] flex flex-col items-center gap-10 mt-16"
          >
            <h1 className="text-6xl font-bold tracking-wider">
              Feel better about finding healthcare
            </h1>
            <div className="grid grid-cols-3 gap-4 ">
              <div className="flex p-2 flex-col items-center justify-center">
                <FaUserDoctor className="text-5xl" />
                <p className="text-center w-[80%]">
                  Profiles for every doctor India
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FaUserDoctor className="text-5xl" />
                <p className="text-center w-[80%]">
                  Search by what matters most to you
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <FaUserDoctor className="text-5xl" />
                <p className="text-center w-[80%]">
                  More Than 10 Million Patient Ratings
                </p>
              </div>
            </div>
          </div>
          <div id="tr" className="w-[50%]">
            <img className="object-cover" src="/hero-img.svg" alt="" />
          </div>
        </div>

         {/* <img className="w-96 absolute left-0 bottom-[-200px]" src="/bg-1.png" alt="" /> */}
        <div id="bottom" className="absolute bottom-[-120px] w-[90%] flex bg-white rounded-xl shadow-lg">
          <div className="w-full flex flex-col gap-4 m-5">
            <h2 className="text-2xl font-bold">Find the care you need</h2>
            <form className="w-full border-black border gap-2 flex pl-10 pr-4 py-4 rounded-[100px]">
              <div className="flex flex-col w-full">
                <label className="text-gray-600 font-semibold tracking-wide" htmlFor="">Search doctors or conditions</label>
                <input className="py-1 outline-none" type="text" placeholder="E.g. Family Medicine" />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-gray-600 font-semibold tracking-wide" htmlFor="">Location</label>
                <input className="py-1 outline-none" type="text" placeholder="City or Pin" />
              </div>
              <button className="bg-red-400 text-white text-lg tracking-wide px-6 rounded-full">Search</button>
            </form>
            <div className="mx-16 flex justify-center items-center gap-10">
               <p className="hover:cursor-pointer hover:underline">Family Medicine</p>
               <p className="hover:cursor-pointer hover:underline">Pediatrics</p>
               <p className="hover:cursor-pointer hover:underline">Top Hospitals</p>
               <p className="hover:cursor-pointer hover:underline">Telehealth</p>
               <p className="hover:cursor-pointer hover:underline">COVID-19</p>
               <p className="hover:cursor-pointer hover:underline">Dentistry</p>
               <p className="hover:cursor-pointer hover:underline">Orthopedic surgery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
