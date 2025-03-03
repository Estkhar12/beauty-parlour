import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-3xl  pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.hairdresser}
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
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            nostrum architecto quod autem non reiciendis id veritatis vero?
            Aperiam, quidem! Ipsa ex cupiditate assumenda! Adipisci temporibus
            incidunt tempora quasi atque!
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY<span>CHOOSE US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fit into your lifestyle</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fit into your lifestyle</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fit into your lifestyle</p>
        </div>
      </div>
    </div>
  );
};

export default About;
