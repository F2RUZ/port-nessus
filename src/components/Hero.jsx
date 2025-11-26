import React from "react";

const Hero = () => {
  return (
    <section className="bg-orange-100 py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-orange-600 font-semibold">START NOW</span>

          <h2 className="text-5xl leading-tight font-bold mt-4">
            Enjoy studying <br />
            with Createx <br />
            Online Courses
          </h2>

          <div className="flex gap-4 mt-8">
            <button className="border border-gray-700 text-gray-700 px-6 py-3 rounded-md font-semibold">
              About us
            </button>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold">
              Explore courses
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/6840/6840478.png"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
