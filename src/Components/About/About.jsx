import React from "react";
import acss from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import favico from '../../assets/favicon-32x32.png';
import bonus from '../../assets/image-rules-bonus.svg';
import normal from '../../assets/image-rules.svg';

const scaleAnimation = {
  hidden: {
    x: 0,
    scale: 0,
  },
  visible: {
    x: "-50%",
    origin: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function About({ active, setActive }) {
  function activeHandler() {
    setActive(!active);
  }

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="about-container"
          className={acss.aboutContainer}
          variants={scaleAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ position: "absolute" }} // Ensure position: absolute during exit
        >
          <nav>
            <h2>ABOUT</h2>
            <FontAwesomeIcon
              icon={faXmark}
              className={acss.xmarks}
              onClick={activeHandler}
            />
          </nav>
          <div className={acss.innerAboutContainer}>
            <p>
              Hi 👋 there, It's{" "}
              <span className={acss.colorChange}>Clinton</span> ! <br />
              And this is my solution for <strong>ROCK-PAPER-SCISSORS </strong>
              challenge from{" "}
              <a
                href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH"
                target="blank"
              >
                FRONTEND MENTOR.
              </a>
            </p>
            <p> I dont have a portfolio yet but you can find me on: </p>
            <span className={acss.links}>
              <a
                href="https://www.linkedin.com/in/clinton-phillips-316a42250/"
                target="blank"
              >
                <FontAwesomeIcon icon={faLinkedin} className={acss.likdn} />
              </a>
              <a href="https://github.com/clinton401" target="blank">
                {" "}
                <FontAwesomeIcon icon={faGithub} className={acss.gith} />
              </a>
              <a
                href="https://www.frontendmentor.io/profile/clinton401"
                target="blank"
              >
                {" "}
                <img src={favico} alt="Frontend mentor icon" />
              </a>
            </span>
            <h3>TWO MODES AVAILABLE:</h3>
            <h4>1. NORMAL MODE :</h4>
            <p>
              Here you can only choose rock, paper or scissors <br />
              Rules for normal mode :
            </p>
            <img src={normal} alt="Normal rules" className={acss.rules} />
            <h4>2. BOUNS MODE :</h4>
            <p>
              Here you can choose rock, paper, scissors, lizard or spock <br />
              Rules for bouns mode :
            </p>
            <img src={bonus} alt="Hard rules" className={acss.rules} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default About;
