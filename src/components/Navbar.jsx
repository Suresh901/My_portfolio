import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex gap-2 items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-9 h-9 object-contain" />
          <p className="text-white font-semibold text-[18px cursor-pointer]">
            Suresh Shrestha
          </p>
        </Link>

        {/* for bigger screen menu  */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active == link.title ? "text-white" : "text-secondary "
              } 
            hover:text-white font-medium text-[18px] cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/*  for mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="cursor-pointer w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 black-gradient absolute top-14 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
        >
          <ul className="list-none flex flex-col justify-end items-start gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active == link.title ? "text-white" : "text-secondary "
                } 
            hover:text-white font-medium text-[18px] cursor-pointer`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(link.title);
                }}
              >
                <a href={`${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
