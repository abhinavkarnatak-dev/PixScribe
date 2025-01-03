import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "motion/react";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin, backendUrl, setToken, setUser } =
    useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <motion.form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500"
        initial={{ opacity: 0.2, y: 50 }}
        transition={{ duration: 0.3 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          {state === "Login" ? "Welcome Back" : "Create Account"}
        </h1>
        {state !== "Login" && (
          <div className="border px-6 py-2 items-center rounded-full mt-4">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Full Name"
              className="outline-none text-sm"
              required
            />
          </div>
        )}
        <div className="border px-6 py-2 items-center  rounded-full mt-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="outline-none text-sm"
            required
          />
        </div>
        <div className="border px-6 py-2 items-center rounded-full mt-4">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="outline-none text-sm"
            required
          />
        </div>
        <button className="bg-blue-600 w-full text-white py-2 rounded-full mt-4">
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
      </motion.form>
    </div>
  );
};

export default Login;