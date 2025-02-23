import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const BannerAbout = () => {
  return (
    <div>
      <div className="text-left  text-3xl font-bold  pt-10 text-gray-500">
        <p>
          ABOUT{" "}
          <span className="text-[#F43F5E]  font-medium">
            RANJU BEAUTY PARLOUR
          </span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full rounded-lg md:max-w-[360px]"
          src={assets.hair_stylist}
          alt="about image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Ranju Beauty Parlour, where beauty meets expertise. Since
            2008, we have been dedicated to enhancing natural beauty and
            providing exceptional service to our valued clients.
          </p>
          <p className="text-gray-600  text-sm sm:text-base">
            ✓ Professional team of certified beauty experts <br /> ✓ Premium
            quality products and equipment <br /> ✓ Therapy Relaxing and
            hygienic environment
          </p>
          <div className="flex  gap-2 items-center justify-center ">
            <Link to="/login">
              <button className="bg-[#F43F5E] text-sm sm:text-base text-white px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all">
                Learn more
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-black text-sm sm:text-base text-white px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all">
                Contact US
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerAbout;
