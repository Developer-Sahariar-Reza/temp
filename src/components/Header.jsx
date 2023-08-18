import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="" />
            <h3>CareerCompass</h3>
          </Link>
        </div>

        <div className="menu-container">
          <nav>
            <ul
              className={`${
                open ? "responsive-position-1" : "responsive-position-2"
              }`}
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "not-active"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/appliedJobs"
                  className={({ isActive }) =>
                    isActive ? "active" : "not-active"
                  }
                >
                  Applied Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive ? "active" : "not-active"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "not-active"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="nav-button-container">
          <button className="common-button">Start Apply</button>
        </div>

        {/* responsive button  */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open === true ? (
            <XMarkIcon className="w-8 h-8 text-teal-600"></XMarkIcon>
          ) : (
            <Bars3Icon className="w-8 h-8 text-teal-600"></Bars3Icon>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
