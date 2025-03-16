import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left Section */}
        <div>
          <img className="mb-5 mt-0 w-60" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 to-gray-600 leading-6">
            Your ultimate destination for beauty and wellness. Transform your
            look with our expert beauty services.
          </p>
        </div>
        {/* center Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 to-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacey policy</li>
          </ul>
        </div>
        {/* Right Section  */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 to-gray-600">
            <li>+91-9800 1258</li>
            <li>ranjukumarirxl@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* Copyright Text */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ ranjubeautyparlour - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
