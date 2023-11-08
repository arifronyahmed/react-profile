import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-violet-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-semibold">
          React Profile
        </Link>
        <ul className="space-x-4 flex">
          <li>
            <Link to="/test" className="text-white">
              test
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
