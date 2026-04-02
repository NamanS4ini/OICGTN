import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-70 flex px-2 py-1 items-center bg-[#335fb1] shadow-lg">
      {/* Centred logo and title */}
      <div className="flex-1 flex justify-center items-center">
        <Link to="/" className="flex items-center mr-4">
          <img
            className="h-24 sm:h-28 w-auto object-contain"
            src="/logo.png"
            alt="Logo"
          />
        </Link>
        <h1 className="text-white font-extrabold text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
          Online Indian Citation Generation Tool
        </h1>
      </div>
    </div>
  );
};

export default Header;
