import React from "react";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/akash-das02"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/akash02-das" target="_blank" rel="noreferrer">
        <div>
          <BsGithub />
        </div>
      </a>
      <a
        href="https://www.facebook.com/akash.rainboy"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <BsFacebook />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
