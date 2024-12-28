import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img width={150} src="/logo.png" alt="logo" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright © PixScribe. All rights reserved.
      </p>
      <div className="flex gap-2.5">
        <Link to="https://x.com/AbhinavKar941">
          <img width={35} src={assets.twitter_icon} alt="twitter" />
        </Link>
        <Link to="https://www.instagram.com/abhinavk_941/">
          <img width={35} src={assets.instagram_icon} alt="instagram" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;