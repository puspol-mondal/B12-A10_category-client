import React, { use } from "react";
import { NavLink } from "react-router";
import { Authcontext } from "../../context/Authcontext";

const Navber = () => {
  const { user, logoutUser } = use(Authcontext);

  const handelLogout = () => {
    logoutUser()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const links = (
    <>
      <NavLink className={" font-bold mx-3"} to={"/"}>
        Home
      </NavLink>
      <NavLink className={" font-bold mx-3"} to={"/allproperties"}>
        All Properties
      </NavLink>
      {user && (
        <>
          {" "}
          <NavLink className={" font-bold mx-3"} to={"/addproperties"}>
            Add Properties
          </NavLink>
          <NavLink className={" font-bold mx-3"} to={"/myproperties"}>
            My Properties
          </NavLink>
          <NavLink className={" font-bold mx-3"} to={"/myratings"}>
            My Ratings
          </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <NavLink onClick={handelLogout} className="btn font-bold ">
            SignOut
          </NavLink>
        ) : (
          <NavLink to={"/auth/login"} className="btn font-bold ">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navber;
