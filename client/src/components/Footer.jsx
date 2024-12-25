import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img width={150} src="/logo.png" alt="logo" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">Copyright © PixScribe. All rights reserved.</p>
      <div className="flex gap-2.5">
        <img width={35} src={assets.facebook_icon} alt="fb_icon" />
        <img width={35} src={assets.twitter_icon} alt="fb_icon" />
        <img width={35} src={assets.instagram_icon} alt="fb_icon" />
      </div>
    </div>
  );
};

export default Footer;