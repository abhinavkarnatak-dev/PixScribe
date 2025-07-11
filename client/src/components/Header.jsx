import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";
import Marquee from "react-fast-marquee";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickHandler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center items-center text-center my-20"
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <p>Best AI text-to-image generator</p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h1
        className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 2 }}
      >
        Type your <span className="text-blue-600">vision</span>, see it in
        seconds.
      </motion.h1>
      <motion.p
        className="text-center max-w-xl mx-auto mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Transform your ideas into stunning visuals with PixScribe. Simply type,
        and let AI bring your imagination to life - effortlessly creating
        breathtaking art in seconds.
      </motion.p>
      <motion.button
        onClick={onClickHandler}
        className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.8 },
          opacity: { delay: 0.8, duration: 1 },
        }}
      >
        Generate Images{" "}
        <img className="w-6" src={assets.star_group} alt="star" />
      </motion.button>
      <div className="relative">
        <div className="absolute -left-1 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute -right-1 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <Marquee speed={32}>
          <motion.div
            className="flex flex-wrap justify-evenly mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {Array(7)
              .fill("")
              .map((item, index) => (
                <motion.div className="relative group" key={index}>
                  <img
                    className="rounded-lg transition-all duration-100 cursor-pointer max-sm:w-20 w-32 mx-3"
                    src={assets[`sample_img_${index + 1}`]}
                    alt={`sample image ${index + 1}`}
                    width={70}
                  />
                </motion.div>
              ))}
          </motion.div>
        </Marquee>
      </div>
      <motion.p
        className="mt-2 text-neutral-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        Generated images from PixScribe
      </motion.p>
    </motion.div>
  );
};

export default Header;
