import React from 'react'
import rcss from './About.module.css';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark } from "@fortawesome/free-solid-svg-icons";
const scaleAnimation = {
  hidden: {
    // x: 0,
    scale: 0,
  },
  visible: {
    // x: "-50%",
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
function Rules({imgLocation, rulesActive, setRulesActive}) {
    function activeHandler() {
    setRulesActive(!rulesActive)
    }
    return (
      <div className={rcss.ruless}>
        <motion.div
          variants={scaleAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={rcss.rulesContainer}
        >
          <nav>
            <h2>ABOUT</h2>
            <FontAwesomeIcon
              icon={faXmark}
              className={rcss.xmark}
              onClick={activeHandler}
            />
          </nav>
          <div className={rcss.imgs}>
            <img src={imgLocation} alt="" />
          </div>
          <FontAwesomeIcon
            icon={faXmark}
            className={rcss.xmark}
            onClick={activeHandler}
          />
        </motion.div>
      </div>
    );
}

export default Rules
