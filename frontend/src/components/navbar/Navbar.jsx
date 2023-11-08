function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center">
        <a href="/" className="text-white text-2xl font-semibold">
          React Profile
        </a>
        <ul className="space-x-4 flex">
          <li>
            <a href="#" className="text-white">
              Create Profile
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              All Profile
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Profile Details
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
