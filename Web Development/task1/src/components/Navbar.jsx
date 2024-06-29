import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link to="/" className=" text-[#16f2b3] text-3xl font-bold">
            Shreya Parkar
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <HashLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              smooth
              to="/#about"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                ABOUT
              </div>
            </HashLink>
          </li>

          <li>
            <HashLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              smooth
              to="/#experience"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EXPERIENCE
              </div>
            </HashLink>
          </li>

          <li>
            <HashLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              smooth
              to="/#skills"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                SKILLS
              </div>
            </HashLink>
          </li>

          <li>
            <HashLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              smooth
              to="/#projects"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                PROJECTS
              </div>
            </HashLink>
          </li>

          <li>
            <HashLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              smooth
              to="/#education"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                EDUCATION
              </div>
            </HashLink>
          </li>

          <li>
            <HashLink
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              smooth
              to="/#certifications"
            >
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">
                CERTIFICATIONS
              </div>
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
