import React, { useContext } from 'react'

import rcss from "./About.module.css";
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';
import { motion } from 'framer-motion';
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
function StateChecker({level}) {
    const { setUserScore,  setComputerScore } =
      useContext(MyContext);
    const navigate = useNavigate();
    function restart() {
        setUserScore(0);
        setComputerScore(0);
    }
  return (
    <aside className={rcss.aside}>
      <motion.section
        className={rcss.state}
        variants={scaleAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2>DO YOU WISH TO CONTINUE WITH THE CURRENT SCORES</h2>
        <nav>
          <button
            className={rcss.button}
            onClick={() => {
              navigate(`/${level}`);
            }}
          >
            YES
          </button>
          <button
            className={rcss.button}
            onClick={() => {
              restart();
              navigate(`/${level}`);
            }}
          >
            NO
          </button>
        </nav>
      </motion.section>
    </aside>
  );
}

export default StateChecker
