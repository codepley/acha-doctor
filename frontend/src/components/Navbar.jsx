const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[1440px] bg-white shadow-lg flex justify-between px-5">
        <div className="flex justify-center items-center gap-8">
          <img className="w-32 cursor-pointer" src="/logo.png" alt="" />
          <div className="flex gap-5">
            <p className="font-semibold cursor-pointer text-gray-600">Find a doctor</p>
            <p className="font-semibold cursor-pointer text-gray-600">Find a hospital</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="font-semibold cursor-pointer text-gray-600">Log in</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
