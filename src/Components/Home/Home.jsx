import React, { useContext, useState } from "react";
import hcss from "./Home.module.css";
import { motion } from "framer-motion";
import About from "../About/About";
import { useNavigate } from "react-router-dom";
import StateChecker from "../About/StateChecker";
import { MyContext } from "../../App";
const variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: { opacity: 0 },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const h1Animation = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const h2Animation = {
  hidden: {
    opacity: 0,
    x: "-100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
}
const btnAnimation = {
  hidden: {
   
   scale: 0
  },
  visible: {
   scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}
function Home() {
  const [active, setActive] = useState(false);
  const [stateActive, setStateActive] = useState(false);
  const [level, setLevel] = useState('');
  const { userScore, computerScore } = useContext(MyContext);
  const navigate = useNavigate()
  const activeHandler = () => {
    setActive(!active)
  }
  function levelHandler(param) {
    if(userScore === 0 && computerScore === 0)
    {
      navigate(`/${param}`)
    } else {
      setLevel(param);
      setStateActive(true)
      
      
    }
    
  }
  return (
    <motion.div
      className={hcss.home}
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.h1 variants={h1Animation}>
        Welcome To <span>Rock, Paper & scissors </span>Game!
      </motion.h1>
      <motion.h2 variants={h2Animation}>Choose Your Game</motion.h2>
      <motion.button
        className={hcss.mode}
        variants={btnAnimation}
        onClick={() => levelHandler('normal')}
      >
        Normal
        <span>rock-paper-scissors</span>
      </motion.button>
      <motion.button
        className={hcss.mode}
        variants={btnAnimation}
        onClick={() => levelHandler("hard")}
      >
        Hard
        <span>rock-paper-scissors-lizard-spock</span>
      </motion.button>
      <div className={hcss.aboutRules}>
        <motion.button
          className={hcss.button}
          onClick={activeHandler}
          variants={btnAnimation}
        >
          {" "}
          About
        </motion.button>
      </div>
      {active && (
        <div className={hcss.about}>
          <About active={active} setActive={setActive} />
        </div>
      )}
      {stateActive ? <StateChecker level={level} /> : null}
    </motion.div>
  );
}

export default Home;
