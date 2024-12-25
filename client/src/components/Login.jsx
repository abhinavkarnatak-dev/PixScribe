import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin } = useContext(AppContext);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state === "Login" ? "Welcome Back" : "Create Account"}
        </h1>
        {state !== "Login" && (
          <div className="border px-6 py-2 items-center rounded-full mt-4">
            <input
              type="text"
              placeholder="Full Name"
              className="outline-none text-sm"
              required
            />
          </div>
        )}
        <div className="border px-6 py-2 items-center  rounded-full mt-4">
          <input
            type="email"
            placeholder="Email"
            className="outline-none text-sm"
            required
          />
        </div>
        <div className="border px-6 py-2 items-center rounded-full mt-4">
          <input
            type="password"
            placeholder="Password"
            className="outline-none text-sm"
            required
          />
        </div>
        {state === "Login" && (
          <p className="text-sm text-blue-600 my-4 cursor-pointer">
            Forgot password?
          </p>
        )}
        <button className="bg-blue-600 w-full text-white py-2 rounded-full">
          {state === "Login" ? "Login" : "Sign Up"}
        </button>
        {state === "Login" ? (
          <p onClick={() => setState("Signup")} className="mt-5 text-center">
            Don't have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Sign Up</span>
          </p>
        ) : (
          <p onClick={() => setState("Login")} className="mt-5 text-center">
            Already have an account?{" "}
            <span className="text-blue-600 cursor-pointer">Login</span>
          </p>
        )}
        <img
          onClick={() => setShowLogin(false)}
          className="absolute top-5 right-5 cursor-pointer"
          src={assets.cross_icon}
          alt="close"
        />
      </form>
    </div>
  );
};

export default Login;