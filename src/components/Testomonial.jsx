import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Testomonial = () => {
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-mediu">Our Premium Services</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Discover our wide range of beauty treatments and services
      </p>

      <div className="w-full grid grid-cols-3 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        <Link
          to={`/appointment/${assets._id}`}
          className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] translate-all duration-500"
        >
          <img
            className="bg-blue-50 "
            src={assets.hair_cutting}
            alt="doctor image"
          />
          <div className="p-4">
            <p className="text-gray-900   text-lg font-medium">
              Facial Treatments
            </p>
            <p className="text-gray-900   text-base font-sm">
              Premium facials customized for your skin type
            </p>
            <p className="text-gray-600 text-sm">
              ✓ Deep Cleansing <br /> ✓ Anti-Aging Treatment <br /> ✓ Hydration
              Therapy
            </p>
            <div className="flex items-center py-3 gap-2 text-lg text-center text-[#F43F5E]">
              <p>Starting from ₹ 3999</p>
            </div>
            <a
              href="#speciality"
              className="flex items-center justify-center gap-2 bg-[#F43F5E] px-8 py-3 rounded-md text-white text-base m-auto md:m-0 hover-scale-105 transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </Link>

        <Link
          to={`/appointment/${assets._id}`}
          className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] translate-all duration-500"
        >
          <img
            className="bg-blue-50 "
            src={assets.hairdresser_1}
            alt="doctor image"
          />
          <div className="p-4">
            <p className="text-gray-900   text-lg font-medium">Hair Styling</p>
            <p className="text-gray-900   text-base font-sm">
              Professional hair care and styling services
            </p>

            <p className="text-gray-600 text-sm">
              ✓ Haircut & Styling <br /> ✓ Hair Coloring <br /> ✓ Keratin
              Treatment
            </p>
            <div className="flex items-center py-3 gap-2 text-lg text-center text-[#F43F5E]">
              <p>Starting from ₹ 3999</p>
            </div>
            <a
              href="#speciality"
              className="flex items-center justify-center gap-2 bg-[#F43F5E] px-8 py-3 rounded-md text-white text-base m-auto md:m-0 hover-scale-105 transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </Link>

        <Link
          to={`/appointment/${assets._id}`}
          className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] translate-all duration-500"
        >
          <img
            className="bg-blue-50 "
            src={assets.happy_client}
            alt="doctor image"
          />
          <div className="p-4">
            <p className="text-gray-900   text-lg font-medium">Nail Care</p>
            <p className="text-gray-900   text-base font-sm">
              Complete nail care and art services
            </p>
            <p className="text-gray-600 text-sm">
              ✓ Deep Cleansing <br /> ✓ Anti-Aging Treatment <br /> ✓ Hydration
              Therapy
            </p>
            <div className="flex items-center py-3 gap-2 text-lg text-center text-[#F43F5E]">
              <p>Starting from ₹ 3999</p>
            </div>
            <a
              href="#speciality"
              className="flex items-center justify-center gap-2 bg-[#F43F5E] px-8 py-3 rounded-md text-white text-base m-auto md:m-0 hover-scale-105 transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </Link>
      </div>

      <Link
        to="/doctors"
        className="bg-[#171717] text-white font-medium px-8 py-3 hover:bg-gray-500 rounded-full mt-10 transition duration-300"
      >
        View All Services
      </Link>
    </div>
  );
};

export default Testomonial;
