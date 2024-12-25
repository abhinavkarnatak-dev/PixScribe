import React from "react";
import { assets } from "../assets/assets";

const Description = () => {
  return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Create AI Images
      </h1>
      <p className="text-gray-500 mb-8">Turn your imagination into visuals.</p>
      <div className="flex flex-col gap-5 md:gap-14 md:flex-row items-center">
        <img
          className="w-80 xl:w-96 rounded-lg"
          src={assets.sample_img_1}
          alt="sample"
        />
        <div>
          <h2 className="text-3xl font-medium max-w-lg mb-4">Discover the AI-Powered Image Generator</h2>
          <p className="text-gray-600 mb-4">
            Effortlessly turn your ideas into vivid images with our free AI
            tool. From stunning visuals to one-of-a-kind imagery, just describe
            it and watch your text transform into captivating visuals in
            seconds.
          </p>
          <p className="text-gray-600">
            Just type a prompt, and our advanced AI creates high-quality images
            in seconds. From product designs to characters and imaginative
            concepts, visualize anything effortlessly with limitless creative
            possibilities!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;