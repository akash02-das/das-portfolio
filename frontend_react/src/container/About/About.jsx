import { motion } from "framer-motion";
import React from "react";

import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description: "I am a professional & passionate web developer",
    imgUrl: images.about01,
  },
  {
    title: "Front-end Development",
    description: "I am good at complex web design",
    imgUrl: images.about02,
  },
  {
    title: "Back-end Development",
    description: "Write clean code to develop functional web applications",
    imgUrl: images.about03,
  },
  {
    title: "MERN Stack Development",
    description:
      "writing reusable, testable, and efficient code and developing and designing front end web applications",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Development</span>
        <br />
        means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
