import React, { use } from "react";
import { Link } from "react-router";
import { Authcontext } from "../../context/Authcontext";

const Register = () => {
  const { createuser, signInGoogle } = use(Authcontext);
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createuser(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handelGoggleSignIn = () => {
    signInGoogle()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className=" my-15">
      <div className=" mx-auto w-[300px]  items-center justify-center  bg-base-200 border-base-300 rounded-box  border p-4">
        <form onSubmit={handelSubmit}>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Sign Up</legend>
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
            />{" "}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
            />
            <button className="btn btn-neutral mt-4">SignUp</button>
            <div className="flex items-center gap-4 my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="text-gray-500">OR</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
          </fieldset>
        </form>
        <button
          onClick={handelGoggleSignIn}
          className="btn w-full flex items-center gap-2 border border-gray-300 bg-white hover:bg-gray-100"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign up with Google
        </button>
        <p>
          Already have an accout?{" "}
          <Link to={"/auth/login"} className=" text-blue-400">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
