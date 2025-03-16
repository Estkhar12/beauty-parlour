import { assets } from "../assets/assets";

const ContactUs = () => {
  return (
    <div>
      <div className="text-center text-3xl  pt-10 text-gray-500">
        <p>
          <span className="text-gray-700 font-medium">Get In Touch</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px] rounded-lg"
          src={assets.hairdresser}
          alt="contact us"
        />

        <div className="flex flex-col m-auto items-start p-8 sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
          <form className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 ">
            <div className="flex flex-grid gap-2">
              <div>
                <p>Full Name</p>
                <input
                  className="border border-zinc-300 rounded  w-full p-2 mt-1"
                  type="text"
                />
              </div>
              <div>
                <p>Phone Number</p>
                <input
                  className="border border-zinc-300 rounded  w-full p-2 mt-1"
                  type="text"
                />
              </div>
            </div>

            <div>
              <p>Email</p>
              <input
                className="border border-zinc-300 rounded  w-full p-2 mt-1"
                type="text"
              />
            </div>

            <div>
              <p>Select Service</p>
              <select
                className="border border-zinc-300 rounded  w-full p-2 mt-1"
                name=""
                id=""
              >
                <option value="">Choose a services</option>
                <option value="">Hair Styling</option>
                <option value="">Facial Treatments</option>
                <option value="">Makeup service</option>
                <option value="">Hair Coloring</option>
              </select>
            </div>

            <div className="flex flex-grid gap-2">
              <div>
                <p>Preferred Date</p>
                <input
                  className="border border-zinc-300 rounded  w-full p-2 mt-1"
                  type="date"
                />
              </div>
              <div>
                <p>Preferred Time</p>
                <select className="border border-zinc-300 rounded  w-full p-2 mt-1">
                  <option value="">Select time</option>
                  <option value="">10:00 AM</option>
                  <option value="">11:00 AM</option>
                  <option value="">12:00 PM</option>
                  <option value="">01:00 PM</option>
                  <option value="">02:00 PM</option>
                  <option value="">03:00 PM</option>
                  <option value="">04:00 PM</option>
                  <option value="">05:00 PM</option>
                </select>
              </div>
            </div>
            <div>
              <p>Special Requests</p>
              <textarea
                className="border border-zinc-300 rounded  w-full p-2 mt-1"
                name=""
                id=""
              ></textarea>
            </div>

            <div>
              <a
                href="#speciality"
                className="flex items-center justify-center gap-2 bg-[#F43F5E] px-8 py-3 rounded-md text-white text-base m-auto md:m-0 hover-scale-105 transition-all duration-300"
              >
                Book Now
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
