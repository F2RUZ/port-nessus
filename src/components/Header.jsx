const Header = () => {
  return (
    <header className="w-full py-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold text-orange-500">CREATEX</h1>

        <nav className="hidden md:flex gap-6 text-gray-700">
          <a href="#" className="hover:text-orange-500">
            About
          </a>
          <a href="#" className="hover:text-orange-500">
            Courses
          </a>
          <a href="#" className="hover:text-orange-500">
            Events
          </a>
          <a href="#" className="hover:text-orange-500">
            Blog
          </a>
          <a href="#" className="hover:text-orange-500">
            Contacts
          </a>
        </nav>

        <button className="bg-orange-500 text-white px-5 py-2 rounded-md font-medium">
          Get consultation
        </button>
      </div>
    </header>
  );
};

export default Header;
