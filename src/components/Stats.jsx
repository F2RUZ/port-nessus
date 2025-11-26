const Stats = () => {
  return (
    <section className="py-16 bg-white text-center">
      <div className="container mx-auto px-4 grid grid-cols-3 gap-6 text-gray-700">
        <div>
          <h3 className="text-4xl font-bold text-gray-900">1200</h3>
          <p className="text-gray-500">students</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-gray-900">84</h3>
          <p className="text-gray-500">completed courses</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-gray-900">16</h3>
          <p className="text-gray-500">qualified tutors</p>
        </div>
      </div>
    </section>
  );
};

export default Stats;
