import React from "react";
import Navber from "../components/Navber/Navber";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div>
      <Navber />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
