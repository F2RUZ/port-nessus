const WhyCreatex = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/706/706164.png"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text part */}
        <div>
          <h3 className="text-orange-500 font-semibold uppercase tracking-wide">
            Why Createx?
          </h3>

          <h2 className="text-4xl font-bold mt-3 leading-tight">
            The best platform <br />
            for high-quality education
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed">
            We guarantee that our students will receive the most effective and
            modern learning experience. Professional mentors, interactive
            materials, and flexible schedules.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              Only proven teaching methods
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              Real projects and practice
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
              Friendly professional mentors
            </li>
          </ul>

          <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-md font-semibold">
            More about us
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyCreatex;
