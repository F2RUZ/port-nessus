import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-[100px] bg-purple-600 flex items-center justify-between">
      <h1 className="text-4xl text-white">Logo</h1>

      <ul className="navbar__list flex items-center justify-center gap-[50px]">
        <li className="w-[150px h-[50px] border border-purple-950 flex items-center justify-center p-[2px] text-white">
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li className="w-[150px h-[50px] border border-purple-950 flex items-center justify-center p-[2px] text-white">
          <NavLink to="/about">About Page</NavLink>
        </li>{" "}
        <li className="w-[150px h-[50px] border border-purple-950 flex items-center justify-center p-[2px] text-white">
          <NavLink to="/contact">Contact Page</NavLink>
        </li>{" "}
        <li className="w-[150px h-[50px] border border-purple-950 flex items-center justify-center p-[2px] text-white">
          <a href="#">Login Page</a>
        </li>{" "}
        <li className="w-[150px h-[50px] border border-purple-950 flex items-center justify-center p-[2px] text-white">
          <a href="#">Portfolio Page</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
