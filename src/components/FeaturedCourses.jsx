const FeaturedCourses = () => {
  const courses = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
      title: "Marketing Course",
      teacher: "Courtney Henry",
      price: "$150",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
      title: "Management Course",
      teacher: "Dianne Russell",
      price: "$200",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2921/2921871.png",
      title: "HR & Recruiting",
      teacher: "Jerome Bell",
      price: "$170",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2885/2885383.png",
      title: "Design Basics",
      teacher: "Marvin McKinney",
      price: "$210",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-orange-500 font-semibold uppercase">
          Featured Courses
        </h3>

        <div className="flex justify-between items-center mt-3 mb-10">
          <h2 className="text-4xl font-bold">Choose a course for you</h2>
          <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded-md font-medium">
            View all courses
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {courses.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img src={c.img} className="w-full h-40 object-contain p-6" />
              <div className="p-6">
                <h4 className="font-bold text-xl">{c.title}</h4>
                <p className="text-gray-500 text-sm mt-2">by {c.teacher}</p>
                <p className="text-orange-500 font-bold mt-4">{c.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
