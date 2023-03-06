import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin />
      </div>
      <div>
        <BsGithub />
      </div>
      <div>
        <BsFacebook />
      </div>
    </div>
  );
};

export default SocialMedia;
