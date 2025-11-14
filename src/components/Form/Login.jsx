import React, { use } from "react";
import { Link } from "react-router";
import { Authcontext } from "../../context/Authcontext";

const Login = () => {
  const { loginUser, signInGoogle } = use(Authcontext);
  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
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
    <div className=" mx-auto w-[300px] my-15  items-center justify-center bg-base-200 border-base-300 rounded-box border p-4">
      <form onSubmit={handelLogin}>
        <fieldset className="fieldset ">
          <legend className="fieldset-legend">Login</legend>

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

          <button className="btn btn-neutral mt-4">Login</button>

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
        Sign in with Google
      </button>

      <p>
        Do you have an accout?{" "}
        <Link to={"/auth/register"} className=" text-blue-400">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
