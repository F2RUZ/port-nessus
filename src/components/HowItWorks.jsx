const HowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Watch video lessons",
      text: "Learn each topic step-by-step with our professional tutors.",
    },
    {
      num: "02",
      title: "Practice tasks",
      text: "Solve interactive tasks and real-world challenges.",
    },
    {
      num: "03",
      title: "Get feedback",
      text: "Receive reviews from mentors and improve your skills.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-orange-500 font-semibold uppercase">
          That’s how we do it
        </h3>

        <h2 className="text-4xl font-bold mt-3">Learning process</h2>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {steps.map((s, i) => (
            <div key={i} className="text-center">
              <span className="text-orange-500 text-5xl font-bold">
                {s.num}
              </span>

              <h4 className="text-2xl font-bold mt-4">{s.title}</h4>
              <p className="text-gray-600 mt-3">{s.text}</p>

              <img
                src="https://cdn-icons-png.flaticon.com/512/8235/8235656.png"
                className="mx-auto mt-6 w-40 opacity-80"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
